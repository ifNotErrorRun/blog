export interface Post {
  id: string;
  frontmatter: {
    title: string;
    author?: string;
  };
  body: string;
  created_at: string;
  updated_at: string;
}
