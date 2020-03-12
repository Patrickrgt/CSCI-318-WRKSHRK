import React, { Component } from 'react';
import * as firebase from 'firebase';
import { db } from '../store/firebase.js';
import Pagination from '../common/pagination'
import { paginate } from '../utils/paginate';

class UsersRE extends Component {

    constructor() {
        super();
        const db = firebase.firestore();

        db.collection("users").get().then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
            console.log(data);
        });

        this.state = {
            ids: [],
            users: [],
            currentPage: 1,
            selectedUser: [],
            selectedId: [],
            pageSize: 4
        };

    }

    componentDidMount() {
        db.collection("users")
            .get()
            .then(querySnapshot => {
                const users = querySnapshot.docs.map(doc => doc.data());
                console.log(users);
                const ids = querySnapshot.docs.map(doc => doc.id);
                this.setState({ users: users, ids });
                this.setState({ ids: ids });

            });
    }

    handleSelect = user => {
        const users = this.state.users.filter(m => m.clientID == user.clientID);
        console.log(users)
        this.setState({ selectedUser: user })

    }

    handlePageChange = page => {
        this.setState({ currentPage: page });
    }

    updateUser = user => {
        firebase.firestore().collection("users")
            .where("clientID", "==", user.clientID)
            .get(function (querySnapshot) {
                querySnapshot.forEach(function (document) {
                    document.ref.update({
                        firstName: this.state.firstName
                    });
                });
            });

    }


    render() {
        const { pageSize, currentPage, selectedUser, users: allUsers, ids } = this.state;

        const users = paginate(allUsers, currentPage, pageSize)


        return (
            <div className="container">
                <span className="span-divider-2"></span>

                {/* USERS */}
                <div className="row">
                    <div className="col-sm">
                        <div className="row">
                            <section className="col-sm">
                                <h1 className="center-text h1-wh bold-wh">Users</h1>
                            </section>
                        </div>


                        <div >

                            {users.map(user => (
                                <React.Fragment>
                                    <span className="span-divider-2"></span>

                                    <div onClick={() => this.handleSelect(user)} className={user === selectedUser ? "user-container-active" : "user-container"} key={user.clientID}>
                                        <div>

                                            <section className={user === selectedUser ? "user-id-active" : "user-id"}>

                                                <h6>Client ID: </h6>

                                            </section>

                                        </div>
                                        <div className="row">
                                            {/* USER NAME */}

                                            <div className="col-sm">
                                                <h2 className={user === selectedUser ? "center-text h1-wh bold-wh-active" : "center-text h1-wh bold-wh"}>{user.firstName} {user.lastName}</h2>
                                            </div>
                                            {/* USER HOURS */}
                                            <div class="col-sm">
                                                <h2 className={user === selectedUser ? "center-text h1-wh bold-wh-active" : "center-text h1-wh bold-wh"}>{user.weeklyHours} Hours</h2>
                                            </div>
                                        </div>
                                        <hr></hr>
                                    </div>
                                </React.Fragment>
                            ))}


                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="row">
                            <section className="col-sm">
                                <h1 className="center-text h1-wh bold-wh">User Data</h1>
                            </section>
                        </div>
                        <span className="span-divider-2"></span>

                        <div className="user-data-container">
                            <div>
                                <section className="user-id">
                                    <h6>Client ID: {this.state.selectedUser.clientID}</h6>
                                </section>
                            </div>

                            <span className="span-divider-2"></span>

                            <div className="row">
                                {/* USER NAME */}
                                <div className="col-sm">
                                    <div className="user-form-group">
                                        <label className="user-label" for="firstName">First Name:</label>
                                        <input type="text" class="form-control user-form" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={this.state.selectedUser.firstName} />
                                    </div>
                                </div>

                                {/* USER HOURS */}
                                <div className="col-sm">
                                    <div className="user-form-group">
                                        <label className="user-label" for="lastName">Last Name:</label>
                                        <input type="text" class="form-control user-form" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={this.state.selectedUser.lastName} />
                                    </div>
                                </div>
                            </div>

                            <span className="span-divider-2"></span>

                            <div className="row">
                                {/* USER NAME */}
                                <div className="col-sm">
                                    <div className="user-form-group">
                                        <label className="user-label" for="totalHours">Total Hours:</label>
                                        <input type="text" class="form-control user-form" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={this.state.selectedUser.totalHours} />
                                    </div>
                                </div>

                                {/* USER HOURS */}
                                <div className="col-sm">
                                    <div className="user-form-group">
                                        <label className="user-label" for="weeklyHours">Weekly Hours:</label>
                                        <input type="text" class="form-control user-form" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={this.state.selectedUser.weeklyHours} />
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
                                        <input type="text" class="form-control user-form" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={this.state.selectedUser.district} />
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
                    </div>
                </div>

                <Pagination
                    userCount={this.state.users.length}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={this.handlePageChange}
                />
            </div>
















        )
    }
}

export default UsersRE;