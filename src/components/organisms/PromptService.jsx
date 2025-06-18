import { CardText, CardTitle } from "../atoms"
import CardWapper from "../molecules/CardWapper"
import services_1x from "../../assets/img/services@1x.png"
import services_2x from "../../assets/img/services@2x.png"
import services_3x from "../../assets/img/services@3x.png"


const PromptService = ({className=""}) => {
  return (
    <CardWapper className={`pt-[38px] px-8 pb-[33px] ${className}`}>
        <div className="flex flex-col h-full justify-between">
          <div>
            <CardTitle title="Prompt Service" className="mb-1"/>
            <CardText text="Use pre-made templates to jumpstart creativity."/>
          </div>
          <img src={services_1x}
  srcSet={`
            ${services_1x} 1x,
            ${services_2x} 2x,
            ${services_3x} 3x
          `} alt="services" className="w-full dark:filter-none custom-img-filter"/>
        </div>
    </CardWapper>
  )
}

export default PromptService
