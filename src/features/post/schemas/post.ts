export interface Post {
  id: string;
  frontmatter: {
    title: string;
    author?: string;
  };
  body: string;
  created_at: Date;
  updated_at: Date;
}
