import { Quote } from "./quoteService/quote";

export enum QuoteActionKind {
  RequestQuotes = "RequestQuotes",
  SetQuotesList = "SetQuotesList",
}

export interface QuoteAction {
  type: QuoteActionKind;
  payload: Quote[] | string;
}

interface IState {
  quoteList: Quote[];
  selectedAuthor: string | null;
  isLoading: boolean;
  quotesFetched: number;
}

const quotesReducer = (state: IState, action: QuoteAction) => {
  switch (action.type) {
    case QuoteActionKind.RequestQuotes: {
      return {
        ...state,
        quoteList: [],
        selectedAuthor: action.payload,
        isLoading: true,
        quotesFetched: state.quotesFetched + 1,
      } as IState;
    }
    case QuoteActionKind.SetQuotesList: {
      return {
        ...state,
        quoteList: action.payload,
        isLoading: false,
      } as IState;
    }
    default:
      return state;
  }
};
export default quotesReducer;
