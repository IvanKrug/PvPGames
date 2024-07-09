import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
   <div>
    asd
   </div>
  );
};

export default AboutUs;
