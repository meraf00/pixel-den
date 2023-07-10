import { useState } from "react";

export default function ImagePlaceholder() {
  return (
    <div className="relative h-60">
      <div className="absolute flex items-center justify-center top-0 w-full h-full bg-gray-600 bg-opacity-40 animate-pulse">
        <svg
          class="animate-spin -ml-1 mr-3 h-12 w-8 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

function Image(props) {
  const [error, setError] = useState(false);

  const { src, onError, children, ...rest } = props;

  const handleError = (event) => {
    setError(true);

    if (onError) onError();
  };

  if (error || !src) return children;

  return <img src={src} onError={handleError} {...rest} />;
}

export { Image, ImagePlaceholder };
