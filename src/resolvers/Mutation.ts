import { Context } from "..";

interface PostArgs {
  post: {
    title?: string;
    content?: string;
  };
}

export const Query = {
  postCreate: async (_: any, { post }: PostArgs, { prisma }: Context) => {
    const { title, content } = post;
    if (!title || !content) {
      return {
        userErrors: [
          {
            message: "You must provide title and content to create a post",
          },
        ],
        post: null,
      };
    }

    return {
      post: prisma.post.create({
        data: {
          title,
          content,
        },
      }),
    };
  },
};
