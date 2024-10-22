import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './Component/HomePage';
import VideoPage from './Component/VideoPage';

function App() {

  const router = createBrowserRouter([

    {
      path: "/",
      element: <HomePage />
    },
    {
      path: "/room/:id",
      element: <VideoPage />
    }
  ])
  return (
    <div className="App">

      <RouterProvider router={router} />

    </div>
  );
}

export default App;
