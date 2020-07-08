
import {VISIBILITY_FILTERS} from './visibility_filter';

const initialState = VISIBILITY_FILTERS.ALL;

export const smtpReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_FILTER": {
      return action.payload.filter;
    }
    default: {
      return state;
    }
  }
};
