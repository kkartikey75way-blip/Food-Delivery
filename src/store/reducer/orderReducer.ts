import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface Order {
  id: string;
  restaurant: string;
  status: "delivered" | "on_the_way" | "preparing" | "cancelled";
  items: OrderItem[];
  total: number;
  date: string;
}

interface OrdersState {
  orders: Order[];
}

const initialState: OrdersState = {
  orders: [],
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<Order>) => {
      state.orders.unshift(action.payload); // latest first
    },
  },
});

export const { addOrder } = ordersSlice.actions;
export default ordersSlice.reducer;
