const Loading = () => {
  return (
    <div className="text-center text-green-500 text-2xl">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 100 100"
      >
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="#000"
          stroke-width="10"
          fill="none"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="251"
            dur="2s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-dasharray"
            values="150.6 100.4;1 250;150.6 100.4"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
};

export default Loading;
