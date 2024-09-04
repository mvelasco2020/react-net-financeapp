import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/Home/HomePage";
import SearchPage from "../Pages/Search/Search";
import CompanyPage from "../Pages/Company/CompanyPage";
import ListPortfolio from "../Components/Portfolio/ListPortfolio/ListPortfolio";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "search", element: <SearchPage /> },
      { path: "company/:ticker", element: <CompanyPage /> },
      { path: "dashboard", element: <ListPortfolio /> }
    ],
  },
]);
