import { ReactiveBase } from "@appbaseio/reactivesearch";
import React from "react";
import { Conditions } from "@/components/search/Conditions.tsx";
import { Result } from "@/components/search/Result.tsx";
import { ELASTICSEARCH_URL } from "@/constants.ts";

export const SearchResource: React.FC = () => {
  return (
    <ReactiveBase
      app="jga-*,sra-*,bioproject,biosample"
      url={ELASTICSEARCH_URL}
      theme={{
        colors: {
          titleColor: "#000000",
          textColor: "#444950",
          primaryTextColor: "#ffffff",
          primaryColor: "#ff8c00",
          alertColor: "#fa383e",
        },
      }}
    >
      <div className="mb-10 flex gap-4 p-4">
        <div className="w-80 shrink-0">
          <Conditions />
        </div>
        <div className="grow">
          <Result />
        </div>
      </div>
    </ReactiveBase>
  );
};
