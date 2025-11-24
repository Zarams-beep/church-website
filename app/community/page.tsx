import "@/styles/homepage.css";
import "@/styles/community.css";
import CommunityUs from "@/component/Communitypage/HeroCommunity";
import CommunityAlbum from "@/component/Communitypage/CommunityAlbum";
import Newletter from "@/component/General/Newletter";
export const metadata = {
  title: "Church Community Page",
  description: "This is Community Page",
};

export default function CommunityPage() {

    return(
        <div className="community-section">
<CommunityUs/>
<CommunityAlbum/>

<div className="parellex-scrolling">
                  <Newletter/>
                </div>
        </div>
    )
}