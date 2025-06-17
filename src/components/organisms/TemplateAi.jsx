const TemplateAi = ({className=""}) => {
  return (
    <div className={`relative border border-[#FFFFFF30] dark:bg-template-radial-dark rounded-3xl transition duration-300 p-8 text-center ${className}`}>
        <div className="absolute inset-0 opacity-[70%] mix-blend-overlay bg-repeat z-0 pointer-events-none bg-auto bg-general-noise" />
      <div className="absolute inset-0 opacity-[15%] mix-blend-overlay bg-repeat z-10 pointer-events-none bg-auto bg-download" />
      <h1 className="text-stroke-faint text-[62px] leading-[62px] font-semibold tracking-[-0.02em]">Template Ai</h1>
    </div>
  )
}

export default TemplateAi
