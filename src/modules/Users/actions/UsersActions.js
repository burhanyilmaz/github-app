import {
  ACTION_USERS_SEARCH_USER,
  ACTION_USERS_GET_USER_DATA,
  ACTION_USERS_GET_USER_REPOS,
  ACTION_USERS_CHANGE_LOADING
} from '../constants';

const absolutePath = 'https://api.github.com/';
export const searchUser = value => dispatch => {
  const path = `${absolutePath}search/users?q=${value}`;
  dispatch(changeLoadingStatus(true));
  fetch(path)
    .then(body => body.json())
    .then(data => {
      dispatch(changeLoadingStatus(false));
      dispatch({
        type: ACTION_USERS_SEARCH_USER,
        payload: { users: data.items }
      });
    })
    .catch(() => {
      dispatch(changeLoadingStatus(false));
    });
};

export const selectUser = user => dispatch => {
  dispatch(getUserData(user));
};

export const getUserData = username => dispatch => {
  const path = `${absolutePath}users/${username}`;
  dispatch({
    type: ACTION_USERS_GET_USER_DATA,
    payload: {
      selectedUserData: {}
    }
  });
  fetch(path)
    .then(body => body.json())
    .then(data => {
      dispatch({
        type: ACTION_USERS_GET_USER_REPOS,
        payload: {
          selectedUserRepos: []
        }
      });
      dispatch({
        type: ACTION_USERS_GET_USER_DATA,
        payload: {
          selectedUserData: data
        }
      });
      dispatch(getUserRepos(username));
    });
};

export const getUserRepos = username => dispatch => {
  const path = `${absolutePath}users/${username}/repos`;
  fetch(path)
    .then(body => body.json())
    .then(data => {
      dispatch({
        type: ACTION_USERS_GET_USER_REPOS,
        payload: {
          selectedUserRepos: data
        }
      });
    });
};

export const changeLoadingStatus = status => dispatch => {
  dispatch({
    type: ACTION_USERS_CHANGE_LOADING,
    payload: {
      loading: status
    }
  });
};
