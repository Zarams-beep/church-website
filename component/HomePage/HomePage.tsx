import "@/styles/homepage.css";
import HomepageHero from "./Hero";
import MissionSection from "./missionVision";
import FeaturedSermon from "./featuredSermon";
import AboutMinistry from "./aboutMinistry";
import FromSeedToService from "./behindTheMission";
import UpcomingSermon from "./UpcomingSermon";
import Newletter from "../General/Newletter";
export default function HomePage (){
    return(
        <div className="homepage-main">
            <HomepageHero/>
            <MissionSection/>
            <FeaturedSermon/>
            <AboutMinistry/>
    <FromSeedToService />
    <UpcomingSermon/>

             <div className="parellex-scrolling">
      <Newletter/>
    </div>
  </div>
    )
}