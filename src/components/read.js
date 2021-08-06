import { anyTypeAnnotation, throwStatement } from '@babel/types';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Read = () => {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://610b0bee52d56400176b00c8.mockapi.io/CrudDB`)
          .then((response) => {
              setAPIData(response.data)
          })
    }, [])

    const setData = (data) => {
        console.log(data);
    }

    return (
        <div>
        <Table celled>
            <Table.Header>
            <Table.Row>
                <Table.HeaderCell>First Name</Table.HeaderCell>
                <Table.HeaderCell>Last Name</Table.HeaderCell>
                <Table.HeaderCell>Checked</Table.HeaderCell>
            </Table.Row>
            </Table.Header>

            <Table.Body>
            {APIData.map((data) => {
                return (
                <Table.Row>
                    <Table.Cell>{data.firstName}</Table.Cell>
                    <Table.Cell>{data.lastName}</Table.Cell>
                    <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                    <Table.HeaderCell>Update</Table.HeaderCell>
                    <Link to='/update'><Table.Cell> 
                    <Button onClick={() => setData(data)}>Update</Button>
                    </Table.Cell></Link>
                </Table.Row>
                )})}
            </Table.Body>
        </Table>
        </div>
    )
}

export default Read


