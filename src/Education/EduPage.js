import EducationCard from "./EduCard";
import "./Education.css";


function EduPage() {
    return (
        <div className="EduPage">
        <div className="Edu-Left">
        <h1 className="Edu-heading">Education</h1>
        
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
                    <dotlottie-player src="https://lottie.host/3b98fe78-d6d2-4a5e-8b76-3a79d46dbde6/EsJGfabViG.json" background="transparent" speed="1" style={{width: '35vw', height: '35vw'}} loop autoplay></dotlottie-player>
                </div>
        </div>
    );
}
export default EduPage;