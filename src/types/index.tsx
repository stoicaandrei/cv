export type CVData = {
  name: string;
  title: string;
  photoUrl: string;
  introduction: string; // html
  contactInfo: {
    mail: string;
    phone: string;
    github: string;
    linkedin: string;
    skype: string;
    address: string;
  };
  skills: {
    name: string;
    years: number;
  };
  education: {
    name: string;
    degree: string;
    startYear: number;
    endYear: number;
  }[];
  languages: {
    name: string;
    level: string;
  };
  experience: {
    position: string;
    project: string;
    company: string;
    description: string; // html
  }[];
};
