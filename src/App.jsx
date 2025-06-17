import ThemeToggle from "./components/organisms/ThemeToggle"
import CreateYourTemplate from './components/organisms/CreateYourTemplate';
import BranchingPaths from './components/organisms/BranchingPaths';
import AiJourney from './components/organisms/AiJourney';
import PromptService from './components/organisms/PromptService';
import CreatedPrompts from './components/organisms/CreatedPrompts';
import Generate from './components/organisms/Generate';
import TemplateAi from "./components/organisms/TemplateAi";
import TopUsers from "./components/organisms/TopUsers";

export default function App() {
  return (
    <div className="min-h-screen p-8">
      
      <div className="grid grid-cols-4 grid-rows-custom-layout gap-7">
        <CreateYourTemplate className="row-span-2"/>
        <TemplateAi className="col-span-2 row-span-2"/>
        <ThemeToggle />
        <CreatedPrompts/>
        <TopUsers/>
        <BranchingPaths className="row-span-2"/>
        <AiJourney className="row-span-2"/>
        <PromptService className="row-span-2"/>
        <Generate/>
      </div>
    </div>
  )
}