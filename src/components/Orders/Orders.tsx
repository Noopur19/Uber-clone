"use client";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrdersData } from "@/app/redux/Features/ordersSlice";
import { RootState } from "@/app/redux/store";
import { Orders } from "@/lib/types";
import { useRouter } from "next/navigation";

const OrderDetails = () => {
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const router = useRouter();
  const { data, loading } = useSelector((state: RootState) => state.orders);

  useEffect(() => {
    if (session && session?.user) {
      const userId = (session.user as { id: string }).id;
      dispatch(fetchOrdersData(userId));
    }
  }, [session?.user]);

  const loadingBlock = Array(6)
    .fill("1")
    .map((_) => {
      return (
        <div className="col-span-full rounded-lg bg-gray-200 h-16 mb-3 animate-pulse"></div>
      );
    });

  return (
    <>
      {!loading && data?.orders?.length === 0 && (
        <section className="w-full px-16 py-16">
          <div className="grid grid-cols-12 items-center">
            <div className="col-span-6 flex flex-col justify-center">
              <div className="font-bold text-5xl mb-4">
                Your orders list is empty !
              </div>
              <span className="text-xl mb-4">
                Looks like you haven't placed any orders yet...
              </span>
              <button
                className="w-1/2 py-3 px-9 font-bold text-base my-2 rounded-xl text-white bg-black"
                onClick={() => router.push("/eats/cart")}
              >
                Order from cart
              </button>
            </div>
            <div className="col-span-6 block w-full h-full">
              <img src="/img/empty-order.avif" />
            </div>
          </div>
        </section>
      )}
      <div className="grid grid-cols-4 py-4 px-4">
        {loading && <>{loadingBlock}</>}
        {!loading && !!data?.orders?.length && (
          <>
            <div className="px-4 py-2 bg-red-100 ">Order Id</div>
            <div className="px-4 py-2 bg-red-100 ">Date & Time</div>
            <div className="px-4 py-2 bg-red-100 ">Items</div>
            <div className="px-4 py-2 bg-red-100 ">Total Price</div>
            {data?.orders?.map((order: Orders) => {
              return (
                <>
                  <div className="bg-white p-4 border-b">
                    <div>{order?._id}</div>
                  </div>
                  <div className="bg-white p-4 border-b">
                    <div>{order?.orderedAt}</div>
                  </div>
                  <div className="bg-white p-4 border-b">
                    {order?.products?.map((product) => {
                      return (
                        <div>
                          {product?.quantity} * {product?.name}
                        </div>
                      );
                    })}
                  </div>
                  <div className="bg-white p-4 border-b">
                    <div>Rs. {order.totalPrice}</div>
                  </div>
                </>
              );
            })}
          </>
        )}
      </div>
    </>
  );
};

export default OrderDetails;
