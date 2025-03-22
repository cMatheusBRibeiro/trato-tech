import { PageDefault } from "components/PageDefault";
import CategoryPage from "pages/Category";
import { HomePage } from "pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageDefault />}>
          <Route index element={<HomePage />} />
          <Route path="/category/:id" element={<CategoryPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
