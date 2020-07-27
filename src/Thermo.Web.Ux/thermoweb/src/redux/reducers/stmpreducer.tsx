
export const smtpReducer = (state = {}, action: any) => {
  switch (action.type) {
    case "SET_FILTER": {
      return action.payload.filter;
    }
    default: {
      return { ...state };
    }
  }
};
