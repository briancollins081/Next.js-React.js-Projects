const getData = async () => {
  const response = await fetch(
    "https://nextjs-course-4fce9-default-rtdb.firebaseio.com/events.json"
  );
  const data = await response.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  const temp = [];
  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      temp.push({
        id: key,
        ...data[key],
      });
    }
  }
  return temp;
};

export default getData;
