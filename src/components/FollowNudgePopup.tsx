import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { LinkedinIcon, GithubIcon } from "lucide-react";

interface FollowMePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const FollowMePopup: React.FC<FollowMePopupProps> = ({ isOpen, onClose }) => {
  const portalRootRef = useRef<any>(null);

  useEffect(() => {
    portalRootRef.current = document.querySelector("body");
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!isOpen || !portalRootRef.current) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-end justify-end p-4 sm:p-6 pointer-events-none">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div
        className="relative z-10 w-full max-w-xs bg-white rounded-xl shadow-xl p-4 pointer-events-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <h3 className="text-lg font-semibold mb-2">👋 Let's Connect!</h3>
        <p className="text-sm mb-3 text-gray-600">
          Follow me on various social media platforms or star/follow me on
          GitHub!
        </p>
        <div className="space-y-2">
          <a
            href="https://x.com/lalitkhu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full text-center bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            X (Twiter)
          </a>
          <a
            href="https://www.linkedin.com/in/lalit-khudania"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex text-center justify-center items-center gap-2 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            <LinkedinIcon size={16} /> LinkedIn
          </a>
          <a
            href="https://github.com/khulalit/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center gap-2 items-center w-full text-center bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 transition"
          >
            <GithubIcon size={16} /> GitHub
          </a>
          <a
            href="https://github.com/khulalit/react-if-then-else-switch"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center text-sm text-gray-600 hover:text-gray-800 underline"
          >
            ⭐ Star or Follow if you like
          </a>
        </div>
      </div>
    </div>,
    portalRootRef.current
  );
};

export default FollowMePopup;
