import { useEffect, useReducer } from "react";
import quotesReducer, { QuoteActionKind } from "./quotesReducer";
import { getQuotes } from "./quoteService/quoteService";

function useQuoteDataManager() {
  const [{ isLoading, selectedAuthor, quoteList }, dispatch] = useReducer(
    quotesReducer,
    {
      quoteList: [],
      selectedAuthor: null,
      isLoading: true,
    }
  );

  useEffect(() => {
    const fetchData = async function (selectedAuthor: string | null) {
      let result = await getQuotes(selectedAuthor);
      dispatch({ type: QuoteActionKind.SetQuotesList, payload: result?.data! });
    };
    fetchData(selectedAuthor);
    return () => {};
  }, [selectedAuthor]);
  return { isLoading, quoteList, selectedAuthor };
}

export default useQuoteDataManager;
