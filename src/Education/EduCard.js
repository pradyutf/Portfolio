import { FaGraduationCap } from "react-icons/fa";
function EducationCard({ period, degree, school }) {
  return (
    <div className="EduCard">
      <div>
        <FaGraduationCap />
      </div>
      <div>
        <h6>{period}</h6>
        <h4>{degree}</h4>
        <h5>{school}</h5>
      </div>
    </div>
  );
}

export default EducationCard;
