function Resume() {
  return (
    <div className="resume-container">
      <h1 className="section-title">Evan Wells</h1>
      <p className="text-center">13 Beverly Road, North Bay, Ontario</p>
      <p className="text-center">
        <a href="mailto:evan.wells12@hotmail.com" className="resume-link">evan.wells12@hotmail.com</a> · (705) 499-5988
      </p>

      <hr />

      <section>
        <h2 className="resume-section-title">Profile</h2>
        <p>
          I am a dedicated Computer Science student with a strong enthusiasm for technology and innovation. My ability
          to learn quickly and solve problems methodically allows me to adapt to new challenges efficiently. With a
          solid foundation in mathematics and programming, I bring a curious, persistent, and detail-oriented mindset to
          every task I undertake.
        </p>
      </section>

      <section>
        <h2 className="resume-section-title">Experience</h2>

        <div className="resume-entry">
          <h3>Research Assistant – Nipissing University</h3>
          <p><em>Summer of 2024 and 2025</em></p>
          <ul>
            <li>Designed and developed a full-stack software application supporting theoretical research in multi-agent systems.</li>
            <li>Collaborated closely with faculty to formalize research concepts into working code.</li>
            <li>Enhanced my skills in back-end development, data modeling, and technical problem-solving.</li>
          </ul>
        </div>

        <div className="resume-entry">
          <h3>Teaching Assistant – Nipissing University</h3>
          <p><em>September 2024 – Present</em></p>
          <ul>
            <li>Provided academic support and guidance in undergraduate Computer Science courses.</li>
            <li>Assisted in instruction, led help sessions, and graded assignments for courses including Introduction to Computer Science, C++, Operating Systems, and Object-Oriented Programming.</li>
          </ul>
        </div>

        <div className="resume-entry">
          <h3>Technician’s Aid – Conseil Scolaire Franco-Nord</h3>
          <p><em>Summer of 2022 and 2023</em></p>
          <ul>
            <li>Maintained, organized, and deployed a variety of electronic devices throughout the school board.</li>
            <li>Assisted staff with technical issues and software installations.</li>
            <li>Supported IT operations including inventory management and office organization.</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="resume-section-title">Education</h2>

        <div className="resume-entry">
          <h3>École Secondaire Catholique Algonquin</h3>
          <p><em>June 2022</em></p>
          <p>High School Diploma – Graduated with a 90% average in Grade 12.</p>
        </div>

        <div className="resume-entry">
          <h3>Honours B.Sc. in Computer Science – Nipissing University</h3>
          <p><em>September 2022 – Present (3rd Year)</em></p>
          <p>
            Over the course of my degree, I’ve gained substantial knowledge in areas such as distributed systems,
            machine learning, and neural networks. I’ve developed proficiency in languages including Java, C++, Python,
            and JavaScript, and applied them across a wide range of academic and personal projects.
          </p>
        </div>
      </section>

      <section>
        <h2 className="resume-section-title">Skills</h2>
        <ul className="skills-list">
          <li> ◦ Bilingual (English and French)</li>
          <li> ◦ Strong programming fundamentals</li>
          <li> ◦ Effective problem-solving</li>
          <li> ◦ Collaborative team member</li>
        </ul>
      </section>

      <section>
        <h2 className="resume-section-title">Publications</h2>
        <p>
          <strong>Optimizing Ticket Assignment through Group Role Assignment with Agents' Busyness Degree</strong>, IEEE
          Systems Conference (SysCon), 2025
        </p>
        <p>
          <em>Authors: Evan Wells, Dr. Haibin Zhu</em><br />
          Contributed to the development of optimization strategies for IT ticket assignments using the E-CARGO framework and agent busyness metrics.
        </p>
      </section>
    </div>
  );
}

export default Resume;
