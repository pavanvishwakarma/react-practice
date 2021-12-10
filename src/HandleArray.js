import { Table } from 'react-bootstrap'
function HandleArray() {

    // const students = ['pavan', 'kumar', 'viven', 'rakesh'];

    const students = [
        { name: "Pavan", email: "test@gmail.com", phone: "222" },
        { name: "vinod", email: "vinod@gmail.com", phone: "222" },
        { name: "rakesh", email: "rakesh@gmail.com", phone: "222" },
        { name: "kumar", email: "kumar@gmail.com", phone: "987" }
    ]

    // students.map((item) => {
    //     console.log(`Map loop ${item}`);
    // });

    // for (let i = 0; i < students.length; i++) {
    //     console.log(`for loop ${students[i]}`);
    // }
    let x = 1;
    return (
        <div>
            <h1>Handle Array with List</h1>


            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((data, i) =>
                            data.phone === "222" ?
                                <tr key={i}>
                                    <td>{x++}</td>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td>{data.phone}</td>
                                </tr> : null
                        )
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default HandleArray;