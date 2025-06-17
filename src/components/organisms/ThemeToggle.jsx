import { useTheme } from "../../context/ThemeContext";
import CardWapper from "../molecules/CardWapper";

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <CardWapper className="py-[42.5px] px-[45px]">
      <div className="flex items-center justify-center h-full">
        <button
      onClick={toggleTheme}
      className="p-2 border rounded text-sm"
    >
      {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
      </div>
    </CardWapper>
  );
};

export default ThemeToggle;
