import React, { useState } from "react";
import { PlusCircle } from "lucide-react";
import Modal from "react-modal";
import HImage from "./assets/H.png";
import OImage from "./assets/O.png";
import QuestionImage from "./assets/question.png";
import HHOImage from "./assets/HHO.png";
import HHHImage from "./assets/HHH.png";
import OOOImage from "./assets/OOO.png";
import OOHImage from "./assets/OOH.png";
import NatriumImage from "./assets/Natrium.png";
import ClroridaImage from "./assets/Clorida.png";
import NaClImage from "./assets/NaCl.png";
import NaHImage from "./assets/NaH.png";
import HClImage from "./assets/HCl.png";
import ResetImage from "./assets/reset.png";
import CheckImage from "./assets/Check.png";
// import bgpopup from "./assets/bgpopup.png";
import correctImage from "./assets/berhasil.png";
import wrongImage from "./assets/gagal.png";
import KImage from "./assets/K.png";
import NaImage from "./assets/Natrium.png";
import LiImage from "./assets/L.png";
import MgImage from "./assets/Mg.png";
import CaImage from "./assets/Calsium.png";

//unsur import img
import U_Kalium from "./assets/U.kalium.png";
import U_Litium from "./assets/U.litium.png";
import U_Magnesium from "./assets/U.magnesium.png";
import U_Natrium from "./assets/U.natrium.png";
import U_Calsium from "./assets/U.calsium.png";

const App: React.FC = () => {
  const [slots, setSlots] = useState<(string | null)[]>([null, null, null]);
  const [result, setResult] = useState<string>(QuestionImage);
  const [soalIndex, setSoalIndex] = useState<number>(0);
  const [isDropped, setIsDropped] = useState(false);

  function getImage(name: string) {
    switch (name) {
      case "H":
        return HImage;
      case "O":
        return OImage;
      case "Na":
        return NatriumImage;
      case "Cl":
        return ClroridaImage;
      case "K":
        return KImage;
      case "Li":
        return LiImage;
      case "Mg":
        return MgImage;
      case "Ca":
        return CaImage;
    }
  }

  const soal = [
    {
      //soal no 1
      elements: [
        { id: "K", src: KImage, alt: "K" },
        { id: "Na", src: NaImage, alt: "Na" },
        { id: "Li", src: LiImage, alt: "Li" },
        { id: "Mg", src: MgImage, alt: "Mg" },
      ],

      soal: "Aku sangat reaktif, aku bisa meledak jika terkena air, tetapi aku juga sangat penting untuk sel-sel tubuhmu. Siapakah aku?",
      slotCount: 1,
      correctMessage:
        "Benar! Kalium adalah unsur yang sangat reaktif dengan air, tetapi juga penting untuk fungsi otot dan sistem saraf dalam tubuh.",
      wrongMessages: {
        Na: "Salah! Natrium juga reaktif dengan air, tetapi tidak memiliki peran yang sama pentingnya dalam fungsi sel seperti Unsur yang dimagsud.",
        Li: "Salah! Litium adalah logam reaktif, tetapi tidak terlibat langsung dalam fungsi sel tubuh.",
        Mg: "Salah! Magnesium adalah mineral penting untuk tubuh, tetapi tidak reaktif dengan air.",
      },
    },
    {
      //soal no 2
      elements: [
        { id: "Ca", src: CaImage, alt: "Ca" },
        { id: "Na", src: NaImage, alt: "Na" },
        { id: "Li", src: LiImage, alt: "Li" },
        { id: "Mg", src: MgImage, alt: "Mg" },
      ],

      soal: "Aku digunakan untuk mengawetkan makanan sejak zaman dulu, dan aku juga ditemukan di lautan. Tanpaku, tubuhmu bisa lemas. Siapakah aku?",
      slotCount: 1,
      correctMessage:
        "Benar! Natrium adalah unsur penting yang ditemukan dalam garam dapur, membantu menjaga keseimbangan cairan tubuh, dan digunakan sejak zaman dulu untuk mengawetkan makanan",
      wrongMessages: {
        Li: "Salah! Litium, tetapi tidak digunakan untuk mengawetkan makanan.",
        Mg: "Salah! Magnesium adalah mineral penting untuk tulang dan otot, tetapi tidak ditemukan dalam garam dapur.",
        Ca: "Salah! Kalsium baik untuk kesehatan tulang dan gigi, tetapi tidak digunakan untuk mengawetkan makanan.",
      },
    },
    {
      //soal no 3
      elements: [
        { id: "K", src: KImage, alt: "K" },
        { id: "Na", src: NaImage, alt: "Na" },
        { id: "Li", src: LiImage, alt: "Li" },
        { id: "Mg", src: MgImage, alt: "Mg" },
      ],

      soal: "Aku adalah logam paling ringan, aku ada di baterai yang kamu pakai, tetapi jika aku terkena udara terlalu lama, aku akan terbakar. Siapakah aku?",
      slotCount: 1,
      correctMessage:
        "Benar! Litium adalah logam paling ringan yang sering digunakan dalam baterai isi ulang, tetapi sangat reaktif terhadap udara.",
      wrongMessages: {
        Na: "Salah! Natrium juga reaktif dengan air, tetapi tidak memiliki peran yang sama pentingnya dalam fungsi sel",
        K: "Salah! Kalium adalah logam yang sangat reaktif, tetapi tidak digunakan dalam baterai",
        Mg: "Salah! Magnesium adalah logam yang lebih berat daripada unsur yang dicari dan tidak memiliki sifat reaktif yang sama",
      },
    },
    {
      // soalno 4
      elements: [
        { id: "H1", src: HImage, alt: "H" },
        { id: "H2", src: HImage, alt: "H" },
        { id: "H3", src: HImage, alt: "H" },
        { id: "O1", src: OImage, alt: "O" },
        { id: "O2", src: OImage, alt: "O" },
        { id: "O3", src: OImage, alt: "O" },
      ],
      soal: "Kamu sedang berada di laboratorium kimia dan menemukan reaksi yang menarik. Dua atom kecil yang sangat ringan bertemu dengan satu atom yang lebih besar dan reaktif. Saat mereka bergabung, terbentuklah senyawa penting yang ditemukan di berbagai tempat di Bumi, mulai dari sungai hingga hujan. Apa kombinasi yang benar untuk menciptakan senyawa ini?",
      slotCount: 3,
      correctMessage:
        "Benar! Dua atom Hidrogen (H) dan satu atom Oksigen (O) bergabung membentuk air (H₂O). Air adalah zat yang penting untuk kehidupan, ditemukan dalam berbagai wujud seperti cairan, es, dan uap.",
      wrongMessages: {
        H: "Salah! Satu atom Hidrogen saja tidak cukup untuk membentuk senyawa yang kita cari. Tambahkan lebih banyak elemen!",
        O: "Salah! Satu atom Oksigen saja tidak cukup untuk membentuk senyawa yang kita cari. Tambahkan lebih banyak elemen!",
        HH: "Salah! Dua atom Hidrogen saja tidak cukup. Anda membutuhkan satu atom Oksigen juga.",
        OO: "Salah! Dua atom Oksigen tidak membentuk senyawa yang kita cari. Tambahkan atom Hidrogen!",
        HO: "Salah! Kombinasi ini tidak lengkap untuk membentuk senyawa yang kita cari. Pastikan Anda menambahkan elemen yang diperlukan.",
        HHH: "Salah! Gabungan ini adalah gas Hidrogen (H₂), unsur yang banyak ditemukan di alam semesta, tetapi bukan senyawa yang sedang dicari. Cobalah kombinasi lain!",
        OOO: "Salah! Ini adalah ozon (O₃), senyawa yang ditemukan di atmosfer. Meskipun penting, ini bukan senyawa yang kita cari. Coba lagi!",
        HOO: "Salah! Kombinasi ini menghasilkan ozon (O₃), senyawa yang melindungi kita dari sinar UV di atmosfer, tetapi bukan senyawa yang dimaksud. Coba lagi!",
        HHO: "Salah! Kombinasi ini tidak membentuk air yang kita cari. Cobalah mengatur ulang urutannya!",
        OHH: "Salah! Urutannya tidak tepat, coba gunakan dua atom Hidrogen dan satu atom Oksigen dengan benar!",
        OOH: "Salah! Urutannya tidak sesuai untuk membentuk air. Pastikan dua Hidrogen dan satu Oksigen diatur dengan benar!",
        HOH: "Salah! Kombinasi ini masih salah urutan untuk membentuk H₂O. Coba lagi dengan menyesuaikan urutannya!",
      },
    },
    {
      //soal no 5
      elements: [
        { id: "H1", src: HImage, alt: "H" },
        { id: "Na1", src: NatriumImage, alt: "Na" },
        { id: "Cl1", src: ClroridaImage, alt: "Cl" },
      ],
      soal: "Aku sangat reaktif, aku bisa meledak jika terkena air, tetapi aku juga sangat penting untuk sel-sel tubuhmu. Siapakah aku?",
      slotCount: 2,
      correctMessage:
        "Benar! Natrium (Na) adalah zat yang penting untuk tubuhmu, ditemukan dalam berbagai wujud seperti air, minyak, dan kaca.",
      wrongMessages: {
        H: "Salah! Satu atom Hidrogen saja tidak membentuk senyawa yang kita cari. Tambahkan elemen lain!",
        Na: "Salah! Satu atom Natrium saja tidak cukup. Gabungkan dengan elemen lain untuk membentuk senyawa yang dimaksud!",
        Cl: "Salah! Satu atom Klorin saja tidak cukup untuk membentuk senyawa yang dicari. Tambahkan elemen lain!",
        HNa: "Salah! Kombinasi ini tidak membentuk senyawa yang dicari. Cobalah kombinasi lain!",
        ClH: "Salah! Kombinasi ini tidak membentuk senyawa yang dicari. Pastikan untuk memikirkan peran masing-masing elemen dengan benar!",
        ClCl: "Salah! Ini adalah klorin, tetapi bukan senyawa yang sedang kita cari. Cobalah lagi!",
        NaNa: "Salah! Kombinasi ini adalah logam natrium murni, tetapi bukan senyawa yang sedang dicari. Coba lagi!",
        HCl: "Salah! Ini adalah asam klorida, yang penting tetapi bukan senyawa yang sedang dicari. Coba lagi!",
      },
    },
  ] as {
    elements: { id: string; src: string; alt: string }[];
    soal: string;
    slotCount: number;
    correctMessage: string;
    wrongMessages: { [key: string]: string };
  }[];

  const handleDragStart = (
    e: React.DragEvent<HTMLImageElement>,
    alt: string
  ) => {
    e.dataTransfer.setData("text/plain", alt);
  };

  const handleDrop = (index: number, e: React.DragEvent<HTMLDivElement>) => {
    const draggedAlt = e.dataTransfer.getData("text/plain");
    const updatedSlots = [...slots];
    updatedSlots[index] = draggedAlt;
    setSlots(updatedSlots);
    checkCombination(updatedSlots);
    // tambahanbaru
    setIsDropped(true);
  };

  const checkCombination = (currentSlots: (string | null)[]) => {
    const countH = currentSlots.filter((item) => item === "H").length;
    const countO = currentSlots.filter((item) => item === "O").length;
    const countNa = currentSlots.filter((item) => item === "Na").length;
    const countCl = currentSlots.filter((item) => item === "Cl").length;
    const countK = currentSlots.filter((item) => item === "K").length;
    const countLi = currentSlots.filter((item) => item === "Li").length;
    const countMg = currentSlots.filter((item) => item === "Mg").length;
    const countCa = currentSlots.filter((item) => item === "Ca").length;

    if (countH === 2 && countO === 1) setResult(HHOImage);
    else if (countH === 3 && countO === 0) setResult(HHHImage);
    else if (countH === 0 && countO === 3) setResult(OOOImage);
    else if (countH === 1 && countO === 2) setResult(OOHImage);
    else if (countNa === 1 && countCl === 1) setResult(NaClImage);
    else if (countNa === 1 && countH === 1) setResult(NaHImage);
    else if (countCl === 1 && countH === 1) setResult(HClImage);
    else if (countK === 1) setResult(U_Kalium);
    else if (countLi === 1) setResult(U_Litium);
    else if (countMg === 1) setResult(U_Magnesium);
    else if (countCa === 1) setResult(U_Calsium);
    else if (countNa === 1) setResult(U_Natrium);
    else setResult(QuestionImage);
  };

  const handleReset = () => {
    setSlots([null, null, null]);
    setResult(QuestionImage);
  };
  const [isOpen, setIsOpen] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [userJawaban, setUserJawaban] = useState("");

  const checkAnswer = () => {
    const jawaban = slots.sort().join("");
    setUserJawaban(jawaban);
    console.log(jawaban);
    if (soalIndex === 0) {
      if (jawaban === "K") {
        setIsCorrect(true);
      } else {
        setIsCorrect(false);
      }
    } else if (soalIndex === 1) {
      if (jawaban === "Na") {
        setIsCorrect(true);
      } else {
        setIsCorrect(false);
      }
    } else if (soalIndex === 2) {
      if (jawaban === "Li") {
        setIsCorrect(true);
      } else {
        setIsCorrect(false);
      }
    } else if (soalIndex === 3) {
      if (jawaban === "HHO") {
        setIsCorrect(true);
      } else {
        setIsCorrect(false);
      }
    } else if (soalIndex === 4) {
      if (jawaban === "ClNa") {
        setIsCorrect(true);
      } else {
        setIsCorrect(false);
      }
    }
    setIsOpen(true);
    handleReset();
  };

  return (
    <div className="bg-[#6EABBA] min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-7xl p-4 w-full">
        {/* Judul */}
        <h1 className="text-[50px] sm:text-[60px] md:text-[90px] font-[Rockwell] font-bold text-white drop-shadow-lg text-center ">
          STUDI KASUS
        </h1>

        <div className="sm:h-[5px] md:h-[10px] mx-auto mb-4 pb-4">
          <div className="bg-black h-[10px]"></div>{" "}
        </div>

        {/* Soal */}
        <div className="bg-gray-200 p-4 border-8 border-[#C0C0C0] rounded-xl mb-6">
          <p className=" text-black font-tajawal text-[16px] md:text-[22px] font-bold ">
            {soal[soalIndex].soal}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-20">
          {/* Unsur-unsur */}
          <div className="grid grid-cols-3 gap-4 mb-6 col-span-2 lg:col-span-1  border-2 border-dashed border-[#144E5D] bg-[#458190] py-4 rounded-xl">
            {soal[soalIndex].elements.map((el) => (
              <div key={el.id} className="flex flex-col items-center">
                <img
                  src={el.src}
                  alt={el.alt}
                  draggable
                  onDragStart={(e) => handleDragStart(e, el.alt)}
                  className="cursor-grab hover:scale-110 w-24 h-24 object-contain"
                />
              </div>
            ))}
          </div>
          {/* Area Drop */}
          <div className="flex items-center justify-center gap-4 mb-6 col-span-2 lg:col-span-1 bg-white rounded-xl">
            {Array.from(Array(soal[soalIndex].slotCount).keys()).map(
              (_slot, index) => {
                return (
                  <div
                    key={index}
                    className="w-20 h-24 border-2 border-dashed border-[#144E5D] bg-[#87A1A8] rounded flex items-center justify-center"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => handleDrop(index, e)}
                  >
                    {slots[index] ? (
                      <img
                        src={getImage(slots[index])}
                        alt={slots[index]}
                        className="w-24 h-24 object-contain"
                      />
                    ) : (
                      <PlusCircle color="#144E5D" size={42} />
                    )}
                  </div>
                );
              }
            )}
            <p className="text-2xl">=</p>
            <div className="w-20 h-24 flex items-center justify-center">
              {/* Menampilkan gambar yang lebih besar setelah di-drop */}
              <img
                src={result}
                alt="Result"
                className={`object-contain ${isDropped ? "w-48" : "w-24"}`} // Ukuran besar jika sudah di-drop
              />
            </div>
          </div>
        </div>

        {/* Tombol Reset */}
        <div className="flex justify-between">
          <img
            className="h-16 hover:scale-110"
            src={ResetImage}
            onClick={handleReset}
          />
          <button onClick={checkAnswer}>
            <img className="h-16 hover:scale-110" src={CheckImage} />
          </button>
        </div>
      </div>
      {/* popup */}
      <Modal
        className={`modal-pop ${
          isOpen ? "" : "modal-pop-closing"
        } relative flex items-center justify-center bg-cover bg-center bg-no-repeat`}
        isOpen={isOpen}
        onRequestClose={() => {
          setIsOpen(false);
          if (isCorrect) {
            setSoalIndex((prevIndex) => prevIndex + 1);
          }
          setIsCorrect(false);
        }}
        style={{
          content: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "auto",
            height: "auto",
            border: "none",
            padding: 0,
            background: "transparent",
            overflow: "hidden",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
        }}
      >
        {/* Wrapper dengan ukuran custom */}
        <div
          className="relative flex flex-col items-center"
          style={{
            width: "100%",
            maxWidth: "500px",
            aspectRatio: "16/9",
            position: "relative",
          }}
        >
          {/* Gambar background */}
          <img
            src={isCorrect ? correctImage : wrongImage}
            alt={
              isCorrect ? "Popup Correct Background" : "Popup Wrong Background"
            }
            className="w-full h-full object-cover rounded-lg"
            style={{
              maxWidth: "100%",
              height: "auto",
              borderRadius: "15px",
            }}
          />
          {/* Konten modal */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-white bg-opacity-0 rounded-md">
            {/* <h2 className="text-2xl text-center">Hasil Jawaban</h2> */}
            {isCorrect ? (
              <p className="text-xl text-center text-white  font-bold ">
                {soal[soalIndex].correctMessage}
              </p>
            ) : (
              <p className="text-xl text-center text-white font-bold">
                {soal[soalIndex].wrongMessages[userJawaban] ||
                  "Pesan kesalahan tidak ditemukan"}
              </p>
            )}
          </div>
        </div>
      </Modal>
      {/* popupend */}
    </div>
  );
};

export default App;
