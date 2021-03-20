import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import cb from "react-syntax-highlighter/dist/cjs/styles/prism/cb";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";

import PostHeader from "./post-header";

import s from "./post-content.module.css";

SyntaxHighlighter.registerLanguage('js', js)
SyntaxHighlighter.registerLanguage('css', css)

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
    code: (code) => {
      const { language, value } = code;
      return (
        <SyntaxHighlighter style={cb} language={language} children={value} />
      );
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
