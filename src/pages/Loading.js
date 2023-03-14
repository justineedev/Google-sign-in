import "../styles/Loading.css";
import { useState } from "react";

export default function Loading() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  return (
    <>
      {isLoading && (
        <div className="loading-wrapper">
          <div className="blue ball"></div>
          <div className="red ball"></div>
          <div className="yellow ball"></div>
          <div className="green ball"></div>
        </div>
      )}
    </>
  );
}
