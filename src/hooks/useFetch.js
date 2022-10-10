import { useEffect, useState } from "react";

export default function useFetch(url) {
  // data를 받아오기 위함
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, [url]);
  return data;
}
