// Language configurations for the compiler
export interface LanguageConfig {
  name: string;
  slug: string;
  extension: string;
  pistonLanguage: string;
  pistonVersion: string;
  isWeb: boolean;
  defaultCode: string;
}

export const languageConfigs: Record<string, LanguageConfig> = {
  python: {
    name: "Python",
    slug: "python",
    extension: "py",
    pistonLanguage: "python",
    pistonVersion: "3.10.0",
    isWeb: false,
    defaultCode: `# Welcome to RunBit Python Compiler
# Write your code here and click Run!

def greet(name):
    return f"Hello, {name}!"

print(greet("World"))
print("Welcome to RunBit! 🚀")
`,
  },
  javascript: {
    name: "JavaScript",
    slug: "javascript",
    extension: "js",
    pistonLanguage: "javascript",
    pistonVersion: "18.15.0",
    isWeb: false,
    defaultCode: `// Welcome to RunBit JavaScript Compiler
// Write your code here and click Run!

function greet(name) {
    return \`Hello, \${name}!\`;
}

console.log(greet("World"));
console.log("Welcome to RunBit! 🚀");
`,
  },
  java: {
    name: "Java",
    slug: "java",
    extension: "java",
    pistonLanguage: "java",
    pistonVersion: "15.0.2",
    isWeb: false,
    defaultCode: `// Welcome to RunBit Java Compiler
// Write your code here and click Run!

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        System.out.println("Welcome to RunBit! 🚀");
    }
}
`,
  },
  c: {
    name: "C",
    slug: "c",
    extension: "c",
    pistonLanguage: "c",
    pistonVersion: "10.2.0",
    isWeb: false,
    defaultCode: `// Welcome to RunBit C Compiler
// Write your code here and click Run!

#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    printf("Welcome to RunBit!\\n");
    return 0;
}
`,
  },
  cpp: {
    name: "C++",
    slug: "cpp",
    extension: "cpp",
    pistonLanguage: "c++",
    pistonVersion: "10.2.0",
    isWeb: false,
    defaultCode: `// Welcome to RunBit C++ Compiler
// Write your code here and click Run!

#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    cout << "Welcome to RunBit!" << endl;
    return 0;
}
`,
  },
  csharp: {
    name: "C#",
    slug: "csharp",
    extension: "cs",
    pistonLanguage: "csharp",
    pistonVersion: "6.12.0",
    isWeb: false,
    defaultCode: `// Welcome to RunBit C# Compiler
// Write your code here and click Run!

using System;

class Program {
    static void Main() {
        Console.WriteLine("Hello, World!");
        Console.WriteLine("Welcome to RunBit!");
    }
}
`,
  },
  php: {
    name: "PHP",
    slug: "php",
    extension: "php",
    pistonLanguage: "php",
    pistonVersion: "8.2.3",
    isWeb: false,
    defaultCode: `<?php
// Welcome to RunBit PHP Compiler
// Write your code here and click Run!

function greet($name) {
    return "Hello, $name!";
}

echo greet("World") . "\\n";
echo "Welcome to RunBit! 🚀\\n";
?>
`,
  },
  ruby: {
    name: "Ruby",
    slug: "ruby",
    extension: "rb",
    pistonLanguage: "ruby",
    pistonVersion: "3.0.1",
    isWeb: false,
    defaultCode: `# Welcome to RunBit Ruby Compiler
# Write your code here and click Run!

def greet(name)
  "Hello, #{name}!"
end

puts greet("World")
puts "Welcome to RunBit! 🚀"
`,
  },
  go: {
    name: "Go",
    slug: "go",
    extension: "go",
    pistonLanguage: "go",
    pistonVersion: "1.16.2",
    isWeb: false,
    defaultCode: `// Welcome to RunBit Go Compiler
// Write your code here and click Run!

package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
    fmt.Println("Welcome to RunBit!")
}
`,
  },
  rust: {
    name: "Rust",
    slug: "rust",
    extension: "rs",
    pistonLanguage: "rust",
    pistonVersion: "1.68.2",
    isWeb: false,
    defaultCode: `// Welcome to RunBit Rust Compiler
// Write your code here and click Run!

fn main() {
    println!("Hello, World!");
    println!("Welcome to RunBit!");
}
`,
  },
  typescript: {
    name: "TypeScript",
    slug: "typescript",
    extension: "ts",
    pistonLanguage: "typescript",
    pistonVersion: "5.0.3",
    isWeb: false,
    defaultCode: `// Welcome to RunBit TypeScript Compiler
// Write your code here and click Run!

function greet(name: string): string {
    return \`Hello, \${name}!\`;
}

console.log(greet("World"));
console.log("Welcome to RunBit! 🚀");
`,
  },
  lua: {
    name: "Lua",
    slug: "lua",
    extension: "lua",
    pistonLanguage: "lua",
    pistonVersion: "5.4.4",
    isWeb: false,
    defaultCode: `-- Welcome to RunBit Lua Compiler
-- Write your code here and click Run!

function greet(name)
    return "Hello, " .. name .. "!"
end

print(greet("World"))
print("Welcome to RunBit!")
`,
  },
  kotlin: {
    name: "Kotlin",
    slug: "kotlin",
    extension: "kt",
    pistonLanguage: "kotlin",
    pistonVersion: "1.8.20",
    isWeb: false,
    defaultCode: `// Welcome to RunBit Kotlin Compiler
// Write your code here and click Run!

fun main() {
    println("Hello, World!")
    println("Welcome to RunBit!")
}
`,
  },
  swift: {
    name: "Swift",
    slug: "swift",
    extension: "swift",
    pistonLanguage: "swift",
    pistonVersion: "5.3.3",
    isWeb: false,
    defaultCode: `// Welcome to RunBit Swift Compiler
// Write your code here and click Run!

print("Hello, World!")
print("Welcome to RunBit!")
`,
  },
  // Web languages - rendered in iframe
  html: {
    name: "HTML",
    slug: "html",
    extension: "html",
    pistonLanguage: "",
    pistonVersion: "",
    isWeb: true,
    defaultCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RunBit HTML Preview</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            background: linear-gradient(135deg, #10B981 0%, #3B82F6 100%);
        }
        .container {
            text-align: center;
            padding: 40px;
            background: white;
            border-radius: 16px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        h1 {
            color: #10B981;
            margin-bottom: 10px;
        }
        p {
            color: #6b7280;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Hello, World!</h1>
        <p>Welcome to RunBit HTML Editor 🚀</p>
    </div>
</body>
</html>
`,
  },
  css: {
    name: "CSS",
    slug: "css",
    extension: "html",
    pistonLanguage: "",
    pistonVersion: "",
    isWeb: true,
    defaultCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RunBit CSS Preview</title>
    <style>
        /* Edit the CSS below! */
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            background: #f0f0f0;
        }
        
        .card {
            background: white;
            padding: 2rem;
            border-radius: 1rem;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            text-align: center;
            transition: transform 0.3s;
        }
        
        .card:hover {
            transform: translateY(-5px);
        }
        
        h1 {
            color: #10B981;
        }
    </style>
</head>
<body>
    <div class="card">
        <h1>CSS Styling</h1>
        <p>Edit the styles above to see changes!</p>
    </div>
</body>
</html>
`,
  },
  react: {
    name: "React",
    slug: "react",
    extension: "html",
    pistonLanguage: "",
    pistonVersion: "",
    isWeb: true,
    defaultCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RunBit React Preview</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <style>
        body {
            font-family: 'Segoe UI', sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            background: #f5f5f5;
        }
        .app {
            text-align: center;
            background: white;
            padding: 40px;
            border-radius: 16px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        button {
            background: #10B981;
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 8px;
            font-size: 16px;
            cursor: pointer;
            margin-top: 16px;
        }
        button:hover {
            background: #059669;
        }
    </style>
</head>
<body>
    <div id="root"></div>
    <script type="text/babel">
        function App() {
            const [count, setCount] = React.useState(0);
            
            return (
                <div className="app">
                    <h1 style={{ color: '#10B981' }}>React Counter</h1>
                    <p>Count: {count}</p>
                    <button onClick={() => setCount(count + 1)}>
                        Click me!
                    </button>
                </div>
            );
        }
        
        ReactDOM.createRoot(document.getElementById('root')).render(<App />);
    </script>
</body>
</html>
`,
  },
  nodejs: {
    name: "Node.js",
    slug: "nodejs",
    extension: "js",
    pistonLanguage: "javascript",
    pistonVersion: "18.15.0",
    isWeb: false,
    defaultCode: `// Welcome to RunBit Node.js
// Write your code here and click Run!

const greet = (name) => \`Hello, \${name}!\`;

console.log(greet("World"));
console.log("Welcome to RunBit! 🚀");

// Try using some Node.js features
const os = require('os');
console.log(\`Running on: \${os.platform()}\`);
`,
  },
};

export const getLanguageConfig = (slug: string): LanguageConfig => {
  return (
    languageConfigs[slug] || {
      name: slug.charAt(0).toUpperCase() + slug.slice(1),
      slug,
      extension: "txt",
      pistonLanguage: slug,
      pistonVersion: "*",
      isWeb: false,
      defaultCode: `// Hello World in ${slug}\nconsole.log("Hello, World!");`,
    }
  );
};
