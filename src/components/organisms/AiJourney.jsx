import { AiIcon, LeftSideIcon } from "../../assets/icons"
import { CardText, CardTitle, IconBadge } from "../atoms"
import CardWapper from "../molecules/CardWapper"

const AiJourney = ({className=""}) => {
  return (
    <CardWapper className={`px-8 py-7 ${className}`}>
        <div className="flex flex-col justify-end h-full relative">
          <div className="absolute top-[-32px] right-[-32px]">
              <LeftSideIcon/>
          </div>
          <div className="pt-[84px] relative">
            <IconBadge
  icon={<AiIcon/>}
  circleBg="bg-icon-blue-radial"
  borderColor="#FFFFFF26"
/>
            <CardTitle title="Ai journey" className="mb-1" />
            <CardText text="Boost your prompt precision with keywords."/>
          </div>
        </div>
    </CardWapper>
  )
}

export default AiJourney
