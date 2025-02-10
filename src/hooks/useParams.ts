import { useEffect } from "react";
import { useSearchParams } from "react-router";

export const useParams = (currentpage: string) => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("page", currentpage);

    setSearchParams(newParams);
  }, [currentpage, searchParams, setSearchParams]);
};
