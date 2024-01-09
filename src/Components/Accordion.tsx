import { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillMinusCircle } from "react-icons/ai";

interface AccordionProps {
  title: string;
  info: string;
}

function Accordion({ title, info }: AccordionProps) {
  const [expand, setExpand] = useState(false);

  return (
    <div
      role="region"
      aria-labelledby={`accordion-heading-${title
        .toLowerCase()
        .replace(/\s/g, "-")}`}
      className="w-full bg-[#dae1eb] p-2 mt-2 rounded-md text-gray-700"
    >
      <button
        className="w-full flex justify-between items-center font-semibold"
        onClick={() => setExpand(!expand)}
        aria-expanded={expand}
        aria-controls={`accordion-content-${title
          .toLowerCase()
          .replace(/\s/g, "-")}`}
      >
        {title}
        {expand ? <AiFillMinusCircle /> : <AiFillPlusCircle />}
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-sm ${
          expand ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
        id={`accordion-content-${title.toLowerCase().replace(/\s/g, "-")}`}
        role="region"
        aria-hidden={!expand}
      >
        <div className="overflow-hidden">{info}</div>
      </div>
    </div>
  );
}

export default Accordion;
