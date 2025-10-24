import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryContainer from "../../Components/Category/CategoryContainer";
import Pagination from "../../Components/Uitily/Pagination";
import baseUrl from "../../api/baseUrl";
import { setCategories, setLoading } from "../../redux/slices/categorySlice";

const AllCategoryPage = () => {
  const dispatch = useDispatch();
  const { categories, loading } = useSelector((state) => state.category);

  const getData = async () => {
    dispatch(setLoading(true));
    try {
      const response = await baseUrl.get("api/v1/categories");
      console.log("API Response:", response.data);
      dispatch(setCategories(response.data.data)); // adjust key if backend differs
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) return <h3>Loading...</h3>;

  return (
    <div style={{ minHeight: "670px" }}>
      {/* Pass the Redux categories to your component */}
      <CategoryContainer categories={categories} />
      <Pagination />
    </div>
  );
};

export default AllCategoryPage;
