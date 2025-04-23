import { ElasticSearchSource } from "@/types/api.ts";

export const jgaDataset1: ElasticSearchSource = {
  identifier: "JGAD000001",
  organism: {
    identifier: 9606,
    name: "Homo sapiens",
  },
  visibility: "unrestricted-access",
  downloadUrl: null,
  description: "whole-exome sequencing data from 97 Japanese lung adenocarcinomapatients",
  dateModified: "2020-09-24T07:29:48+09:00",
  title: "whole-exome sequencing data from 97 Japanese lung adenocarcinomapatients",
  type: "jga-dataset",
  isPartOf: "jga",
  distribution: [
    {
      contentUrl: "https://ddbj.nig.ac.jp/resource/jga-dataset/JGAD000001.json",
      encodingFormat: "JSON",
      type: "DataDownload",
    },
    {
      contentUrl: "https://ddbj.nig.ac.jp/resource/jga-dataset/JGAD000001.jsonld",
      encodingFormat: "JSON-LD",
      type: "DataDownload",
    },
  ],
  dbXref: [
    {
      identifier: "JGAP000002",
      type: "jga-policy",
      url: "https://ddbj.nig.ac.jp/resource/jga-policy/JGAP000002",
    },
    {
      identifier: "JGAS000001",
      type: "jga-study",
      url: "https://ddbj.nig.ac.jp/resource/jga-study/JGAS000001",
    },
    {
      identifier: "JGAC000001",
      type: "jga-dac",
      url: "https://ddbj.nig.ac.jp/resource/jga-dac/JGAC000001",
    },
  ],
  url: "https://ddbj.nig.ac.jp/resource/jga-dataset/JGAD000001",
  datePublished: "2020-09-28T02:03:50+09:00",
  dateCreated: "2014-07-18T01:37:12+09:00",
  name: "JSUB000002_Dataset_0001",
  dbXrefsStatistics: [
    {
      count: 1,
      type: "jga-study",
    },
    {
      count: 1,
      type: "jga-policy",
    },
    {
      count: 1,
      type: "jga-dac",
    },
  ],
  properties: {
    DATASET_TYPE: "Random exome sequencing",
    center_name: "Individual",
    DATA_REFS: [
      {
        DATA_REF: [
          {
            refcenter: "Individual",
            accession: "JGAR000000001",
            refname: "JGAR000000001",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000002",
            refname: "JGAR000000002",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000003",
            refname: "JGAR000000003",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000004",
            refname: "JGAR000000004",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000005",
            refname: "JGAR000000005",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000006",
            refname: "JGAR000000006",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000007",
            refname: "JGAR000000007",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000008",
            refname: "JGAR000000008",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000009",
            refname: "JGAR000000009",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000010",
            refname: "JGAR000000010",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000011",
            refname: "JGAR000000011",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000012",
            refname: "JGAR000000012",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000013",
            refname: "JGAR000000013",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000014",
            refname: "JGAR000000014",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000015",
            refname: "JGAR000000015",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000016",
            refname: "JGAR000000016",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000017",
            refname: "JGAR000000017",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000018",
            refname: "JGAR000000018",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000019",
            refname: "JGAR000000019",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000020",
            refname: "JGAR000000020",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000021",
            refname: "JGAR000000021",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000022",
            refname: "JGAR000000022",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000023",
            refname: "JGAR000000023",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000024",
            refname: "JGAR000000024",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000025",
            refname: "JGAR000000025",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000026",
            refname: "JGAR000000026",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000027",
            refname: "JGAR000000027",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000028",
            refname: "JGAR000000028",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000029",
            refname: "JGAR000000029",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000030",
            refname: "JGAR000000030",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000031",
            refname: "JGAR000000031",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000032",
            refname: "JGAR000000032",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000033",
            refname: "JGAR000000033",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000034",
            refname: "JGAR000000034",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000035",
            refname: "JGAR000000035",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000036",
            refname: "JGAR000000036",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000037",
            refname: "JGAR000000037",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000038",
            refname: "JGAR000000038",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000039",
            refname: "JGAR000000039",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000040",
            refname: "JGAR000000040",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000041",
            refname: "JGAR000000041",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000042",
            refname: "JGAR000000042",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000043",
            refname: "JGAR000000043",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000044",
            refname: "JGAR000000044",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000045",
            refname: "JGAR000000045",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000046",
            refname: "JGAR000000046",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000047",
            refname: "JGAR000000047",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000048",
            refname: "JGAR000000048",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000049",
            refname: "JGAR000000049",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000050",
            refname: "JGAR000000050",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000051",
            refname: "JGAR000000051",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000052",
            refname: "JGAR000000052",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000053",
            refname: "JGAR000000053",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000054",
            refname: "JGAR000000054",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000055",
            refname: "JGAR000000055",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000056",
            refname: "JGAR000000056",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000057",
            refname: "JGAR000000057",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000058",
            refname: "JGAR000000058",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000059",
            refname: "JGAR000000059",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000060",
            refname: "JGAR000000060",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000061",
            refname: "JGAR000000061",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000062",
            refname: "JGAR000000062",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000063",
            refname: "JGAR000000063",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000064",
            refname: "JGAR000000064",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000065",
            refname: "JGAR000000065",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000066",
            refname: "JGAR000000066",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000067",
            refname: "JGAR000000067",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000068",
            refname: "JGAR000000068",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000069",
            refname: "JGAR000000069",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000070",
            refname: "JGAR000000070",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000071",
            refname: "JGAR000000071",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000072",
            refname: "JGAR000000072",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000073",
            refname: "JGAR000000073",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000074",
            refname: "JGAR000000074",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000075",
            refname: "JGAR000000075",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000076",
            refname: "JGAR000000076",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000077",
            refname: "JGAR000000077",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000078",
            refname: "JGAR000000078",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000079",
            refname: "JGAR000000079",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000080",
            refname: "JGAR000000080",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000081",
            refname: "JGAR000000081",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000082",
            refname: "JGAR000000082",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000083",
            refname: "JGAR000000083",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000084",
            refname: "JGAR000000084",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000085",
            refname: "JGAR000000085",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000086",
            refname: "JGAR000000086",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000087",
            refname: "JGAR000000087",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000088",
            refname: "JGAR000000088",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000089",
            refname: "JGAR000000089",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000090",
            refname: "JGAR000000090",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000091",
            refname: "JGAR000000091",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000092",
            refname: "JGAR000000092",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000093",
            refname: "JGAR000000093",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000094",
            refname: "JGAR000000094",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000095",
            refname: "JGAR000000095",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000096",
            refname: "JGAR000000096",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000097",
            refname: "JGAR000000097",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000098",
            refname: "JGAR000000098",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000099",
            refname: "JGAR000000099",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000100",
            refname: "JGAR000000100",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000101",
            refname: "JGAR000000101",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000102",
            refname: "JGAR000000102",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000103",
            refname: "JGAR000000103",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000104",
            refname: "JGAR000000104",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000105",
            refname: "JGAR000000105",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000106",
            refname: "JGAR000000106",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000107",
            refname: "JGAR000000107",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000108",
            refname: "JGAR000000108",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000109",
            refname: "JGAR000000109",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000110",
            refname: "JGAR000000110",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000111",
            refname: "JGAR000000111",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000112",
            refname: "JGAR000000112",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000113",
            refname: "JGAR000000113",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000114",
            refname: "JGAR000000114",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000115",
            refname: "JGAR000000115",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000116",
            refname: "JGAR000000116",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000117",
            refname: "JGAR000000117",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000118",
            refname: "JGAR000000118",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000119",
            refname: "JGAR000000119",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000120",
            refname: "JGAR000000120",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000121",
            refname: "JGAR000000121",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000122",
            refname: "JGAR000000122",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000123",
            refname: "JGAR000000123",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000124",
            refname: "JGAR000000124",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000125",
            refname: "JGAR000000125",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000126",
            refname: "JGAR000000126",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000127",
            refname: "JGAR000000127",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000128",
            refname: "JGAR000000128",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000129",
            refname: "JGAR000000129",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000130",
            refname: "JGAR000000130",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000131",
            refname: "JGAR000000131",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000132",
            refname: "JGAR000000132",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000133",
            refname: "JGAR000000133",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000134",
            refname: "JGAR000000134",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000135",
            refname: "JGAR000000135",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000136",
            refname: "JGAR000000136",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000137",
            refname: "JGAR000000137",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000138",
            refname: "JGAR000000138",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000139",
            refname: "JGAR000000139",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000140",
            refname: "JGAR000000140",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000141",
            refname: "JGAR000000141",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000142",
            refname: "JGAR000000142",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000143",
            refname: "JGAR000000143",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000144",
            refname: "JGAR000000144",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000145",
            refname: "JGAR000000145",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000146",
            refname: "JGAR000000146",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000147",
            refname: "JGAR000000147",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000148",
            refname: "JGAR000000148",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000149",
            refname: "JGAR000000149",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000150",
            refname: "JGAR000000150",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000151",
            refname: "JGAR000000151",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000152",
            refname: "JGAR000000152",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000153",
            refname: "JGAR000000153",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000154",
            refname: "JGAR000000154",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000155",
            refname: "JGAR000000155",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000156",
            refname: "JGAR000000156",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000157",
            refname: "JGAR000000157",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000158",
            refname: "JGAR000000158",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000159",
            refname: "JGAR000000159",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000160",
            refname: "JGAR000000160",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000161",
            refname: "JGAR000000161",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000162",
            refname: "JGAR000000162",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000163",
            refname: "JGAR000000163",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000164",
            refname: "JGAR000000164",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000165",
            refname: "JGAR000000165",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000166",
            refname: "JGAR000000166",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000167",
            refname: "JGAR000000167",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000168",
            refname: "JGAR000000168",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000169",
            refname: "JGAR000000169",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000170",
            refname: "JGAR000000170",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000171",
            refname: "JGAR000000171",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000172",
            refname: "JGAR000000172",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000173",
            refname: "JGAR000000173",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000174",
            refname: "JGAR000000174",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000175",
            refname: "JGAR000000175",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000176",
            refname: "JGAR000000176",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000177",
            refname: "JGAR000000177",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000178",
            refname: "JGAR000000178",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000179",
            refname: "JGAR000000179",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000180",
            refname: "JGAR000000180",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000181",
            refname: "JGAR000000181",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000182",
            refname: "JGAR000000182",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000183",
            refname: "JGAR000000183",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000184",
            refname: "JGAR000000184",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000185",
            refname: "JGAR000000185",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000186",
            refname: "JGAR000000186",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000187",
            refname: "JGAR000000187",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000188",
            refname: "JGAR000000188",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000189",
            refname: "JGAR000000189",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000190",
            refname: "JGAR000000190",
          },
          {
            refcenter: "Individual",
            accession: "JGAR000000191",
            refname: "JGAR000000191",
          },
        ],
      },
    ],
    DESCRIPTION: "whole-exome sequencing data from 97 Japanese lung adenocarcinomapatients",
    alias: "JSUB000002_Dataset_0001",
    IDENTIFIERS: {
      SECONDARY_ID: "JGAD00000000001",
    },
    TITLE: "whole-exome sequencing data from 97 Japanese lung adenocarcinomapatients",
    accession: "JGAD000001",
    POLICY_REF: {
      refcenter: "NBDC",
      accession: "JGAP000002",
      refname: "JGAP000002",
    },
  },
  sameAs: null,
  status: "public",
};
