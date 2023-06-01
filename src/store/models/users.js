export const users = {
  // initial state
  state: {
    userLists: [],
  },
  reducers: {
    // handle state changes with pure functions
    setUserList(state, userLists) {
      return {
        ...state,
        userLists,
      };
    },
  },
  effects: (dispatch) => ({
    // handle state changes with impure functions.
    // use async/await for async actions
    async fetchUsers(payload, rootState) {
      const data = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      ).then((response) => response.json());
      //   console.log(data);
      this.setUserList(data);
    },
  }),
  selectors: (slice, createSelector) => ({
    selectCount() {
      return slice((state) => state.count);
    },
  }),
};
