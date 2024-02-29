import React, { FC, useEffect } from "react";

type Props = {};

export const DetailPage: FC<Props> = ({}) => {
  useEffect(() => {
    fetch("https://ddbj.nig.ac.jp/resource/sra-run/SRR5880535.json", { mode: "cors" }).then(
      (res) => {
        const data = res.json();
        console.log(data);
      }
    );
  }, []);
  return (
    <div>
      <div>DetailPage</div>
    </div>
  );
};
