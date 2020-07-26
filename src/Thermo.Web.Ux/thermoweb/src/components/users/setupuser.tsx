import React, { useState } from 'react';
import { Button, Checkbox } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css'
import { Table, } from 'rsuite';
import { connect, useDispatch } from "react-redux";
import { addUser, getUsers, deleteUsers } from "../../redux/reducers/userActions";
import { Header } from '../headers/header';
import { logstate, handleUsersRecord, handleUserDeleteState, handleUserAddState } from './userUtil';
import { UserForm } from './userform';


const { Column, HeaderCell, Cell } = Table;
export const SetupUser = ({ count, users, props, state,
  addUser, getUsers, deleteUsers, userDeleteStatus, userAddStatus }: any) => {

  let checked = false;
  let indeterminate = false;
  const [data, setdata] = useState(0);
  const [checkedKeys, setcheckedKeys] = useState(0);

  return <div>

    <Header></Header>
    <UserForm addUser={addUser}> </UserForm>
    <Button onClick={() => deleteUsers('12,34,35,67')}> Delete </Button>
    <Button onClick={() => getUsers('dispatched' + count)}> Reload </Button>


    <div> {userDeleteStatus ? '' : 'error deleting user'}
      {userAddStatus ? '' : 'error adding user'} </div>

    <Table
      height={400}
      data={users}
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

function handleState(state: any) {
  console.log(state);
}

const mapStateToProps = (state: any) => ({
  count: logstate(state),
  users: handleUsersRecord(state),
  userDeleteStatus: handleUserDeleteState(state),
  userAddStatus: handleUserAddState(state)
});

const mapDispatchToProps = (dispatch: any) => ({
  addUser: (text: string) => dispatch(addUser(text)),
  getUsers: (text: string) => dispatch(getUsers(text)),
  deleteUsers: (targetUsers: string) => dispatch(deleteUsers(targetUsers))
});

export default connect(mapStateToProps, mapDispatchToProps)(SetupUser);
