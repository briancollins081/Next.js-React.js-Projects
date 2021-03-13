import path from "path";
import fs from "fs/promises";

import Link from "next/link";

const HomePage = ({ products }) => {
  return (
    <ul>
      {products.map((p) => (
        <li key={p.id}>
          <Link href={`/${p.id}`}>{p.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export const getStaticProps = async (context) => {
  console.log("ReGenerating ...");
  const filePath = path.join(process.cwd(), "data", "dummy.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  if (!data) {
    return {
      redirect: "/no-data",
    };
  }
  if (data.products.length === 0) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  };
};

export default HomePage;
