import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MUIDataTable from "mui-datatables";
import DataTables from 'material-ui-datatables';
import { ReactMUIDatatable } from "react-material-ui-datatable";
export const UserList = ({ students }) => {

  debugger
  const columns = [
    {
      key: "Name",
      label: "Name"
    },
    {
      key: "Age",
      label: "Age"
    },

    {
      key: "Salary",
      label: "Salary"
    }

  ];
  return (
    <MuiThemeProvider>
      <DataTables
        height={'auto'}
        selectable={false}
        showRowHover={true}
        columns={columns}
        data={students}
        showCheckboxes={false}


      />
    </MuiThemeProvider>

  );
}









