import { FaGraduationCap } from "react-icons/fa";
function EducationCard({ period, degree, school }) {
  return (
    <div className="EduCard">
      <div className="ECIcon">
        <FaGraduationCap />
      </div>
      <div className="EDUPara">
        <h6 className="ECPeriod">{period}</h6>
        <h4 className="ECDegree">{degree}</h4>
        <h5 className="ECSchool">{school}</h5>
      </div>
    </div>
  );
}

export default EducationCard;
