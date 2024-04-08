import { EmailIcon } from "../icons/email-icon";
import { GitHubIcon } from "../icons/github-icon";
import { LinkedInIcon } from "../icons/linkedin-icon";

import './social-btns.scss'

export default function SocialBtns(){
    return(
        <div className="social">
            <a href="https://www.linkedin.com/in/develi/"><LinkedInIcon/></a>
            <a href="https://github.com/juniorapeles"><GitHubIcon/></a>
            <a href="mailto:elijunior.apeles2005@gmail.com"><EmailIcon/></a>
        </div>
    )
}