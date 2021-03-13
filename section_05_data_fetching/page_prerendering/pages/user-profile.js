const UserProfile = ({ username }) => {
  return (
    <>
      <h1>Username: {username}</h1>
    </>
  );
};

export default UserProfile;

/**
 * @return {
 *  [props | notFound | redirect]: {...}
 * }
 */
export const getServerSideProps = async (context) => {
  const { params, req, res } = context;
//   console.log({ params, req, res });

  return {
    props: {
      username: "Andere Brian",
    },
  };
};
