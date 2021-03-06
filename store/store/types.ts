export interface StoreState {
  slug: string;
  name: string;
  address: string;
  color: string;
  country: string;
  description: string;
  id: number;
  keywords: string;
  slogan: string;
  type: string | null;
  logoUrl: string | null;
  bannerUrl: string | null;
  phone: string;
  facebook: string | null;
  twitter: string | null;
  instagram: string | null;
  products: any[];
}
