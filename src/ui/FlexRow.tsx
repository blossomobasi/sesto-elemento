interface Props extends React.HTMLProps<HTMLDivElement> {
    children: React.ReactNode;
}

const FlexRow = ({ children }: Props) => {
    return <div className="flex items-center justify-between">{children}</div>;
};

export default FlexRow;
