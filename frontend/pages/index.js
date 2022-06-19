import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'
import TableComponent from '../components/table.component.jsx'

export default function Home() {
    return (
        <div className='bg-dark vw-100 vh-100 d-flex justify-content-center align-items-center'>
            <Head>
                <title>Create Next App</title>
                <meta name='description' content='Generated by create next app' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main>
                <div className='w-100 d-flex justify-content-center'>
                    <Button variant='success' className='p-3 m-3'>
                        Create New Customer
                    </Button>
                </div>
                <div className='vw-100'>
                    <TableComponent />
                </div>
            </main>
        </div>
    )
}
