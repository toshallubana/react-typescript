import { useState } from 'react'; 
import { useContext } from 'react';
import { UserContext } from '../userContext/UserContext';

type AuthUser = {
    name: string
    email: string
}

const LoggedIn = () => {
    // const [user, setUser] = useState<AuthUser | null>(null);
    const userContext = useContext(UserContext);

    const handleLogin = () => {
        if(userContext)
        userContext.setUser({
            name: 'Toshal',
            email: 'toshal.t1@gmail.com'
        })
    }
    const handleLogout = () => {
        if(userContext) userContext.setUser(null);
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {userContext?.user?.name}</div>
            <div>User email is {userContext?.user?.email}</div>
        </div>
    )
}
export default LoggedIn;
