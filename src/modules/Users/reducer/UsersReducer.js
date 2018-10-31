import {
  ACTION_USERS_SEARCH_USER,
  ACTION_USERS_CHANGE_LOADING,
  ACTION_USERS_GET_USER_REPOS,
  ACTION_USERS_GET_USER_DATA
} from '../constants';

const INITIAL_STATE = {
  selectedUser: '',
  selectedUserRepos: [],
  selectedUserData: {},
  users: [],
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_USERS_SEARCH_USER:
      return { ...state, users: action.payload.users };
    case ACTION_USERS_CHANGE_LOADING:
      return { ...state, loading: action.payload.loading };
    case ACTION_USERS_GET_USER_REPOS:
      return { ...state, selectedUserRepos: action.payload.selectedUserRepos };
    case ACTION_USERS_GET_USER_DATA:
      return { ...state, selectedUserData: action.payload.selectedUserData };
    default:
      return state;
  }
};
