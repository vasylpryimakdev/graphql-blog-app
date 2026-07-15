import { Context } from "../../index";

interface SignupArgs {
  email: string;
  password: string;
  name: string;
  bio: string;
}

export const authResolvers = {
  signup: async (
    _: any,
    { name, email, password, bio }: SignupArgs,
    { prisma }: Context,
  ) => {
    return prisma.user.create({
      data: {
        email,
        name,
        password,
        bio,
      },
    });
  },
};
