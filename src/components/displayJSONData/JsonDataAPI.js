import React, { useState, useEffect } from "react";
// import "./styles.css";

 function JsonDataAPI() {
  const [myData, setMyData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/hadley/orgs")
      .then(response => response.json())
      .then(data => {
        setMyData(data);
      });
  });
  return (
    <div className="App">
      <h6>JSON Data</h6>
      {myData.map(items => (
        <ul>
          <li>{items.login}</li>
          <li>{items.id}</li>
          <li>{items.url}</li>
        </ul>
      ))}
    </div>
  );
}
export default JsonDataAPI;