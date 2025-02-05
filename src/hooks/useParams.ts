import { useEffect } from "react";
import { useSearchParams } from "react-router";

export const useParams = (currentpage: string) => {
  const [, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({ page: currentpage });
  }, [currentpage]);
};
