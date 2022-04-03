import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';

export type ContactInfoItem = {
  icon: `${IconPrefix} ${IconName}`; // font awesome class
  text: string;
  url?: string;
};
type ContactInfo = {
  title: 'contact';
  items: ContactInfoItem[];
};
export type SkillItem = {
  name: string;
  years: number;
};
type Skills = {
  title: 'skills';
  items: SkillItem[];
};
export type LanguageItem = {
  name: string;
  level: string;
};
type Languages = {
  title: 'languages';
  items: LanguageItem[];
};
export type OpenSourceItem = {
  name: string;
  url: string;
};
type OpenSource = {
  title: 'open source';
  items: OpenSourceItem[];
};
export type AwardItem = {
  name: string;
  competition: string;
};
type Awards = {
  title: 'awards';
  items: AwardItem[];
};
type CustomSection = {
  title: string;
  content: string; // html
};
export type SidebarItem =
  | ContactInfo
  | Skills
  | Languages
  | OpenSource
  | Awards
  | CustomSection;

type AboutMe = {
  title: 'about me';
  introduction: string; // html
};
export type ExperienceItem = {
  position: string;
  project: string;
  company: string;
  description: string; // html
  startDate: string;
  endDate: string;
  mostRelevant: boolean;
};
type WorkExperience = {
  title: 'work experience' | 'most relevant work experience';
  items: ExperienceItem[];
};
export type BodyItem = AboutMe | WorkExperience | CustomSection;

export type CVData = {
  photoUrl: string;
  name: string;
  title: string;
  sidebar: SidebarItem[];
  body: BodyItem[];
};
