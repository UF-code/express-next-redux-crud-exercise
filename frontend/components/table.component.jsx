import React from 'react'
import { Table, Button, ButtonGroup, DropdownButton, Dropdown } from 'react-bootstrap'

const TableComponent = () => {
    const customers = [
        { id: 1, first: 'mark', last: 'otto', username: '@mdo' },
        { id: 2, first: 'mark', last: 'otto', username: '@mdo' },
        { id: 3, first: 'mark', last: 'otto', username: '@mdo' },
        { id: 4, first: 'mark', last: 'otto', username: '@mdo' },
    ]

    return (
        <Table striped bordered hover variant='dark'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {customers.map((customer) => (
                    <tr>
                        <td> {customer.id}</td>
                        <td> {customer.first} </td>
                        <td> {customer.last} </td>
                        <td> {customer.username} </td>
                        <td>
                            <Button variant='warning'>Edit</Button>
                        </td>
                        <td>
                            <Button variant='danger'>Delete</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default TableComponent
