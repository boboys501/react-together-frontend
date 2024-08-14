import { getToken } from './auth';

const API_BASE_URL = 'http://localhost:3000'; // Replace with your actual API base URL

export const fetchWithAuth = async (endpoint, options = {}) => {
  const token = getToken();
  const headers = {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
    ...options.headers,
  };

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};
