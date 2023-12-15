import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center text-center min-h-screen gap-6">
      <span className="block">Aksi dibatasi!</span>
      <Link
        to={"/"}
        className="px-4 py-2 cursor-pointer text-primary-main font-productSans hover:text-primary-hover active:text-primary-pressed overflow-hidden ring-neutral-60 ring-1"
      >
        Kembali
      </Link>
    </div>
  );
}
