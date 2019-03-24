import { FETCH_POST, NEW_POST } from "../actions/type";

const initState = {
  items: [], //booking array
  item: {} //single post single booking
};

export default function(state = initState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
