import ThemeToggle from "./components/ThemeToggle"
import CreateYourTemplate from './components/organisms/CreateYourTemplate';
import BranchingPaths from './components/organisms/BranchingPaths';
import AiJourney from './components/organisms/AiJourney';
import PromptService from './components/organisms/PromptService';
import CreatedPrompts from './components/organisms/CreatedPrompts';
import Generate from './components/organisms/Generate';

export default function App() {
  return (
    <div className="min-h-screen p-8">
      <ThemeToggle />
      <div className="grid grid-cols-3 gap-7">
        <CreateYourTemplate/>
        <BranchingPaths/>
        <AiJourney/>
        <PromptService/>
        <CreatedPrompts/>
        <Generate/>
      </div>
    </div>
  )
}