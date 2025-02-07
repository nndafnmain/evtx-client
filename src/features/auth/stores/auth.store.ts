import { create } from "zustand";

interface AuthStore {
  accessToken: string | null;
  user: {
    id: string;
    username: string;
    email: string;
    referralCode: string;
    role: string;
  } | null;
  isAuthenticated: boolean;
  setAuth: (token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  accessToken: localStorage.getItem("access_token") || null,
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")!)
    : null,
  isAuthenticated: !!localStorage.getItem("access_token"),
  setAuth: (token) => {
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      const user = {
        id: payload.id,
        email: payload.email,
        username: payload.username,
        referralCode: payload.referralCode,
      };
      set({ accessToken: token, isAuthenticated: true });
      localStorage.setItem("access_token", token);
      localStorage.setItem("user", JSON.stringify(user));
    } catch (error) {
      console.error("Invalid token:", error);
    }
  },
  logout: () => {
    set({ accessToken: null, user: null, isAuthenticated: false });
    localStorage.removeItem("access_token");
    localStorage.removeItem("user");
  },
}));
