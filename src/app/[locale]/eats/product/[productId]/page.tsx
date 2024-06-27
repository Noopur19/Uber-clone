import ProductDetails from "@/components/ProductList/ProductDetails";
import React from "react";

export default function page({ params }: { params: { productId: string } }) {
  return <ProductDetails productId={params?.productId} />;
}
