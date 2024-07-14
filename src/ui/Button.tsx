import Link from "next/link";

interface ButtonProps
    extends React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    children: React.ReactNode;
    url?: string;
    className?: string;
}

const Button = ({ children, url = "/", className, ...props }: ButtonProps) => {
    const btnClasses = `bg-secondary w-fit text-light px-4 py-2 rounded-md ${className}`;

    if (url) {
        return (
            <Link href={url} className={btnClasses}>
                {children}
            </Link>
        );
    }

    return (
        <button className={btnClasses} {...props}>
            {children}
        </button>
    );
};

export default Button;
