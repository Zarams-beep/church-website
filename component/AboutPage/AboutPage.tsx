import "@/styles/aboutpage.css";
import "@/styles/homepage.css";
import HeroAbout from "./HeroAbout";
import AboutStory from "./AboutStory";

export default function AboutPage (){
    return(
        <div className="aboutpage-main">
            <HeroAbout/>
            <AboutStory/>
        </div>
    )
}