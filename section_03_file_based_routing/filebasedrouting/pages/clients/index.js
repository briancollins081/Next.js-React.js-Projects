import Link from "next/link";

const clients = [
  { id: "andere", name: "Andere Brian" },
  { id: "collins", name: "Collins Brian" },
  { id: "javis", name: "Javis Kim" },
  { id: "jane", name: "Doe Jane" },
];
const Clients = () => {
  return (
    <div>
      <h1>Clients page</h1>
      <ul>
        {clients.map((cl) => (
          <li key={cl.id}>
            {/* <Link href={`/clients/${cl.id}`}>{cl.name}</Link> */}
            <Link href={{ pathname: "/clients/[id]", query: {id: cl.id} }}>{cl.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Clients;
