import { useRouter } from "next/router";
const ClientSpecificProject = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>Client's Specific Project Page</h1>
    </div>
  );
};

export default ClientSpecificProject;
