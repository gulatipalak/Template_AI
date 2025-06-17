import { CardText, CardTitle } from "../atoms"
import CardWapper from "../molecules/CardWapper"
import services from "../../assets/img/services.png"


const PromptService = ({className=""}) => {
  return (
    <CardWapper className={`pt-[38px] px-8 pb-[33px] ${className}`}>
        <div className="flex flex-col h-full justify-between">
          <div>
            <CardTitle title="Prompt Service" className="mb-1"/>
            <CardText text="Use pre-made templates to jumpstart creativity."/>
          </div>
          <img src={services} alt="services" className="w-full dark:filter-none custom-img-filter"/>
        </div>
    </CardWapper>
  )
}

export default PromptService
