const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

class BaseQueryService {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private getHeaders(): HeadersInit {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    };

    const token = localStorage.getItem('token');
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    return headers;
  }

  async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: 'GET',
        headers: this.getHeaders(),
      });

      return await response.json();
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'An error occurred',
      };
    }
  }

  async post<T>(endpoint: string, data: unknown): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: 'POST',
        headers: this.getHeaders(),
        body: JSON.stringify(data),
      });

      return await response.json();
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'An error occurred',
      };
    }
  }

  async put<T>(endpoint: string, data: unknown): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: 'PUT',
        headers: this.getHeaders(),
        body: JSON.stringify(data),
      });

      return await response.json();
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'An error occurred',
      };
    }
  }

  async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: 'DELETE',
        headers: this.getHeaders(),
      });

      return await response.json();
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'An error occurred',
      };
    }
  }
}

export const apiService = new BaseQueryService(API_URL);