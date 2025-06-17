const CardTitle = ({className='',title = "Card Title"}) => {
  return (
    <h3 className={`text-lg font-bold dark:text-[#E6E3FF] text-[#26274A] transition duration-300 ${className}`}>{title}</h3>
  )
}

export default CardTitle
