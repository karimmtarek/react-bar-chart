import React, { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import Bar from './Bar';

function BarChart({title, barHeight, barPadding, barColor, dataSourceUrl}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const useStyles = createUseStyles({
    title: {
      fontSize: '1.4em',
      fontWeight: 300
    }
  });

  const classes = useStyles();

  useEffect(() => {
    async function fetchData(url) {
      return fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        })
    }

    fetchData(dataSourceUrl);
  }, []);

  return (
    <div className="BarChart">
      { loading? 'Loading chart...' :
          <svg width="800" height="300">
            <g className={classes.container}>
              { title &&
                <text className={classes.title} x="10" y="30">{title}</text>
              }
              <g transform="translate(100,60)">
                {data.map((record, index) => (
                  <Bar
                    key={index}
                    data={record}
                    index={index}
                    barHeight={barHeight}
                    barPadding={barPadding}
                    barColor={barColor}
                   />
                ))}
              </g>
            </g>
          </svg>
      }
    </div>
  );
}

export default BarChart;
