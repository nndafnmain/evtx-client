import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./features/auth/components/Login";
import { Register } from "./features/auth/components/Register";
import { Auth } from "./features/auth/pages/Auth";
import { Dashboard } from "./features/dashboard/pages/Dashboard";
import { CreateEvent } from "./features/dashboard/components/CreateEvent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />}>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="/organizer/dashboard" element={<Dashboard />}>
          <Route path="event" element={<h1>DASHBOARD HOME</h1>} />
          <Route path="event/create" element={<CreateEvent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
