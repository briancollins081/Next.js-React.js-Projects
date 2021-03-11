import { useRouter } from "next/router";
const ClientsProjects = () => {
  const router = useRouter();
  console.log(router.query);
  const handleLoadProject = () => {
    // router.replace("/clients/andere/project-a");
    router.replace({
      pathname: '/clients/[id]/[clientProjectId]',
      query: {id:'andere', clientProjectId: 'project-a'}
    });
  };
  return (
    <div>
      <h1>All Selected Client's Projects</h1>
      <button onClick={handleLoadProject}>
        Load a Single Project(Project A)
      </button>
    </div>
  );
};

export default ClientsProjects;
