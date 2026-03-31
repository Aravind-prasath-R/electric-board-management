import axios from 'axios';

// API base URL - change this for production deployment
const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://electric-board-management.onrender.com';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// API endpoints
export const endpoints = {
  // Authentication
  login: '/api/login/',
  logout: '/api/logout/',
  
  // Applicants
  applicants: '/api/applicants/',
  applicantDetail: (id) => `/api/applicants/${id}/`,
  
  // Connections
  connections: '/api/connections/',
  connectionDetail: (id) => `/api/connections/${id}/`,
  updateConnection: (id) => `/api/connections/${id}/`,
  
  // Statistics
  stats: '/api/stats/',
  monthlyData: '/api/monthly-data/',
  
  // Data upload
  uploadData: '/api/upload-data/',
};

// API functions
export const apiService = {
  // GET requests
  get: async (endpoint) => {
    try {
      const response = await api.get(endpoint);
      return response.data;
    } catch (error) {
      console.error('GET Error:', error);
      throw error;
    }
  },
  
  // POST requests
  post: async (endpoint, data) => {
    try {
      const response = await api.post(endpoint, data);
      return response.data;
    } catch (error) {
      console.error('POST Error:', error);
      throw error;
    }
  },
  
  // PUT requests
  put: async (endpoint, data) => {
    try {
      const response = await api.put(endpoint, data);
      return response.data;
    } catch (error) {
      console.error('PUT Error:', error);
      throw error;
    }
  },
  
  // DELETE requests
  delete: async (endpoint) => {
    try {
      const response = await api.delete(endpoint);
      return response.data;
    } catch (error) {
      console.error('DELETE Error:', error);
      throw error;
    }
  },
};

export default api;
