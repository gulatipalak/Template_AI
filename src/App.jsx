import ThemeToggle from "./components/organisms/ThemeToggle"
import CreateYourTemplate from './components/organisms/CreateYourTemplate';
import BranchingPaths from './components/organisms/BranchingPaths';
import AiJourney from './components/organisms/AiJourney';
import PromptService from './components/organisms/PromptService';
import CreatedPrompts from './components/organisms/CreatedPrompts';
import Generate from './components/organisms/Generate';
import TemplateAi from "./components/organisms/TemplateAi";
import TopUsers from "./components/organisms/TopUsers";
import sphere from "./assets/img/sphere.png"

export default function App() {
  return (
    <div className="min-h-screen p-4 xl:p-8">
      <div className="grid grid-cols-2 xl:grid-cols-custom-layout xl:grid-rows-custom-layout-xl grid-rows-custom-layout gap-4 xl:gap-7 relative">
        <CreateYourTemplate className="col-span-2 xl:col-span-1 xl:row-span-2"/>
        <TemplateAi className="col-span-2 xl:row-span-2 row-start-2"/>
        <ThemeToggle className="col-span-2 xl:col-span-1 row-start-1 xl:col-start-4"/>
        <CreatedPrompts className="col-span-2 xl:col-span-1"/>
        <TopUsers className="col-span-2 xl:col-span-1"/>
        <BranchingPaths className="xl:row-span-2 right-inverted-radius row-start-3"/>
        <AiJourney className="xl:row-span-2 left-inverted-radius row-start-3"/>
        <PromptService className="col-span-2 xl:col-span-1 xl:row-span-2"/>
        <Generate className="col-span-2 xl:col-span-1"/>
        <div className="absolute left-1/2 top-[calc(100%/8.7)] xl:top-[calc(100%/2)] -translate-x-1/2 xl:-translate-y-1/2 size-[200px] xl:size-[368px] dark:bg-[#0000002e] rounded-full flex items-center justify-center bg-code bg-no-repeat">
            <img src={sphere} className="animate-spin-slow" alt="sphere"/>
        </div>
      </div>
    </div>
  )
}