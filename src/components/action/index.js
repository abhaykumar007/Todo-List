export const ADD = "add";
export const DELETE = "delete";

export function addFun(data) {
  // console.log("data from action", data);
  return {
    type: ADD,
    payload: data,
  };
}

export function deleteFun(data) {
  return {
    type: DELETE,
    payload: data,
  };
}
