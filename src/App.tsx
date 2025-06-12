import { Accordion, AccordionItem } from "@heroui/react";
import { Slider } from "@heroui/react";
import { DateRangePicker } from "@heroui/react";
import { useEffect, useRef } from "react";

function App() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.classList.add("flex");
    }
  }, []);
  return (
    <>
      <div className={"flex flex-col gap-4 p-5"}>
        <div className={"w-2xl"}>
          <Accordion>
            <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
              {defaultContent}
            </AccordionItem>
            <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
              {defaultContent}
            </AccordionItem>
            <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
              {defaultContent}
            </AccordionItem>
          </Accordion>
        </div>
        <div ref={ref}>
          <p>HELLO</p>
          <p>WORLD</p>
        </div>
        <Slider
          className="max-w-md"
          defaultValue={[100, 500]}
          formatOptions={{ style: "currency", currency: "USD" }}
          label="Price Range"
          maxValue={1000}
          minValue={0}
          step={50}
        />
        <DateRangePicker className="max-w-xs" label="Stay duration" />
      </div>
    </>
  );
}

export default App;
