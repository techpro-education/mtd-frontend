import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import styles from "../styles/dashboardStyle.js";
import bankService from "../service/bankService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router";
import DeleteIcon from "@material-ui/icons/Delete";
const useStyles = makeStyles(styles);

let rows = [];
const columns = [
  { id: "firstName", label: "First Name", minWidth: 200 },
  { id: "lastName", label: "Last Name", minWidth: 200 },
  {
    id: "email",
    label: "Email",
    minWidth: 200,
  },
];

export default function UserDetails(props) {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  rows = props.users;
  const history = useHistory();
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleDelete = (id) => {
    bankService.deleteUser(id).then((response) => {
      if (response.status === 200) {
        history.push("/admin");
      } else {
        toast.success("Unable to Deleted the User", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    });
  };
  const deleteStyle = { cursor: "pointer", color: "brown" };
  return (
    <Paper className={classes.root}>
      <fieldset>
        <legend>
          <h1 className={classes.successText}>User Details</h1>
        </legend>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover tabIndex={-1} key={row.id}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                      <TableCell>
                        <DeleteIcon
                          style={deleteStyle}
                          onClick={() => handleDelete(row.userId)}
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
        <ToastContainer />
      </fieldset>
    </Paper>
  );
}
