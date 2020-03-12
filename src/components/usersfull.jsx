import React, { Component } from 'react';

class User extends Component {
    state = {}
    render() {
        return (
            <div className="container">
                <span className="span-divider-2"></span>

                {/* USERS */}
                <div className="row">
                    <div className="col-sm">
                        <h1 className="center-text h1-wh bold-wh">Users</h1>
                        <span className="span-divider-1"></span>

                        <div className="user-container">
                            <div>
                                <section className="user-id">
                                    <h6>UID WBudpgZrG7gzIVklWI45mRgJ9j53</h6>
                                </section>
                            </div>
                            <div className="row">
                                {/* USER NAME */}
                                <div className="col-sm">
                                    <h2 className="center-text h1-wh bold-wh">Matthew Wissell</h2>
                                </div>
                                {/* USER HOURS */}
                                <div class="col-sm">
                                    <h2 className="center-text h1-wh bold-wh">5.9 Hours</h2>
                                </div>
                            </div>
                            <hr></hr>
                        </div>

                    </div>






                    {/* USER DATA */}
                    <div class="col-sm">
                        <h1 className="center-text h1-wh bold-wh">User Data</h1>
                        <span className="span-divider-1"></span>

                        <div>
                            <div>
                                <section className="user-id">
                                    <h6>UID WBudpgZrG7gzIVklWI45mRgJ9j53</h6>
                                </section>
                            </div>
                            <div>
                                <article className="user-name"></article>
                                <article className="user-hours"></article>
                            </div>
                        </div>
                    </div>
                </div>




            </div>
        );
    }
}

export default User;