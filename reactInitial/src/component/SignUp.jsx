import React from 'react';
function SignUp(){
    const [message, setMessage] = React.useState("");
    const user = {
        email: 'admin@gmail.com',
        password: '123456'
    }
    function signUp(formData){
        const email = formData.get("email")
        const password = formData.get("password")
        window.alert(`Email ${email} and password ${password}`)
        
        const loginPrompt = (email === user.email && password === user.password) ? "Login Successfully" : "Login Failed";
        setMessage(loginPrompt)
        
    }
    
    return(
        <section className="signup">
                <h1>Signup Now</h1>
            <form action={signUp} className="signup-form">
                <label htmlFor="email">Email:</label>
                <input id="email" type="email" name='email' aria-level="Enter email address" placeholder="taki@gmail.com" defaultValue={"neamoth@gmail.com"}  />
                <br />

                <label htmlFor="password">Password:</label>
                <input id="password" type="password" name='password' aria-level="Enter password" defaultValue={123456} />
                <br />

                <button>Submit</button>
            </form>
            <p id="result">{message}</p>
            {React.version}
        </section>
    );
}

export default SignUp;