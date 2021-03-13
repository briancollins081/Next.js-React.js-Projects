import { useEffect, useState } from "react";

const LastSales = () => {
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://nextjs-course-4fce9-default-rtdb.firebaseio.com/sales.json"
    ).then((res) =>
      res.json().then((data) => {
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
        setLoading(false);
      })
    );
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }
  if(sales.length === 0){
      return <p>No data yet</p>
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
