import { create } from "zustand";
import { Tradebook } from "@/interfaces/tradebook";

type AIModel = "gemini-2.5-flash-lite" | "gemini-2.5-flash" | "gemini-2.5-pro";
// | "gpt-4.1-nano"
// | "gpt-4.1-mini"
// | "gpt-4.1";

interface InfoState {
  message: string;
  timer?: number;
}

interface StoreState {
  // State
  info: InfoState | null;
  tradebooks: Map<string, Tradebook>;
  isLoading: boolean;
  isLimitMessageShrinked: boolean;
  currentModel: AIModel;
  setCurrentModel: (model: AIModel) => void;
  // Pagination state
  currentPage: number;
  pageSize: number;
  totalCount: number;
  hasNextPage: boolean;

  // Cache management
  lastModified: number;
  dirtyPages: Set<number>;
  cacheValid: boolean;

  // Actions
  setInfo: (info: InfoState | null) => void;
  setIsLoading: (isLoading: boolean) => void;
  setIsLimitMessageShrinked: (isLimitMessageShrinked: boolean) => void;
  addTradebookStore: (tradebook: Tradebook) => void;
  updateTradebookStore: (tradebook: Tradebook) => void;
  deleteTradebookStore: (tradebookId: string) => void;
  setTradebooks: (tradebooks: Map<string, Tradebook>) => void;
  clearAppData: () => void;

  // Pagination actions
  setCurrentPage: (page: number) => void;
  setPageSize: (size: number) => void;
  setTotalCount: (count: number) => void;
  setHasNextPage: (hasNext: boolean) => void;
  setPaginationState: (
    page: number,
    size: number,
    totalCount: number,
    hasNextPage: boolean,
  ) => void;

  // Cache management actions
  markPageAsDirty: (page: number) => void;
  markAllPagesAsDirty: () => void;
  clearDirtyPages: () => void;
  setCacheValid: (valid: boolean) => void;
  updateLastModified: () => void;
  invalidateCache: () => void;
}

export const useStore = create<StoreState>((set) => ({
  // Initial state
  currentModel: "gemini-2.5-flash-lite",
  info: null,
  tradebooks: new Map(),
  isLoading: false,
  isLimitMessageShrinked: false,
  // Pagination state
  currentPage: 1,
  pageSize: 10,
  totalCount: 0,
  hasNextPage: false,
  // Cache management
  lastModified: 0,
  dirtyPages: new Set(),
  cacheValid: true,

  // Actions
  setCurrentModel: (model) => set({ currentModel: model }),
  setInfo: (info) => set({ info }),
  setIsLoading: (isLoading) => set({ isLoading }),
  setIsLimitMessageShrinked: (isLimitMessageShrinked) =>
    set({ isLimitMessageShrinked }),
  addTradebookStore: (tradebook: Tradebook) =>
    set((state) => {
      const tradebookId = tradebook.id;
      if (!tradebookId) {
        throw new Error("Tradebook ID is required");
      }
      if (state.tradebooks.has(tradebookId)) {
        return state;
      }

      // Update pagination state when adding new tradebook
      const newTotalCount = state.totalCount + 1;
      const newHasNextPage = newTotalCount > state.currentPage * state.pageSize;

      const newTradebooks = new Map(state.tradebooks);
      newTradebooks.set(tradebookId, tradebook);

      return {
        tradebooks: newTradebooks,
        totalCount: newTotalCount,
        hasNextPage: newHasNextPage,
        // Mark current page as dirty since it might need refresh
        dirtyPages: new Set([...state.dirtyPages, state.currentPage]),
        lastModified: Date.now(),
        cacheValid: false,
      };
    }),

  updateTradebookStore: (tradebook) =>
    set((state) => {
      if (!tradebook.id) {
        throw new Error("Tradebook ID is required");
      }
      const existingTradebook = state.tradebooks.get(tradebook.id);
      if (!existingTradebook) {
        return state;
      }

      const newTradebooks = new Map(state.tradebooks);
      newTradebooks.set(tradebook.id, { ...existingTradebook, ...tradebook });

      return {
        tradebooks: newTradebooks,
        // Mark current page as dirty since it might need refresh
        dirtyPages: new Set([...state.dirtyPages, state.currentPage]),
        lastModified: Date.now(),
        cacheValid: false,
      };
    }),

  deleteTradebookStore: (tradebookId) =>
    set((state) => {
      const newTradebooks = new Map(state.tradebooks);
      newTradebooks.delete(tradebookId);

      // Update pagination state when deleting tradebook
      const newTotalCount = Math.max(0, state.totalCount - 1);
      const newHasNextPage = newTotalCount > state.currentPage * state.pageSize;

      return {
        tradebooks: newTradebooks,
        totalCount: newTotalCount,
        hasNextPage: newHasNextPage,
        // Mark current page as dirty since it might need refresh
        dirtyPages: new Set([...state.dirtyPages, state.currentPage]),
        lastModified: Date.now(),
        cacheValid: false,
      };
    }),

  setTradebooks: (tradebooks) =>
    set((state) => {
      return {
        tradebooks: new Map([...state.tradebooks, ...tradebooks]),
      };
    }),

  // Pagination actions
  setCurrentPage: (page) => set({ currentPage: page }),
  setPageSize: (size) => set({ pageSize: size }),
  setTotalCount: (count) => set({ totalCount: count }),
  setHasNextPage: (hasNext) => set({ hasNextPage: hasNext }),
  setPaginationState: (page, size, totalCount, hasNext) =>
    set({
      currentPage: page,
      pageSize: size,
      totalCount: totalCount,
      hasNextPage: hasNext,
    }),

  // Cache management actions
  markPageAsDirty: (page: number) =>
    set((state) => {
      const dirtyPages = new Set(state.dirtyPages);
      dirtyPages.add(page);
      return { dirtyPages };
    }),
  markAllPagesAsDirty: () => set({ dirtyPages: new Set() }),
  clearDirtyPages: () => set({ dirtyPages: new Set() }),
  setCacheValid: (valid: boolean) => set({ cacheValid: valid }),
  updateLastModified: () => set({ lastModified: Date.now() }),
  invalidateCache: () => set({ cacheValid: false }),

  clearAppData: () =>
    set({
      tradebooks: new Map(),
      isLoading: false,
      currentPage: 1,
      pageSize: 10,
      totalCount: 0,
      hasNextPage: false,
      lastModified: 0,
      dirtyPages: new Set(),
      cacheValid: true,
    }),
}));
