export default {
  routes: [
    {
      method: "GET",
      path: `/users/:userId/lessons`,
      handler: "user.getUserLessons",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "PUT",
      path: `/users/:userId/lessons`,
      handler: "user.addUserCourse",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
