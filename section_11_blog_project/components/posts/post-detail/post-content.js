import Image from "next/image";

import ReactMarkdown from "react-markdown";
import PostHeader from "./post-header";

import s from "./post-content.module.css";

const PostContent = ({ post }) => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  const customRenderers = {
    // image: (image) => {
    //   return (
    //     <Image
    //       src={`/images/posts/${post.slug}/${image.src}`}
    //       alt={image.alt}
    //       width={800}
    //       height={400}
    //     />
    //   );
    // },
    paragraph: (p) => {
      const { node } = p;
      if (node.children[0].type === "image") {
        const image = node.children[0];
        return (
          <div className={s.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.url}`}
              alt={image.alt}
              width={800}
              height={400}
            />
          </div>
        );
      }
      return <p>{p.children}</p>;
    },
  };
  return (
    <article className={s.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown renderers={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
