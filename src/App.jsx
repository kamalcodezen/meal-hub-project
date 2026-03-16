import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import FoodSection from "./components/FoodSection/FoodSection";
import { Suspense } from "react";

const FoodSectionFetch = async () => {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=a",
  );
  return await res.json();
};

function App() {
  const foodPromise = FoodSectionFetch();

  return (
    <>
      <Navbar></Navbar>

      <Suspense fallback={<h1>Food Data Loading.....</h1>}>
        <FoodSection foodPromise={foodPromise}></FoodSection>
      </Suspense>
    </>
  );
}

export default App;
