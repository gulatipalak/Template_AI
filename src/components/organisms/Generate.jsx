import { ImageSpark } from "../../assets/icons"
import CardWapper from "../molecules/CardWapper"

const Generate = ({className=""}) => {
  return (
    <CardWapper className={`py-[46px] px-8 ${className}`}>
      <div className="flex items-center justify-center h-full">
        <div className="rounded-full gap-1 p-2 dark:bg-pillBg-dark bg-pillBg-light shadow-custom-pill transition duration-300">
        <button
          className="relative min-w-[182px] p-[14px] flex items-center justify-center gap-[6px] rounded-full 
    border dark:border-borderBtn-dark border-borderBtn-light 
    dark:bg-btn-radial-dark bg-btn-radial-light 
    dark:shadow-btn-glow-dark shadow-btn-glow-light 
    transition-all duration-300 ease-in-out 
    hover:brightness-110 hover:scale-[1.02] hover:shadow-md"
        >
          <div
            className="absolute inset-0 opacity-[50%] mix-blend-overlay bg-repeat z-0 pointer-events-none bg-auto bg-general-noise"
          />
          <div
            className="absolute inset-0 opacity-[8%] mix-blend-overlay bg-repeat z-10 pointer-events-none bg-auto bg-download"
          />

          <ImageSpark />
          <span className="text-[20px] leading-7 font-medium text-white transition-all duration-300">
            Generate
          </span>
        </button>
      </div>
      </div>
    </CardWapper>
  )
}

export default Generate
