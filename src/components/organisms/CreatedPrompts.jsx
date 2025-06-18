import { Caret } from "../../assets/icons"
import CardWapper from "../molecules/CardWapper"

const CreatedPrompts = ({className=""}) => {
  return (
    <CardWapper className={`pt-[51.5px] px-8 pb-[49.5px] ${className}`}>
          <div className="flex flex-col gap-6 justify-center h-full">
            <span className="inline-block font-semibold text-[62px] leading-[56px] tracking-[-0.02em] text-center bg-clip-text text-transparent bg-gradient-to-r dark:from-[#F5F1FF] from-[#502FC4] dark:to-[#6633EE] to-[#9F89F6] transition duration-300">25M</span>
            <div className="relative text-center min-w[188px] p-[6px] dark:bg-soft-purple bg-light-soft-purple transition duration-300">
              <div className="absolute left-[-5px] top-0 bottom-0 h-full">
                <Caret/>
              </div>
              <p className="dark:text-[#B2A1FD] text-[#5F41B2] text-lg">created prompts</p>
              <div className="absolute top-0 bottom-0 h-full right-[-5px]">
                <Caret/>
              </div>
            </div>
          </div>
        </CardWapper>
  )
}

export default CreatedPrompts
