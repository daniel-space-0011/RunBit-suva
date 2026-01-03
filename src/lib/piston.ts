import axios from "axios";

const PISTON_API = "https://emkc.org/api/v2/piston";

interface PistonExecuteResponse {
  run: {
    stdout: string;
    stderr: string;
    output: string;
    code: number;
    signal: string | null;
  };
  compile?: {
    stdout: string;
    stderr: string;
    output: string;
    code: number;
  };
}

export interface ExecutionResult {
  output: string;
  error: string;
  isError: boolean;
}

// Sanitize output to remove internal file paths
const sanitizeOutput = (output: string): string => {
  // Remove Piston job paths like /piston/jobs/xxxxx/
  return output.replace(/\/piston\/jobs\/[a-f0-9-]+\//gi, "");
};

export const executeCode = async (
  code: string,
  language: string,
  version: string
): Promise<ExecutionResult> => {
  try {
    const response = await axios.post<PistonExecuteResponse>(
      `${PISTON_API}/execute`,
      {
        language,
        version,
        files: [
          {
            content: code,
          },
        ],
      }
    );

    const { run, compile } = response.data;

    // Check for compilation errors first
    if (compile && compile.stderr) {
      return {
        output: "",
        error: sanitizeOutput(compile.stderr),
        isError: true,
      };
    }

    // Check for runtime errors
    if (run.stderr) {
      return {
        output: sanitizeOutput(run.stdout),
        error: sanitizeOutput(run.stderr),
        isError: true,
      };
    }

    return {
      output: sanitizeOutput(run.stdout || run.output),
      error: "",
      isError: false,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        output: "",
        error: error.response?.data?.message || "Failed to execute code. Please try again.",
        isError: true,
      };
    }
    return {
      output: "",
      error: "An unexpected error occurred. Please try again.",
      isError: true,
    };
  }
};
