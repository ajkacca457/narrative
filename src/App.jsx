import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomeLayout from "./pages/HomeLayout"

// create a BrowserRouter
const BrowserRouter = createBrowserRouter(
  [
    {
      path: "/", 
      element: <HomeLayout />,
      children:[
        {
          index: true,
          element: <p>Home</p>
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
