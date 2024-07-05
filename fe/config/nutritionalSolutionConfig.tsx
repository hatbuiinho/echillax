import { Slide } from "@/components/ui/carousel/EmblaCarousel";

import babySolution1 from "@/assets/image/solutions/baby/x1.“MẸO BỎ TÚI” CHO MẸ KHI TRẺ KHÔNG ĐI “Ị”.jpg";
import babySolution2 from "@/assets/image/solutions/baby/x2.5 BÍ QUYẾT CHO BÉ MỘT CHIẾC “BỤNG KHỎE”.jpg";
import babySolution3 from "@/assets/image/solutions/baby/x3.7 THỰC PHẨM GIÀU CANXI CHO TRẺ CHIỀU CAO VƯỢT TRỘI.jpg";
import babySolution4 from "@/assets/image/solutions/baby/x4.9 CÁCH TĂNG CHIỀU CAO CHO TRẺ SƠ SINH.jpg";
import babySolution5 from "@/assets/image/solutions/baby/x5.BÉ KHÔNG CHỊU BÚ MẸ PHẢI LÀM SAO.jpg";
import babySolution6 from "@/assets/image/solutions/baby/x6.BỆNH CHÀM SỮA Ở TRẺ VÀ PHƯƠNG PHÁP ĐIỀU TRỊ.jpg";
import babySolution7 from "@/assets/image/solutions/baby/x7.BÍ QUYẾT ĐỂ BÉ NGỦ XUYÊN ĐÊM - MẸ “NHÀN TÊNH”.jpg";
import babySolution8 from "@/assets/image/solutions/baby/x8.C N BẰNG HỆ VI SINH ĐƯỜNG RUỘT CHO TRẺ NHƯ THẾ NÀO.jpg";
import babySolution9 from "@/assets/image/solutions/baby/x9.ĐƯỜNG RUỘT KHỎE MẠNH - TĂNG C N VỮNG VÀNG.jpg";
import babySolution10 from "@/assets/image/solutions/baby/x10.Giải pháp dinh dưỡng 15_12_2022_1.jpg";
import babySolution11 from "@/assets/image/solutions/baby/x11.Giải pháp dinh dưỡng 15_12_2022_2.jpg";
import babySolution12 from "@/assets/image/solutions/baby/x12.Giải pháp dinh dưỡng 15_12_2022_3.jpg";
import babySolution13 from "@/assets/image/solutions/baby/x13.Giải pháp dinh dưỡng 15_12_2022_4.jpg";
import babySolution14 from "@/assets/image/solutions/baby/x14.GIẬT MÌNH Ở TRẺ SƠ SINH KHI NGỦ VÀ CÁCH KHẮC PHỤC.jpg";
import babySolution15 from "@/assets/image/solutions/baby/x15.HỆ TIÊU HÓA NÃO BỘ THỨ 2 CỦA CƠ THỂ TRẺ.jpg";
import babySolution16 from "@/assets/image/solutions/baby/x16.KHI NÀO NÊN ĐỔI SỮA CHO BÉ VÀ LƯU Ý KHI ĐỔI SỮA CHO BÉ.jpg";
import babySolution17 from "@/assets/image/solutions/baby/x17.LỜI KHUYÊN VỀ CHẾ ĐỘ ĂN CHO TRẺ 4 – 5 TUỔI.jpg";
import babySolution18 from "@/assets/image/solutions/baby/x18.LỰA CHỌN SỮA MÁT CHO CON NHƯ THẾ NÀO.jpg";
import babySolution19 from "@/assets/image/solutions/baby/x19.MẸ CÓ BIẾT CÁC GIAI ĐOẠN PHÁT TRIỂN CHIỀU CAO CỦA CON.jpg";
import babySolution20 from "@/assets/image/solutions/baby/x20.NHẬN BIẾT BÉ CHẬM TĂNG CÂN VÀ PHƯƠNG PHÁP TĂNG CÂN KHOA HỌC.jpg";

import momSolution1 from "@/assets/image/solutions/mom/x1.10 THỰC PHẨM BỔ SUNG SẮT CHO MẸ BẦU.jpg";
import momSolution2 from "@/assets/image/solutions/mom/x2.ẢNH HƯỞNG KHI MẸ BẦU BỊ MẤT NGỦ.jpg";
import momSolution3 from "@/assets/image/solutions/mom/x3.BỔ SUNG CANXI CHO MẸ BẦU NHƯ THẾ NÀO.jpg";
import momSolution4 from "@/assets/image/solutions/mom//x4.DINH DƯỠNG CỦA MẸ BẦU THẾ NÀO LÀ HỢP LÝ.jpg";
import momSolution5 from "@/assets/image/solutions/mom/x5.GIẢI PHÁP TĂNG CƯỜNG MIỄN DỊCH THAI KỲ CHO MẸ BẦU.jpg";
import momSolution6 from "@/assets/image/solutions/mom/x6.MẸ UỐNG SỮA BẦU NHƯ THẾ NÀO ĐỂ PHÁT HUY TỐI ĐA HIỆU QUẢ.jpg";
import momSolution7 from "@/assets/image/solutions/mom/x7.PHƯƠNG PHÁP GIẢM TÁO BÓN CHO MẸ BẦU.jpg";
import momSolution8 from "@/assets/image/solutions/mom/x8.TIỂU ĐƯỜNG THAI KỲ VÀ NHỮNG ĐIỀU MẸ CẦN LƯU Ý.jpg";

export type NutritionalSolution = {
  title: string;
  solutions: SolutionCard[];
};

export type SolutionCard = Slide;

export const nutionalSolutionConfig: NutritionalSolution[] = [
  {
    title: "Dinh dưỡng bé yêu",
    solutions: [
      {
        image: babySolution2,
      },
      {
        image: babySolution3,
      },
      {
        image: babySolution4,
      },
      {
        image: babySolution1,
      },
      {
        image: babySolution5,
      },
      {
        image: babySolution6,
      },
      {
        image: babySolution7,
      },
      {
        image: babySolution8,
      },
      {
        image: babySolution9,
      },
      {
        image: babySolution10,
      },
      {
        image: babySolution11,
      },
      {
        image: babySolution12,
      },
      {
        image: babySolution13,
      },
      {
        image: babySolution14,
      },
      {
        image: babySolution15,
      },
      {
        image: babySolution16,
      },
      {
        image: babySolution17,
      },
      {
        image: babySolution18,
      },
      {
        image: babySolution19,
      },
      {
        image: babySolution20,
      },
    ],
  },
  {
    title: "Dinh dưỡng mẹ bầu",
    solutions: [
      {
        image: momSolution1,
      },
      {
        image: momSolution2,
      },
      {
        image: momSolution3,
      },
      {
        image: momSolution4,
      },
      {
        image: momSolution5,
      },
      {
        image: momSolution6,
      },
      {
        image: momSolution7,
      },
      {
        image: momSolution8,
      },
    ],
  },
  // {
  //   title: "Dinh dưỡng người lớn tuổi",
  //   solutions: [],
  // },
];
