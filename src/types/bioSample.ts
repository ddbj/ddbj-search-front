type Id = {
  is_primary?: string;
  db: string;
  db_label?: string;
  is_hidden?: string;
  content: string;
};

type Status = {
  when: string;
  status: string;
};

type Organism = {
  taxonomy_id: number;
};

type Description = {
  Title: string;
  Organism: Organism[];
};

type Name = {
  abbreviation: string;
};

type Owner = {
  Name: Name[];
};

type Model = {
  content: string;
};

type Attribute = {
  attribute_name: string;
  display_name: string;
  harmonized_name: string;
  content: string;
};

type Package = {
  display_name: string;
  content: string;
};

export type BioSampleProperties = {
  access: string;
  publication_date: string;
  last_update: string;
  submission_date: string;
  accession: string;
  Ids: {
    Id: Id[];
  };
  Status: Status;
  Description: Description;
  Owner: Owner;
  Models: {
    Model: Model[];
  };
  Attributes: {
    Attribute: Attribute[];
  };
  Package: Package;
};
