import { Table } from 'react-bootstrap'
function NestedArrayList() {

    const users = [
        {
            name: "Pavan", email: "test@gmail.com", address: [
                { hn: "120", city: "Mandsaur", state: "MP" },
                { hn: "127", city: "Kota", state: "RJ" },
                { hn: "240", city: "Ratlam", state: "MP" },
                { hn: "452", city: "Ahmedabad", state: "GJ" },
            ]
        },
        {
            name: "vinod", email: "vinod@gmail.com", address: [
                { hn: "787", city: "AAAA", state: "AA" },
                { hn: "121", city: "BBBB", state: "BB" },
                { hn: "888", city: "CCCC", state: "CC" },
                { hn: "23", city: "DDDD", state: "DD" },
            ]
        },
        {
            name: "rakesh", email: "rakesh@gmail.com", address: [
                { hn: "24", city: "EEEE", state: "EE" },
                { hn: "25", city: "FFFF", state: "FF" },
                { hn: "26", city: "GGGG", state: "GG" },
                { hn: "28", city: "HHHH", state: "HH" },
            ]
        },
        {
            name: "kumar", email: "kumar@gmail.com", address: [
                { hn: "29", city: "IIII", state: "II" },
                { hn: "30", city: "JJJJ", state: "JJ" },
                { hn: "31", city: "KKKK", state: "KK" },
                { hn: "32", city: "LLLL", state: "LL" },
            ]
        }
    ]



    return (

        <div className="row">
            <h1 className="mt-5 mb-5">Nested Array List</h1>

            <Table striped hover variant="dark" size="lg">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        users.map((item, i) =>
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>
                                    <Table striped hover variant="dark" size="sm">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>H. No</th>
                                                <th>City</th>
                                                <th>State</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                item.address.map((data, a) =>

                                                    <tr key={a}>
                                                        <td>{a + 1}</td>
                                                        <td>{data.hn}</td>
                                                        <td>{data.city}</td>
                                                        <td>{data.state}</td>
                                                    </tr>

                                                )
                                            }
                                        </tbody>
                                    </Table>
                                </td>
                            </tr>
                        )
                    }
                </tbody>

            </Table>
        </div>
    )
}
export default NestedArrayList;