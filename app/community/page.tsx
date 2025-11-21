import "@/styles/homepage.css";
import "@/styles/community.css";
import CommunityUs from "@/component/Communitypage/HeroCommunity";
import CommunityAlbum from "@/component/Communitypage/CommunityAlbum";
export default function CommunityPage() {

    return(
        <div className="community-section">
<CommunityUs/>
<CommunityAlbum/>
        </div>
    )
}