import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./features/auth/components/Login";
import { Register } from "./features/auth/components/Register";
import { Auth } from "./features/auth/pages/Auth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />}>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
