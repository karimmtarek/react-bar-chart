import React, { useState, useEffect } from 'react';

function BarChart() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = 'https://my-json-server.typicode.com/karimmtarek/react-bar-chart/words';

    async function fetchData(url) {
      return fetch(url)
        .then((res) => res.json())
        .then((data) => {
          console.log('data', data);
          setData(data);
          setLoading(false);
        })
    }

    fetchData(url);
  }, []);

  return (
    <div className="BarChart">
      { loading? 'Loading chart...' : '' }

      <code>
        <ul>
          { !loading &&
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
