const CoreValues = () => {
    const coreValues = [
        "Integrity",
        "Team Work",
        "Customer Satisfaction",
        "Accountability",
        "Reliability",
    ];

    return (
        <div className="px-12">
            <h2 className="text-center text-5xl font-semibold text-secondary py-20">
                Our Core Values
            </h2>

            <div className="grid grid-cols-5 gap-x-5 p-2">
                {coreValues.map((value) => (
                    <div
                        key={value}
                        className="bg-primaryLight rounded-md shadow-xl py-5 px-4 flex flex-col gap-y-3 items-center justify-center"
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
