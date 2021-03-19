import AllPosts from "../../components/posts/all-posts";
const POSTS = [
  {
    title: "This is a sunset review",
    image: "sunset.jpg",
    excerpt: "Experiance a greater sunset beauty...",
    date: "2020-02-10",
    slug: "this-is-a-sunset-review",
  },
  {
    title: "This is a sunset review 2",
    image: "sunset.jpg",
    excerpt: "Experiance a greater sunset beauty...",
    date: "2020-02-10",
    slug: "this-is-a-sunset-review2",
  },
  {
    title: "This is a sunset review 3",
    image: "sunset.jpg",
    excerpt: "Experiance a greater sunset beauty...",
    date: "2020-02-10",
    slug: "this-is-a-sunset-review3",
  },
];
const Posts = () => {
  return <AllPosts posts={POSTS} />;
};

export default Posts;
