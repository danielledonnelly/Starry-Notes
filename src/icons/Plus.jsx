const Plus = ({ size = "22", color = "#FFFFFF", className }) => {
    return (
        <svg
            className={className} // Add this line
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 22 22"
            width={size}
            height={size}
            stroke={color}
            fill="none"
        >
            <path strokeLinecap="round" d="M18 12H6M12 6v12"></path>
        </svg>
    );
};

export default Plus;
