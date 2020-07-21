import React from 'react';
import { Button } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css'
import { Table, } from 'rsuite';
import { connect, useDispatch } from "react-redux";
import { addUser, getUsers } from "../../redux/reducers/userActions";
import { Header } from '../headers/header';

const { Column, HeaderCell, Cell } = Table;

var fakeData = [
  {
    id: 1,
    firstname: 'jeremy',
    lastName: 'woo'
  },
  {
    id: 2,
    firstname: 'jeremy2',
    lastName: 'woo2'
  },
  {
    id: 3,
    firstname: 'jeremy2',
    lastName: 'woo2'
  },
];

export const SetupUser = ({ count, users, addUser, getUsers }: any) => {

  return <div>

    <Header count={count}></Header>

    <Button onClick={() => addUser('dispatched' + count)}> Load User </Button>
    
    <Button onClick={() => getUsers('dispatched' + count)}> Get User </Button>

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

function logstate(state: any) {

  if (state.userSetup.payload == undefined)
    return 0;
  else
    return state.userSetup.payload.count;

}

function handleUser(state :any) 
{
  debugger;
  if (state != undefined && state.userSetup != undefined && state.userSetup.users != null)
  {
    return state.userSetup.users;
  }
  else 
    return fakeData;

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
