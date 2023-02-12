import React,{useState,useEffect} from "react";
import { Container, Paper, Box, Typography,TableContainer,Table,TableBody,TableHead,TableRow,TableCell,TablePagination, } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from 'axios';



const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[50],
  },
}));


function Network() {
  const classes = useStyles();
  const [users, setUsers]=useState([]);
  const [page,setpage]=useState(0);
  const [rowsPerPage,setRowsPerPage]=useState(5);
  const loadUsers=async()=>{
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUsers(res.data);
  };
  useEffect(()=>{
    loadUsers()
  },[]);
  return (
    <Container className={classes.root}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Frame Number</TableCell>
              <TableCell>Frame Time</TableCell>
              <TableCell>Frame Length</TableCell>
              <TableCell>Mac Sources</TableCell>
              <TableCell>Mac Dest</TableCell>
              <TableCell>IP Source</TableCell>
              <TableCell>IP Dest</TableCell>
              <TableCell>IP Protocol</TableCell>
              <TableCell>IP Length</TableCell>
              <TableCell>TCP Length</TableCell>
              <TableCell>TCP Source Port</TableCell>
              <TableCell>TCP Dest Port</TableCell>
              <TableCell>Info</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              users.map((user)=>(
                <TableRow>
            <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>

              ))
            }
            </TableBody>
        </Table>

        <TablePagination
        rowsPerPageOptions={[5,10,15,25,50]}
        count={users.length}
        rowsPerPage={rowsPerPage}
        page={page} />

      </TableContainer>
      
    </Container>
  );
}

export default Network;
