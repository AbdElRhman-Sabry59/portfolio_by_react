import { Route, Routes } from "react-router-dom";
import Arrow from "./components/arrow/Arrow";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";
import Blog from "./components/blog/Blog";
import Community from "./components/blog/Community";
import ScrollToTop from "./components/scrollTopX/scrollTopX";

function App() {
  return (
    <>
      <ScrollToTop />

      <Arrow />

      <div className="container">
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Main />
                <Contact />
              </>
            }
          />

          <Route path="/blog" element={<Blog />} />
          <Route path="/community" element={<Community />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
