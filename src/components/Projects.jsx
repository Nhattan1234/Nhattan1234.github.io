import React from 'react';
import './Projects.css';

function Projects() {
  const projectsList = [
    {
      title: 'Nền tảng Luyện Tiếng Anh AI',
      description: 'Phát triển website học ngoại ngữ tích hợp AI, clone chuẩn xác các chức năng luyện nói từ senglish.net. Xây dựng luồng đăng ký tài khoản với xác thực Email OTP và hệ thống thanh toán qua mã QR.',
      tech: ['React', 'Node.js', 'AI Integration', 'Payment API'],
      link: '#'
    },
    {
      title: 'Auto Stream Pro',
      description: 'Phát triển công cụ tự động hóa (được đóng gói thành file .exe) hỗ trợ phát sóng Livestream 24/7 trên nền tảng Twitch, kết hợp cấu hình cùng phần mềm OBS.',
      tech: ['Python', 'PyInstaller', 'OBS', 'Twitch API'],
      link: '#'
    },
    {
      title: 'Xe Robot Tự Hành Mecanum',
      description: 'Điều khiển động học Robot bánh Mecanum kết hợp Computer Vision. Hệ thống có khả năng nhận dạng vật thể theo thời gian thực (người qua đường, biển báo giao thông) để hỗ trợ điều hướng tự động và tránh vật cản.',
      tech: ['C++', 'ROS 2', 'OpenCV', 'YOLO / AI'],
      link: '#'
    },
    {
      title: 'Hệ thống Cánh Tay Robot Thông Minh',
      description: 'Lập trình điều khiển cánh tay máy ứng dụng động học ngược (Inverse Kinematics). Tích hợp Computer Vision nhận dạng, phân loại và gắp vật thể được chỉ định. Bổ sung tính năng điều khiển cánh tay theo thời gian thực thông qua cử chỉ (Gesture Control).',
      tech: ['Python', 'MediaPipe', 'OpenCV', 'Kinematics'],
      link: '#'
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">Dự Án Nổi Bật</h2>
      <div className="projects-grid">
        {projectsList.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((item, i) => (
                <span key={i} className="tech-tag">{item}</span>
              ))}
            </div>
            <a href="#contact" className="project-link">Thảo luận về dự án này <span>&rarr;</span></a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;