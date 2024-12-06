export interface ICategory {
  _id: string;
  name: string;
  description?: string;
  slug: string;
  isDeleted: boolean;
  parentCategory?: string;
  image: string;
}
