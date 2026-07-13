import "./Header.css"

function Header({ onNavigate }) {
  const isAuthenticated = false;

  const handleLogin = () => {
    onNavigate("Login");
  };

  const handleRegister = () => {
    onNavigate("Register");
  };

  const handleResetPassword = () => {
    onNavigate("ResetPassword");
  };

  return (
    <header className="header">
      <h1>ThreadHive</h1>
      {/* Todo: Header Component */}
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleRegister}>Register</button>
      <button onClick={handleResetPassword}>Reset Password</button>
    </header>
  );
}

export default Header;