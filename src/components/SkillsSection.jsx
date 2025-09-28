import React from 'react'
import Slider from 'react-slick';
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from 'react-i18next';

export default function ReviewsSection() {
  const { t } = useTranslation();

  const reviews = [
    { name: t('review1_name'), text: t('review1_text'), rating: 5 },
    { name: t('review2_name'), text: t('review2_text'), rating: 5 },
    { name: t('review3_name'), text: t('review3_text'), rating: 4 },
    { name: t('review4_name'), text: t('review4_text'), rating: 5 },
    { name: t('review5_name'), text: t('review5_text'), rating: 5 },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="py-16 px-6  text-center">
      <style>{`
        .slick-prev:before, .slick-next:before {
          color: black !important;
          font-size: 30px !important;
        }
        .slick-prev, .slick-next {
          width: 50px !important;
          height: 50px !important;
          z-index: 10 !important;
        }
      `}</style>
      <h2 className="text-4xl font-bold mb-12 text-gray-800">{t('Customer Reviews')}</h2>
      <div className="max-w-4xl mx-auto shadow-2xl rounded-2xl px-6">
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-10 rounded-2xl   mx-4">
              <div className="text-6xl text-purple-200 mb-4">“</div>
              <div className="flex justify-center mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-xl" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 text-lg italic leading-relaxed">"{review.text}"</p>
              <p className="text-gray-900 font-bold text-xl">- {review.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}
