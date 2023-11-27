import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Beranda from "./pages/Beranda/Beranda";
import Blog from "./pages/Blog/Blog";
import Detail from "./pages/Blog/Detail";
import Wisata from "./pages/Wisata/Wisata";
import Kontak from "./pages/Kontak/Kontak";
import TentangKami from "./pages/TentangKami/TentangKami";
import Login from "./pages/Autentikasi/Login/Login";
import Register from "./pages/Autentikasi/Register/Register";
import Profile from "./pages/Profile/Profile";
import Order from "./pages/Profile/Order";
import Riwayat from "./pages/Profile/Riwayat";
import Setting from "./pages/Profile/Setting";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/wisata" element={<Wisata />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="/tentangkami" element={<TentangKami />} />
        <Route path="/masuk" element={<Login />} />
        <Route path="/daftar" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/order" element={<Order />} />
        <Route path="/riwayat" element={<Riwayat />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </Router>
  );
}

export default App;
