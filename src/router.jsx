import { PageDefault } from "components/PageDefault"
import { BrowserRouter, Route, Routes } from "react-router-dom"

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageDefault/>}>
          <Route index element={<div>Home</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}