import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Footer from "./components/common/Footer";
import NotFoundPage from "./Pages/NotFoundPage";
import Dashboard from "./Pages/AdminDashboard";
import DashBoardMain from "./components/adminpage/DashBoardMain";
import MutualTransferSearch from "./components/etransfer/MutualTransferSearch";
import MutualTransferPending from "./components/etransfer/MutualTransferPending";
import ETransfer from "./Pages/ETransfer";
import ETransferMain from "./components/etransfer/eTransferMain";
import TransferApprove from "./components/etransfer/TransferApprove";
import TransferReject from "./components/etransfer/TransferReject";
import TransferHistory from "./components/etransfer/TransferHistory";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/admindashboard" element={<Dashboard />}>
            <Route index element={<DashBoardMain />} />
          </Route>
          <Route path="/etransfer" element={<ETransfer />} >
            <Route index element={<ETransferMain />} />
            <Route path="/etransfer/search" element={<MutualTransferSearch />} />
            <Route path="/etransfer/pending" element={<MutualTransferPending />} />
            <Route path="/etransfer/approved" element={<TransferApprove />} />
            <Route path="/etransfer/rejected" element={<TransferReject />} />
            <Route path="/etransfer/history" element={<TransferHistory />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
