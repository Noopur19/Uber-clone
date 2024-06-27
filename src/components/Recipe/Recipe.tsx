"use client";
import React, { useState } from "react";
import { FixedSizeGrid, FixedSizeList } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import data from "../../data/recipe.json";
import ProductRating from "../ProductList/ProductRating";

const Recipe = () => {
  const [loadedRecipes, setLoadedRecipes] = useState([
    ...data.recipes.slice(0, 20),
  ]); // Initial loaded recipes

  // Function to load more recipes
  const loadMoreItems = (startIndex: any, stopIndex: any) => {
    // Simulate loading more data (fetch from API, database, etc.)
    console.log("load more items ");
    setTimeout(() => {
      const newRecipes = data.recipes.slice(
        startIndex,
        Math.min(stopIndex + 1, data.recipes.length)
      ); // Load recipes for the requested range
      setLoadedRecipes((prevRecipes) => [...prevRecipes, ...newRecipes]);
    }, 1000);
  };

  const RecipeItem = ({ columnIndex, rowIndex, style } : any) => {
    const index = rowIndex * 6 + columnIndex;
    const item = loadedRecipes[index];
    if (!item) return null;

    return (
      <div style={{ ...style, margin: "5px" }}>
        <div className="w-full m-auto rounded-2xl shadow-xl transform transition-all hover:scale-110">
          <div>
            <img
              src={item.image}
              className="rounded-t-lg max-h-48 w-full"
              alt={`Recipe ${index + 1}`}
            />
          </div>
          <div className="p-5">
            <p className="text-xl font-medium">{item.name}</p>
            <p className="text-xs text-slate-500">{item.ingredients[0]}</p>
            <div className="flex justify-between items-center mt-2.5">
              <p className="text-base text-red-500 font-medium">
                Rs. {item.caloriesPerServing}
              </p>
              <p className="flex flex-end">
                <ProductRating rating={item.reviewCount} />
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <InfiniteLoader
        isItemLoaded={(index) => index < loadedRecipes.length}
        itemCount={1000} // Total number of items (you can set it to a large number)
        loadMoreItems={loadMoreItems} // Callback to load more items
      >
        {({ onItemsRendered, ref }) => (
          <FixedSizeGrid
            columnCount={5} // Number of columns
            rowCount={Math.ceil(loadedRecipes.length / 6)} // Number of rows
            columnWidth={250} // Width of each column
            rowHeight={350} // Height of each recipe item
            width={window.innerWidth} // Width of the visible area
            height={window.innerHeight} // Height of the visible area
            onItemsRendered={({
              visibleRowStartIndex: rowIndex,
              visibleColumnStartIndex: columnIndex,
              visibleRowStopIndex: stopRowIndex,
              visibleColumnStopIndex: stopColumnIndex,
            }) => {
              onItemsRendered({
                overscanStartIndex: rowIndex * 6 + columnIndex,
                overscanStopIndex: stopRowIndex * 6 + stopColumnIndex,
                visibleStartIndex: rowIndex * 6 + columnIndex,
                visibleStopIndex: stopRowIndex * 6 + stopColumnIndex,
              });
            }} // Callback when items are rendered
            ref={ref} // Forwarded ref to the grid
          >
            {RecipeItem}
          </FixedSizeGrid>
        )}
      </InfiniteLoader>
    </div>
  );
};

export default Recipe;
