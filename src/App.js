import React from 'react';
import BarChart from './components/BarChart.js';

function App() {
  return <BarChart
      title='Word Character Count Chart!'
      barHeight={30}
      barColor='teal'
      barPadding={5}
      dataSourceUrl='https://my-json-server.typicode.com/karimmtarek/react-bar-chart/data'
    />
}

export default App;
