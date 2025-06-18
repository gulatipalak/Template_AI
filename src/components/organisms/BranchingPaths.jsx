import { WorkflowBranchIcon } from "../../assets/icons"
import RightSideIcon from "../../assets/icons/RightSideIcon"
import { CardText, CardTitle, IconBadge } from "../atoms"
import CardWapper from "../molecules/CardWapper"

const BranchingPaths = ({ className = "" }) => {
  return (
    <CardWapper className={`p-8 ${className}`}>
      <div className="flex flex-col justify-end h-full relative">
        <div className="absolute top-[-32px] left-[-32px]"><RightSideIcon /></div>
        <div className="pt-[84px] relative">
          <IconBadge
  icon={<WorkflowBranchIcon/>}
  circleBg="bg-icon-orange-radial"
  borderColor="#FFFFFF3B"
/>
          <CardTitle title="Branching paths" className="mb-1" />
          <CardText text="Explore multiple prompt directions with branching." />
        </div>
      </div>
    </CardWapper>
  )
}

export default BranchingPaths
