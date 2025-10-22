import "@/styles/aboutpage.css";
import "@/styles/homepage.css";
import HeroAbout from "./HeroAbout";
import AboutStory from "./AboutStory";
import DepartmentsSection from "./AboutDepartment";
import TestimoniesSection from "./AboutTestimonies";

export default function AboutPage (){
    return(
        <div className="aboutpage-main">
            <HeroAbout/>
            <AboutStory/>
            <DepartmentsSection/>
            <TestimoniesSection/>
        </div>
    )
}