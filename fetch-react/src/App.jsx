import React, { useState, useEffect } from "react";
import axios from "axios";
import ListComponent from "./component/ListComponent";

import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setData(response.data);
    } catch (err) {
      setError("Error fetching data");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = (item) => (
    <div>
      <h3>{item.title}</h3>
      <p>{item.body}</p>
    </div>
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="app-container">
      <h1>Fetched List</h1>
      <ListComponent items={data} renderItem={renderItem} />
    </div>
  );
}

export default App;
