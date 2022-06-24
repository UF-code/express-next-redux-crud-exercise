import { Table, Button, ButtonGroup, DropdownButton, Dropdown } from 'react-bootstrap'

import { useSelector } from 'react-redux'

const TableComponent = () => {
    const customers = useSelector((state) => state.customers.customers)

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
