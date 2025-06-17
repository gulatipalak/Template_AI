import { CardText, CardTitle } from "../atoms"
import CardWapper from "../molecules/CardWapper"

const AiJourney = ({className=""}) => {
  return (
    <CardWapper className={`px-8 py-7 ${className}`}>
        <div className="flex flex-col justify-end h-full">
          <CardTitle title="Ai journey" className="mb-1" />
          <CardText text="Boost your prompt precision with keywords."/>
        </div>
    </CardWapper>
  )
}

export default AiJourney
