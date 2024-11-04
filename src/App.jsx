import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import NotFoundPage from "./Pages/NotFoundPage";
import Dashboard from "./Pages/AdminDashboard";
import DashBoardMain from "./components/Adminpage/DashBoardMain";
import MutualTransferRequestSearch from "./components/Adminpage/MutualTransferSearch";
import MutualTransferRequestPending from "./components/Adminpage/MutualTransferPending";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/admindashboard" element={<Dashboard />}>
            <Route index element={<DashBoardMain />} />
            <Route path="mutualtransfersearch" element={<MutualTransferRequestSearch />} />
            <Route path="mutualtransferpending" element={<MutualTransferRequestPending />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
