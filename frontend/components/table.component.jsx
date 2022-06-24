import React, { useEffect } from 'react'
import { Table, Button, ButtonGroup, DropdownButton, Dropdown } from 'react-bootstrap'
// axios
import axios from '../axios.js'

axios(`/getAllCustomers`)
    .then((res) => {
        console.log(res.status)
        console.log(res.data)
        console.log(res.data[0].id)
        console.log(res.data[0].first_name)
        console.log(res.data[0].last_name)
        console.log(res.data[0].email)
    })
    .catch((err) => console.log(err))

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
