import "@/styles/homepage.css";
import "@/styles/community.css";
import CommunityUs from "@/component/Communitypage/HeroCommunity";
import CommunityAlbum from "@/component/Communitypage/CommunityAlbum";
import Newletter from "@/component/General/Newletter";
import ImpactStats from "@/component/Communitypage/ImpactStats";
import DonationSection from "@/component/Communitypage/DonationSection";
export const metadata = {
  title: "Church Community Page",
  description: "This is Community Page",
};

export default function CommunityPage() {

    return(
        <div className="community-section">
<CommunityUs/>
<CommunityAlbum/>
<ImpactStats/>
<DonationSection/>
<div className="parellex-scrolling">
                  <Newletter/>
                </div>
        </div>
    )
}