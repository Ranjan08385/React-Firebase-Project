const initialState = {
  projects: [
    { id: 1, title: "abc", content: "jsndvjnfv" },
    { id: 2, title: "xyz", content: "erfsdsdavd" },
    { id: 3, title: "asd", content: "sadvargvxcxvzx" }
  ]
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create project error", action.err);
      return state;
    default:
      return state;
    
  }
};

export default projectReducer;
