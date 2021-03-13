import { useEffect, useState } from "react";
import useSWR from "swr";

const LastSales = () => {
    const [sales, setSales] = useState([]);
  //   const [loading, setLoading] = useState(false);

  const { data, error } = useSWR(
    "https://nextjs-course-4fce9-default-rtdb.firebaseio.com/sales.json"
  );

  useEffect(() => {
    if (data) {
      const temp = [];
      for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
          temp.push({
            id: key,
            username: data[key].username,
            volume: data[key].volume,
          });
        }
      }
      setSales(temp);
    }
  }, [data]);

  //   useEffect(() => {
  //     setLoading(true);
  //     fetch(
  //       "https://nextjs-course-4fce9-default-rtdb.firebaseio.com/sales.json"
  //     ).then((res) =>
  //       res.json().then((data) => {
  //         const temp = [];
  //         for (const key in data) {
  //           if (Object.hasOwnProperty.call(data, key)) {
  //             temp.push({
  //               id: key,
  //               username: data[key].username,
  //               volume: data[key].volume,
  //             });
  //           }
  //         }
  //         setSales(temp);
  //         setLoading(false);
  //       })
  //     );
  //   }, []);
  if (error) {
    return <p>Failed to load!</p>;
  }
  if (!data || !sales) {
    return <p>Loading...</p>;
  }
  return (
    <ul>
      {sales.map((s) => (
        <li key={s.id}>
          {s.username} - ${s.volume}
        </li>
      ))}
    </ul>
  );
};

export default LastSales;
