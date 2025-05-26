import React from "react";

/**
 * Footer component for the documentation page.
 */
const Footer: React.FC = () => {
  return (
    <footer className="max-w-4xl mx-auto text-center py-8 mt-10 border-t border-gray-600 text-gray-400">
      <p>
        &copy; {new Date().getFullYear()} React Conditionally. Documentation
        page is built with Next.js and Tailwind CSS.
      </p>
    </footer>
  );
};

export default Footer;
