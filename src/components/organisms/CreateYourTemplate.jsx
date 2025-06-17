import { CardText, CardTitle } from "../atoms"
import CardWapper from "../molecules/CardWapper"

const CreateYourTemplate = () => {
  return (
    <CardWapper className="p-8">
        <h2 className="text-[36px] leading-10 font-semibold tracking-[-0.01em] bg-gradient-to-r dark:from-white dark:to-[#AA9CFC] from-[#502FC4] to-[#9F89F6] bg-clip-text text-transparent transition duration-300">Create your own template</h2>
        <CardTitle title="14 days trial" />
        <CardText text="after – $5/month" />
    </CardWapper>
  )
}

export default CreateYourTemplate
