// This can be a Server Component as it has no client-side interactivity
import React from "react";

/**
 * Helper component to display code snippets.
 * @param {object} props - The component props.
 * @param {string} props.children - The code string to display.
 */
export const CodeBlock: React.FC<{ children: string }> = ({ children }) => (
  <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm font-mono my-4 shadow-inner">
    <code>{children}</code>
  </pre>
);
