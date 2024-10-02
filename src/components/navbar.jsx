import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll'; 

const Navbar = () => {
  const [navBackground, setNavBackground] = useState('bg-transparent'); 

 
  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      const aboutOffsetTop = aboutSection ? aboutSection.offsetTop : 0;

      if (window.scrollY >= aboutOffsetTop - 100) {
        setNavBackground('bg-white shadow-lg');
      } else {
        setNavBackground('bg-transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 transition-colors duration-300 ${navBackground}`}>
      <div className="text-black text-2xl font-semibold">
        Dr. Resmi's Counseling
      </div>
      <div className="flex space-x-4 text-black">
        <Link
          activeClass="text-yellow-300"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="hover:text-yellow-300 cursor-pointer"
        >
          About
        </Link>
        <Link
          activeClass="text-yellow-300"
          to="treatments"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="hover:text-yellow-300 cursor-pointer"
        >
          Treatments
        </Link>
        <Link
          activeClass="text-yellow-300"
          to="testimonials"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="hover:text-yellow-300 cursor-pointer"
        >
          Testimonials
        </Link>
        <Link
          activeClass="text-yellow-300"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="hover:text-yellow-300 cursor-pointer"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
