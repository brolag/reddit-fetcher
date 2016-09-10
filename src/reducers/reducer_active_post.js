import { SET_ACTIVE_POST } from '../actions/index';

/**
 * Returns a post as active post for the overlay.
 * @param state
 * @param action
 * @returns state or action payload
 */
export default function (state = {}, action) {
  switch (action.type) {
    case SET_ACTIVE_POST:
      return action.payload
  }

  return state;
}