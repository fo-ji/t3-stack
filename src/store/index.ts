import create from "zustand/react";
import type { updateTaskInput } from "../schema/todo";

interface State {
  editedTask: updateTaskInput;
  updateEditedTask: (payload: updateTaskInput) => void;
  resetEditedTask: () => void;
}

const useStore = create<State>((set) => ({
  editedTask: { taskId: "", title: "", body: "" },
  updateEditedTask: (payload) => set({ editedTask: payload }),
  resetEditedTask: () =>
    set({ editedTask: { taskId: "", title: "", body: "" } }),
}));

export default useStore;