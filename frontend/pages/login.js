
import Styles from './login.module.css'
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
            {error && <p>{error}</p>}
            <div className={Styles.login}>
                <form className={Styles.form}>
                    <h1 className={Styles.title}>Login</h1>
                    <div className={Styles.text_area}>
                        <label className={Styles.label}>Email</label>
                        <input className={Styles.text_input} type="text" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br/>
                        <label className={Styles.label}>Password</label>
                        <input className={Styles.text_input} type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br/>
                        <button className={Styles.btn} onClick={handleLogin}>Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
