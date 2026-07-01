function PrimaryButton({
    children,
    onClick,
    type = "button",
    className = ""
}) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition-all duration-300 hover:scale-105 ${className}`}
        >
            {children}
        </button>
    );
}

export default PrimaryButton;