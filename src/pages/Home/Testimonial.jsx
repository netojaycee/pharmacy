import React from "react";
import ReactStars from "react-rating-stars-component";
import Testimonials_1 from "@/assets/images/testimonials-1.jpg";
import Testimonials_2 from "@/assets/images/testimonials-2.jpg";
import Testimonials_3 from "@/assets/images/testimonials-3.jpg";
import Testimonials_4 from "@/assets/images/testimonials-4.jpg";
import Testimonials_5 from "@/assets/images/testimonials-5.jpg";
import Slider from "react-slick";

export default function Testimonial() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    // **Responsive adjustments for centering:**
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          // Centering for larger screens using `centerMode`
          centerMode: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const data = [
    {
      name: "Sarah Smith",
      message:
        "Medmova has been a lifesaver! Ordering my medication online is so much easier than dealing with crowded pharmacies. The delivery is fast and reliable, and the pharmacists are always helpful if I have any questions.",
      occupation: "Marketing Manager",
      image: Testimonials_1,
    },
    {
      name: "David Lee",
      message:
        "As a busy parent, Medmova makes managing my family's healthcare needs a breeze.  I can easily order prescriptions and over-the-counter medications for everyone without having to leave the house. The platform is user-friendly and saves me precious time.",
      occupation: "Software Engineer",
      image: Testimonials_2,
    },
    {
      name: "Emily Jones",
      message:
        "I was hesitant to order medications online at first, but Medmova has put my mind at ease. Their commitment to security and privacy is evident, and the quality of the medications is excellent. I highly recommend them for anyone who wants a convenient and reliable way to get their prescriptions filled.",
      occupation: "Registered Nurse",
      image: Testimonials_3,
    },
    {
      name: "Michael Brown",
      message:
        "Medmova's selection of medications is fantastic. I can easily find everything I need, from common prescriptions to more specialized products. The competitive pricing is another major benefit for me. Overall, Medmova is a one-stop shop for all my pharmaceutical needs.",
      occupation: "Accountant",
      image: Testimonials_4,
    },
    {
      name: "Olivia Williams",
      message:
        "The personalized service at Medmova is what truly sets them apart. Their pharmacists are knowledgeable and attentive, always providing valuable advice and recommendations. They go the extra mile to ensure I have a positive experience.",
      occupation: "Teacher",
      image: Testimonials_5,
    },
  ];

  return (
    <div className="bg-gray-200 w-full flex flex-col gap-3 pt-5 clip-custom-card lg:pb-8">
      <h2 className="text-xl lg:text-3xl font-bold leading-tight text-gray-800 text-center lg:mt-4 mt-10">
        What they are saying about us
      </h2>
      <div className="slider-container p-2">
        <Slider {...settings}>
          {data.map((item, index) => (
            <div
              className="p-2 flex flex-col gap-3 bg-white shadow-md items-center text-center rounded-md h-[270px] lg:h-[380px]"
              key={index}
            >
              <div className="">
                <ReactStars
                  count={5}
                  size={30}
                  activeColor="#06752E"
                  edit={false}
                  value="4"
                />
              </div>
              <p className="h-[35%] lg:h-[55%] mb-3 lg:mb-0 overflow-hidden text-ellipsis px-3 text-left text-[12px] md:text-[14px] lg:text-[16px]">
                {item.message}
              </p>
              <img src={item.image} alt="" className="rounded-full w-1/5 mx-auto" /> {/* Added `mx-auto` for centering */}
              <p className="font-semibold text-[12px] md:text-[14px] lg:text-[16px]">
                {item.name}
              </p>
              <p className="text-[10px] md:text-[13px]">
                {item.occupation}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
