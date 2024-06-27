import React, { useState } from "react";
import ProductRating from "./ProductRating";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "@/app/redux/Features/productsSlice";
import { RootState } from "@/app/redux/store";
import {
  setCategory,
  setRating,
  setSortBy,
} from "@/app/redux/Features/categorySlice";
import { useTranslations } from "next-intl";

interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const FilterModal = ({ isOpen, setIsOpen }: Props) => {
  const dispatch = useDispatch();
  const t = useTranslations("Eats");
  const { category, rating, sortBy } = useSelector(
    (state: RootState) => state.categories
  );

  const [activeTab, setActiveTab] = useState("category");

  const handleCategoryChange = (event: any) => {
    dispatch(setCategory(event.target.value));
  };

  const handleRatingChange = (event: any) => {
    dispatch(setRating(event.target.value));
  };

  const handleSortBy = (event: any) => {
    dispatch(setSortBy(event.target.value));
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const handleClearFilter = () => {
    dispatch(setCategory(""));
    dispatch(setRating(0));
    dispatch(setSortBy(""));
    dispatch(
      fetchData({
        category: "",
        rating: 0,
        sortBy: "",
      })
    );
    toggleModal();
  };

  const handleApplyFilter = () => {
    toggleModal();
    dispatch(
      fetchData({
        category: category,
        rating: rating,
        sortBy: sortBy,
      })
    );
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const ratingFilterBlock = (
    <div className="text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
      <div className="flex items-center ps-4 border-gray-200 rounded dark:border-gray-700">
        <input
          id="bordered-radio-1"
          type="radio"
          value={"5"}
          name="bordered-radio"
          checked={rating == 5}
          onChange={handleRatingChange}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <ProductRating rating={5} />
      </div>
      <div className="flex items-center ps-4 border-gray-200 rounded dark:border-gray-700">
        <input
          id="bordered-radio-2"
          type="radio"
          value={"4"}
          name="bordered-radio"
          checked={rating == 4}
          onChange={handleRatingChange}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <ProductRating rating={4} />
      </div>
      <div className="flex items-center ps-4 border-gray-200 rounded dark:border-gray-700">
        <input
          id="bordered-radio-3"
          type="radio"
          value={"3"}
          name="bordered-radio"
          checked={rating == 3}
          onChange={handleRatingChange}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <ProductRating rating={3} />
      </div>
      <div className="flex items-center ps-4 border-gray-200 rounded dark:border-gray-700">
        <input
          id="bordered-radio-4"
          type="radio"
          value={"2"}
          name="bordered-radio"
          checked={rating == 2}
          onChange={handleRatingChange}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <ProductRating rating={2} />
      </div>
      <div className="flex items-center ps-4 border-gray-200 rounded dark:border-gray-700">
        <input
          id="bordered-radio-5"
          type="radio"
          value={"1"}
          name="bordered-radio"
          checked={rating == 1}
          onChange={handleRatingChange}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <ProductRating rating={1} />
      </div>
    </div>
  );

  const sortByBlock = (
    <>
      <div className="text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
        <div className="flex items-center ps-4 p-4 border-gray-200 rounded dark:border-gray-700">
          <input
            id="bordered-radio-2"
            type="radio"
            value="low"
            checked={sortBy === "low"}
            name="bordered-radio"
            onChange={handleSortBy}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          Low to High
        </div>
        <div className="flex items-center ps-4 p-4 border-gray-200 rounded dark:border-gray-700">
          <input
            id="bordered-radio-2"
            type="radio"
            value="high"
            checked={sortBy === "high"}
            name="bordered-radio"
            onChange={handleSortBy}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          High to Low
        </div>
      </div>
    </>
  );

  const categoryFilterBlock = (
    <>
      <div className="text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
        <div className="flex items-center ps-4 border-gray-200 rounded dark:border-gray-700">
          <input
            id="bordered-radio-1"
            type="radio"
            value="Pizza"
            name="bordered-radio"
            checked={category === "Pizza"}
            onChange={handleCategoryChange}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Pizza
          </label>
        </div>
        <div className="flex items-center ps-4 border-gray-200 rounded dark:border-gray-700">
          <input
            id="bordered-radio-2"
            type="radio"
            value="Burger"
            name="bordered-radio"
            checked={category === "Burger"}
            onChange={handleCategoryChange}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Burger
          </label>
        </div>
        <div className="flex items-center ps-4 border-gray-200 rounded dark:border-gray-700">
          <input
            id="bordered-radio-3"
            type="radio"
            value="Dosa"
            name="bordered-radio"
            checked={category === "Dosa"}
            onChange={handleCategoryChange}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Dosa
          </label>
        </div>
      </div>
      <div className="text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
        <div className="flex items-center ps-4 border-gray-200 rounded dark:border-gray-700">
          <input
            id="bordered-radio-4"
            type="radio"
            value="Rolls"
            name="bordered-radio"
            checked={category === "Rolls"}
            onChange={handleCategoryChange}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Rolls
          </label>
        </div>
        <div className="flex items-center ps-4 border-gray-200 rounded dark:border-gray-700">
          <input
            id="bordered-radio-5"
            type="radio"
            value="Sandwich"
            name="bordered-radio"
            checked={category === "Sandwich"}
            onChange={handleCategoryChange}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Sandwich
          </label>
        </div>
        <div className="flex items-center ps-4 border-gray-200 rounded dark:border-gray-700">
          <input
            id="bordered-radio-6"
            type="radio"
            value="North Indian"
            name="bordered-radio"
            checked={category === "North Indian"}
            onChange={handleCategoryChange}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            North Indian
          </label>
        </div>
      </div>
    </>
  );

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white w-1/2 p-4 rounded shadow-lg">
        <div className="flex items-center justify-between md:p-5 border-b rounded-t dark:border-gray-600">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {t("filters")}
          </h3>
          <button
            type="button"
            onClick={toggleModal}
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="default-modal"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        <div className="mt-4">
          <div className="md:flex">
            <ul className="flex-column space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
              <li>
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
                  aria-current="page"
                  onClick={() => handleTabChange("category")}
                >
                  <svg
                    className="w-4 h-4 me-2 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 18"
                  >
                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                  </svg>
                  {t("category")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
                  onClick={() => handleTabChange("sortBy")}
                >
                  <svg
                    className="w-4 h-4 me-2 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M18 7.5h-.423l-.452-1.09.3-.3a1.5 1.5 0 0 0 0-2.121L16.01 2.575a1.5 1.5 0 0 0-2.121 0l-.3.3-1.089-.452V2A1.5 1.5 0 0 0 11 .5H9A1.5 1.5 0 0 0 7.5 2v.423l-1.09.452-.3-.3a1.5 1.5 0 0 0-2.121 0L2.576 3.99a1.5 1.5 0 0 0 0 2.121l.3.3L2.423 7.5H2A1.5 1.5 0 0 0 .5 9v2A1.5 1.5 0 0 0 2 12.5h.423l.452 1.09-.3.3a1.5 1.5 0 0 0 0 2.121l1.415 1.413a1.5 1.5 0 0 0 2.121 0l.3-.3 1.09.452V18A1.5 1.5 0 0 0 9 19.5h2a1.5 1.5 0 0 0 1.5-1.5v-.423l1.09-.452.3.3a1.5 1.5 0 0 0 2.121 0l1.415-1.414a1.5 1.5 0 0 0 0-2.121l-.3-.3.452-1.09H18a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 18 7.5Zm-8 6a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z" />
                  </svg>
                  {t("sort")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
                  onClick={() => handleTabChange("rating")}
                >
                  <svg
                    className="w-4 h-4 me-2 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 18"
                  >
                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                  </svg>
                  {t("rating")}
                </a>
              </li>
            </ul>
            {activeTab === "category" && <>{categoryFilterBlock}</>}
            {activeTab === "rating" && <>{ratingFilterBlock}</>}
            {activeTab === "sortBy" && <>{sortByBlock}</>}
          </div>
          <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              data-modal-hide="default-modal"
              type="button"
              onClick={handleApplyFilter}
              className="w-max p-4 border inline-block box-content border-gray-300 my-3 bg-black text-white rounded-md py-2"
            >
              {t("apply")}
            </button>
            <button
              data-modal-hide="default-modal"
              type="button"
              onClick={handleClearFilter}
              className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200"
            >
              {t("clear")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
