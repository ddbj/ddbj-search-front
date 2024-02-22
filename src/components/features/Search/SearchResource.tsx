import { Conditions } from "@/components/features/Search/Conditions.tsx";
import { Result } from "@/components/features/Search/Result.tsx";
import { ELASTICSEARCH_URL } from "@/constants.ts";
import { ReactiveBase } from "@appbaseio/reactivesearch";
import React from "react";

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
      <div className="d-flex gap-3 p-3">
        <div style={{ width: "20rem" }}>
          <Conditions />
        </div>
        <div className="flex-grow-1">
          <Result />
        </div>
      </div>
    </ReactiveBase>
  );
};
