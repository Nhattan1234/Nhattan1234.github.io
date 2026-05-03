import React from 'react';
import './Skills.css';

function Skills() {
  // Dùng mảng để quản lý dữ liệu, sau này muốn thêm kỹ năng chỉ cần gõ thêm vào đây là web tự cập nhật
const skillsList = [
    { name: 'HTML5, CSS3 & ReactJS', desc: 'Xây dựng giao diện Web hiện đại, mượt mà và chuẩn Responsive.' },
    { name: 'Java', desc: 'Lập trình hướng đối tượng (OOP) & phát triển ứng dụng.' },
    { name: 'Python', desc: 'Phát triển kịch bản Automation, Data Scraping & Bot tự động.' },
    { name: 'C++ & ROS 2', desc: 'Lập trình nhúng, xử lý thuật toán Kinematics & điều khiển Robot.' },
    { name: 'Node.js', desc: 'Xây dựng hệ thống Backend & các công cụ xử lý dữ liệu.' },
    { name: 'Lua & Scripting', desc: 'Game Modding, tùy biến logic & tối ưu hiệu năng phần mềm.' },
    { name: 'Media Automation', desc: 'Tự động hóa luồng Livestream 24/7 (OBS, Twitch).' },
    { name: 'Git & Cloud', desc: 'Quản lý mã nguồn (GitHub) & triển khai dự án (Render).' },
  ];

  return (
    <section className="skills-section" id="skills">
      <h2 className="section-title">Kỹ Năng & Công Nghệ</h2>
      <div className="skills-grid">
        {skillsList.map((skill, index) => (
          <div key={index} className="skill-card">
            <h3>{skill.name}</h3>
            <p>{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;