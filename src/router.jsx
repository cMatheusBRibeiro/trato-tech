import { PageDefault } from "components/PageDefault"
import { HomePage } from "pages/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageDefault/>}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}