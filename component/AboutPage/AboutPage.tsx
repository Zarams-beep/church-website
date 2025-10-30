import "@/styles/aboutpage.css";
import "@/styles/homepage.css";
import HeroAbout from "./HeroAbout";
import AboutStory from "./AboutStory";
import TestimoniesSection from "./AboutTestimonies";
import TeamSection from "./AboutMeetTeam";
import Newletter from "../General/Newletter";
import Programs from "./AboutProgram";

export default function AboutPage (){
    return(
        <div className="aboutpage-main">
            <HeroAbout/>
            <AboutStory/>
            <Programs/>
            <TestimoniesSection/>
            <TeamSection/>

             <div className="parellex-scrolling">
                  <Newletter/>
                </div>
        </div>
    )
}