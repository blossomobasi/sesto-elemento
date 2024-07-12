import Link from "next/link";

interface ButtonProps
    extends React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    children: React.ReactNode;
    url?: string;
}

const Button = ({ children, url = "/" }: ButtonProps) => {
    if (url) {
        return (
            <Link href={url} className="bg-secondary w-fit text-light px-4 py-2 rounded-md">
                {children}
            </Link>
        );
    }

    return (
        <button className="bg-secondary w-fit text-light px-4 py-2 rounded-md">{children}</button>
    );
};

export default Button;
