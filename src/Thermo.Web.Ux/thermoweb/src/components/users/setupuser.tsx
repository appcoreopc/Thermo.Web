import React from 'react';
import { Button } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css'
import { Table, } from 'rsuite';
import { connect, useDispatch } from "react-redux";
import { addUser, getUsers } from "../../redux/reducers/userActions";
import { Header } from '../headers/header';
import { logstate, handleUser } from './userUtil';
import { NewUserForm } from './UserForm';

const { Column, HeaderCell, Cell } = Table;

export const SetupUser = ({ count, users, addUser, getUsers }: any) => {

  return <div>

    <Header count={count}></Header>

    <NewUserForm> </NewUserForm>
    <Button onClick={() => addUser('dispatched' + count)}> Add </Button>
    <Button onClick={() => getUsers('dispatched' + count)}> Delete </Button>
    <Button onClick={() => getUsers('dispatched' + count)}> Reload </Button>

    <Table
      height={400}
      data={users}
      onRowClick={data => {
        console.log(data);
      }}
    >
      <Column width={70} align="center" fixed>
        <HeaderCell>Id</HeaderCell>
        <Cell dataKey="id" />
      </Column>

      <Column width={130} fixed>
        <HeaderCell>First Name</HeaderCell>
        <Cell dataKey="firstName" />
      </Column>

      <Column width={130}>
        <HeaderCell>Last Name</HeaderCell>
        <Cell dataKey="lastName" />
      </Column>

    </Table>
  </div>

}

interface Employee {
  count: string
  employee: string
}

const mapStateToProps = (state: any) => ({
  count: logstate(state),
  users: handleUser(state)
});

const mapDispatchToProps = (dispatch: any) => ({
  addUser: (text: string) => dispatch(addUser(text)),
  getUsers: (text: string) => dispatch(getUsers(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(SetupUser);
