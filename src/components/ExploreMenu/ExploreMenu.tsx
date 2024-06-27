"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, setCategory } from "@/app/redux/Features/categorySlice";
import { RootState } from "@/app/redux/store";
import { useTranslations } from "next-intl";

const ExploreMenu = () => {
  const t = useTranslations("Eats");
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state: RootState) => state.categories);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const loadingBlock = Array(6)
    .fill("1")
    .map((_, index) => {
      return (
        <div key={index} className="animate-pulse">
          <div>
            <div className="transform transition-all hover:scale-110">
              <div className="w-40 h-40 bg-gray-300 rounded-full"></div>
            </div>
            <span className="block text-center flex justify-center items-center font-bold text-charade-500 my-4 text-xl">
              <div className="w-20 h-5 bg-gray-300 rounded"></div>
            </span>
          </div>
        </div>
      );
    });

  return (
    <>
      <div className="font-bold text-2xl md:text-4xl text-black mt-10 px-16">
        {t("title")}
      </div>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10 justify-center items-center text-center py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-16">
        {loading ? (
          loadingBlock
        ) : (
          <>
            {data?.categories?.map((item) => {
              return (
                <div
                  role="presentation"
                  onClick={() => dispatch(setCategory(item.categoryName))}
                >
                  <div className="transform transition-all hover:scale-110">
                    <img
                      src={item.categoryImage}
                      width="100px"
                      className="min-w-40 min-h-40 rounded-full"
                    />
                  </div>
                  <span className="block text-center font-bold text-charade-500 my-4 text-xl">
                    {item.categoryName}
                  </span>
                </div>
              );
            })}
          </>
        )}
      </div>
    </>
  );
};

export default ExploreMenu;
