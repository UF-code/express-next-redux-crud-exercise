import { Table, Button } from 'react-bootstrap'

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { deleteCustomer } from '../redux/customerSlice'

const TableComponent = () => {
    const customers = useSelector((state) => state.customers.customers)
    const dispatch = useDispatch()

    return (
        <div>
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
                            <td> {customer.first_name} </td>
                            <td> {customer.last_name} </td>
                            <td> {customer.email} </td>
                            <td>
                                <Button variant='warning'>Edit</Button>
                            </td>
                            <td>
                                <Button
                                    variant='danger'
                                    onClick={() => {
                                        dispatch(deleteCustomer(customer.id))
                                    }}
                                >
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default TableComponent
