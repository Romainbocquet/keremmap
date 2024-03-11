import React from 'react';
import '../assets/css/HouseDetails.css';
import crossSvg from '../assets/picto-bank/cross-svgrepo-com.svg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HouseDetails({ house, onClose }) {

  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="sidebar">
      <div className='sidebar-header'>
        <div className='sidebar-title'>
          <h3>{house.title}</h3>
          <div className={`tag-color ${house.color}`}></div>
        </div>
        <div className='close-sidebar' onClick={onClose}>
          <img src={crossSvg} alt="Nom de l'image" />
        </div>
      </div>
      <div className='carousel-container'>
      {/* Vérifier si house.imageLinks a une seule image */}
      {house.imageLinks.length === 1 ? (
        <div className='carousel-elt'>
          <img src={house.imageLinks[0]} alt={`Image 0`} />
        </div>
      ) : (
        <Slider {...settings}>
          {house.imageLinks.map((link, index) => (
            <div key={index} className='carousel-elt'>
              <img src={link} alt={`Image ${index}`} />
            </div>
          ))}
        </Slider>
      )}
      </div>
      <p>{house.description}</p>
    </div>
  );
}

export default HouseDetails;