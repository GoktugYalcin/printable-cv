import Airtable from "airtable";
import { env } from "@/env";

type ProfileProps = {
  name: string;
  surname: string;
  description: string;
  long_description: string;
  profile_pic_url: string;
};

type ProjectProps = {
  title: string;
  short_desc: string;
  git_url?: string;
  prod_url?: string;
};

type EducationProps = {
  school_name: string;
  desc: string;
  gpa: number;
};

const base = new Airtable({
  apiKey: env.AIRTABLE_ACCESS_TOKEN,
  endpointUrl: "https://api.airtable.com",
}).base(env.AIRTABLE_BASE_ID);

export const getProfileFields = async (): Promise<ProfileProps> => {
  const field = await base("Profile")
    .select({
      maxRecords: 1,
      view: "Grid view",
    })
    .firstPage();
  return field[0].fields as ProfileProps;
};

export const getProjectsFields = async (): Promise<Array<ProjectProps>> => {
  const fields = await base("Projects")
    .select({
      maxRecords: 3,
      view: "Grid view",
    })
    .firstPage();

  return fields.map((stack) => stack.fields as ProjectProps);
};

export const getEducationFields = async (): Promise<Array<EducationProps>> => {
  const fields = await base("Education")
    .select({
      maxRecords: 3,
      view: "Grid view",
    })
    .firstPage();

  return fields
    .filter(
      (f: Record<EducationProps, string | number>) => f.fields.school_name,
    )
    .map((stack) => stack.fields as EducationProps);
};
