/**
 * A set of functions called "actions" for `user`
 */

export default {
  getUserLessons: async (ctx, next) => {
    try {
      ctx.body = "ok";
      const { userId } = ctx.params;
      const user = await strapi.entityService.findOne(
        "plugin::users-permissions.user",
        userId,
        {
          populate: ["historyCourses"],
        }
      );
      console.log("user: ", user);
    } catch (err) {
      console.log("err: ", err);
      ctx.body = err;
    }
  },

  addUserCourse: async (ctx, next) => {
    try {
      ctx.body = "ok";
      const { userId } = ctx.params;
      const entry = await strapi.entityService.create('api::article.article', {
        data: {
          title: 'My Article',
        },
      })

      console.log("user: ", entry);
    } catch (err) {
      console.log("err: ", err);
      ctx.body = err;
    }
  },
};
