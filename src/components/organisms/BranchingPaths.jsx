import { CardText, CardTitle } from "../atoms"
import CardWapper from "../molecules/CardWapper"

const BranchingPaths = () => {
  return (
    <CardWapper className="p-8">
        <CardTitle title="Branching paths" className="mb-1" />
        <CardText text="Explore multiple prompt directions with branching." />
    </CardWapper>
  )
}

export default BranchingPaths
