import { create } from "zustand";
import { devtools } from "zustand/middleware";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../services/tasks.service";

const initialState = {
  tasks: [],
  isLoading: false,
  error: null,
};

export const useTaskStore = create(
  devtools(
    (set) => ({
      ...initialState,
      getTasks: async () => {
        set({ isLoading: true, error: null });
        try {
          const response = await getTasks();
          set({ tasks: response.tasks, isLoading: false, error: null });
        } catch (error) {
          set({ tasks: [], isLoading: false, error: error.message });
        }
      },
      createTask: async (task) => {
        set({ isLoading: true, error: null });
        try {
          const response = await createTask(task);
          if (response.status === 200) {
            set((state) => ({
              tasks: [...state.tasks, response.task],
              isLoading: false,
              error: null,
            }));
          } else {
            set({ isLoading: false, error: response.message });
          }
        } catch (error) {
          set({ isLoading: false, error: error.message });
        }
      },
      updateTask: async (task) => {
        set({ isLoading: true, error: null });
        try {
          const response = await updateTask(task);
          if (response.status === 200) {
            set((state) => ({
              tasks: state.tasks.map((t) =>
                t.id === task.id ? (t.completed = true) : t
              ),
              isLoading: false,
              error: null,
            }));
          } else {
            set({ isLoading: false, error: response.message });
          }
        } catch (error) {
          set({ isLoading: false, error: error.message });
        }
      },
      deleteTask: async (id) => {
        set({ isLoading: true, error: null });
        try {
          const response = await deleteTask(id);
          if (response.status === 200) {
            set((state) => ({
              tasks: state.tasks.filter((t) => t.id !== id),
              isLoading: false,
              error: null,
            }));
          } else {
            set({ isLoading: false, error: response.message });
          }
        } catch (error) {
          set({ isLoading: false, error: error.message });
        }
      },
      clearTasks: async () => {
        set(initialState);
      },
    }),
    {
      name: "tasks",
    }
  )
);
