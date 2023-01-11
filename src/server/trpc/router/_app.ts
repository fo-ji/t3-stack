import { router } from "../trpc";
import { todoRouter } from "./todo";

export const appRouter = router({ todo: todoRouter }); // MEMO: クライアント側で呼び出す際は「todo」で利用する

// export type definition of API
export type AppRouter = typeof appRouter;
