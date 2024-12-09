import { ICoupon } from "@/types/order";
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
  appliedCoupon: ICoupon | null;
  discount: number;
}

const initialState: CartState = {
  vendorId: null,
  items: [],
  totalCost: 0,
  isCartOpen: false,
  appliedCoupon: null,
  discount: 0,
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
  return {
    vendorId: null,
    items: [],
    totalCost: 0,
    isCartOpen: false,
    appliedCoupon: null,
    discount: 0,
  };
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
      resetCouponLogic(state);
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
      resetCouponLogic(state);
    },
    replaceCart: (state, action: PayloadAction<ICartItem>) => {
      state.vendorId = action.payload.vendorId;
      state.items = [action.payload];
      state.totalCost = action.payload.total;
      saveCartState(state);
      resetCouponLogic(state);
    },
    clearCart: (state) => {
      state.vendorId = null;
      state.items = [];
      state.totalCost = 0;
      resetCouponLogic(state);
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
      resetCouponLogic(state);
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
      resetCouponLogic(state);
    },
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
    applyCoupon(state, action: PayloadAction<ICoupon>) {
      const coupon = action.payload;

      // Validate usage limit and expiration
      const isValid = validateCoupon(coupon);
      if (!isValid) return;

      state.appliedCoupon = coupon;

      // Calculate discount
      const subtotal = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );

      if (coupon.discountType === "percentage") {
        state.discount = (coupon.discountValue / 100) * subtotal;
      } else if (coupon.discountType === "fixed") {
        state.discount = coupon.discountValue;
      }
    },
    removeCoupon(state) {
      state.appliedCoupon = null;
      state.discount = 0;
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
  applyCoupon,
  removeCoupon,
  deleteItem,
} = cartSlice.actions;
export default cartSlice.reducer;

const resetCouponLogic = (state: CartState) => {
  state.appliedCoupon = null;
  state.discount = 0;
};

// Helper function to validate coupon
const validateCoupon = (coupon: ICoupon) => {
  const currentDate = new Date();
  if (coupon.expiryDate < currentDate) return false;
  if (coupon.usageLimit <= coupon.usedCount) return false;
  return true;
};
