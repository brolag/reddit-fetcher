import { FETCH_POSTS } from '../actions/index';
/**
 * Returns a list of posts inside the data object.
 * @param state
 * @param action
 * @returns {*}
 */
export default function (state = [], action) {
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload.data
  }

  return state;
}