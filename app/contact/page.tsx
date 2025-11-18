import FormContact from "@/component/ContactPage/FormContact";
import OtherContact from "@/component/ContactPage/OtherContact";

export default function ContactUs (){
    return(
        <div className="contactpage-main">
            <FormContact/>
            <OtherContact/>
        </div>
    )
}