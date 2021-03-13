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

const getData = async () => {
  const filePath = path.join(process.cwd(), "data", "dummy.json");
  const jsonData = await fs.readFile(filePath);
  const { products } = JSON.parse(jsonData);
  return products;
};

export const getStaticProps = async (context) => {
  const {
    params: { pid },
  } = context;
  const products = await getData();
  const product = products.find((p) => p.id == pid);
  if (!product) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      product,
    },
  };
};

export const getStaticPaths = async () => {
  const products = await getData();
  const ids = products.map((p) => p.id);
  const paths = ids.map((id) => ({ params: { pid: id } }));

  return {
    paths,
    // fallback: false,
    fallback: true, //Generate only needed pages - needs a fallback check
    // fallback: 'blocking'
  };
};

export default ProductDetails;
