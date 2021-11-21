import {useParams} from 'react-router-dom';
function User(){;
    const {firstName, lastName} = useParams()
    console.log(useParams());
    return (
        <div>User {firstName} {lastName}</div>
    );
}
export default User;