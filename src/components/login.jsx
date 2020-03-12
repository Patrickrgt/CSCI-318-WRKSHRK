import React, { Component } from 'react';

class LoginPage extends Component {
    state = {}
    render() {
        return (


            <div className="container">
                <span className="span-divider-6"></span>
                <h1 className="center-text h1-wh bold-wh">Admin Portal</h1>
                <span className="span-divider-3"></span>
                <div className="row justify-content-md-center">

                    <div className="col-md-auto card-contain-gy">

                        <h4 className="center-text h4-wh bold-wh">Login</h4>
                        <section>

                            <div class="form-group">
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address" />
                            </div>

                            <span className="span-divider-1" />

                            <div class="form-group">
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>

                            <span className="span-divider-1"></span>

                            <article className="center-text">
                                <button id="sign-in" className="btn btn-secondary">Sign-in</button>
                            </article>

                            <span className="span-divider-1"></span>

                        </section>
                    </div>


                </div>
            </div>


        );
    }
}

export default LoginPage;