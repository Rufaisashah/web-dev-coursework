"use client";
import { WishlistProvider } from "./contexts/WishlistContext";

export const Providers = ({ children }) => {
  return <WishlistProvider>{children}</WishlistProvider>;
};