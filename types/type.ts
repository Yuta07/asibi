// title
export type TitleProps = {
  title: string;
};

// star icon
export type StarProps = {
  color: string;
  fill: string;
};

// experinence
export type Experience = {
  period: string;
  role: string;
  description: string;
};

// skill
export type Skill = {
  language: string;
  img: string;
  star: number;
  description: string;
};

// works
export type Work = {
  img: string;
  title: string;
  description: string;
  period: string;
  link: string;
};

// links
export type Link = {
  img: string;
  link: string;
  name: string;
};
