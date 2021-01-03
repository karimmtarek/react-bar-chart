import React from 'react';
import { createUseStyles } from 'react-jss';

function Bar({data, index, barHeight}) {
  const barPadding = 2;
  const barWidth = parseInt(data.value) * 30;
  const textYValue = barHeight * 0.5;
  const useStyles = createUseStyles({
    barGroup: {
      transition: 'opacity 300ms'
    },
    nameLabel: {
      textAnchor: 'end',
      fontWeight: 300,
      fontSize: '1em',
      fill: '#333',
      textTransform: 'capitalize'
    },
    bar: {
      fill: 'orange'
    },
    valueLabel: {
      textAnchor: 'end',
      fill: '#fff',
      fontWeight: 500,
      fontSize: '0.7em',

    },
  });
  const classes = useStyles();

  return (
    <g transform={`translate(0, ${index * barHeight})`}>
      <g className={classes.barGroup}>
        <text className={classes.nameLabel} x="-6" y={textYValue} alignmentBaseline="middle">{data.label}</text>
        <rect className={classes.bar} y={barPadding * 0.5} width={barWidth} height={barHeight - barPadding}>
        </rect>
        <text className={classes.valueLabel} x={barWidth - 8} y={textYValue} alignmentBaseline="middle">{data.value}</text>
      </g>
    </g>
  );
}

export default Bar;
