import './Header.css';

export default function Header(){
    return (
        <header>
            <h1>Youtube Movies</h1>
            <div>
                <button className="signup-btn">Sign Up</button>
                <button className="login-btn">Log In</button>
            </div>

        </header>
    )
}