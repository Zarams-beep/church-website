import "@/styles/aboutpage.css";
import "@/styles/homepage.css";
import HeroAbout from "./HeroAbout";
import AboutStory from "./AboutStory";
import DepartmentsSection from "./AboutDepartment";

export default function AboutPage (){
    return(
        <div className="aboutpage-main">
            <HeroAbout/>
            <AboutStory/>
            <DepartmentsSection/>
        </div>
    )
}