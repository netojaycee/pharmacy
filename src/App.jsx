import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Layout from "./components/Layout";
import "../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";



function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
