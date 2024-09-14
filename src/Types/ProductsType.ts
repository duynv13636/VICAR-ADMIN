export interface IProductAdd {
  name: string;
  price: number;
  image?: string;
  size?: string;
  category: number;
  description: string;
  category_id?: number;
  id?: string;
  full_description: string;
}
export interface IGetProductList {
  quantity: string;
  _id: string;
  category_id: string;
  store_id: string;
  name: string;
  original_price: string;
  price: string;
  rate: string;
  total_rate: string;
  short_description: string;
  full_description: string;
  images: Image[];
  deleted: string;
  authentication_status: string;
  created_date: string;
  ecommerce_id: string;
  type: string;
  __v: number;
  id: string;
}
export interface Image {
  id: number;
  image_url: string;
}
