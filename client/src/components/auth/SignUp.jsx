

export default function SignUp() {
    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        placeholder="Enter username"
                        autoComplete="off"
                        name="username"
                        className="form-control"

                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        placeholder="Enter email"
                        aytoComplete="off"
                        name="email"
                        className="form-control"
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        placeholder="Enter password"
                        autoComplete="off"
                        name="password"
                        className="form-control"
                    />
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}