import { Table, Button, ButtonGroup, DropdownButton, Dropdown } from 'react-bootstrap'

import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import axios from '../axios.js'

import { useDispatch } from 'react-redux'
import { getCustomers } from '../redux/customerSlice'

const TableComponent = () => {
    const customers = useSelector((state) => state.customers.customers)

    console.log(customers)
    console.log(customers)
    console.log(customers)
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     axios
    //         .get(`/getAllCustomers`)
    //         .then((res) => {
    //             console.log(res.status)
    //             console.log(res.data)
    //             console.log(res.data[0].id)
    //             console.log(res.data[0].first_name)
    //             console.log(res.data[0].last_name)
    //             console.log(res.data[0].email)
    //             console.log(res.data[0].birthdate)
    //             console.log(res.data[0].createdAt)
    //             console.log(res.data[0].updatedAt)
    //             // customers = [...res.data]
    //             // console.log(customers)
    //             dispatch(getCustomers(res.data))
    //         })
    //         .catch((err) => console.log(err))
    // })

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
                        <td> {customer.first_name} </td>
                        <td> {customer.last_name} </td>
                        <td> {customer.email} </td>
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
