import { useState } from "react";

const MenuSidebar = () => {
  const [isExpandable, setIsExpandable] = useState(false);

  return (
    <div
      className={`h-[90.3vh] bg-white fixed top-[4.1em] left-0 z-20 shadow-md transition-all duration-300 ${
        isExpandable ? "w-60" : "w-20"
      }`}
      onMouseEnter={() => setIsExpandable(!isExpandable)}
      onMouseLeave={() => setIsExpandable(!isExpandable)}
    >
      MenuSidebar
    </div>
  );
};

export default MenuSidebar;
