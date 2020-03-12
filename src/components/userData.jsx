import React, { Component } from 'react';
import Users from './users'

class UserData extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <span className="span-divider-2"></span>

                <div className="user-data-container">
                    <div>
                        <section className="user-id">
                            <h6>Client ID: WBudpgZrG7gzIVklWI45mRgJ9j53</h6>
                        </section>
                    </div>

                    <span className="span-divider-2"></span>

                    <div className="row">
                        {/* USER NAME */}
                        <div className="col-sm">
                            <div className="user-form-group">
                                <label className="user-label" for="firstName">First Name:</label>
                                <input type="text" class="form-control user-form" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="First Name" />
                            </div>
                        </div>

                        {/* USER HOURS */}
                        <div className="col-sm">
                            <div className="user-form-group">
                                <label className="user-label" for="lastName">Last Name:</label>
                                <input type="text" class="form-control user-form" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Last Name" />
                            </div>
                        </div>
                    </div>

                    <span className="span-divider-2"></span>

                    <div className="row">
                        {/* USER NAME */}
                        <div className="col-sm">
                            <div className="user-form-group">
                                <label className="user-label" for="totalHours">Total Hours:</label>
                                <input type="text" class="form-control user-form" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Total Hours" />
                            </div>
                        </div>

                        {/* USER HOURS */}
                        <div className="col-sm">
                            <div className="user-form-group">
                                <label className="user-label" for="weeklyHours">Weekly Hours:</label>
                                <input type="text" class="form-control user-form" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Weekly Hours" />
                            </div>
                        </div>
                    </div>

                    <span className="span-divider-2"></span>

                    <div className="row">
                        {/* USER NAME */}
                        <div className="col-sm">
                            <div className="user-form-group">
                                <label className="user-label" for="clientId">User ID:</label>
                                <input type="text" class="form-control user-form" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="User ID" />
                            </div>
                        </div>

                        {/* USER HOURS */}
                        <div className="col-sm">
                            <div className="user-form-group">
                                <label className="user-label" for="firstName">District:</label>
                                <input type="text" class="form-control user-form" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="First Name" />
                            </div>
                        </div>

                        <div>

                        </div>
                    </div>

                    <span className="span-divider-2"></span>


                </div>
                <div className="user-schedule">
                    <section className="center-text">
                        <h3 className="h3-wh">Days Working in Week</h3>
                    </section>

                    <div className="center-text">
                        <article>
                            <div class="container">
                                <div class="row">
                                    <div class="col-sm">
                                        <p className="data-p">Sun</p>
                                        <input type="radio" name="radio1" id="radio1" value="option1"></input>
                                    </div>
                                    <div class="col-sm">
                                        <p className="data-p">Mon</p>
                                        <input type="radio" name="radio1" id="radio1" value="option1"></input>
                                    </div>
                                    <div class="col-sm">
                                        <p className="data-p">Tue</p>
                                        <input type="radio" name="radio1" id="radio1" value="option1"></input>
                                    </div>
                                    <div class="col-sm">
                                        <p className="data-p">Wed</p>
                                        <input type="radio" name="radio1" id="radio1" value="option1"></input>
                                    </div>
                                    <div class="col-sm">
                                        <p className="data-p">Thu</p>
                                        <input type="radio" name="radio1" id="radio1" value="option1"></input>
                                    </div>
                                    <div class="col-sm">
                                        <p className="data-p">Fri</p>
                                        <input type="radio" name="radio1" id="radio1" value="option1"></input>
                                    </div>
                                    <div class="col-sm">
                                        <p className="data-p">Sat</p>
                                        <input type="radio" name="radio1" id="radio1" value="option1"></input>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <span className="span-divider-2"></span>

                        <article>
                            <button id="sign-in" className="btn btn-secondary save-button">Save</button>
                        </article>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default UserData;
