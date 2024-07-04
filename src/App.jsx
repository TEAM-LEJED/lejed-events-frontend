import RootLayout from "./layouts/rootLayout"
import LandingPage from "./pages/landing"
import "./App.css"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import CreateEvents from "./pages/createEvents"
import EventDetails from "./pages/eventDetails"
function App() {
    const router = createBrowserRouter([
        {
            path:"/",
            element: <RootLayout/>,
            children:[
                {
                    index: true,
                    element:<LandingPage/>

                },
                {
                    path: "createEvents",
                    element:<CreateEvents/>

                },
               
               
                {
                    path: "event-details/:id",
                    element:<EventDetails/>

                },
               
                
            ]
        }
    ])
    return <RouterProvider router={router}/>;
}
export default App