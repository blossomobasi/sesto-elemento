import Link from "next/link";
import { CiLinkedin } from "react-icons/ci";

import { FiInstagram } from "react-icons/fi";
import { LiaFacebookSquare, LiaTwitterSquare } from "react-icons/lia";

const SocialIcons = () => {
    return (
        <div className="flex items-center space-x-5">
            <Link href="/">
                <FiInstagram size={25} />
            </Link>
            <Link href="/">
                <LiaFacebookSquare size={33} />
            </Link>
            <Link href="/">
                <LiaTwitterSquare size={33} />
            </Link>
            <Link href="/">
                <CiLinkedin size={33} />
            </Link>
        </div>
    );
};

export default SocialIcons;
