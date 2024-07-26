//same as firestore user data
import { DateTimeInputProps } from "sanity";

export type Category = {
  title: string;
  description: string;
  image: string;
  slug: string;
};
export type Post = {
  title: string;
  slug: string;
  image: string;
  cat: string;
  publishedAt: DateTimeInputProps;
  description: string;
};
