import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-wrapper">
        <h2 className="section-title about-title">Hồ Sơ Cá Nhân</h2>
        
        <div className="about-container">
          {/* Cột trái */}
          <div className="about-content">
            <p>
              Với tư duy của một Technical Freelancer, tôi chuyên xây dựng các hệ thống tự động hóa, lập trình Robot và phát triển ứng dụng Web hiện đại. Tôi thích giải quyết những bài toán kỹ thuật phức tạp và biến ý tưởng thành sản phẩm thực tế.
            </p>
            <p>
              Khi không code, tôi thường tìm hiểu về phần cứng, viết script tối ưu game, hoặc đơn giản là nhâm nhi cà phê ở Sài Gòn để kiếm job trên các trang freelancer Việt Nam.
            </p>
            
            <div className="stats-grid">
              <div className="stat-box">
                <h3>2+</h3>
                <p>năm kinh nghiệm</p>
              </div>
              <div className="stat-box">
                <h3>12+</h3>
                <p>dự án hoàn thành</p>
              </div>
              <div className="stat-box">
                <h3>10+</h3>
                <p>khách hàng hài lòng</p>
              </div>
            </div>
          </div>

          {/* Cột phải: Terminal chống lỗi */}
          <div className="about-terminal">
            <div className="terminal-header">
              <div className="mac-buttons">
                <span className="close-btn"></span>
                <span className="min-btn"></span>
                <span className="max-btn"></span>
              </div>
              <div className="terminal-title">profile.json</div>
            </div>
            <div className="terminal-body">
              <div className="command"><span className="dollar">$</span> cat profile.json</div>
              
              {/* Code JSON được tách dòng an toàn */}
              <div className="code-block">
                <div>{'{'}</div>
                <div className="code-line">&nbsp;&nbsp;<span className="json-key">"name"</span>: <span className="json-string">"Nhật Tân"</span>,</div>
                <div className="code-line">&nbsp;&nbsp;<span className="json-key">"role"</span>: <span className="json-string">"Technical Freelancer"</span>,</div>
                <div className="code-line">&nbsp;&nbsp;<span className="json-key">"location"</span>: <span className="json-string">"Ho Chi Minh City"</span>,</div>
                <div className="code-line">&nbsp;&nbsp;<span className="json-key">"available"</span>: <span className="json-bool">true</span>,</div>
                <div className="code-line">&nbsp;&nbsp;<span className="json-key">"coffee_per_day"</span>: <span className="json-number">3</span></div>
                <div>{'}'}</div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;