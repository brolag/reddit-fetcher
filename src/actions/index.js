import axios from 'axios';

const ROOT_URL = 'https://www.reddit.com/r/'

export const FETCH_POSTS = 'FETCH_POSTS';
export const SET_ACTIVE_POST = 'SET_ACTIVE_POST';

export function fetchPosts(term) {
  const url = `${ROOT_URL}${term}/.json`
  const request = axios.get(url);

  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export function setActivePost(post) {
  return {
    type: SET_ACTIVE_POST,
    payload: post
  }
}

