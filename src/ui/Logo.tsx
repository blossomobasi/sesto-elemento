import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <Link href="/">
            <Image
                src="/images/logo.png"
                alt="Logo"
                width={167}
                height={63}
                className="lg:scale-100 md:scale-75 scale-0"
            />
        </Link>
    );
};

export default Logo;
