import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Home } from "./pages/Home";
import { TripDetailsPage } from "./pages/trip-details";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/trips/:tripId",
    element: <TripDetailsPage/>,
  },
]);


export function App() {
  return (
    <RouterProvider router={router} />
  )
}