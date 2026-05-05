import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-wrapper">
        <h2 className="section-title contact-title">Liên hệ</h2>
        <p className="contact-desc">
          Bạn có ý tưởng muốn thực hiện, hãy giao cho tôi, tôi sẽ biến nó thành sự thật.
        </p>

        {/* --- FORM NHẬP THÔNG TIN --- */}
        <div className="contact-form-container">
          <form action="https://formsubmit.co/nguyenthitanh1309@gmail.com" method="POST" className="main-contact-form">
            <input type="hidden" name="_captcha" value="false" />
            
            <div className="form-row">
              <div className="input-field">
                <label>Họ tên</label>
                <input type="text" name="name" placeholder="nhập họ và tên của bạn" required />
              </div>
              <div className="input-field">
                <label>Email</label>
                <input type="email" name="email" placeholder="email@example.com" required />
              </div>
            </div>

            <div className="input-field">
              <label>Mô tả dự án</label>
              <textarea name="message" placeholder="Mô tả sơ qua về dự án của bạn..." rows="5" required></textarea>
            </div>

            <button type="submit" className="form-submit-btn">Gửi yêu cầu tư vấn</button>
          </form>
        </div>

        {/* --- GIỮ NGUYÊN 4 CARD LIÊN HỆ --- */}
        <div className="contact-grid">
          <a href="mailto:nguyenthitanh1309@gmail.com" className="contact-card">
            <div className="icon-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </div>
            <div className="contact-info">
              <span className="contact-label">email</span>
              <span className="contact-value">nguyenthitanh1309@gmail.com</span>
            </div>
          </a>

          <a href="#" className="contact-card">
            <div className="icon-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </div>
            <div className="contact-info">
              <span className="contact-label">instagram</span>
              <span className="contact-value">nhattan1707</span>
            </div>
          </a>

          <a href="#" className="contact-card">
            <div className="icon-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </div>
            <div className="contact-info">
              <span className="contact-label">github</span>
              <span className="contact-value">nhattan1234</span>
            </div>
          </a>

            {/* Card: Zalo */}
            <a href="https://zalo.me/0123456789" target="_blank" rel="noreferrer" className="contact-card">
            <div className="icon-box">
                {/* SVG vẽ icon Zalo */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 11.536C22 15.632 18.571 18.96 14.156 18.96C13.297 18.96 12.474 18.832 11.71 18.591L8.526 21L8.513 18.172C5.641 17.158 3.688 14.654 3.688 11.536C3.688 7.44 7.117 4.112 11.532 4.112C15.946 4.112 20.375 7.44 20.375 11.536H22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.5 9H14L9.5 14H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            <div className="contact-info">
                <span className="contact-label">zalo</span>
                <span className="contact-value">0378683825</span> 
            </div>
            </a>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <span>© 2026 Nhật Tân</span>
          <span>built with <span className="heart">♥</span> in Sài Gòn</span>
        </div>
      </footer>
    </section>
  );
}

export default Contact;