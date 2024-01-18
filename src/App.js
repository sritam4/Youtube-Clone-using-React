import "./App.css";
import { Provider } from "react-redux";
import store from "./Utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VideoPage from "./Components/VideoPage";
import MainContainer from "./Components/MainContainer";
import AppLayout from "./Components/AppLayout";
import ResultPage from "./Components/ResultPage";
import Error from "./Components/Error";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <VideoPage />,
      },
      {
        path: "/search",
        element: <ResultPage />,
      },
    ],
  },
]);
function App() {
  return (
    <div className="text-xl">
      <Provider store={store}>
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}

export default App;
