export interface Product {
  productId: number;
  title: string;
  productImage: {
    asset: {
      _ref: string;
    };
  };
  description: string;
  category: {
    categoryFA: string;
    categoryEN: string;
  };
  price: {
    currentPrice: number;
  };
}
