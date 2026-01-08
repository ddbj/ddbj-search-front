import { describe, expect, it } from "vitest";
import { dbTypes } from "@/consts/db.ts";
import { __TEST__DownloadPanel } from "@/features/searchDetail/panels/DownloadPanel.tsx";

const { composeItemProps } = __TEST__DownloadPanel;

describe("composeItemProps", () => {
  it("returns an empty array for jga-dac", () => {
    const result = composeItemProps({
      identifier: "",
      type: dbTypes["jga-dac"],
      downloadUrl: [],
    });
    expect(result).toEqual([]);
  });

  it("for bioProject/bioSample ignores downloadURL and returns generated JSON", () => {
    const result = composeItemProps({
      identifier: "id",
      type: dbTypes.bioproject,
      downloadUrl: [
        {
          name: "ERA2380438.sample.xml",
          ftpUrl:
            "ftp://ftp.ddbj.nig.ac.jp/ddbj_database/dra/fastq/ERA238/ERA2380438/ERA2380438.sample.xml",
          type: "meta",
          url: "https://ddbj.nig.ac.jp/public/ddbj_database/dra/fastq/ERA238/ERA2380438/ERA2380438.sample.xml",
        },
      ],
    });
    expect(result[0].fileName).toBe("id.json");
    expect(result[0].httpsLink).toBe("#TBD");
    expect(result[0].ftpLink).toBeNull();
    expect(result.length).toBe(1);
  });

  it("parses downloadURL for other types", () => {
    const result = composeItemProps({
      identifier: "id",
      type: dbTypes["sra-run"],
      downloadUrl: [
        {
          name: "SRA088679.run.xml",
          ftpUrl:
            "ftp://ftp.ddbj.nig.ac.jp/ddbj_database/dra/fastq/SRA088/SRA088679/SRA088679.run.xml",
          type: "meta",
          url: "https://ddbj.nig.ac.jp/public/ddbj_database/dra/fastq/SRA088/SRA088679/SRA088679.run.xml",
        },
        {
          name: "SRR885622.sra",
          ftpUrl:
            "ftp://ftp.ddbj.nig.ac.jp/ddbj_database/dra/sralite/ByExp/litesra/SRX/SRX296/SRX296737/SRR885622/SRR885622.sra",
          type: "sra",
          url: "https://ddbj.nig.ac.jp/public/ddbj_database/dra/sralite/ByExp/litesra/SRX/SRX296/SRX296737/SRR885622/SRR885622.sra",
        },
        {
          name: "SRR885622's fastq",
          ftpUrl: "ftp://ftp.ddbj.nig.ac.jp/ddbj_database/dra/fastq/SRA088/SRA088679/SRX296737",
          type: "fastq",
          url: "https://ddbj.nig.ac.jp/public/ddbj_database/dra/fastq/SRA088/SRA088679/SRX296737",
        },
      ],
    });
    expect(result[1].httpsLink).toBe(
      "https://ddbj.nig.ac.jp/public/ddbj_database/dra/sralite/ByExp/litesra/SRX/SRX296/SRX296737/SRR885622/SRR885622.sra"
    );
    expect(result[1].fileName).toBe("SRR885622.sra");
    expect(result.length).toBe(3);
  });
});
