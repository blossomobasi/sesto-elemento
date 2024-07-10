import Image from "next/image";

const Logo = () => {
    return (
        <span>
            <Image src="/images/logo.png" alt="Logo" width={167} height={63} />
        </span>
    );
};

export default Logo;
