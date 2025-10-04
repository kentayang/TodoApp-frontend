const API_URL = import.meta.env.VITE_API_URL;

export const getTasks = async () => {
  const response = await fetch(`${API_URL}/tasks`, {
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

export const createTask = async (task) => {
  const response = await fetch(`${API_URL}/tasks`, {
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

export const updateTask = async (task) => {
  const response = await fetch(`${API_URL}/tasks/${task.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(task),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to update task");
  }
  return response.json();
};

export const deleteTask = async (id) => {
  const response = await fetch(`${API_URL}/tasks/${id}`, {
    method: "DELETE",
    credentials: "include",
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to delete task");
  }
  return response.json();
};
