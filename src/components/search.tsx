import { DateRangePicker, Slider } from "@heroui/react";
import type { FC } from "react";

export const Search: FC = () => {
  return (
    <div>
      <div className={"flex flex-col gap-4 p-5"}>
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
    </div>
  );
};
