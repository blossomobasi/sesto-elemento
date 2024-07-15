import Link from "next/link";

const Button = ({
    styles,
    children,
    url = "/",
}: {
    children: React.ReactNode;
    styles?: string;
    url?: string;
}) => {
    if (url)
        return (
            <Link href={url} className={`px-32 py-4 text-light rounded-md bg-secondary ${styles}`}>
                {children}
            </Link>
        );

    return (
        <button className={`px-32 py-4 text-light rounded-md bg-secondary ${styles}`}>
            {children}
        </button>
    );
};

export default Button;
