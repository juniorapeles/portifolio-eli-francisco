import Image from "next/image"

import "./header.scss"

export function Header(){
    return(
        <div className="header">
            <div>
                <h1>Hi, i´m Eli! 👋</h1>
                <h2>Software Enginner</h2>
            </div>
            <Image
            src="image.jpeg"
            alt="Junior photo"
            width={325}
            height={310}
            priority
            />
        </div>
    )
}

