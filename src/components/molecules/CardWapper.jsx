const CardWapper = ({ children, className = '' }) => {
  return (
    <div className={`relative dark:bg-custom-gradient bg-light-custom-gradient border dark:border-white-1d border-light-white-1d rounded-3xl transition duration-300 ${className}`}>
      <div className="absolute inset-0 opacity-[7%] mix-blend-overlay bg-repeat z-0 pointer-events-none bg-auto bg-dots" />
      <div className="absolute inset-0 opacity-[15%] mix-blend-overlay bg-repeat z-10 pointer-events-none bg-auto bg-download" />
      <div className="relative z-20 h-full">
        {children}
      </div>
    </div>
  )
}

export default CardWapper


