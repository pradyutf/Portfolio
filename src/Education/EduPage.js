import EducationCard from "./EduCard";
import "./Education.css";


function EduPage() {
    return (
        <div className="EduPage" id="Education">
        <div className="Edu-Left">
        <h1 className="Edu-heading">Education</h1>
        
            <EducationCard
                period="2023-2026"
                degree="Bachelor of Science in Computer Science"
                school="Birla Institute of Technology and Science, Pilani"
            />
            <EducationCard
                period="2023-2027"
                degree="Masters of Science in Computer Science"
                school="WOOLF University, Europe"
            />
            <EducationCard
                period="2023 - 2027"
                degree="Undergrad Program in Computer Science"
                school="Scaler School of Technology, Bangalore"
            />
        </div>
                <div className="Edu-Right">
                    <dotlottie-player src="https://lottie.host/3b98fe78-d6d2-4a5e-8b76-3a79d46dbde6/EsJGfabViG.json" background="transparent" speed="1" style={{width: '35vw', height: '35vw'}} loop autoplay></dotlottie-player>
                </div>
        </div>
    );
}
export default EduPage;