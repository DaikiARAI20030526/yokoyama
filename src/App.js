import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Top from "./components/Top";
import Copy from "./components/Copy";
import Slider from "./components/Slider";
import Products from "./components/Products";
import "./styles.css";
import "./products.css";
import "./company.css";
import Interview from "./components/Interview";
import Caption from "./components/Caption";
import Company from "./components/Company";
import Companyimg from "./components/Companyimg";
import Companycopy from "./components/Companycopy";
import Companyinfo from "./components/Companyinfo";
import Suppliers from "./components/Suppliers";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* ✅ ここに追加 */}
      <div className="App">
        <Header />
        <Routes>
          {/* トップページ */}
          <Route
            path="/"
            element={
              <>
                <Top />
                <Copy />
                <Slider />
              </>
            }
          />

          {/* 商品ページ */}
          <Route
            path="/products"
            element={
              <>
                <Products />
                <Caption />
                <Interview />
                <Slider />
              </>
            }
          />
          <Route
            path="/company"
            element={
              <>
                <Company />
                <Companyimg />
                <Companycopy />
                <Companyinfo />
                <Suppliers />
              </>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
