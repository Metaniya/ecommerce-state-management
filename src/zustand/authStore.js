import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,

      login: (username) =>
        set({
          user: {
            name: username,
          },
        }),

      logout: () =>
        set({
          user: null,
        }),
    }),
    {
      name: "auth-storage",
    }
  )
);

export default useAuthStore;