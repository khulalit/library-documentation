/* eslint-disable */
const AuthorInfo: React.FC = () => {
  const authorName = "Lalit";
  const githubLink =
    "https://github.com/yourusername/react-conditional-renderer"; // Replace with your GitHub repo
  const npmLink = "https://www.npmjs.com/package/react-conditional-renderer"; // Replace with your NPM package link
  const linkedinLink = "https://www.linkedin.com/in/yourprofile"; // Replace with your LinkedIn profile
  const twitterLink = "https://twitter.com/yourhandle"; // Replace with your Twitter handle
  const buyMeACoffeeLink = "https://www.buymeacoffee.com/yourpage"; // Replace with your Buy Me a Coffee link

  return (
    <section className="mb-12 text-center">
      <h2 className="text-3xl font-bold mb-6 text-white">About the Author</h2>
      <p className="text-lg mb-4">
        This library was crafted with ❤️ by
        <span className="font-semibold text-blue-200">{authorName}</span>. I'm
        passionate about building useful tools for the React community.
      </p>
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg shadow-md transition-all duration-200 flex items-center"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.83 9.504.475.083.613-.205.613-.456 0-.227-.007-.785-.011-1.536-2.77.6-3.35-1.34-3.35-1.34-.454-1.15-1.11-1.45-1.11-1.45-.908-.618.069-.606.069-.606 1.003.07 1.532 1.03 1.532 1.03.892 1.529 2.341 1.089 2.91.833.091-.647.35-1.089.636-1.339-2.22-.253-4.555-1.113-4.555-4.93 0-1.09.39-1.984 1.03-2.68a3.61 3.61 0 01.1-2.656s.83-.268 2.72.986c.79-.22 1.63-.33 2.47-.33.84 0 1.68.11 2.47.33 1.89-1.254 2.72-.986 2.72-.986.056.242.17.61.1 2.656.64.696 1.03 1.59 1.03 2.68 0 3.826-2.338 4.673-4.566 4.92.359.309.678.915.678 1.855 0 1.339-.012 2.419-.012 2.748 0 .254.137.542.622.455C20.14 20.2 23 16.445 23 12.017 23 6.484 18.522 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
          GitHub
        </a>
        <a
          href={npmLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-red-700 hover:bg-red-600 text-white rounded-lg shadow-md transition-all duration-200 flex items-center"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4 11H8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1zm-4 4H8c-.55 0-1-.45-1-1s.45-1 1-1h4c.55 0 1 .45 1 1s-.45 1-1 1zM12 7H8c-.55 0-1-.45-1-1s.45-1 1-1h4c.55 0 1 .45 1 1s-.45 1-1 1z" />
          </svg>
          NPM Package
        </a>
        <a
          href={linkedinLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white rounded-lg shadow-md transition-all duration-200 flex items-center"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.325-.028-3.044-1.852-3.044-1.853 0-2.136 1.445-2.136 2.951v5.662H9.593V9.216h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.463v6.225zM7.947 6.023c-.961 0-1.739-.777-1.739-1.738 0-.96.778-1.739 1.739-1.739s1.739.779 1.739 1.739c0 .961-.778 1.738-1.739 1.738zM6.109 20.452H2.554V9.216h3.555v11.236zM22.225 0H1.771C.792 0 0 .776 0 1.729v20.542C0 23.223.792 24 1.771 24h20.454C23.208 24 24 23.223 24 22.271V1.729C24 .776 23.208 0 22.225 0z" />
          </svg>
          LinkedIn
        </a>
        <a
          href={twitterLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg shadow-md transition-all duration-200 flex items-center"
        >
          X
        </a>
      </div>
      <a
        href={buyMeACoffeeLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
      >
        <svg
          className="w-6 h-6 mr-2"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M18 10H6c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3c0-1.1-.9-2-2-2zm-2 5H8v-3h8v3zM4 6h16v2H4zm17-4H3C1.9 2 1 2.9 1 4v16c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
        </svg>
        Buy Me a Coffee
      </a>
    </section>
  );
};

export default AuthorInfo;
