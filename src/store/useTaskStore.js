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
      getTasks: async (userId) => {
        set({ isLoading: true, error: null });
        try {
          const response = await getTasks(userId);
          // El backend devuelve un array directo de tareas
          const tasks = Array.isArray(response) ? response : [];
          set({ tasks: tasks, isLoading: false, error: null });
        } catch (error) {
          console.error("Error getting tasks:", error);
          set({ tasks: [], isLoading: false, error: error.message });
        }
      },
      createTask: async (userId, task) => {
        set({ isLoading: true, error: null });
        try {
          const newTask = await createTask(userId, task);
          // El backend devuelve la tarea creada con id, completed y creationDate
          set((state) => ({
            tasks: [...state.tasks, newTask],
            isLoading: false,
            error: null,
          }));
        } catch (error) {
          console.error("Error creating task:", error);
          set({ isLoading: false, error: error.message });
        }
      },
      updateTask: async (userId, taskId, completed) => {
        set({ isLoading: true, error: null });
        try {
          await updateTask(userId, taskId, completed);
          // Actualizar la tarea localmente
          set((state) => ({
            tasks: state.tasks.map((t) =>
              t.id === taskId ? { ...t, completed } : t
            ),
            isLoading: false,
            error: null,
          }));
        } catch (error) {
          console.error("Error updating task:", error);
          set({ isLoading: false, error: error.message });
        }
      },
      deleteTask: async (userId, taskId) => {
        set({ isLoading: true, error: null });
        try {
          await deleteTask(userId, taskId);
          // Eliminar la tarea localmente del estado
          set((state) => ({
            tasks: state.tasks.filter((t) => t.id !== taskId),
            isLoading: false,
            error: null,
          }));
        } catch (error) {
          console.error("Error deleting task:", error);
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
