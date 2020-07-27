import React, { useState, useEffect } from 'react';
import { Button } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css'
import { Table, } from 'rsuite';
import { connect, useDispatch } from "react-redux";
import { addUser, getUsers, deleteUsers } from "../../redux/reducers/userActions";
import { Header } from '../headers/header';
import { logstate, handleUsersRecord, handleExecutionResult } from './userUtil';
import { UserForm } from './userform';

const { Column, HeaderCell, Cell } = Table;
export const SetupUser = (props: any) => {

  let checked = false;
  let indeterminate = false;

  useEffect(() => {
    props.getUsers('initial load');
  }, []);

  return <div>

    <Header></Header>
    <UserForm addUser={props.addUser}> </UserForm>
    <Button onClick={() => props.deleteUsers('12,34,35,67')}> Delete </Button>
    <Button onClick={() => props.getUsers('dispatched' + props.count)}> Reload </Button>

    <div> {props.status.message} </div>

    <Table
      height={400}
      data={props.users}
      onRowClick={data => {
        console.log(data);
      }}>

      <Column width={120} fixed="right">
        <HeaderCell>Action</HeaderCell>

        <Cell>
          {
            (rowData: { id: any; }) => {
              function handleAction() {
                alert(`id:${rowData.id}`);
              }
              return (
                <span>
                  <a onClick={handleAction}> Edit </a> |{' '}
                  <a onClick={handleAction}> Remove </a>
                </span>
              );
            }}
        </Cell>
      </Column>

      {/* <Column width={70} align="center" fixed>
        <HeaderCell>Id</HeaderCell>
        <Cell dataKey="id" />
      </Column> */}

      <Column width={130} fixed>
        <HeaderCell>First Name</HeaderCell>
        <Cell dataKey="firstname" />
      </Column>

      <Column width={130}>
        <HeaderCell>Last Name</HeaderCell>
        <Cell dataKey="lastname" />
      </Column>

    </Table>
  </div>

}

interface Employee {
  count: string
  employee: string
}

function handleState(state: any) {
  console.log(state);
}

const mapStateToProps = (state: any) => ({
  users: handleUsersRecord(state),
  status: handleExecutionResult(state)
});

const mapDispatchToProps = (dispatch: any) => ({
  addUser: (text: string) => dispatch(addUser(text)),
  getUsers: (text: string) => dispatch(getUsers(text)),
  deleteUsers: (targetUsers: string) => dispatch(deleteUsers(targetUsers))
});

export default connect(mapStateToProps, mapDispatchToProps)(SetupUser);
