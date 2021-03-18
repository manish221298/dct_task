export const addName = (name) => {
  console.log("action", name);
  return { type: "ADD_NAME", payload: name };
};
