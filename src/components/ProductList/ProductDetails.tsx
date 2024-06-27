"use client";
import { fetchCartData, postCartData } from "@/app/redux/Features/cartSlice";
import { fetchProductDetails } from "@/app/redux/Features/productsSlice";
import { RootState } from "@/app/redux/store";
import ProductRating from "@/components/ProductList/ProductRating";
import Products from "@/components/ProductList/Products";
import { Product } from "@/lib/types";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface Props {
  productId: string;
}

const ProductDetails = ({ productId }: Props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [productQuantity, setProductQuantity] = useState(0);

  const { data: session } = useSession();
  const { productDetails, detailsLoading } = useSelector(
    (state: RootState) => state.products
  );
  const { cartData, addToCartLoading } = useSelector(
    (state: RootState) => state.cart
  );

  const { name, description, rating, price, image, _id } = productDetails || {};

  useEffect(() => {
    dispatch(fetchProductDetails(productId));
  }, [dispatch]);

  useEffect(() => {
    if (session && session?.user) {
      const userId = (session?.user as { id: string })?.id;
      dispatch(fetchCartData(userId));
    }
  }, [session?.user]);

  const addItemToCartHandler = async (action: String) => {
    const userId = (session?.user as { id: string })?.id;
    const body = JSON.stringify({
      userId: userId,
      products: { ...productDetails },
      action,
    });
    await dispatch(postCartData(body));
    dispatch(fetchCartData(userId));
  };

  useEffect(() => {
    if (cartData && _id) {
      const foundProduct = cartData?.cart?.products.find(product => product._id === _id);
      setProductQuantity(foundProduct ? foundProduct.quantity : 0);
    }
  }, [cartData, _id]);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-9 gap-x-9 px-4 sm:px-8 md:px-16 py-16">
        <div className="sm:col-span-1">
          {detailsLoading ? (
            <div className="w-full h-full animate-pulse bg-gray-200 rounded-lg"></div>
          ) : (
            <img src={image} />
          )}
        </div>
        <div className="sm:col-span-1">
          {detailsLoading ? (
            <>
              <div className="animate-pulse w-1/2 h-8 mb-6 bg-gray-200 rounded"></div>
              <div className="animate-pulse w-full h-4 bg-gray-200 rounded mt-2"></div>
              <div className="animate-pulse w-full h-4 bg-gray-200 rounded mt-2"></div>
              <div className="animate-pulse w-full h-4 bg-gray-200 rounded mt-2"></div>
              <div className="animate-pulse w-full h-4 bg-gray-200 rounded mt-2"></div>
              <div className="animate-pulse w-full h-4 bg-gray-200 rounded mt-2"></div>
              <div className="animate-pulse w-full h-4 bg-gray-200 rounded mt-2"></div>
            </>
          ) : (
            <>
              <div className="text-4xl font-bold py-2">{name}</div>
              <div className="text-base text-gray-500 py-2">{description}</div>
              <div className="text-4xl flex font-bold text-yellow-500 py-2">
                <div>Rs. {price}</div>{" "}
                <div className="pl-4">
                  <ProductRating rating={rating || 0} />
                </div>
              </div>
              <div className="text-xs">Inclusive all taxes*</div>
            </>
          )}
          {detailsLoading ? (
            <div className="grid grid-cols-3 gap-x-3">
              <div className="animate-pulse my-2 py-2 w-full h-8 bg-gray-200 rounded"></div>
              <div className="animate-pulse my-2 py-2 w-full h-8 bg-gray-200 rounded"></div>
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-x-3 justify-between">
              {!productQuantity ? (
                <button
                  className="p-4 border inline-block box-content border-gray-300 my-3 bg-green-500 text-white rounded-md py-2"
                  // className="border inline-block border-gray-500 text-gray-500 p-2 rounded-md"
                  onClick={() => {
                    // setItemCount((prev) => prev + 1);
                    addItemToCartHandler("");
                  }}
                  disabled={addToCartLoading}
                >
                  Add to Cart
                </button>
              ) : (
                <div className="w-full justify-center my-3 border box-content border-gray-300 flex bottom-4 align-center rounded-md bg-white">
                  <img
                    className="border box-content border-red-100 bg-red-100 bottom-4 right-4 cursor-pointer rounded-full"
                    src="/ico/icons8-minus-24.png"
                    alt="minus"
                    onClick={() => {
                      //setItemCount((prev) => prev - 1);
                      addItemToCartHandler("decrease");
                    }}
                  />
                  <p className="m-2.5">{productQuantity}</p>
                  <img
                    className="border box-content border-green-100 bg-green-100 bottom-4 right-4 cursor-pointer rounded-full"
                    src="/ico/icons8-plus-24.png"
                    alt="plus"
                    onClick={() => {
                      //setItemCount((prev) => prev + 1);
                      addItemToCartHandler("increase");
                    }}
                  />
                </div>
              )}
              <button
                className="w-full border inline-block box-content border-gray-300 my-3 bg-black text-white rounded-md py-2"
                onClick={() => router.push("/eats/cart")}
              >
                View Cart
              </button>
            </div>
          )}
        </div>
      </div>
      {!detailsLoading && <Products title="Recommended" />}
    </div>
  );
};

export default ProductDetails;
