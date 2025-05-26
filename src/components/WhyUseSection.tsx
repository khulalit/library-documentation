// This can be a Server Component
import React from "react";

export const WhyUseSection: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-white">
        Why use this library?
      </h2>
      <ul className="list-disc list-inside text-lg space-y-2 ml-4">
        <li>
          <span className="font-semibold text-blue-200">Readability:</span> For
          complex conditional logic, these components can make your JSX more
          declarative and easier to follow than nested ternary operators or `&&`
          chains.
        </li>
        <li>
          <span className="font-semibold text-blue-200">Consistency:</span>{" "}
          Provides a standardized way to handle conditional rendering across
          your application.
        </li>
        <li>
          <span className="font-semibold text-blue-200">Maintainability:</span>{" "}
          Encapsulates conditional logic, making it easier to modify or extend.
        </li>
      </ul>
    </section>
  );
};
