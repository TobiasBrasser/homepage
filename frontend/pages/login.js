import { login } from "../lib/api/auth";
import { useState } from "react";
import { useSession } from "../lib/hooks/session";
import Router from "next/router";

export default function IndexPage() {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const { signIn } = useSession();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await login({ email, password });
            if (!response) {
                setError(response.message);
            } else {
                setError(null);
                signIn(response);
                Router.push("/dokumente");
            }
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <br/>
            {error && <p>{error}</p>}
            <form>
                <input type="text" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br/>
                <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br/>
                <button onClick={handleLogin}>Login</button>
            </form>
        </div>
    );
}
