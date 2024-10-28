type ArchiveID = {
  accession: string;
  archive: string;
  id: string;
};

type ExternalLink = {
  label: string;
  category: string;
  URL: string;
};

type AuthorName = {
  First: string;
  Last: string;
};

type Author = {
  Name: AuthorName;
  Consortium?: string;
};

type Journal = {
  JournalTitle: string;
  Year: string;
  Volume: string;
  Issue: string;
  PagesFrom: string;
  PagesTo: string;
};

type StructuredCitation = {
  Title: string;
  Journal: Journal;
  AuthorSet: {
    Author: Author[];
  };
};

type Publication = {
  id: string;
  status: string;
  Reference?: string;
  StructuredCitation?: StructuredCitation;
  DbType: string;
  date?: string;
};

type LocusTagPrefix = {
  biosample_id: string;
  assembly_id?: string;
  content: string;
};

type OrganismDetails = {
  taxID: number;
  species?: string;
  OrganismName?: string;
  Strain?: string;
  Supergroup?: string;
  BiologicalProperties?: {
    Morphology?: {
      Shape?: string[];
      Motility?: string;
      Gram?: string;
    };
    Environment?: {
      OxygenReq?: string;
      TemperatureRange?: string;
      Habitat?: string;
      OptimumTemperature?: string;
    };
    Phenotype?: {
      Disease?: string;
    };
  };
  RepliconSet?: {
    Replicon: Replicon[];
    Count: RepliconCount[];
  };
  GenomeSize?: {
    units: string;
    content: string;
  };
};

type Replicon = {
  order: string;
  Type: {
    location: string;
    content: string;
  };
  Name: string;
  Size: {
    units: string;
    content: string;
  };
};

type RepliconCount = {
  repliconType: string;
  content: string;
};

type ProjectDescr = {
  Name?: string;
  Title?: string;
  Description?: string;
  ExternalLink?: ExternalLink[];
  Publication?: Publication[];
  ProjectReleaseDate?: string;
  LocusTagPrefix?: LocusTagPrefix[];
  Relevance?: {
    Other?: string;
    Agricultural?: string;
  };
  Grant?: {
    GrantId: string;
    Title?: string;
    Agency: {
      content: string;
    };
  }[];
};

type ProjectID = {
  ArchiveID?: ArchiveID[];
  LocalID?: { content: string }[];
};

type Target = {
  sample_scope: string;
  material: string;
  capture: string;
  Organism: OrganismDetails;
  Description?: string;
};

type ProjectTypeSubmission = {
  Target: Target;
  Method: {
    method_type: string;
  };
  Objectives: {
    Data: {
      data_type: string;
    }[];
  };
  ProjectDataTypeSet?: {
    DataType: string[];
  };
  IntendedDataTypeSet?: {
    DataType: string[];
  };
};

type ProjectType = {
  ProjectTypeSubmission?: ProjectTypeSubmission;
  ProjectTypeTopAdmin?: {
    subtype: string;
  };
};

type Organization = {
  type?: string;
  role?: string;
  url?: string;
  Name: {
    abbr?: string;
    content: string;
  };
};

type SubmissionDescription = {
  Organization?: Organization[];
  Access?: string;
};

type Submission = {
  submitted?: string;
  last_update?: string;
  submission_id?: string;
  Description?: SubmissionDescription;
};

type Project = {
  ProjectID: ProjectID;
  ProjectDescr: ProjectDescr;
  ProjectType: ProjectType;
};

type BioProjectProperties = {
  Project: {
    Project?: Project;
    Submission?: Submission;
  };
};
