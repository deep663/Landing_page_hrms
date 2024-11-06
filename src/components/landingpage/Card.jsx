import PropType from 'prop-types';
const Card = ({ title, total, imgSrc }) => (
    <div className="card p-6 text-center border-2 border-blue-300 rounded-lg bg-white shadow-md hover:shadow-lg hover:scale-105 hover:border-blue-500 transition-transform duration-300 ease-in-out">
        <img
            alt={`${title} Logo`}
            className="mx-auto mb-4 rounded-full"
            src={imgSrc}
            height="100"
            width="100"
        />
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600">TOTAL: <span className="text-blue-500 font-medium">{total}</span></p>
    </div>
);

Card.propTypes = {
    title: PropType.string.isRequired,
    total: PropType.number.isRequired,
    imgSrc: PropType.string.isRequired,
};

export default Card;
