
import { FaSuitcase } from 'react-icons/fa';
function ExperienceCard({ period, position, company }) {
  return (
    <div>
      <div>
        <FaSuitcase />
      </div>
      <div>
        <h6>{period}</h6>
        <h4>{position}</h4>
        <h5>{company}</h5>
      </div>
    </div>
  );
}

export default ExperienceCard;