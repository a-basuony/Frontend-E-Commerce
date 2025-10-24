import React, { useEffect } from "react";
import CategoryContainer from "../../Components/Category/CategoryContainer";
import Pagination from "../../Components/Uitily/Pagination";
import baseUrl from "../../api/baseUrl";

const AllCategoryPage = () => {
  const getData = async () => {
    const response = await baseUrl.get("api/v1/categories");
    console.log(response);
  };

  useEffect(() => {
    getData();
    console.log("hello");
  }, []);

  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryContainer />
      <Pagination />
    </div>
  );
};

export default AllCategoryPage;
