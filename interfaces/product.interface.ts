export interface IVariant {
  open: boolean;
  title: string;
  optional: boolean;
  toSelect: number;
  options: IVariantOption[];
}

export interface IVariantOption {
  name: string;
  price: string;
  show: boolean;
}
