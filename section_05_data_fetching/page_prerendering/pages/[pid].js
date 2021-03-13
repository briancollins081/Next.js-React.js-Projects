import path from "path";
import fs from "fs/promises";

const ProductDetails = ({ product }) => {
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
      { params: { pid: "p2" } },
      { params: { pid: "p3" } },
    ],
    fallback: false,
  };
};

export default ProductDetails;
