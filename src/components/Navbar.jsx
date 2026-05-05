import React from 'react';
import './Navbar.css'; 

function Navbar() {
  return (
    <nav className="navbar">
      {/* Cụm Logo bên trái */}
      <div className="nav-logo">
        <a href="#top">My Portfolio<span></span></a>
      </div>

      {/* Cụm Nút bấm bên phải */}
      <ul className="nav-links">
        <li><a href="#hero">Trang chủ</a></li>
        <li><a href="#skills">Kỹ năng</a></li>
        <li><a href="#projects">Dự án</a></li>
        <li><a href="#contact">Liên hệ</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;