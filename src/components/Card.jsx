const Card = ({ title, total, inService, imgSrc }) => (
    <div className="card p-6 text-center border-2 border-blue-300 rounded-lg bg-white shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
        <img
            alt={`${title} Logo`}
            className="mx-auto mb-4"
            src={imgSrc}
            height="100"
            width="100"
        />
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600">TOTAL: <span className="text-blue-500 font-medium">{total}</span></p>
        <p className="text-gray-600">IN SERVICE: <span className="text-blue-500 font-medium">{inService}</span></p>
    </div>
);

export default Card;
