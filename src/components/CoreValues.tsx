const CoreValues = () => {
    const coreValues = [
        "Integrity",
        "Team Work",
        "Customer Satisfaction",
        "Accountability",
        "Reliability",
    ];

    return (
        <div className="px-12 md:py-28 py-14">
            <h2 className="text-center md:text-5xl text-4xl font-semibold text-secondary md:pb-28 pb-14">
                Our Core Values
            </h2>

            <div className="flex flex-wrap justify-center gap-5">
                {coreValues.map((value, index) => (
                    <div
                        key={index}
                        className="bg-primaryLight rounded-md shadow-md py-5 px-4 flex flex-col gap-y-3 items-center justify-center w-52 h-52"
                    >
                        <div className="h-16 w-16 bg-primary rounded-full" />
                        <p className="text-2xl text-center">{value}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CoreValues;
