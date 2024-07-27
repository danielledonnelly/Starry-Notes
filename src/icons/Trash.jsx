import xIcon from '../icons/x.svg';

const Trash = ({ size = "24" }) => {
    return (
        <img
            src={xIcon}
            alt="Delete"
            style={{
                width: `${size}px`,
                height: `${size}px`
            }}
        />
    );
};

export default Trash;