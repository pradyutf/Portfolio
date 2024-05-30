
import { FaSuitcase } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa';
function ExperienceCard({ period, position, company }) {
  return (
    <div className='EduCard'>
      <div className='ExpIcon'>
        <FaCode />
      </div>
      <div className='EDUPara'>
        <h6 className='ECPeriod'>{period}</h6>
        <h4 className='ECDegree'>{position}</h4>
        <h5 className='ECSchool'>{company}</h5>
      </div>
    </div>
  );
}

export default ExperienceCard;