"use client";
import { create } from "zustand";
export const useUIStore = create<{
  menuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
}>((set) => ({
  menuOpen: false,
  toggleMenu: () => set((s) => ({ menuOpen: !s.menuOpen })),
  closeMenu: () => set({ menuOpen: false }),
}));
