import React from 'react'
import { Table, Button, ButtonGroup, DropdownButton, Dropdown } from 'react-bootstrap'

const TableComponent = () => {
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
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>
                        <Button variant='warning'>Edit</Button>
                    </td>
                    <td>
                        <Button variant='danger'>Delete</Button>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>
                        <Button variant='warning'>Edit</Button>
                    </td>
                    <td>
                        <Button variant='danger'>Delete</Button>
                    </td>
                </tr>
                <tr>
                    <td>3</td>
                    <td colSpan={2}>Larry Bird</td>
                    <td>@twitter</td>
                    <td>
                        <Button variant='warning'>Edit</Button>
                    </td>
                    <td>
                        <Button variant='danger'>Delete</Button>
                    </td>
                </tr>
            </tbody>
        </Table>
    )
}

export default TableComponent
