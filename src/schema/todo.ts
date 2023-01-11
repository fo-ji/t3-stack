import z from "zod";

export const createTaskSchema = z.object({
  title: z.string().max(20),
  body: z.string().max(5),
});

export type createTaskInput = z.TypeOf<typeof createTaskSchema>;

export const updateTaskSchema = z.object({
  taskId: z.string().cuid(), // MEMO: cuidはuuidと比較して少ない文字数だが、低い衝突率を確保している
  title: z.string().max(20),
  body: z.string().max(5),
});

export type updateTaskInput = z.TypeOf<typeof updateTaskSchema>;

export const getSingleTaskSchema = z.object({
  taskId: z.string().cuid(),
});

export const deleteTaskSchema = z.object({
  taskId: z.string().cuid(),
});
