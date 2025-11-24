export type CommunityItem = {
  _id: string;
  image: string;
  title: string;
  description: string;
  date: string;
  slug: string;
  category: 
    | "Retreats"
    | "Fellowships"
    | "Conferences"
    | "Workshops"
    | "Outreaches"
    | "Celebrations";
};
