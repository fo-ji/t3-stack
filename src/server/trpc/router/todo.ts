import {
  createTaskSchema,
  updateTaskSchema,
  getSingleTaskSchema,
  deleteTaskSchema,
} from "../../../schema/todo";
import { router, protectedProcedure, publicProcedure } from "../trpc";

export const todoRouter = router({
  createTask: protectedProcedure
    .input(createTaskSchema)
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.task.create({
        data: {
          ...input,
          user: {
            connect: {
              // MEMO: 既存のレコードとのリレーション時にconnectを利用
              id: ctx.session.user.id,
            },
          },
        },
      });
    }),

  getTasks: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.task.findMany({
      where: {
        userId: ctx.session?.user?.id,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }),

  getSingleTask: protectedProcedure
    .input(getSingleTaskSchema)
    .query(({ ctx, input: { taskId } }) => {
      return ctx.prisma.task.findUnique({
        where: {
          id: taskId,
        },
      });
    }),

  updateTask: protectedProcedure
    .input(updateTaskSchema)
    .mutation(async ({ ctx, input: { taskId, title, body } }) => {
      return await ctx.prisma.task.update({
        where: {
          id: taskId,
        },
        data: {
          title,
          body,
        },
      });
    }),

  deleteTask: protectedProcedure
    .input(deleteTaskSchema)
    .mutation(async ({ ctx, input: { taskId } }) => {
      await ctx.prisma.task.delete({
        where: {
          id: taskId,
        },
      });
    }),
});
