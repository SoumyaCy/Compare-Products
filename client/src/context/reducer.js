import { GET_PRODUCTS, GET_SORTED_PRODUCTS } from "./actions";
export const reducer = (state, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        search: action.payload.searchParam,
        flipkartProducts: [...action.payload.flipkartArrayResponse],
        amazonProducts: [...action.payload.amazonArrayResponse],
      };
    case GET_SORTED_PRODUCTS:
      return {
        ...state,

        nextSortOrder: state.nextSortOrder === "desc" ? "asc" : "desc",
        flipkartProducts: [...action.payload.flipkartArrayResponse],
        amazonProducts: [...action.payload.amazonArrayResponse],
      };
    default:
      return console.log("no such action found");
  }
};
