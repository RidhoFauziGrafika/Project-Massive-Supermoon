import React, { useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Steps = (step) => {
  return (
    <>
      <div className="flex justify-center items-center relative">
        <div className="min-w-[60px] min-h-[60px] rounded-[50%] border-neutral-40 border-[1px] p-[10px]">
          <div className="min-w-[50px] min-h-[50px] rounded-[50%] bg-neutral-50 flex justify-center items-center">
            <span className="text-center font-productSans xl:text-[20px]">
              1
            </span>
          </div>
        </div>
        <div className="h-[1px] min-w-[75px] bg-neutral-40"></div>
        <div className="min-w-[60px] min-h-[60px] rounded-[50%] border-neutral-40 border-[1px] p-[10px]">
          <div className="min-w-[50px] min-h-[50px] rounded-[50%] bg-neutral-50 flex justify-center items-center">
            <span className="text-center font-productSans xl:text-[20px]">
              2
            </span>
          </div>
        </div>
        <div className="h-[1px] min-w-[75px] bg-neutral-40"></div>
        <div className="min-w-[60px] min-h-[60px] rounded-[50%] border-neutral-40 border-[1px] p-[10px]">
          <div className="min-w-[50px] min-h-[50px] rounded-[50%] bg-neutral-50 flex justify-center items-center">
            <span className="text-center font-productSans xl:text-[20px]">
              3
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

const Step0 = ({ formData, setFormData }) => {
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
      <>
        <label>
          Field 0:
          <input
            type="text"
            name="field2"
            value={formData.field2}
            onChange={handleChange}
          />
        </label>
      </>
    );
};
const Step1 = ({ formData, setFormData, handleFile }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <label>
        Field 1:
        <input
          type="text"
          name="field2"
          value={formData.field2}
          onChange={handleChange}
        />
      </label>
    </>
  );
};
const Step2 = ({ formData, setFormData }) => {
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
      <>
        <label>
          Field 2:
          <input
            type="text"
            name="field2"
            value={formData.field2}
            onChange={handleChange}
          />
        </label>
      </>
    );
};

export default function Pembelian() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    telepon: "",
    metode_pembayaran: "",
    bank_asal: "",
    nama_rekening: "",
    file_bukti: null,
  });

  const handleFile = (e) => {
    const { name, value, files } = e.target;

    // If the input is a file input, set the file property
    const file = name === 'file' ? files[0] : null;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      file,
    }));
  };

   const handleNext = () => {
     setStep(step + 1);
   };

   const handlePrev = () => {
     setStep(step - 1);
   };

  return (
    <>
      <Navbar />
      <section className="container mx-auto mt-[64px] xl:mt-[82px]">
        <div>
          <h2 className="font-productSans xl:text-5xl font-bold text-primary-main leading-[117%] text-center">
            Informasi Pesanan
          </h2>
          <div className="mt-[32px]">
            <Steps />
          </div>
        </div>
        <div className="flex justify-center mt-[80px]">
          {/* MULTISTEPS FORMS */}
          {step === 0 && (
            <Step0 formData={formData} setFormData={setFormData} />
          )}
          {step === 1 && (
            <Step1
              formData={formData}
              setFormData={setFormData}
              handleFile={handleFile}
            />
          )}
          {step === 2 && (
            <Step2 formData={formData} setFormData={setFormData} />
          )}
        </div>
        <div className="flex justify-center items-center gap-6">
          {/* CONDITIONAL BUTTON */}
          {step >0 && step <= 3 && (
            <button
              className="flex px-4 py-2 justify-center gap-[4px] items-center rounded-4 overflow-hidden border-primary-main border-[1px] font-productSans text-[20px] leading-[140%] text-primary-main rounded-[8px]"
              onClick={handlePrev}
            >
              Batal
            </button>
          )}
          {step < 3 && (
            <button
              className="flex px-4 py-2 justify-center gap-[4px] items-center rounded-4 overflow-hidden border-primary-main border-[1px] font-productSans text-[20px] leading-[140%] bg-primary-main  text-neutral-10 rounded-[8px]"
              onClick={handleNext}
            >
              Selanjutnya
            </button>
          )}
          {step === 3 && (
            <a
              className="flex px-4 py-2 justify-center gap-[4px] items-center rounded-4 overflow-hidden border-primary-main border-[1px] font-productSans text-[20px] leading-[140%] bg-primary-main  text-neutral-10 rounded-[8px]"
              href="/"
            >
              Kembali
            </a>
          )}
        </div>
      </section>
    </>
  );
}
