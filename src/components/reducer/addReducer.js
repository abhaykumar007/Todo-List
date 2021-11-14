import { ADD, DELETE } from "../action";
const initial = {
  todo: [],
};
const reducerFun = (state = initial, action) => {
  switch (action.type) {
    case ADD: {
      // console.log("reducer", action.payload);
      return { todo: [...state.todo, action.payload] };
    }
    case DELETE: {
      let ref = state.todo.filter((element) => element !== action.payload);
      return { todo: ref };
    }
    default: {
      return state;
    }
  }
};

export default reducerFun;
