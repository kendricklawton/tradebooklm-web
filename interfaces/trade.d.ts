export enum AssetClass {
  Equities = "equities",
  FixedIncome = "fixed_income",
  Commodities = "commodities",
  ETFs = "etfs",
  Forex = "forex",
  Derivatives = "derivatives",
  Crypto = "crypto",
}

export enum Order {
  Market = "market",
  Limit = "limit",
  Stop = "stop",
  StopLimit = "stop_limit",
}

export enum Purchase {
  Cash = "cash",
  Margin = "margin",
}

export interface ExitLeg {
  id: string | null;
  exitQuantity: number | null;
  exitPrice: number | null;
  exitFees: number | null;
  exitDate: string | null;
}

export interface ExitLegForm {
  id: string;
  exitDate: string;
  exitFees: string;
  exitPrice: string;
  exitQuantity: string;
}

export interface Trade {
  id: string | null;
  createdAt: string | null;
  updatedAt: string | null;

  // Trade info
  symbol: string | null;
  assetClass: AssetClass | null;
  purchase: Purchase | null;
  order: Order | null;

  // Entry info
  entryQuantity: number | null;
  entryPrice: number | null;
  entryFees: number | null;
  entryDate: string | null;

  exitLegs: ExitLeg[] | null;
}

export interface TradeForm {
  symbol: string;
  assetClass: AssetClass;
  purchase: Purchase;
  order: Order;

  // Entry info
  entryQuantity: string;
  entryPrice: string;
  entryFees: string;
  entryDate: string;

  exitLegs: ExitLegForm[];
}
