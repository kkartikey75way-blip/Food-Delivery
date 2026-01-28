import { apiService } from './baseQuery';
import type { User, Restaurant, MenuItem, Order, Promotion } from '../types';

export const api = {
  // Auth endpoints
  auth: {
    login: (email: string, password: string) =>
      apiService.post<{ user: User; token: string }>('/auth/login', { email, password }),
    
    register: (userData: { name: string; email: string; password: string; phone?: string }) =>
      apiService.post<{ user: User; token: string }>('/auth/register', userData),
    
    logout: () => apiService.post('/auth/logout', {}),
    
    getCurrentUser: () => apiService.get<User>('/auth/me'),
  },

  // Restaurant endpoints
  restaurants: {
    getAll: () => apiService.get<Restaurant[]>('/restaurants'),
    
    getById: (id: string) => apiService.get<Restaurant>(`/restaurants/${id}`),
    
    search: (query: string) => apiService.get<Restaurant[]>(`/restaurants/search?q=${query}`),
    
    getByCategory: (category: string) =>
      apiService.get<Restaurant[]>(`/restaurants/category/${category}`),
  },

  // Menu endpoints
  menu: {
    getByRestaurant: (restaurantId: string) =>
      apiService.get<MenuItem[]>(`/menu/restaurant/${restaurantId}`),
    
    getById: (id: string) => apiService.get<MenuItem>(`/menu/${id}`),
    
    search: (restaurantId: string, query: string) =>
      apiService.get<MenuItem[]>(`/menu/search?restaurantId=${restaurantId}&q=${query}`),
  },

  // Order endpoints
  orders: {
    create: (orderData: Partial<Order>) => apiService.post<Order>('/orders', orderData),
    
    getAll: () => apiService.get<Order[]>('/orders'),
    
    getById: (id: string) => apiService.get<Order>(`/orders/${id}`),
    
    updateStatus: (id: string, status: string) =>
      apiService.put<Order>(`/orders/${id}/status`, { status }),
    
    cancel: (id: string) => apiService.put<Order>(`/orders/${id}/cancel`, {}),
  },

  // Promotion endpoints
  promotions: {
    getAll: () => apiService.get<Promotion[]>('/promotions'),
    
    validate: (code: string) => apiService.post<Promotion>('/promotions/validate', { code }),
  },

  // Payment endpoints
  payment: {
    createIntent: (amount: number) =>
      apiService.post<{ clientSecret: string }>('/payment/create-intent', { amount }),
    
    confirmPayment: (orderId: string, paymentIntentId: string) =>
      apiService.post('/payment/confirm', { orderId, paymentIntentId }),
  },

  // User endpoints
  user: {
    updateProfile: (userData: Partial<User>) =>
      apiService.put<User>('/user/profile', userData),
    
    updateAddress: (addressData: Partial<User['address']>) =>
      apiService.put<User>('/user/address', addressData),
  },
};