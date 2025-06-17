const Caret = ({className=""}) => {
    return (
        <div className={`${className}`}>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="40"
            fill="none"
            viewBox="0 0 10 41"
        >
            <path fill="#8963F4" d="M6 6.9v27.2l4 6.4H0l4-6.4V6.9L0 .5h10z"></path>
        </svg>
        </div>
    )
}

export default Caret
