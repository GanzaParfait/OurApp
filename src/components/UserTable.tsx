import type { User } from "../types/User";

type Props = {
    data: User[];
}

const UserTable = ({ data }: Props) => {
    return (
        <>
            <table>
                <thead>
                    <th>Id</th>
                    <th>Name</th>
                </thead>
                <tbody>
                    {
                        data.map((user) => (
                            <tr key={user.id}>
                                <td>{ user.id }</td>
                                <td>{ user.name }</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}


export default UserTable