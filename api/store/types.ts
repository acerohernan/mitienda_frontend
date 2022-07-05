import { IVariant } from '../../interfaces/product.interface';

export interface UpdateStoreInformationFormValues {
  slug: string;
  name: string;
  address: string;
  color: string;
  country: string;
  description: string;
  id: number;
  phone: string;
  facebook: string | null;
  instagram: string | null;
  twitter: string | null;
  keywords: string;
  slogan: string;
  type: string | null;
  logoUrl: string | null;
  bannerUrl: string | null;
}

export interface CreateProductFormValues {
  img: File | null;
  imgUrl?: string | null;
  name: string;
  description: string;
  type: number;
  price: number;
  category: string;
  top: boolean;
  variants: IVariant[];
}
