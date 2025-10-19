export enum AssetClassType {
  Equities = "Equities",
  FixedIncome = "Fixed Income",
  Commodities = "Commodities",
  ETFs = "ETFs",
  Forex = "Forex",
  Derivatives = "Derivatives",
  Crypto = "Crypto",
}

export enum OrderType {
  Market = "Market",
  Limit = "Limit",
  Stop = "Stop",
  StopLimit = "Stop Limit",
}

export enum PurchaseType {
  Cash = "Cash",
  Margin = "Margin",
}

export interface ExitLegType {
  id?: string | null;
  exitQuantity?: number | null;
  exitPrice?: number | null;
  exitFees?: number | null;
  exitDate?: string | null;
}

export interface ExitLegFormType {
  id: string;
  exitDate: string;
  exitFees: string;
  exitPrice: string;
  exitQuantity: string;
}

export interface TradeType {
  id?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;

  // Trade info
  symbol?: string | null;
  assetClass?: AssetClassType | null;
  purchaseType?: PurchaseType | null;
  orderType?: OrderType | null;

  // Entry info
  entryQuantity?: number | null;
  entryPrice?: number | null;
  entryFees?: number | null;
  entryDate?: string | null;

  exitLegs?: ExitLegType[] | null;
}

export interface TradeFormType {
  symbol: string;
  assetClass: AssetClassType;
  purchaseType: PurchaseType;
  orderType: OrderType;

  // Entry info
  entryQuantity: string;
  entryPrice: string;
  entryFees: string;
  entryDate: string;

  exitLegs: ExitLegFormType[];
}
