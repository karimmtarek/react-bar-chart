import React, {Fragment} from 'react';
import BarChart from './components/BarChart.js';

function App() {
  return <Fragment>
     <BarChart
        title='Word Character Count Chart!'
        barHeight={30}
        barColor='teal'
        barPadding={5}
        dataSourceUrl='https://my-json-server.typicode.com/karimmtarek/react-bar-chart/data'
        valueModifier={30}
      />
      <hr />
      <BarChart
         title='Countries in the world by population (2021)'
         barHeight={30}
         barColor='green'
         barPadding={5}
         dataSourceUrl='https://my-json-server.typicode.com/karimmtarek/react-bar-chart/countries_by_population_data'
         valueModifier={(1/10000000*6)}
       />
       <hr />
       <BarChart />
       <hr />
       <BarChart
          title='Chart With Fallback Props!'
          dataSourceUrl='https://my-json-server.typicode.com/karimmtarek/react-bar-chart/data'
        />
    </Fragment>
}

export default App;
