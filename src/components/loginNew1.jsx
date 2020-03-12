import React, { Component } from 'react';

class LoginNew1 extends Component {
    state = {}
    render() {
        return (
            <div>
                <section>
                    <h4>Login</h4>
                    <article className="form-group">
                        <input className="form-control" type="text" placeholder="Email address" />
                    </article>
                    <article>
                        <input type="password" placeholder="Password" />
                    </article>
                    <button className="btn btn-dark">Sign-in</button>
                </section>
            </div>
        );
    }
}

export default LoginNew1;