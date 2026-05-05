import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  // Biến isOpen để quản lý trạng thái đóng/mở của menu trên điện thoại
  const [isOpen, setIsOpen] = useState(false);

  // Hàm đảo ngược trạng thái (đang đóng thì mở, đang mở thì đóng)
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <a href="#top">My Portfolio<span></span></a>
      </div>

      {/* Cục này là cái icon 3 gạch (Hamburger) chỉ hiện trên điện thoại */}
      <div className="menu-icon" onClick={toggleMenu}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* Đổi icon thành dấu X khi menu đang mở */}
          {isOpen ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </>
          ) : (
            <>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </>
          )}
        </svg>
      </div>

      {/* Nếu isOpen là true thì gắn thêm class 'active' để trượt menu ra */}
      <ul className={isOpen ? "nav-links active" : "nav-links"}>
        {/* Khi bấm vào 1 link bất kỳ, tự động đóng menu lại (toggleMenu) */}
        <li><a href="#hero" onClick={toggleMenu}>Trang chủ</a></li>
        <li><a href="#skills" onClick={toggleMenu}>Kỹ năng</a></li>
        <li><a href="#projects" onClick={toggleMenu}>Dự án</a></li>
        <li><a href="#contact" onClick={toggleMenu}>Liên hệ</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  // Biến isOpen để quản lý trạng thái đóng/mở của menu trên điện thoại
  const [isOpen, setIsOpen] = useState(false);

  // Hàm đảo ngược trạng thái (đang đóng thì mở, đang mở thì đóng)
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <a href="#top">My Portfolio<span>.</span></a>
      </div>

      {/* Cục này là cái icon 3 gạch (Hamburger) chỉ hiện trên điện thoại */}
      <div className="menu-icon" onClick={toggleMenu}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* Đổi icon thành dấu X khi menu đang mở */}
          {isOpen ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </>
          ) : (
            <>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </>
          )}
        </svg>
      </div>

      {/* Nếu isOpen là true thì gắn thêm class 'active' để trượt menu ra */}
      <ul className={isOpen ? "nav-links active" : "nav-links"}>
        {/* Khi bấm vào 1 link bất kỳ, tự động đóng menu lại (toggleMenu) */}
        <li><a href="#hero" onClick={toggleMenu}>Trang chủ</a></li>
        <li><a href="#skills" onClick={toggleMenu}>Kỹ năng</a></li>
        <li><a href="#projects" onClick={toggleMenu}>Dự án</a></li>
        <li><a href="#contact" onClick={toggleMenu}>Liên hệ</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;