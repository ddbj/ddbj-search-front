type StudyType = {
  existing_study_type: string;
};

type Descriptor = {
  STUDY_TYPE: StudyType;
  STUDY_TITLE: string;
  STUDY_ABSTRACT: string;
};

type PrimaryID = {
  content: string;
};

type ExternalID = {
  namespace: string;
  label: string;
  content: string;
};

type Identifiers = {
  PRIMARY_ID: PrimaryID;
  EXTERNAL_ID: ExternalID[];
};

type StudyDescriptor = {
  DESCRIPTOR: Descriptor;
  center_name: string;
  alias: string;
  IDENTIFIERS: Identifiers;
  accession: string;
};

export type SraStudyProperties = StudyDescriptor;
