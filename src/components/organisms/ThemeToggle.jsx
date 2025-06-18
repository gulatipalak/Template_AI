import { ToggleIcon } from "../../assets/icons";
import { useTheme } from "../../context/ThemeContext";
import CardWapper from "../molecules/CardWapper";

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <CardWapper className="py-[42.5px] px-[45px]">
        <div className="flex items-center justify-center h-full">
            <button
        onClick={toggleTheme}
        className={`min-w-[132px] h-[72px] rounded-full p-2 flex items-center justify-between border
          ${darkMode ? "bg-[#00000026] border-[#5B4B8973]" : "bg-[#F4F4F6] border-light-white-1d"}
          transition-all duration-300 relative`}
      >
        {/* Sliding Knob */}
        <div
          className={`absolute top-2 bottom-2 size-[56px] rounded-full transition duration-500 flex items-center justify-center overflow-hidden
            ${darkMode ? "left-2 bg-toggle-btn-radial border-[#FFFFFF3B] shadow-toggle-glow" : " right-2 bg-gradient-to-r from-[#502FC4] to-[#9F89F6] shadow-md rotate-180"}`}
        >
          <div className="absolute inset-0 opacity-[10%] mix-blend-overlay bg-repeat z-10 pointer-events-none bg-auto bg-download" />
          <ToggleIcon/>
        </div>
      </button>
      </div>
    </CardWapper>
  );
};

export default ThemeToggle;
