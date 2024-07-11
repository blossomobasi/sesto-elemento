const CoreValues = () => {
    const coreValues = [
        "Integrity",
        "Team Work",
        "Customer Satisfaction",
        "Accountability",
        "Reliability",
    ];

    return (
        <div className="px-12 py-28">
            <h2 className="text-center text-5xl font-semibold text-secondary pb-28">
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

            {/* <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-x-5">
                {coreValues.map((value) => (
                    <div
                        key={value}
                        className="bg-primaryLight rounded-md shadow-xl py-5 px-4 flex flex-col gap-y-3 items-center justify-center"
                    >
                        <div className="h-16 w-16 bg-primary rounded-full" />
                        <p className="text-2xl text-center">{value}</p>
                    </div>
                ))}
            </div> */}
        </div>
    );
};

export default CoreValues;
