const postReducer = (state = "", action) => {
  switch (action.type) {
    case "ADD_NAME": {
      console.log("reducer", action.payload);
      return state.concat(action.payload);
    }

    default: {
      return "";
    }
  }
};

export default postReducer;
