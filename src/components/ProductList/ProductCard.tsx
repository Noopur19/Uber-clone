import { Product } from "@/lib/types";
import { useRouter } from "next/navigation";
import React from "react";
import ProductRating from "./ProductRating";
import { setCategory } from "@/app/redux/Features/categorySlice";
import { useDispatch } from "react-redux";
import { useSession } from "next-auth/react";
import { useLocale } from "next-intl";

interface Props {
  item: Product;
}

const ProductCard = ({ item }: Props) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { data: session } = useSession();
  const locale = useLocale();

  return (
    <div
      className="w-full m-auto rounded-2xl shadow-xl transform transition-all hover:scale-110"
      role="presentation"
      onClick={() => {
        if (session) {
          dispatch(setCategory(item?.category));
          router.push(`/${locale}/eats/product/${item?._id}`);
        } else {
          router.push("/auth/login");
        }
      }}
    >
      <div>
        <img src={item.image} className="rounded-t-lg max-h-48 w-full" />
      </div>
      <div className="p-5">
        <p className="text-xl font-medium">{item.name}</p>
        <p className="text-xs text-slate-500">{item.description}</p>
        <div className="flex justify-between items-center mt-2.5">
          <p className="text-base text-red-500 font-medium">Rs. {item.price}</p>
          <p className="flex flex-end">
            <ProductRating rating={item.rating} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
