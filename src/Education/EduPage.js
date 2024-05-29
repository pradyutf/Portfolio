import EducationCard from "./EduCard";
import "./Education.css";


function EduPage() {
    return (
        <div className="EduPage">
        <div className="Edu-Left">
        <h1>Education</h1>
        
            <EducationCard
                period="2019 - 2021"
                degree="Master of Science in Computer Science"
                school="University of Southern California"
            />
            <EducationCard
                period="2015 - 2019"
                degree="Bachelor of Science in Computer Science"
                school="University of California, Los Angeles"
            />
            <EducationCard
                period="2011 - 2015"
                degree="High School Diploma"
                school="West High School"
            />
        </div>
                <div className="Edu-Right">
                <img src="https://dev-portfolio-template.netlify.app/static/media/eduOrange.c61dcfc3.svg" alt="Education Illustration" />
                </div>

        
        </div>
    );
}
export default EduPage;