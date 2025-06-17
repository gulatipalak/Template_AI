import { CardText, CardTitle } from "../atoms"
import CardWapper from "../molecules/CardWapper"

const AiJourney = () => {
  return (
    <CardWapper className="px-8 py-7">
        <CardTitle title="Ai journey" className="mb-1" />
        <CardText text="Boost your prompt precision with keywords."/>
    </CardWapper>
  )
}

export default AiJourney
