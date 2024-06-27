"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { fetchData } from "@/app/redux/Features/productsSlice";
import { Product } from "@/lib/types";
import FilterModal from "./FilterModal";
import { useTranslations } from "next-intl";

interface Props {
  title: string;
}

const Products = ({ title }: Props) => {
  const dispatch = useDispatch();
  const t = useTranslations("Eats");
  const { data, loading } = useSelector((state: RootState) => state.products);
  const category = useSelector((state: RootState) => state.categories.category);

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    dispatch(fetchData({ category: category, rating: 0, sortBy: "" }));
  }, [dispatch, category]);

  const loadingBlock = Array(8)
    .fill("1")
    .map((_, index) => {
      return (
        <div
          key={index}
          className="w-full m-auto rounded-2xl shadow-xl transform transition-all hover:scale-110"
        >
          <div>
            <div className="w-full h-48 animate-pulse bg-gray-200 rounded-t-lg"></div>
          </div>
          <div className="p-5">
            <div className="animate-pulse w-full h-4 bg-gray-200 rounded"></div>
            <div className="animate-pulse w-full h-2 bg-gray-200 rounded mt-2"></div>
            <div className="animate-pulse w-full h-2 bg-gray-200 rounded mt-2"></div>
            <div className="animate-pulse w-10 h-5 bg-gray-200 rounded mt-2"></div>
          </div>
        </div>
      );
    });

  return (
    <>
      <div className="flex flex-col md:flex-row items-center">
        <div className="font-bold text-2xl md:text-4xl text-black px-4 md:px-16 mb-4 md:mb-0">
          {title}
        </div>
        <div>
          <button
            onClick={toggleModal}
            className="border inline-block box-content border-gray-300 p-2.5 bg-black text-white rounded-md mx-4 md:mx-0"
          >
            {t("filters")}
          </button>
        </div>
      </div>

      {!loading && data?.products?.length === 0 && (
        <section className="w-full px-4 sm:px-8 lg:px-16 py-16 flex flex-col items-center">
          <img
            src="/img/empty-products.jpg"
            className="w-full sm:w-3/4 max-w-md"
            alt="Empty Cart"
          />
          <div className="text-center mt-8">
            <div className="font-bold text-lg sm:text-3xl mb-4">
              {t("notFound")}
            </div>
            <span className="text-lg sm:text-xl">{t("notFoundSubText")}</span>
          </div>
        </section>
      )}
      {data?.products?.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 sm:gap-8 md:gap-10 lg:gap-10 px-4 sm:px-8 md:px-16 py-8 sm:py-12 md:py-16">
          {loading ? (
            loadingBlock
          ) : (
            <>
              {data?.products?.map((item: Product) => {
                return <ProductCard item={item} />;
              })}
            </>
          )}
        </div>
      )}
      {isOpen && <FilterModal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
};

export default Products;
