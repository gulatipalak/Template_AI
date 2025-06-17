import { CardText, CardTitle } from "../atoms"
import CardWapper from "../molecules/CardWapper"


const PromptService = ({className=""}) => {
  return (
    <CardWapper className={`pt-[38px] px-8 pb-[33px] ${className}`}>
        <CardTitle title="Prompt Service" />
        <CardText text="Use pre-made templates to jumpstart creativity."/>
    </CardWapper>
  )
}

export default PromptService
