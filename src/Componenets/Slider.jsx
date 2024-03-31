import React, { useState, useEffect } from 'react';

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    'https://images.thedirect.com/media/article_full/spider-man-no-way-home-zendaya.jpg',
    'https://cdn.dribbble.com/users/3539351/screenshots/18739640/media/4a9af31f744d32510084e47b06f43509.jpg?resize=400x0',
   'https://slidechef.net/wp-content/uploads/2022/07/Thor-Love-Thunder-PPT.jpg',
   'https://w0.peakpx.com/wallpaper/652/371/HD-wallpaper-incredible-hulk-the-movie-incredible-hulk-posters-art-action-power-anger-cinema-adventure-monsters-rage-comic-hero-movies.jpg',
   'https://c4.wallpaperflare.com/wallpaper/823/324/1014/captain-america-the-first-avenger-captain-america-chris-evans-wallpaper-preview.jpg',
   'https://images.thedirect.com/media/article_full/doctor-strange-multiverse-of-madness-deadpool-mcu.jpg'
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000); 

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div style={{ fontSize: '0px', textAlign: 'center' }}>
      <img
        src={images[currentSlide]}
        alt={`Slide ${currentSlide + 1}`}
        style={{ width: '1300px', height: '400px'}}
      />
    </div>
  );
}

export default Slider;
