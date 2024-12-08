import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UpdateQuantityPayload {
  productId: string;
  quantity: number;
}

export interface ICartItem {
  productId: string;
  vendorId: string;
  name: string;
  price: number;
  quantity: number;
  total: number;
  image: string;
}

interface CartState {
  vendorId: string | null;
  items: ICartItem[];
  totalCost: number;
  isCartOpen: boolean;
}

const initialState: CartState = {
  vendorId: null,
  items: [],
  totalCost: 0,
  isCartOpen: false,
};

const loadCartState = (): CartState => {
  try {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      return JSON.parse(storedCart);
    }
  } catch (error) {
    console.error("Failed to load cart from local storage:", error);
  }
  return { vendorId: null, items: [], totalCost: 0, isCartOpen: false };
};

// Helper to save cart state to local storage
const saveCartState = (state: CartState) => {
  try {
    localStorage.setItem("cart", JSON.stringify(state));
  } catch (error) {
    console.error("Failed to save cart to local storage:", error);
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    hydrateCart: (state) => {
      const localStorageState = loadCartState();
      if (localStorageState.items.length > 0) {
        state.vendorId = localStorageState.items[0].vendorId;
      } else {
        state.vendorId = null;
      }
      state.items = localStorageState.items;
      state.totalCost = localStorageState.totalCost;
    },
    addProduct: (state, action: PayloadAction<ICartItem>) => {
      const existingItemIndex = state.items.findIndex(
        (item) => item.productId === action.payload.productId
      );

      if (existingItemIndex !== -1) {
        // Update quantity and total for the existing item
        const existingItem = state.items[existingItemIndex];
        existingItem.quantity += action.payload.quantity;
        existingItem.total = existingItem.quantity * existingItem.price;
      } else {
        // Add as a new item
        state.items.push(action.payload);
      }

      // Update total cost
      state.totalCost = state.items.reduce((sum, item) => sum + item.total, 0);

      // Set vendorId if not already set
      if (!state.vendorId) {
        state.vendorId = action.payload.vendorId;
      }

      saveCartState(state);
    },
    replaceCart: (state, action: PayloadAction<ICartItem>) => {
      state.vendorId = action.payload.vendorId;
      state.items = [action.payload];
      state.totalCost = action.payload.total;
      saveCartState(state);
    },
    clearCart: (state) => {
      state.vendorId = null;
      state.items = [];
      state.totalCost = 0;
      saveCartState(state);
    },
    updateQuantity: (state, action: PayloadAction<UpdateQuantityPayload>) => {
      const { productId, quantity } = action.payload;
      const itemIndex = state.items.findIndex(
        (item) => item.productId === productId
      );

      if (itemIndex !== -1) {
        const item = state.items[itemIndex];
        state.totalCost -= item.total;
        item.quantity = quantity;
        item.total = item.price * quantity;
        state.totalCost += item.total;
      }
      saveCartState(state);
    },
    deleteItem: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      const itemIndex = state.items.findIndex(
        (item) => item.productId === productId
      );

      if (itemIndex !== -1) {
        // Deduct the item's total from the cart's total cost
        const itemTotal = state.items[itemIndex].total;
        state.totalCost -= itemTotal;

        // Remove the item from the cart
        state.items.splice(itemIndex, 1);

        // Clear vendorId if no items are left
        if (state.items.length === 0) {
          state.vendorId = null;
        }
      }

      saveCartState(state);
    },
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export const {
  addProduct,
  replaceCart,
  clearCart,
  updateQuantity,
  hydrateCart,
  toggleCart,
  deleteItem,
} = cartSlice.actions;
export default cartSlice.reducer;
