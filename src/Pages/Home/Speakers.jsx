import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SpeakersSection = () => {
  const speakers = [
    {
      name: "John Doe",
      role: "AI Expert",
      image: "https://via.placeholder.com/300x300",
    },
    {
      name: "Jane Smith",
      role: "Tech Innovator",
      image: "https://via.placeholder.com/300x300",
    },
    {
      name: "Alice Johnson",
      role: "Entrepreneur",
      image: "https://via.placeholder.com/300x300",
    },
    {
      name: "Bob Williams",
      role: "Data Scientist",
      image: "https://via.placeholder.com/300x300",
    },
    {
      name: "Sarah Brown",
      role: "Engineer",
      image: "https://via.placeholder.com/300x300",
    },
  ];

  return (
    <section id="speakers" className="py-16 bg-black text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 font-Raleway">
          Meet Our Speakers
        </h2>
        <Swiper
          pagination={{ clickable: true }}
          loop
           // Loop qilib, tugmalarni olib tashlaymiz
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Pagination]} // faqat pagination
          className="w-full"
        >
          {speakers.map((speaker, index) => (
            <SwiperSlide key={index}>
              <div className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="h-64 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-semibold">{speaker.name}</h3>
                  <p className="text-sm text-gray-400">{speaker.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SpeakersSection;
