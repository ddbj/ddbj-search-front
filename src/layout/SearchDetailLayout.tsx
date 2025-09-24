import { Tooltip } from "@heroui/tooltip";
import clsx from "clsx";
import { dbLabels, type DBType } from "@/consts/db.ts";
import { CircleQuestionIcon } from "@/features/graphics/CircleQuestionIcon.tsx";
import { Breadcrumbs } from "@/features/searchResult/Breadcrumbs.tsx";
import type { FC } from "react";

type Props = {
  entryType: DBType;
};

export const SearchDetailLayout: FC<Props> = ({ entryType }) => {
  const breadcrumbsPaths = [
    { label: "Entries", to: "/entry" },
    { label: dbLabels[entryType], to: `/entry/${entryType}` },
    { label: "$identifier" },
  ];
  return (
    <main className={"flex flex-col gap-4 p-8"}>
      <Breadcrumbs paths={breadcrumbsPaths} />
      <div className={"flex items-start gap-8"}>
        <div data-name={"leftCol"} className={"flex flex-grow-1 flex-col gap-4"}>
          <div
            data-name={"basicInfo"}
            className={"rounded-md border border-gray-200 bg-white p-4 text-sm"}
          >
            <ul className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-[1px] bg-gray-100 text-sm">
              <li className={"col-span-2 grid grid-cols-subgrid bg-white py-2"}>
                <div className={"flex items-center gap-1 font-bold"}>Title</div>
                <div>DNA03206</div>
              </li>
              <li className={"col-span-2 grid grid-cols-subgrid bg-white py-2"}>
                <div className={"flex items-center gap-1 font-bold"}>Description</div>
                <div>
                  DNA extracted from pelleted TK6 cells using the Qiagen DNeasy Blood and Tissue kit
                </div>
              </li>
              <li className={"col-span-2 grid grid-cols-subgrid bg-white py-2"}>
                <div className={"flex items-center gap-1 font-bold"}>Organism</div>
                <div>
                  <a href="#" className={"text-link-primary"}>
                    Homo sapiens
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div
            data-name={"properties"}
            className={"flex flex-col gap-2 rounded-md border border-gray-200 bg-white p-4 text-sm"}
          >
            <div className={"font-bold"}>Properties</div>
            <div className={"h-36 rounded-sm bg-gray-800"}></div>
          </div>

          <div
            data-name={"xref"}
            className={"flex flex-col gap-2 rounded-md border border-gray-200 bg-white p-4 text-sm"}
          >
            <div className={"font-bold"}>DB Xref</div>
            <ul className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-[1px] bg-gray-100 text-sm">
              <li className={"col-span-2 grid grid-cols-subgrid bg-white py-2"}>
                <div>BioSample (4)</div>
                <div className={"grid grid-cols-[repeat(auto-fill,_minmax(160px,_1fr))] gap-y-1"}>
                  <a href={"#"} className={"text-link-primary"}>
                    SAMN00189479
                  </a>
                  <a href={"#"} className={"text-link-primary"}>
                    SAMN00189480
                  </a>
                  <a href={"#"} className={"text-link-primary"}>
                    SAMN00189481
                  </a>
                  <a href={"#"} className={"text-link-primary"}>
                    SAMN00189482
                  </a>
                </div>
              </li>
              <li className={"col-span-2 grid grid-cols-subgrid bg-white py-2"}>
                <div>SRA Experiment (4)</div>
                <div className={"grid grid-cols-[repeat(auto-fill,_minmax(160px,_1fr))] gap-y-1"}>
                  <a href={"#"} className={"text-link-primary"}>
                    SRX037187
                  </a>
                  <a href={"#"} className={"text-link-primary"}>
                    SRX037188
                  </a>
                  <a href={"#"} className={"text-link-primary"}>
                    SRX037189
                  </a>
                  <a href={"#"} className={"text-link-primary"}>
                    SRX037190
                  </a>
                </div>
              </li>
              <li className={"col-span-2 grid grid-cols-subgrid bg-white py-2"}>
                <div>SRA Run (4)</div>
                <div className={"grid grid-cols-[repeat(auto-fill,_minmax(160px,_1fr))] gap-y-1"}>
                  <a href={"#"} className={"text-link-primary"}>
                    SRR090115
                  </a>
                  <a href={"#"} className={"text-link-primary"}>
                    SRR090116
                  </a>
                  <a href={"#"} className={"text-link-primary"}>
                    SRR090476
                  </a>
                  <a href={"#"} className={"text-link-primary"}>
                    SRR090477
                  </a>
                </div>
              </li>
              <li className={"col-span-2 grid grid-cols-subgrid bg-white py-2"}>
                <div>SRA Study (1)</div>
                <div className={"grid grid-cols-[repeat(auto-fill,_minmax(160px,_1fr))] gap-y-1"}>
                  <a href={"#"} className={"text-link-primary"}>
                    SRP005147
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div data-name={"rightCol"} className={"flex w-fit flex-col gap-4"}>
          <div
            data-name={"info"}
            className={"rounded-md border border-gray-200 bg-white px-4 py-1"}
          >
            <ul className="grid grid-cols-2 gap-x-4 gap-y-[1px] bg-gray-100 text-sm">
              <li className={"col-span-2 grid grid-cols-subgrid bg-white py-2"}>
                <div className={"flex items-center gap-1 font-bold"}>
                  <Tooltip
                    content={"This is the description of Status"}
                    placement={"top-start"}
                    closeDelay={100}
                    classNames={{
                      content: [clsx("bg-gray-500 text-white")],
                    }}
                  >
                    <span>
                      <CircleQuestionIcon className={"h-4 fill-text-primary"} />
                    </span>
                  </Tooltip>
                  <span>Status</span>
                </div>
                <div>public</div>
              </li>
              <li className={"col-span-2 grid grid-cols-subgrid bg-white py-2"}>
                <div className={"flex items-center gap-1 font-bold"}>
                  <Tooltip
                    content={"This is the description of Visibility"}
                    placement={"top-start"}
                    closeDelay={100}
                    classNames={{
                      content: [clsx("bg-gray-500 text-white")],
                    }}
                  >
                    <span>
                      <CircleQuestionIcon className={"h-4 fill-text-primary"} />
                    </span>
                  </Tooltip>
                  <span>Visibility</span>
                </div>
                <div>Unrestricted</div>
              </li>
              <li className={"col-span-2 grid grid-cols-subgrid bg-white py-2"}>
                <div className={"flex items-center gap-1 font-bold"}>Created date</div>
                <div>2024-04-27</div>
              </li>
              <li className={"col-span-2 grid grid-cols-subgrid bg-white py-2"}>
                <div className={"flex items-center gap-1 font-bold"}>Modified date</div>
                <div>2024-12-30</div>
              </li>
              <li className={"col-span-2 grid grid-cols-subgrid bg-white py-2"}>
                <div className={"flex items-center gap-1 font-bold"}>Published date</div>
                <div>2024-12-30</div>
              </li>
            </ul>
          </div>
          <div
            data-name={"download"}
            className={"rounded-md border border-gray-200 bg-white px-4 py-1 text-sm"}
          >
            <div className={"pt-2 font-bold"}>Download</div>
            <ul className={"flex flex-col gap-[1px] bg-gray-100"}>
              <li className={"flex flex-col bg-white py-2"}>
                <span>SRA1168454.experiment.xml</span>
                <span className={"flex gap-2"}>
                  <a href="#" className={"text-link-primary"}>
                    HTTPS
                  </a>
                  <a href="#" className={"text-link-primary"}>
                    FTP
                  </a>
                </span>
              </li>
              <li className={"flex flex-col bg-white py-2"}>
                <span>SRA1168454.experiment.xml</span>
                <span className={"flex gap-2"}>
                  <a href="#" className={"text-link-primary"}>
                    HTTPS
                  </a>
                  <a href="#" className={"text-link-primary"}>
                    FTP
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};
