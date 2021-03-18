const postReducer = (state = "", action) => {
  switch (action.type) {
    case "ADD_NAME": {
      return state.concat(action.payload);
    }

    default: {
      return "";
    }
  }
};

export default postReducer;
