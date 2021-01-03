import React from 'react';
import BarChart from './components/BarChart.js';

function App() {
  return <BarChart
      title="Word's Characters Count Chart!"
      dataSourceUrl='https://my-json-server.typicode.com/karimmtarek/react-bar-chart/words'
    />
}

export default App;
