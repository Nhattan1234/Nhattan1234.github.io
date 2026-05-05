import React from 'react';
import './Hero.css'; // Import file CSS vào đây

function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-container">
        
        {/* Phần nội dung chữ bên trái */}
        <div className="hero-content">
          <p className="greeting">C L E A R  C O D E  •  S M A R T  B O T S</p>
          <h1 className="title">
            Xin chào, mình là <br/><span className="highlight">Nhật Tân</span>
          </h1>
          <h2 className="subtitle">Technical Freelancer & Developer</h2>
          <p className="description">
            Chuyên gia tự động hóa và phát triển phần mềm. Mình biến những bài toán kỹ thuật phức tạp tích hợp vào các hệ thống Robot, viết tool Automation và tạo ra những trang web theo yêu cầu.
          </p>
          <div className="button-group">
            <a href="#project" className="primary-btn">Xem Dự Án</a>
            <a href="#contact" className="secondary-btn">Liên Hệ Ngay</a>
          </div>
        </div>

        {/* Phần khung ảnh bên phải */}
        <div className="hero-image">
          {/* Chỗ này sau này bạn dùng thẻ <img> để chèn hình bạn đang code hoặc cầm linh kiện nhé */}
          <div className="image-placeholder"></div>
        </div>

      </div>
    </section>
  );
}

export default Hero;