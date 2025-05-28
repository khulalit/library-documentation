// This can be a Server Component
import React from "react";

export const HeroSection: React.FC = () => {
  return (
    <header className="max-w-4xl mx-auto text-center py-8 mb-10 border-b border-gray-600">
      <h1 className="text-5xl font-extrabold mb-4 text-white drop-shadow-lg">
        react-if-then-else-switch
      </h1>
      <p className="text-xl text-blue-200">
        Simplify your React JSX with declarative conditional rendering
        components.
      </p>
    </header>
  );
};
