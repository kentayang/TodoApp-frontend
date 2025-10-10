import { create } from "zustand";
import { persist, createJSONStorage, devtools } from "zustand/middleware";
import { login, logout, getUser, register } from "../services/auth.service";

const initialState = {
  user: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

export const useAuthStore = create(
  devtools(
    persist(
      (set) => ({
        ...initialState,
        login: async (email, password) => {
          set({ isLoading: true, error: null });
          try {
            const response = await login(email, password);
            set({
              user: response.user,
              isLoggedIn: true,
              isLoading: false,
              error: null,
            });
          } catch (error) {
            set({
              user: null,
              isLoggedIn: false,
              isLoading: false,
              error: error.message,
            });
          }
        },

        logout: async () => {
          set({ isLoading: true, error: null });
          try {
            await logout();
            set(initialState);
          } catch {
            // Aún así limpiamos el estado local si el logout falla
            set(initialState);
            console.warn("Logout failed but state cleared locally");
          }
        },

        register: async (name, email, password, confirmPassword) => {
          set({ isLoading: true, error: null });
          try {
            const response = await register(name, email, password, confirmPassword);
            set({
              user: response.user,
              isLoggedIn: true,
              isLoading: false,
              error: null,
            });
          } catch (error) {
            set({
              user: null,
              isLoggedIn: false,
              isLoading: false,
              error: error.message,
            });
          }
        },

        getUser: async () => {
          set({ isLoading: true, error: null });
          try {
            const response = await getUser();
            set({
              user: response.user,
              isLoggedIn: true,
              isLoading: false,
              error: null,
            });
          } catch (error) {
            set({
              user: null,
              isLoggedIn: false,
              isLoading: false,
              error: error.message,
            });
          }
        },

        clearError: () => set({ error: null }),
      }),
      {
        name: "auth",
        storage: createJSONStorage(() => localStorage),
        partialize: (state) => ({
          user: state.user,
          isLoggedIn: state.isLoggedIn,
        }),
      }
    ),
    {
      name: "auth",
    }
  )
);
