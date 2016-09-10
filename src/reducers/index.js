import { combineReducers } from 'redux';
import PostReducer from './reducer_posts';
import ActivePostReducer from './reducer_active_post';

const rootReducer = combineReducers({
  posts: PostReducer,
  activePost: ActivePostReducer
});

export default rootReducer;
