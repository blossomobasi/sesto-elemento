import Image from "next/image";
import Link from "next/link";

const SocialIcons = () => {
    return (
        <div className="flex items-center space-x-5">
            <Link href="/">
                <Image src="/assets/instagram.png" alt="Instagram" width={20} height={20} />
            </Link>
            <Link href="/">
                <Image src="/assets/facebook.png" alt="Instagram" width={20} height={20} />
            </Link>
            <Link href="/">
                <Image src="/assets/twitter.png" alt="Instagram" width={20} height={20} />
            </Link>
            <Link href="/">
                <Image src="/assets/linkedin.png" alt="Instagram" width={20} height={20} />
            </Link>
        </div>
    );
};

export default SocialIcons;
