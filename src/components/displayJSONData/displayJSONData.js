// import React, { useState } from "react";
// import MockAPIData from './mockAPIData';

// const mydata=MockAPIData;

// function DisplayJSONData() {
//   return (
//     <div>   
//       <ul>
//         {mydata.map(item => (
//           <li>{item.firstName}-{item.lastName}-{item.age}</li>
//         ))}
//       </ul>
      
//     </div>
//   );
// }
// export default DisplayJSONData;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import mockAPIData from './mockAPIData';

const myData = mockAPIData;
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export default function DisplayJSONData() {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}><strong>JSON Data Type - 1</strong>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>

            <TableCell>Name</TableCell>
            <TableCell align="right"><div onClick={()=>stableSort()}>Calories</div></TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {myData.map((row) => (
            <TableRow key={row.name}>
              <TableCell comp onent="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}