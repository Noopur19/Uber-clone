export interface Category {
  categoryImage: string;
  categoryName: string;
}

export interface Product {
  _id: string;
  category: string;
  description: string;
  image: string;
  name: string;
  price: number;
  rating: number;
}

export type CartProduct = Product & { quantity: number };

export interface Cart {
  _id: string;
  userId: string;
  products: CartProduct[];
}

export interface Orders {
  _id: string,
  userId: string;
  products: CartProduct[];
  deliveryDetails: {
    fullName: string;
    email: string;
    address: string;
    state: string;
    city: string;
    pinCode: number;
    paymentMethod: string;
  };
  totalPrice: number;
  orderedAt: any;
}
