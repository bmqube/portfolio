import { BlogItem } from "@/components/blog/BlogItem";

const BlogPage = () => {
  const blogPosts = [
    { title: "Post 1", summary: "This is the first post", date: "2023-01-01" },
    { title: "Post 2", summary: "This is the second post", date: "2023-01-02" },
  ];

  return (
    <div>
      <div className="space-y-8">
        {blogPosts.map((post, index) => BlogItem({ ...post, index }))}
      </div>
    </div>
  );
};

export default BlogPage;
