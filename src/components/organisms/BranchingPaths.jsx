import { CardText, CardTitle } from "../atoms"
import CardWapper from "../molecules/CardWapper"

const BranchingPaths = ({ className = "" }) => {
  return (
    <CardWapper className={`p-8 ${className}`}>
      <div className="flex flex-col justify-end h-full">
        <CardTitle title="Branching paths" className="mb-1" />
        <CardText text="Explore multiple prompt directions with branching." />
      </div>
    </CardWapper>
  )
}

export default BranchingPaths
