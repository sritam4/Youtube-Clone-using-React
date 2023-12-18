import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { Provider } from "react-redux";
import store from "./Utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VideoPage from "./Components/VideoPage";
import MainContainer from "./Components/MainContainer";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <VideoPage />,
      },
    ],
  },
]);
function App() {
  return (
    <div className="text-xl">
      <Provider store={store}>
        <Header />
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}

export default App;
