import "./App.css";
import BaseRoute from "./apps/BaseRoute";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./pages/auth/AuthContext";
import "animate.css"

function App() {
  return (
    <div className="bg-LightPurple">
      <BrowserRouter>
        <AuthProvider>
          <BaseRoute />
        </AuthProvider>
      </BrowserRouter>
      {/* document.getElementById('root') */}
    </div>
    
  );
}

export default App;
