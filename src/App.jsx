import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { AuthProvider } from "./context/authContext";
import { ProtectedRoute } from "./routes";

import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";
import HomePageLog from "./pages/HomePageLog";
import ReservaForm from "./pages/Reserva";
import PagoPaypal from "./pages/PagoPaypal"; // ✅ Nueva importación

function App() {
  return (
    <AuthProvider>
        <BrowserRouter>
          <main className="container content-container mx-auto px-10 md:px-0">
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/soporte" element={<h1>Soporte PlayNow</h1>} />
              <Route path="/register" element={<RegisterPage />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/reserva" element={<ReservaForm />} />
                <Route path="/profile" element={<h1>Profile</h1>} />
                <Route path="/home" element={<HomePageLog />} />
              </Route>

              {/* ✅ Nueva ruta para la página de pago con PayPal */}
              <Route path="/pago-paypal" element={<PagoPaypal />} />
            </Routes>
          </main>
        </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
