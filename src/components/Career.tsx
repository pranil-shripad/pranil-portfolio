import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Junior Security Analyst</h4>
                <h5>SOC Operations</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Monitored security events using SIEM tools, triaged alerts, and
              performed initial incident analysis. Contributed to vulnerability
              assessments and security awareness training programs.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Penetration Tester</h4>
                <h5>Offensive Security</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Conducted web application and network penetration tests for
              enterprise clients. Delivered detailed vulnerability reports with
              remediation guidance and performed red team assessments.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Cybersecurity Consultant</h4>
                <h5>Security Advisory</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Leading security assessments across cloud and on-premise
              environments. Designing security architectures, managing incident
              response operations, and advising organizations on compliance and
              risk management strategies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
