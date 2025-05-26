/* eslint-disable */
"use client";
import { useState } from "react";
import { CodeBlock } from "./CodeBlock";
import {
  If,
  Else,
  IfElse,
  ElIf,
  Switch,
  Case,
  Default,
} from "@lalit-khudania/react-conditionally";

export const ConditionalExamples: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userRole, setUserRole] = useState("admin");
  const [itemCount, setItemCount] = useState(0);
  const [temperature, setTemperature] = useState(25); // For ElIf example

  return (
    <>
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-white">
          The `IfElse`, `If`, `ElIf`, and `Else` Components
        </h2>
        <p className="text-lg mb-4">
          The `IfElse` component acts as a wrapper for your conditional logic.
          It should contain one `If` component, zero or more `ElIf` (else-if)
          components, and an optional `Else` component. The `IfElse` component
          will render the content of the first child (`If` or `ElIf`) whose
          `condition` prop is `true`. If no conditions are met, it will render
          the content of the `Else` component if provided.
        </p>
        <h3 className="text-2xl font-semibold mb-4 text-blue-200">
          Usage: `IfElse` with `If` and `Else`
        </h3>
        <CodeBlock>
          {`import { IfElse, If, Else } from 'react-conditional-renderer';

function MyComponent({ isLoggedIn }) {
  return (
    <IfElse>
      <If condition={isLoggedIn}>
        <p>Welcome back!</p>
      </If>
      <Else>
        <p>Please log in.</p>
      </Else>
    </IfElse>
  );
}`}
        </CodeBlock>

        <h3 className="text-2xl font-semibold mb-4 text-blue-200">
          Live Example: `IfElse` with `If` and `Else`
        </h3>
        <div className="bg-gray-700 bg-opacity-30 rounded-lg p-6 mb-6">
          <div className="flex items-center justify-center mb-4">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="toggle toggle-primary h-6 w-12 rounded-full appearance-none bg-gray-500 checked:bg-green-500 transition-colors duration-300 ease-in-out relative"
                checked={isLoggedIn}
                onChange={() => setIsLoggedIn(!isLoggedIn)}
              />
              <span className="ml-3 text-lg font-medium">Logged In</span>
            </label>
          </div>
          <IfElse>
            <If condition={isLoggedIn}>
              <div className="p-4 bg-green-600 bg-opacity-40 rounded-lg text-center border border-green-500">
                <p className="text-lg font-medium">
                  You are currently logged in!
                </p>
              </div>
            </If>
            <Else>
              <div className="p-4 bg-red-600 bg-opacity-40 rounded-lg text-center border border-red-500">
                <p className="text-lg font-medium">
                  You are logged out. Please log in.
                </p>
              </div>
            </Else>
          </IfElse>
        </div>

        <h3 className="text-2xl font-semibold mb-4 text-blue-200">
          Usage: `IfElse` with `If` (without `Else`)
        </h3>
        <p className="text-lg mb-4">
          If the `If` condition is `false` and no `Else` component is provided
          within `IfElse`, nothing will be rendered.
        </p>
        <CodeBlock>
          {`import { IfElse, If } from 'react-conditional-renderer';

function MyComponent({ showAdminPanel }) {
  return (
    <IfElse>
      <If condition={showAdminPanel}>
        <button>Admin Panel</button>
      </If>
    </IfElse>
  );
}`}
        </CodeBlock>
        <h3 className="text-2xl font-semibold mb-4 text-blue-200">
          Live Example: `IfElse` with `If` (without `Else`)
        </h3>
        <div className="bg-gray-700 bg-opacity-30 rounded-lg p-6">
          <div className="flex items-center justify-center mb-4">
            <button
              onClick={() => setItemCount((prev) => prev + 1)}
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg shadow-md transition-all duration-200 mr-4"
            >
              Add Item
            </button>
            <button
              onClick={() => setItemCount((prev) => Math.max(0, prev - 1))}
              className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg shadow-md transition-all duration-200"
            >
              Remove Item
            </button>
          </div>
          <p className="text-center text-xl mb-4">
            Current Items:{" "}
            <span className="font-bold text-blue-300">{itemCount}</span>
          </p>
          <IfElse>
            <If condition={itemCount > 0}>
              <div className="p-4 bg-purple-600 bg-opacity-40 rounded-lg text-center border border-purple-500">
                <p className="text-lg font-medium">
                  You have {itemCount} item(s) in your cart.
                </p>
              </div>
            </If>
            <Else>
              <div className="p-4 bg-yellow-600 bg-opacity-40 rounded-lg text-center border border-yellow-500">
                <p className="text-lg font-medium">Your cart is empty.</p>
              </div>
            </Else>
          </IfElse>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-white">
          The `ElIf` (Else If) Component
        </h2>
        <p className="text-lg mb-4">
          The `ElIf` component allows you to add additional conditional branches
          within an `IfElse` block. It will only be evaluated if the preceding
          `If` and `ElIf` conditions (if any) were `false`. You can include
          multiple `ElIf` components.
        </p>
        <h3 className="text-2xl font-semibold mb-4 text-blue-200">
          Usage: `IfElse` with `If`, `ElIf`, and `Else`
        </h3>
        <CodeBlock>
          {`import { IfElse, If, ElIf, Else } from 'react-conditional-renderer';

function TemperatureDisplay({ temp }) {
  return (
    <IfElse>
      <If condition={temp > 30}>
        <p>It's hot!</p>
      </If>
      <ElIf condition={temp > 20}>
        <p>It's warm.</p>
      </ElIf>
      <ElIf condition={temp > 10}>
        <p>It's mild.</p>
      </ElIf>
      <Else>
        <p>It's cold.</p>
      </Else>
    </IfElse>
  );
}`}
        </CodeBlock>

        <h3 className="text-2xl font-semibold mb-4 text-blue-200">
          Live Example: `IfElse` with `If`, `ElIf`, and `Else`
        </h3>
        <div className="bg-gray-700 bg-opacity-30 rounded-lg p-6">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <label htmlFor="temperatureInput" className="text-lg font-medium">
              Temperature (°C):
            </label>
            <input
              id="temperatureInput"
              type="range"
              min="0"
              max="40"
              value={temperature}
              onChange={(e) => setTemperature(Number(e.target.value))}
              className="w-48 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-gray-700"
            />
            <span className="text-xl font-bold text-blue-300">
              {temperature}°C
            </span>
          </div>

          <IfElse>
            <If condition={temperature > 30}>
              <div className="p-4 bg-red-600 bg-opacity-40 rounded-lg text-center border border-red-500">
                <p className="text-lg font-medium">
                  It's scorching hot! ({temperature}°C)
                </p>
              </div>
            </If>
            <ElIf condition={temperature > 25}>
              <div className="p-4 bg-orange-600 bg-opacity-40 rounded-lg text-center border border-orange-500">
                <p className="text-lg font-medium">
                  It's warm. ({temperature}°C)
                </p>
              </div>
            </ElIf>
            <ElIf condition={temperature > 15}>
              <div className="p-4 bg-yellow-600 bg-opacity-40 rounded-lg text-center border border-yellow-500">
                <p className="text-lg font-medium">
                  It's mild. ({temperature}°C)
                </p>
              </div>
            </ElIf>
            <Else>
              <div className="p-4 bg-blue-600 bg-opacity-40 rounded-lg text-center border border-blue-500">
                <p className="text-lg font-medium">
                  It's quite cold. ({temperature}°C)
                </p>
              </div>
            </Else>
          </IfElse>
        </div>
      </section>

      {/* Assuming Switch, Case, and Default components might be in a separate library file
          or will be re-added to the main library file if needed for documentation.
          For now, this section remains as a placeholder or if you have them in a separate import.
      */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-white">
          The `Switch`, `Case`, and `Default` Components
        </h2>
        <p className="text-lg mb-4">
          The `Switch` component allows you to render content based on a
          specific `value`, similar to a JavaScript `switch` statement. Each
          `Case` component has a `when` prop, and the first `Case` whose `when`
          prop strictly matches the `Switch`'s `value` will be rendered. If no
          `Case` matches, the `Default` component (if provided) will be
          rendered.
        </p>
        <h3 className="text-2xl font-semibold mb-4 text-blue-200">Usage</h3>
        <CodeBlock>
          {`import { Switch, Case, Default } from 'react-conditional-renderer'; // Adjust import if needed

function UserDashboard({ role }) {
  return (
    <Switch value={role}>
      <Case when="admin">
        <p>Admin Dashboard</p>
      </Case>
      <Case when="editor">
        <p>Editor Tools</p>
      </Case>
      <Default>
        <p>User Profile</p>
      </Default>
    </Switch>
  );
}`}
        </CodeBlock>

        <h3 className="text-2xl font-semibold mb-4 text-blue-200">
          Live Example: Switch/Case/Default
        </h3>
        <div className="bg-gray-700 bg-opacity-30 rounded-lg p-6">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <label htmlFor="userRoleSelect" className="text-lg font-medium">
              Select User Role:
            </label>
            <select
              id="userRoleSelect"
              className="select select-bordered text-gray-900 bg-white bg-opacity-90 rounded-md p-2 shadow-sm focus:ring-2 focus:ring-purple-400"
              value={userRole}
              onChange={(e) => setUserRole(e.target.value)}
            >
              <option value="guest">Guest</option>
              <option value="user">User</option>
              <option value="editor">Editor</option>
              <option value="admin">Admin</option>
              <option value="unknown">Unknown Role</option>
            </select>
          </div>

          {/* Assuming Switch, Case, Default are imported or available */}
          {/* If you removed them from your library, you might need to re-add them or adjust this section */}
          {/* For now, keeping the example as is, assuming these components exist in your project */}
          {/* You would need to import them here if they are in a separate file in your library */}
          {/* For this example, I'm using placeholder imports at the top, assuming they are available */}
          {/* If they are not available, this section will cause an error */}
          {/* I'm temporarily re-defining them here for the sake of the example running,
              but in a real scenario, you'd import them from your published/linked library.
          */}
          {/* START: TEMPORARY DEFINITIONS FOR DEMO - REMOVE IN REAL APP */}
          {/* If you removed Switch/Case/Default from your library, and still want to show them in docs,
              you'd need to either put them back in the library or create separate demo components.
              For this demo, I'm assuming they are still part of 'react-conditional-renderer' for now.
              If you explicitly removed them, then this section should be removed or adapted.
          */}
          {/*
          const Switch: React.FC<any> = ({ value, children }) => {
            let matchedChild: React.ReactNode | null = null;
            let defaultChild: React.ReactNode | null = null;
            React.Children.forEach(children, child => {
              if (React.isValidElement(child)) {
                if ((child.type as any).name === 'Case' && (child.props as any).when === value && !matchedChild) {
                  matchedChild = child;
                } else if ((child.type as any).name === 'Default' && !defaultChild) {
                  defaultChild = child;
                }
              }
            });
            return matchedChild || defaultChild;
          };
          const Case: React.FC<any> = ({ children }) => <>{children}</>;
          const Default: React.FC<any> = ({ children }) => <>{children}</>;
          */}
          {/* END: TEMPORARY DEFINITIONS FOR DEMO */}

          {/* Actual usage of Switch/Case/Default */}
          <Switch value={userRole}>
            <Case when="guest">
              <div className="p-4 bg-blue-600 bg-opacity-40 rounded-lg text-center border border-blue-500">
                <p className="text-lg font-medium">
                  Hello, Guest! You have limited access.
                </p>
              </div>
            </Case>
            <Case when="user">
              <div className="p-4 bg-green-600 bg-opacity-40 rounded-lg text-center border border-green-500">
                <p className="text-lg font-medium">
                  Welcome, User! Enjoy your personalized experience.
                </p>
              </div>
            </Case>
            <Case when="editor">
              <div className="p-4 bg-orange-600 bg-opacity-40 rounded-lg text-center border border-orange-500">
                <p className="text-lg font-medium">
                  Greetings, Editor! You can manage content.
                </p>
              </div>
            </Case>
            <Case when="admin">
              <div className="p-4 bg-purple-600 bg-opacity-40 rounded-lg text-center border border-purple-500">
                <p className="text-lg font-medium">
                  Administrator access granted. Full control!
                </p>
              </div>
            </Case>
            <Default>
              <div className="p-4 bg-gray-600 bg-opacity-40 rounded-lg text-center border border-gray-500">
                <p className="text-lg font-medium">
                  Unknown role. Please select a valid role.
                </p>
              </div>
            </Default>
          </Switch>
        </div>
      </section>
    </>
  );
};
