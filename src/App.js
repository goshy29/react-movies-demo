import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import WatchListPage from "./pages/WatchListPage";
import WatchListDetailsPage from "./pages/WatchListDetailsPage";
import Trailer from "./components/UIElements/trailer/Trailer";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/watch-list" element={<WatchListPage />} />
        <Route path="/watch-list/:movieId" element={<WatchListDetailsPage />} />
        <Route path="/trailer/:trailerId" element={<Trailer />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
