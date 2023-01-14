import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Profile from "./pages/profile/Profile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Illustration from "./pages/Illutration/Illustration";
import PolicyCalculationPage from "./pages/policyCalculationPage/PolicyCalculationPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Profile />} path="/profile" />
        <Route element={<PolicyCalculationPage />} path="/calculater" />
        <Route element={<Illustration />} path="/illustration" />
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
