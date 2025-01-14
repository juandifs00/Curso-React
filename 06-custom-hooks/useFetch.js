import { useEffect, useState } from "react";

const localCache = {};

const useFetch = (url) => {
  const [state, setstate] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  });

  useEffect(() => {
    getFetch();
  }, [url]);

  const setLoadingState = () => {
    setstate({
      data: null,
      isLoading: true,
      hasError: false,
      error: null,
    });
  };

  const getFetch = async () => {
    if (localCache[url]) {
      console.log("Usando cache");

      setstate({
        data: localCache[url],
        isLoading: false,
        hasError: false,
        error: null,
      });

      return;
    }

    setLoadingState();

    const resp = await fetch(url);

    //sleep
    await new Promise((resolve) => setTimeout(resolve, 1500));

    if (!resp.ok) {
      setstate({
        data: null,
        isLoading: false,
        hasError: true,
        error: {
          status: resp.status,
          statusText: resp.statusText,
        },
      });

      return;
    }

    const data = await resp.json();
    setstate({
      data: data,
      isLoading: false,
      hasError: false,
      error: null,
    });

    //Manejo del cache:
    localCache[url] = data;
  };

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};

export default useFetch;
