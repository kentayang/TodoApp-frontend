const API_URL = import.meta.env.VITE_API_URL;

export const login = async (email, password) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ email, password }),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to login");
  }
  return response.json();
};

export const logout = async () => {
  const response = await fetch(`${API_URL}/auth/logout`, {
    method: "POST",
    credentials: "include",
  });

  if (!response.ok) {
    // No lanzar error si el logout falla, las cookies se limpiarán automáticamente
    console.warn(
      "Logout request failed, but cookies will be cleared by browser"
    );
  }
};

export const register = async (name, email, password, confirmPassword) => {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ name, email, password, confirmPassword }),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to register");
  }
  return response.json();
};

export const getUser = async () => {
  const response = await fetch(`${API_URL}/auth/user`, {
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("Failed to get user");
  }
  return response.json();
};

export const loginWithGoogle = async (idToken) => {
  const response = await fetch(`${API_URL}/auth/google`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ idToken }),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to login with Google");
  }
  return response.json();
};
