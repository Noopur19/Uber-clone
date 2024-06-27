"use client";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { fetchCartData, postCartData } from "@/app/redux/Features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { CartProduct } from "@/lib/types";

const Cart = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { data: session } = useSession();
  const { cartData, cartLoading } = useSelector(
    (state: RootState) => state.cart
  );

  useEffect(() => {
    if (session && session?.user) {
      const userId = (session.user as { id: string })?.id;
      dispatch(fetchCartData(userId));
    }
  }, [session?.user]);

  const addItemToCartHandler = async (productData: any, action: String) => {
    const userId = (session?.user as { id: string })?.id;
    const body = JSON.stringify({
      userId,
      products: { ...productData },
      action,
    });
    await dispatch(postCartData(body));
    dispatch(fetchCartData(userId));
  };

  const calculateTotal = () => {
    let totalPrice = 0;
    cartData?.cart?.products?.forEach(
      (product: CartProduct) => (totalPrice += product.price * product.quantity)
    );
    return totalPrice;
  };

  const loadingBlock = Array(6)
    .fill("1")
    .map((_) => {
      return (
        <div className="col-span-full rounded-lg bg-gray-200 h-16 mb-3 animate-pulse"></div>
      );
    });

  const cartLoadingBlock = (
    <div className="grid grid-cols-4 gap-2">
      <div className="col-span-3 py-4 px-4">
        <div className="grid grid-cols-5">{loadingBlock}</div>
      </div>
      <div className="col-span-1 py-4 px-4">
        <div className="border border-solid border-2 rounded-xl box-border border-gray-200">
          <div className="col-span-full px-4 py-4 font-bold text-lg">
            <div className="animate-pulse w-1/2 h-8 mb-6 bg-gray-200 rounded"></div>
          </div>
          <div className="grid grid-cols-2">
            <div className="px-4">
              <div className="animate-pulse h-4 mb-6 bg-gray-200 rounded"></div>
              <div className="animate-pulse h-4 mb-6 bg-gray-200 rounded"></div>
              <div className="animate-pulse  h-4 mb-6 bg-gray-200 rounded"></div>
              <div className="animate-pulse h-4 mb-6 bg-gray-200 rounded"></div>
            </div>
            <div className="text-right px-4">
              <div className="animate-pulse h-4 mb-6 bg-gray-200 rounded"></div>
              <div className="animate-pulse h-4 mb-6 bg-gray-200 rounded"></div>
              <div className="animate-pulse  h-4 mb-6 bg-gray-200 rounded"></div>
              <div className="animate-pulse h-4 mb-6 bg-gray-200 rounded"></div>
            </div>
          </div>
          <div className="col-span-full py-4 px-4 flex justify-center">
            <div className="w-full animate-pulse w-1/2 h-8 mb-6 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {cartLoading && <>{cartLoadingBlock}</>}
      {!cartLoading && !cartData?.cart?.products?.length && (
        <section className="w-full px-4 sm:px-8 lg:px-16 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
            <div className="sm:col-span-1 flex flex-col justify-center">
              <div className="font-bold text-3xl sm:text-5xl mb-4">
                Your cart is empty!
              </div>
              <span className="text-lg sm:text-xl mb-4">
                Looks like you haven't added anything to your cart yet...
              </span>
              <button
                className="w-full sm:w-1/2 py-3 px-6 sm:px-9 font-bold text-base sm:text-xl my-2 rounded-xl text-white bg-black"
                onClick={() => router.push("/eats")}
              >
                Explore Menu
              </button>
            </div>
            <div className="sm:col-span-1 block w-full h-full">
              <img
                src="/img/empty-cart.jpg"
                className="w-full"
                alt="Empty Cart"
              />
            </div>
          </div>
        </section>
      )}
      {!cartLoading && (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          <div className="col-span-3 py-4 px-4">
            <div className="grid grid-cols-5">
              {cartData?.cart?.products?.map((product: CartProduct) => {
                return (
                  <>
                    <div className="bg-white p-4 border-b">
                      <img
                        src={product?.image}
                        className="w-20 h-20 justify-center items-center"
                      />
                    </div>
                    <div className="bg-white p-4 border-b">
                      <div className="font-bold">{product?.name}</div>
                      <div className="text-xs font-light text-gray-500">
                        {product?.description}
                      </div>
                    </div>
                    <div className="bg-white p-4 border-b">
                      <div className="w-max border box-content border-gray-300 flex bottom-4 align-center p-1.5 gap-2.5 rounded-full bg-white">
                        <img
                          className="border box-content border-red-100 bg-red-100 bottom-4 right-4 cursor-pointer rounded-full"
                          src="/ico/icons8-minus-24.png"
                          alt="minus"
                          onClick={() =>
                            addItemToCartHandler(product, "decrease")
                          }
                        />
                        <p>{product?.quantity}</p>
                        <img
                          className="border box-content border-green-100 bg-green-100 bottom-4 right-4 cursor-pointer rounded-full"
                          src="/ico/icons8-plus-24.png"
                          alt="plus"
                          onClick={() =>
                            addItemToCartHandler(product, "increase")
                          }
                        />
                      </div>
                    </div>
                    <div className="bg-white p-4 border-b font-medium">
                      Rs.{product.price * product.quantity}
                      <div className="text-xs text-gray-500">
                        Rs. {product?.price} per item
                      </div>
                    </div>
                    <div className="bg-white p-4 border-b">
                      <button
                        className="border inline-block box-content border-gray-300 my-3 bg-red-500 text-white rounded-md py-2 p-2.5"
                        onClick={() => addItemToCartHandler(product, "remove")}
                      >
                        Remove
                      </button>
                    </div>
                  </>
                );
              })}
            </div>
          </div>

          {!!cartData?.cart?.products?.length && !cartLoading && (
            <div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 py-4 px-4">
              <div className="border border-solid border-2 rounded-xl box-border border-gray-200">
                <div className="col-span-full px-4 py-4 font-bold text-lg">
                  Cart Summary
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4">
                    <div className="font-medium">SubTotal:</div>
                    <div className="font-medium">Delivery Fee:</div>
                    <div className="border-b border-gray-200 font-medium">
                      Discount:
                    </div>
                    <div className="text-lg font-bold">Total:</div>{" "}
                  </div>
                  <div className="text-right px-4">
                    <div>Rs. {calculateTotal()}</div>
                    <div>Rs. 25</div>
                    <div className="border-b border-gray-200">Rs. 0</div>
                    <div className="text-lg font-bold">
                      Rs.{Number(calculateTotal()) + Number(25)}
                    </div>{" "}
                  </div>
                </div>
                <div className="col-span-full py-4 px-4 flex justify-center">
                  <button
                    className="border w-full justify-center items-center box-content border-gray-300 my-3 bg-green-500 text-white rounded-md py-2"
                    onClick={() => router.push("/eats/checkout")}
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Cart;
