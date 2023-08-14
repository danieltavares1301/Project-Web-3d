import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndustrialRobotPage from "./pages/industrialRobotPage";
import Montagem from "./pages/montagem";
import AssinaturaDigital from "./pages/assinaturaDigital";
import CriaPDF from "./pages/criaPDF";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndustrialRobotPage />} />
        <Route path="/montagem" element={<Montagem />} />
        <Route
          path="/createDigitalAssignature"
          element={<AssinaturaDigital />}
        />
        <Route path="/criaPDF" element={<CriaPDF />} />
        <Route path="*" element={<h1>Page Not Found!</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
