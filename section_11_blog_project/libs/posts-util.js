import fs from "fs";
import path from "path";
import matter from "gray-matter";
const postsDirectory = path.join(process.cwd(), "posts");
const getPostData = (fileName) => {
  const filePath = path.join(postsDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const postSlug = fileName.replace(/\.md$/, "");
  return { slug: postSlug, ...data, content };
};
export const getAllPosts = () => {
  const postFiles = fs.readdirSync(postsDirectory);
  const posts = postFiles.map((postFile) => getPostData(postFile));
  const sorted = posts.sort((a, b) => (a.date > b.date ? -1 : 1));
  return sorted;
};

export const getFeaturedPosts = () => {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter(
    (p) => p.isFeatured === true
  );
  return featuredPosts;
};
