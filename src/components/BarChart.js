import React, { useState, useEffect } from 'react';
import { fetchPayload } from '../utils/api'

function BarChart() {
  const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = 'https://my-json-server.typicode.com/karimmtarek/react-bar-chart/words';

    async function fetchData(url) {
      return fetch(url)
        .then((res) => {
          const dataJson = res.json();
          console.log('data', dataJson);
          // setData(dataJson);
        })
    }

    fetchData(url);
  }, []);

  return (
    <div className="BarChart">
      Payload:

      <code>
        <ul>
          {
            data.map( (item, index) => (
              <li key={index}>{item.word} [{item.chars}]</li>
            ))
          }
        </ul>
      </code>
    </div>
  );
}

export default BarChart;
