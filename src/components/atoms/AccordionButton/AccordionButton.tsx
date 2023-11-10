import React, { useState } from "react";

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleAccordion = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div>
      <button onClick={toggleAccordion}>Toggle Accordion</button>
      <div style={{ display: isCollapsed ? "none" : "block" }}>
        <input type="text"></input>
        <input type="text"></input>
        <input type="text"></input>
      </div>
    </div>
  );
};

export default Accordion;
