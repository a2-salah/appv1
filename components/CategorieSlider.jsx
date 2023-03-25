import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css";
import Globe from "../public/assets/globe.jpg";
import Helping from "../public/assets/helping.jpg";
import Housing from "../public/assets/housing.jpg";
import Travel from "../public/assets/travel.jpg";
import Image from "next/image";
import Button from "./Button";

const categories = [
  {
    name: "Program 1",
    description: "",
    image: Globe,
    btnText: "Learn More",
  },
  {
    name: "Program 2",
    description: "",
    image: Helping,
    btnText: "Learn More",
  },
  {
    name: "Program 3",
    description: "",
    image: Housing,
    btnText: "Learn More",
  },
  {
    name: "Program 4",
    description: "",
    image: Travel,
    btnText: "Learn More",
  },
];

const CategorieSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      navigation={true}
      modules={[Navigation]}
      breakpoints={{
        700: {
          slidesPerView: 1,
        },
      }}
      className="categorieSlider min-h-[660px]"
    >
      {categories.map((categorie, index) => {
        return (
          <SwiperSlide
            className="bg-slate-300 shadow-md min-h-[480px] rounded-md py-16 px-8 mt-10"
            key={index}
          >
            <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:justify-start md:gap-16">
              <div className="w-full md:w-1/2">
                <Image
                  src={categorie.image}
                  height={600}
                  width={800}
                  objectFit="cover"
                  alt={categorie.name}
                />
              </div>
              <div className="w-full md:w-1/2">
                <div className="text-center md:text-left">
                  <h2 className="mb-2 text-3xl font-bold text-gray-800">
                    {categorie.name}
                  </h2>
                  <div className="w-16 h-1 mx-auto mb-4 bg-green-600 md:mx-0"></div>
                  <p className="mb-4 text-lg text-gray-600">
                    {categorie.description}
                  </p>
                  <Button link="#" text={categorie.btnText} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CategorieSlider;
