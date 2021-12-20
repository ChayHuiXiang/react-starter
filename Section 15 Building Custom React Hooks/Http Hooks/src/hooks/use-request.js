import { useState, useCallback } from "react";

const useRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const httpRequest = useCallback(async(requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method || 'GET',
        body: JSON.stringify(requestConfig.body) || null,
        headers: requestConfig.headers || {},
      });
      if (!response.ok) {
        throw new Error("Request failed!");
      }
      const data = await response.json();
      applyData(data);

    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
    console.log('loading done!');
  },[]);
  return {
    isLoading,
    error,
    httpRequest,
  };
};

export default useRequest;
