import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomeLayout from "./pages/HomeLayout"
import Home from "./pages/Home"

// create a BrowserRouter
const BrowserRouter = createBrowserRouter(
  [
    {
      path: "/", 
      element: <HomeLayout />,
      children:[
        {
          index: true,
          element: <Home />
        },
        {
          path: "about",
          element:<p>About</p>
        },
        {
          path: "contact",
          element: <p>Contact</p>
        }
      ]
    },
  ]
)


function App() {
  return <RouterProvider router={BrowserRouter}/>
}

export default App
