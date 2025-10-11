const API_URL = import.meta.env.VITE_API_URL;

export const getTasks = async (userId) => {
  const response = await fetch(`${API_URL}/tasks/${userId}`, {
    credentials: "include",
  });
  if (response.status === 401 || response.status === 403) {
    throw new Error("Unauthorized");
  }
  if (!response.ok) {
    throw new Error("Failed to get tasks");
  }
  return response.json();
};

export const createTask = async (userId, task) => {
  const response = await fetch(`${API_URL}/tasks/${userId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(task),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to create task");
  }
  return response.json();
};

export const updateTask = async (userId, taskId, completed) => {
  const response = await fetch(`${API_URL}/tasks/${userId}/${taskId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ completed }),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to update task");
  }
  return response.json();
};

export const deleteTask = async (userId, taskId) => {
  const response = await fetch(`${API_URL}/tasks/${userId}/${taskId}`, {
    method: "DELETE",
    credentials: "include",
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to delete task");
  }
  return response.json();
};
