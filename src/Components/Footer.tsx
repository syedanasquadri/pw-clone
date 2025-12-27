import { InstaIcon } from "../icons/InstaIcon"
import { LinkedInIcon } from "../icons/LinkedInIcon"
import { PwIcon } from "../icons/PwIcon"
import { TwitterIcon } from "../icons/TwitterIcon"

export const Footer = () => {
    return <div>
        <div>
        <div className="flex">
            <div><PwIcon/></div>
            <div>Physics Wallah</div>
        </div>
        <div className="text-xs">
            We understand that every student has unique needs and abilities, that's whyour curriculum is designed to adapt to your needs and help yopu grow
        </div>
        <div className="flex *:p-4">
            <div><button className="border solid">Google Play</button></div>
            <div><button className="border solid">APP Store</button></div>
        </div>
        <div>
            <div>Let's get social :</div>
            <div className="flex">
                <InstaIcon/>

                <TwitterIcon/>
            </div>
        </div>
        </div>
    </div>
}