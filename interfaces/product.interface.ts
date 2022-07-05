export interface IVariant {
  open: boolean;
  title: string;
  optional: boolean;
  toSelect: number;
  options: IVariantOption[];
}

export interface IVariantOption {
  title: string;
  price: string;
  show: boolean;
}
