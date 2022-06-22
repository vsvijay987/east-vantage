interface CardProps {
    name: {
        first: string;
        last: string;
        title: string;
    };
    email: string;
    picture: string;
}

const Card = ({ name, email, picture }: CardProps) => {
    return (
        <div className="flex justify-center">
            <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                <img
                    className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                    src={picture}
                    alt="pic"
                />
                <div className="p-6 flex flex-col justify-start">
                    {name ? (
                        <h5 className="text-gray-900 text-xl font-medium mb-2">
                            {`${name.title} ${name.first} ${name.last}`}
                        </h5>
                    ) : (
                        <p>Loading...</p>
                    )}
                    <p className="text-gray-700 text-base mb-4">{email}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
