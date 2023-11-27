import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Beranda from "./pages/Beranda/Beranda";
import Blog from "./pages/Blog/Blog";
import Detail from "./pages/Blog/Detail";
import Wisata from "./pages/Wisata/Wisata";
import Kontak from "./pages/Kontak/Kontak";
// import TentangKami from "./pages/Admin/Artikel";
import Login from "./pages/Autentikasi/Login/Login";
import Register from "./pages/Autentikasi/Register/Register";
import Profile from "./pages/Profile/Profile";
import Order from "./pages/Profile/Order";
import Riwayat from "./pages/Profile/Riwayat";
import Setting from "./pages/Profile/Setting";
import KelolaArtikel from "./pages/Admin/KelolaArtikel";
import KelolaPengguna from "./pages/Admin/KelolaPengguna";
import KelolaWisata from "./pages/Admin/KelolaWisata";
import KelolaPaketWisata from "./pages/Admin/KelolaPaketWisata";
import KelolaPenginapan from "./pages/Admin/KelolaPenginapan";
import KelolaKuliner from "./pages/Admin/KelolaKuliner";
import KelolaKomentar from "./pages/Admin/KelolaKomentar";
import KelolaPembayaran from "./pages/Admin/KelolaPembayaran";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/wisata" element={<Wisata />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/kontak" element={<Kontak />} />
        {/* <Route path="/tentangkami" element={<TentangKami />} /> */}
        <Route path="/masuk" element={<Login />} />
        <Route path="/daftar" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/order" element={<Order />} />
        <Route path="/riwayat" element={<Riwayat />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/tentangkami" element={<KelolaArtikel />} />
        <Route path="/kelolapengguna" element={<KelolaPengguna />} />
        <Route path="/kelolawisata" element={<KelolaWisata />} />
        <Route path="/kelolapaketwisata" element={<KelolaPaketWisata />} />
        <Route path="/kelolapenginapan" element={<KelolaPenginapan />} />
        <Route path="/kelolakuliner" element={<KelolaKuliner />} />
        <Route path="/kelolakomentar" element={<KelolaKomentar />} />
        <Route path="/kelolapembayaran" element={<KelolaPembayaran />} />
      </Routes>
    </Router>
  );
}

export default App;
