import React from 'react';
import 'rsuite/dist/styles/rsuite-default.css'
import { Table, } from 'rsuite';

const { Column, HeaderCell, Cell, Pagination } = Table;

var fakeData = [
  {
    id: 1,
    serverName: 'relay-google.stmp.com',
    lastName: 'woo'
  },
  {
    id: 2,
    serverName: 'relay-google.stmp.com',
    lastName: 'woo2'
  },
  {
    id: 3,
    serverName: 'relay-google.stmp.com',
    lastName: 'woo2'
  },
];

export const SetupSmtp = () => (
  <div>

    <Table
      height={400}
      data={fakeData}
      onRowClick={data => {
        console.log(data);
      }}
    >
      <Column width={70} align="center" fixed>
        <HeaderCell>Id</HeaderCell>
        <Cell dataKey="id" />
      </Column>

      <Column width={130} fixed>
        <HeaderCell>STMP Server</HeaderCell>
        <Cell dataKey="serverName" />
      </Column>

      <Column width={130}>
        <HeaderCell>Port Name</HeaderCell>
        <Cell dataKey="lastName" />
      </Column>

    </Table>

  </div>
);
