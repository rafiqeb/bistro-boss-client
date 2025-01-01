

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="w-4/12 mx-auto text-center my-6 mt-10">
            <p className="text-yellow-600 mb-4">---{subHeading}---</p>
            <h2 className="text-3xl uppercase font-bold border-y-4 py-4">{heading}</h2>
        </div>
    );
};

export default SectionTitle;