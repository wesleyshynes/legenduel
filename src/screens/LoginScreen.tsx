import { useState } from "react";

export default function LoginScreen(props: {
    setLoggedIn: (userInfo: any) => void;
}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="legendu-container">
            <h1>Welcome to Legendu</h1>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <br />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br />
            <button disabled={username.length < 4 || password.length < 4} onClick={() => {
                props.setLoggedIn({
                    username: username,
                })
            }}>Login</button>
        </div>
    );
}