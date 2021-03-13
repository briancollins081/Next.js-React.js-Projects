import path from "path";
import fs from "fs/promises";

const ProductDetails = ({ product }) => {
  if (!product) {
    return <div>Loading Product...</div>;
  }
  return (
    <>
      <h1>Product Title: {product.title}</h1>
      <p>Product Description: {product.description}</p>
    </>
  );
};

export const getStaticProps = async (context) => {
  const {
    params: { pid },
  } = context;
  const filePath = path.join(process.cwd(), "data", "dummy.json");
  const jsonData = await fs.readFile(filePath);
  const { products } = JSON.parse(jsonData);
  const product = products.find((p) => p.id == pid);
  return {
    props: {
      product,
    },
  };
};

export const getStaticPaths = () => {
  return {
    paths: [
      { params: { pid: "p1" } },
      //   { params: { pid: "p2" } },
      //   { params: { pid: "p3" } },
    ],
    fallback: true, //Generate only needed pages
  };
};

export default ProductDetails;
