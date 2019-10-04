import ReactTable from "react-table";
import "react-table/react-table.css";
import TableData from "../data/data.json";
import React from "react";

const columnKey = Object.keys(TableData[0]);

const sort_by = (field, reverse, primer) => {
  const key = primer
    ? function(x) {
        return primer(x[field]);
      }
    : function(x) {
        return x[field];
      };

  reverse = !reverse ? 1 : -1;

  return function(a, b) {
    return (a = key(a)), (b = key(b)), reverse * ((a > b) - (b > a));
  };
};

export default props => {
  // URL param set to upper to match json keys
  var URLKey =
    props.match.params[0].charAt(0).toUpperCase() +
    props.match.params[0].slice(1);

  console.log(props);
  console.log(columnKey);

  // "#" in the URL is not recognised, therefore the final else sorts by "#"
  if (columnKey.includes(URLKey)) {
    if (URLKey === "City" || URLKey === "Country") {
      TableData.sort(sort_by(URLKey, false, a => a.toUpperCase()));
    } else TableData.sort(sort_by(URLKey, false, parseInt));
  } else TableData.sort(sort_by("#", false, parseInt));

  var columns = [];
  columnKey.forEach(key =>
    columns.push({
      Header: key,
      accessor: key
    })
  );

  return (
    <div>
      <ReactTable data={TableData} columns={columns} />
    </div>
  );
};
