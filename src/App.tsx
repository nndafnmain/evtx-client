import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./features/auth/components/Login";
import { Register } from "./features/auth/components/Register";
import { Auth } from "./features/auth/pages/Auth";
import { CreateEvent } from "./features/dashboard/pages/CreateEvent";
import { Dashboard } from "./features/dashboard/pages/Dashboard";
import { HomeDashboard } from "./features/dashboard/pages/HomeDashboard";
import { MyEvents } from "./features/dashboard/pages/MyEvents";
import { EventDetail } from "./features/events/pages/EventDetail";
import { Home } from "./features/home/pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event/detail" element={<EventDetail />} />
        <Route path="/auth" element={<Auth />}>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="/organizer/dashboard" element={<Dashboard />}>
          <Route path="home" element={<HomeDashboard />} />
          <Route path="event/create" element={<CreateEvent />} />
          <Route path="event/lists" element={<MyEvents />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
