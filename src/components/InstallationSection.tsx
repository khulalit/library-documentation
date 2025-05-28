// This can be a Server Component
import React from "react";
import { CodeBlock } from "./CodeBlock"; // Import the CodeBlock component

export const InstallationSection: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-white">Installation</h2>
      <p className="text-lg mb-4">
        First, install the package in your React project:
      </p>
      <CodeBlock>{`npm install react-if-then-else-switch`}</CodeBlock>
      <p className="text-lg">Or if you use Yarn:</p>
      <CodeBlock>{`yarn add react-if-then-else-switch`}</CodeBlock>
    </section>
  );
};
