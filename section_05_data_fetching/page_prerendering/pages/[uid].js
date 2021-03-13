const UserId = ({ uid }) => {
  return <h1>User ID: {uid}</h1>;
};
export default UserId;

export const getServerSideProps = (context) => {
  const {
    params: { uid },
  } = context;
  return {
    props: { uid },
  };
};
