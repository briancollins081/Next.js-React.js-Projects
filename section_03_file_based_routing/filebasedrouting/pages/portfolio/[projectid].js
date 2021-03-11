import { useRouter } from "next/router";
const ProjectItem = () => {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);
  console.log(router.route);
  return (
    <div>
      <h1>Project Item Page</h1>
    </div>
  );
};

export default ProjectItem;
