import { FaCamera, FaVideo, FaEnvelope, FaPen, FaCode, FaMobileAlt } from "react-icons/fa";
import ServBox from "./ServBox";

function ServicePage() {
  return (
    <div>
        <h1>My Services</h1>
        <ServBox service=<FaCamera/> description="Capturing moments that last a lifetime." />
        <ServBox service=<FaVideo/> description="Creating videos that tell your story." />
        <ServBox service=<FaEnvelope/> description="Designing emails that get results." />
        <ServBox service=<FaPen/> description="Writing content that engages your audience." />
        <ServBox service=<FaCode/> description="Building websites that stand out." />
        <ServBox service=<FaMobileAlt/> description="Developing apps that make a difference." />
    </div>
  );
}

export default ServicePage;