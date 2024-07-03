import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import ImageSlider from '../../Components/ImageSlider/ImageSlider.jsx';
import './MainPage.css'

function MainPage() {
  const { t, i18n } = useTranslation();

  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await fetch('../../../IMGSLIDER.json');
        const data = await response.json();
        setSlides(data[i18n.language] || []); // Ensure slides is set to an array, even if data[i18n.language] is undefined
      } catch (error) {
        console.error('Error fetching the slides data:', error);
      }
    };

    fetchSlides();
  }, [i18n.language]);


  return (
    <div id='body'>
      <section className="sectionslider">
        {slides.length > 0 ? <ImageSlider slides={slides} /> : <p>Loading...</p>}
      </section>
    </div>
  );
}

export default MainPage;
