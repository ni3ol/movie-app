import { useEffect, useState } from "react";

export const usePromise = <T>(fn: () => Promise<{ data: T }>) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<T>();

  useEffect(() => {
    try {
      const makeRequest = async () => {
        setIsLoading(true);
        const response = await fn();
        if (response.data) {
          setData(response.data);
        }
        setTimeout(() => setIsLoading(false), 1000);
      };

      makeRequest();
    } catch (error) {
      setIsError(true);
    }
  }, [fn]);

  return { isLoading, isError, data };
};
