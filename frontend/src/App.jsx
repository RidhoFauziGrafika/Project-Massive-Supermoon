import { Routes, Route } from "react-router-dom";
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
import Blog from "./pages/Blog/Blog";
import DetailBlog from "./pages/Blog/DetailBlog";
// import Profile from "./pages/Profile/Profile";
// import Riwayat from "./pages/Profile/Riwayat";
// import Order from "./pages/Profile/Order";
// import Setting from "./pages/Profile/Setting";
// import Checkout from "./pages/Checkout/Checkout";
// import KelolaArtikel from "./pages/AdminOld/KelolaArtikel/KelolaArtikel";
// import FormArtikel from "./pages/AdminOld/KelolaArtikel/formArtikel";
// import KelolaPengguna from "./pages/AdminOld/KelolaPengguna/KelolaPengguna";
// import FormEditUser from "./pages/AdminOld/KelolaPengguna/FormEditUser";
// import KelolaWisata from "./pages/AdminOld/KelolaWisata/KelolaWisata";
// import FormWisata from "./pages/AdminOld/KelolaWisata/FormWisata";
// import KelolaPaketWisata from "./pages/AdminOld/KelolaPaketWisata/KelolaPaketWisata";
// import FormPaketWisata from "./pages/AdminOld/KelolaPaketWisata/FormPaketWisata";
// import KelolaPenginapan from "./pages/AdminOld/KelolaPenginapan/KelolaPenginapan";
// import FormPenginapan from "./pages/AdminOld/KelolaPenginapan/FormPenginapan";
// import KelolaKuliner from "./pages/AdminOld/KelolaKuliner/KelolaKuliner";
// import FormKuliner from "./pages/AdminOld/KelolaKuliner/FormKuliner";
// import KelolaKomentar from "./pages/AdminOld/KelolaKomentar/KelolaKomentar";
// import KelolaPembayaran from "./pages/AdminOld/KelolaPembayaran/KelolaPembayaran";
// import DetailPembayaran from "./pages/AdminOld/KelolaPembayaran/DetailPembayaran";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Unauthorized from "./pages/Unauthorized/Unauthorized";
import NotFound from "./pages/NotFound/NotFound";
import Layout from "./components/Layout/Layout";
import RequireAuth from "./middleware/RequireAuth";
import PublicRoute from "./middleware/PublicRoute";
import useAuth from "./hooks/useAuth";

import IndexPaketWisata from "./pages/Admin/AdminDashboard/PaketWisata/IndexPaketWisata";
import EditPaketWisata from "./pages/Admin/AdminDashboard/PaketWisata/EditPaketWisata";
import BuatPaketWisata from "./pages/Admin/AdminDashboard/PaketWisata/BuatPaketWisata";

import IndexBlog from "./pages/Admin/AdminDashboard/Blog/IndexBlog";
import BuatBlog from "./pages/Admin/AdminDashboard/Blog/BuatBlog";
import EditBlog from "./pages/Admin/AdminDashboard/Blog/IndexBlog";

const ROLES = {
  CLIENT: "8912",
  ADMIN: "6501",
};

function App() {
  // const { Auth } = useAuth;

  // console.log(Auth.roles);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* CLIENT ROUTE OLD */}
          {/* <Route
            element={<RequireAuth allowedRoles={[ROLES.CLIENT, ROLES.ADMIN]} />}
          >
            <Route path="/profile" element={<Profile />} /> // view client
            dashboard
            <Route path="/riwayat" element={<Riwayat />} /> // view payment
            histories
            <Route path="/order" element={<Order />} /> // view detail payment
            <Route path="/pengaturan" element={<Setting />} /> // change account
            setting
            <Route path="/checkout" element={<Checkout />} /> // buy tour packet
            form
          </Route>
          // ADMIN ONLY OLD
          <Route element={<RequireAuth allowedRoles={[ROLES.ADMIN]} />}>
            <Route
              path="/dashboard/kelolaArtikel"
              element={<KelolaArtikel />}
            />
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
            <Route
              path="/dashboard/kelolaKuliner"
              element={<KelolaKuliner />}
            />
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
          </Route> */}

          {/* PUBLIC ROUTES */}
          <Route path="/" element={<Beranda />} />
          <Route
            path="/login"
            element={<PublicRoute element={<Login />} redirectTo="/" />}
          />
          <Route
            path="/register"
            element={<PublicRoute element={<Register />} redirectTo="/" />}
          />
          {/* STATIC */}
          <Route path="/kontak" element={<Kontak />} />
          <Route path="/tentangkami" element={<TentangKami />} />

          {/* DYNAMIC */}
          {/* BLOG */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/detil/:slug" element={<DetailBlog />} />
          {/* PAKET WISATA */}
          <Route path="/paket-wisata" element={<PaketWisata />} />
          <Route path="/paket-wisata/detil/:id" element={<DetailPaket />} />
          {/* WISATA */}
          <Route path="/wisata" element={<Wisata />} />
          <Route path="/wisata/detail-wisata" element={<DetailWisata />} />
          {/* DETIL PENGINAPAN/KULINER */}
          <Route path="/detail-penginapan/:id" element={<DetailPenginapan />} />
          <Route path="/detail-kuliner/:id" element={<DetailKuliner />} />

          {/* DAHSBOARD ADMIN */}
          <Route element={<RequireAuth allowedRoles={[ROLES.ADMIN]} />}>
            {/* PAKET WISATA */}
            <Route
              path="/dashboard/paket-wisata"
              element={<IndexPaketWisata />}
            />
            <Route
              path="/dashboard/paket-wisata/baru"
              element={<BuatPaketWisata />}
            />
            <Route
              path="/dashboard/paket-wisata/edit/:id"
              element={<EditPaketWisata />}
            />
            {/* <Route
              path="/dashboard/paket-wisata/detil/:id"
              element={<DetilPaketWisata />}
            /> */}
            {/* END PAKET WISATA */}
            {/* WISATA */}
            {/* <Route path="/dashboard/wisata" element={<IndexWisata />} />
            <Route path="/dashboard/wisata/baru" element={<BuatWisata />} />
            <Route path="/dashboard/wisata/edit/:id" element={<EditWisata />} /> */}
            {/* <Route
              path="/dashboard/wisata/detil"
              element={<EditWisata />}
            /> */}
            {/* END WISATA */}
            {/* KULINER */}
            {/* <Route path="/dashboard/kuliner" element={<IndexKuliner />} />
            <Route path="/dashboard/kuliner/baru" element={<BuatKuliner />} />
            <Route
              path="/dashboard/kuliner/edit/:id"
              element={<EditKuliner />}
            /> */}
            {/* <Route path="/dashboard/kuliner/detil" element={<DetilKuliner />} /> */}
            {/* END KULINER */}
            {/* PENGINAPAN */}
            {/* <Route path="/dashboard/penginapan" element={<IndexPenginapan />} />
            <Route
              path="/dashboard/penginapan/baru"
              element={<BuatWisataPenginapan />}
            />
            <Route
              path="/dashboard/penginapan/edit/:id"
              element={<EditWisataPenginapan />}
            /> */}
            {/* <Route path="/dashboard/penginapan/detil" element={<DetilWisataPenginapan />} /> */}
            {/* END PENGINAPAN */}
            {/* BLOG */}
            {/* <Route path="/dashboard/blog" element={<IndexBlog />} />
            <Route path="/dashboard/blog/baru" element={<BuatBlog />} />
            <Route path="/dashboard/blog/edit/:id" element={<EditBlog />} /> */}
            {/* END BLOG */}
            {/* USER */}
            {/* <Route path="/dashboard/user" element={<IndexUser />} />
            <Route path="/dashboard/user/baru" element={<BuatUser />} />
            <Route path="/dashboard/user/edit/:id" element={<EditUser />} />
            <Route path="/dashboard/user/detil/:id" element={<DetilUser />} /> */}
            {/* END USER */}
            {/* BANK */}
            {/* <Route path="/dashboard/bank" element={<IndexBank />} />
            <Route path="/dashboard/bank/baru" element={<BuatBank />} />
            <Route path="/dashboard/bank/edit/:id" element={<EditBank />} />
            <Route path="/dashboard/bank/detil/:id" element={<DetilBank />} /> */}
            {/* END BANK */}
            {/* TRANSAKSI */}
            {/* <Route path="/dashboard/transaksi" element={<IndexTransaksi />} />
            <Route
              path="/dashboard/transaksi/detil/:id"
              element={<DetilTransaksi />}
            /> */}
            {/* <Route path="/dashboard/transaksi/edit" element={<EditTransaksi />} /> */}
            {/* END TRANSAKSI */}
          </Route>
          {/* END OF DASHBOARD ADMIN */}

          {/* USERS */}
          {/* <Route element={<RequireAuth allowedRoles={[ROLES.CLIENT]} />}>
            <Route path="profil" element={<IndexProfil />} />
            <Route path="profil/transaksi" element={<IndexUserTransaksi />} />
            <Route
              path="profil/transaksi/detil/:id"
              element={<DetilUserTransaksi />}
            />
            <Route path="profil/akun" element={<DetilUserTransaksi />} />
            <Route
              path="/paket-wisata/detil/:slug/beli"
              element={<BeliPaketWisata />}
            />
          </Route> */}
          {/* END OF USERS */}

          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
