import { CardText, CardTitle } from "../atoms"
import CardWapper from "../molecules/CardWapper"

const CreateYourTemplate = ({ className = '' }) => {
  return (
    <CardWapper className={`p-8 ${className}`}>
      <div className="flex flex-col justify-between h-full gap-3 text-center xl:text-start">
        <h2 className="text-[36px] leading-10 font-semibold tracking-[-0.01em] bg-gradient-to-r dark:from-white dark:to-[#AA9CFC] from-[#502FC4] to-[#9F89F6] bg-clip-text text-transparent transition duration-300">Create your own template</h2>
        <div>
          <CardTitle title="14 days trial" />
          <CardText text="after – $5/month" />
        </div>
      </div>
    </CardWapper>
  )
}

export default CreateYourTemplate
