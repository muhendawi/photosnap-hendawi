import { BrowserRouter, Route, Routes } from "react-router-dom";
//=============================================================>
import Home from "./pages/home/Home";
import Features from "./pages/features/Features";
import Stories from "./pages/stories/Stories";
import Pricing from "./pages/pricing/Pricing";
import ScrollToTop from "./components/single/ScrollToTop";
//=============================================================>
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="features" element={<Features />} />
        <Route path="stories" element={<Stories />} />
        <Route path="pricing" element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
