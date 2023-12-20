import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Authentikasi/Login/Login";
import Register from "./pages/Authentikasi/Register/Register";
import Beranda from "./pages/Beranda/Beranda";
import DetailKuliner from "./pages/DetailKuliner/DetailKuliner";
import DetailPaket from "./pages/DetailPaket/DetailPaket";
import DetailPenginapan from "./pages/DetailPenginapan/DetailPenginapan";
import DetailWisata from "./pages/DetailWisata/DetailWisata";
import Kontak from "./pages/Kontak/Kontak";
import PaketWisata from "./pages/PaketWisata/PaketWisata";
import TentangKami from "./pages/TentangKami/TentangKami";
import Wisata from "./pages/Wisata/Wisata";
import AuthBeranda from "./pages/Beranda/AuthBeranda";
import Blog from "./pages/Blog/Blog";
import DetailBlog from "./pages/DetailBlog/DetailBlog";
import Profile from "./pages/Profile/Profile";
import Riwayat from "./pages/Profile/Riwayat";
import Order from "./pages/Profile/Order";
import Setting from "./pages/Profile/Setting";
import Checkout from "./pages/Checkout/Checkout";
import KelolaArtikel from "./pages/Admin/KelolaArtikel/KelolaArtikel";
import FormArtikel from "./pages/Admin/KelolaArtikel/formArtikel";
import KelolaPengguna from "./pages/Admin/KelolaPengguna/KelolaPengguna";
import FormEditUser from "./pages/Admin/KelolaPengguna/FormEditUser";
import KelolaWisata from "./pages/Admin/KelolaWisata/KelolaWisata";
import FormWisata from "./pages/Admin/KelolaWisata/FormWisata";
import KelolaPaketWisata from "./pages/Admin/KelolaPaketWisata/KelolaPaketWisata";
import FormPaketWisata from "./pages/Admin/KelolaPaketWisata/FormPaketWisata";
import KelolaPenginapan from "./pages/Admin/KelolaPenginapan/KelolaPenginapan";
import FormPenginapan from "./pages/Admin/KelolaPenginapan/FormPenginapan";
import KelolaKuliner from "./pages/Admin/KelolaKuliner/KelolaKuliner";
import FormKuliner from "./pages/Admin/KelolaKuliner/FormKuliner";
import KelolaKomentar from "./pages/Admin/KelolaKomentar/KelolaKomentar";
import KelolaPembayaran from "./pages/Admin/KelolaPembayaran/KelolaPembayaran";
import DetailPembayaran from "./pages/Admin/KelolaPembayaran/DetailPembayaran";
import TabelOrder from "./pages/Profile/TabelOrder";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/authBeranda" element={<AuthBeranda />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="/wisata" element={<Wisata />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/paketWisata" element={<PaketWisata />} />
          <Route path="/tentangkami" element={<TentangKami />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/riwayat" element={<Riwayat />} />
          <Route path="/order" element={<Order />} />
          <Route path="/pengaturan" element={<Setting />} />
          <Route path="/blog/detailBlog" element={<DetailBlog />} />
          <Route path="/wisata/detailWisata" element={<DetailWisata />} />
          <Route path="/wisata/detailWisata" element={<DetailWisata />} />
          <Route path="/paketWisata/detailPaket" element={<DetailPaket />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/detailPenginapan" element={<DetailPenginapan />} />
          <Route path="/detailKuliner" element={<DetailKuliner />} />
          <Route path="/dashboard/kelolaArtikel" element={<KelolaArtikel />} />
          <Route path="/dashboard/formArtikel" element={<FormArtikel />} />
          <Route
            path="/dashboard/kelolaPengguna"
            element={<KelolaPengguna />}
          />
          <Route path="/dashboard/formEditUser" element={<FormEditUser />} />
          <Route path="/dashboard/kelolaWisata" element={<KelolaWisata />} />
          <Route path="/dashboard/formWisata" element={<FormWisata />} />
          <Route
            path="/dashboard/kelolaPaketWisata"
            element={<KelolaPaketWisata />}
          />
          <Route
            path="/dashboard/formPaketWisata"
            element={<FormPaketWisata />}
          />
          <Route
            path="/dashboard/kelolaPenginapan"
            element={<KelolaPenginapan />}
          />
          <Route
            path="/dashboard/formPenginapan"
            element={<FormPenginapan />}
          />
          <Route path="/dashboard/kelolaKuliner" element={<KelolaKuliner />} />
          <Route path="/dashboard/formKuliner" element={<FormKuliner />} />
          <Route
            path="/dashboard/kelolaKomentar"
            element={<KelolaKomentar />}
          />
          <Route
            path="/dashboard/kelolaPembayaran"
            element={<KelolaPembayaran />}
          />
          <Route
            path="/dashboard/detailPembayaran"
            element={<DetailPembayaran />}
          />
          <Route path="/tabel-order" element={<TabelOrder />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
