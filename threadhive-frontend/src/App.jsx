import "./App.css"
import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ResetPassword from "./pages/Auth/ResetPassword";

function App() {
  const [currentView, setCurrentView] = useState("Login");

  const handleNavigate = (componentName) => {
    setCurrentView(componentName);
  };

  const handleResetPassword = (formData) => {
    console.log("Reset Password:", formData);
  };

  return (
    <div className="app-layout">
        <Header onNavigate={handleNavigate} />
        {currentView === "Login" && <Login />}
        {currentView === "Register" && <Register />}
        {currentView === "ResetPassword" && <ResetPassword onResetPassword={handleResetPassword} />}
        <Footer />
    </div>
  );
}

export default App;
