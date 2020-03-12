import React, { Component } from 'react';
import * as firebase from 'firebase';
import { db } from '../store/firebase.js';
import Pagination from '../common/pagination'
import { paginate } from '../utils/paginate';

class Users extends Component {

    constructor() {
        super();
        const db = firebase.firestore();

        db.collection("users").get().then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
            console.log(data);
        });

        this.state = {
            users: [],
            currentPage: 1,
            selectedUser: [],
            pageSize: 4,
            firstName: ''
        };


    }

    componentDidMount() {
        db.collection("users")
            .get()
            .then(querySnapshot => {
                const users = querySnapshot.docs.map(doc => doc.data());
                console.log(users);
                this.setState({ users: users });
            });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    handleSelect = user => {
        const users = this.state.users.filter(m => m.clientID == user.clientID);
        console.log(users)
        this.setState({ selectedUser: user })
        const firstName = document.getElementById("firstName")
        const lastName = document.getElementById("lastName")
        const district = document.getElementById("district")
        const totalHours = document.getElementById("totalHours")
        const weeklyHours = document.getElementById("weeklyHours")
        firstName.value = user.firstName;
        lastName.value = user.lastName;
        district.value = user.district;
        totalHours.value = user.totalHours;
        weeklyHours.value = user.weeklyHours;
        this.state.firstName = user.firstName;
        this.state.lastName = user.lastName;
        this.state.district = user.district;
        this.state.totalHours = user.totalHours;
        this.state.weeklyHours = user.weeklyHours;

        const userData = document.getElementById("user-data");
        userData.style.display = "block";

        const addUser = document.getElementById("add-user");
        addUser.style.display = "none";
    }

    handlePageChange = page => {
        this.setState({ currentPage: page });
    }

    updateDistrict = e => {
        this.setState({
            district: e.target.value,
        });
    }

    updateFirstName = e => {
        this.setState({
            firstName: e.target.value,
        });
    }

    updateLastName = e => {
        this.setState({
            lastName: e.target.value,
        });
    }

    updateNeighborhood = e => {
        this.setState({
            neighborhood: e.target.value,
        });
    }

    updatetotalHours = e => {
        this.setState({
            totalHours: e.target.value,
        });
    }

    updateWeeklyHours = e => {
        this.setState({
            weeklyHours: e.target.value,
        });
    }

    updateUser = user => {
        user.preventDefault();
        db.collection("users").where("clientID", '==', this.state.selectedUser.clientID)
            .get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    doc.ref.update({
                        firstName: this.state.firstName,
                        lastName: this.state.lastName,
                        district: this.state.district,
                        totalHours: this.state.totalHours,
                        weeklyHours: this.state.weeklyHours
                    });
                    this.setState({
                        firstName: "",
                        lastName: "",
                        district: "",
                        totalHours: "",
                        weeklyHours: ""
                    });
                });
            });

    }

    addUser = e => {
        // e.preventDefault();
        const db = firebase.firestore();
        // db.settings({
        //     timestampsInSnapshots: true
        // });
        const userRef = db.collection("users").add({
            district: this.state.district,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            totalHours: this.state.totalHours,
            weeklyHours: this.state.weeklyHours
        });
        this.setState({
            district: "",
            firstName: "",
            lastName: "",
            totalHours: "",
            weeklyHours: ""
        });
    };

    addUserDisplay() {
        const userData = document.getElementById("user-data");
        userData.style.display = "none";

        const addUser = document.getElementById("add-user");
        addUser.style.display = "block";

        this.setState({ selectedUser: "" })
    }


    render() {
        const { pageSize, currentPage, selectedUser, users: allUsers } = this.state;

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
                                                <h6>Client ID: {user.clientID}</h6>
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

                    <div id="user-data" className="col-sm">
                        <div className="row">
                            <section className="col-sm">
                                <h1 className="center-text h1-wh bold-wh">User Data</h1>
                            </section>
                            <section className="col-sm btn-right-align">
                                <button onClick={() => this.addUserDisplay()} id="create-type" className="btn btn-secondary btn-right-align">Add user</button>
                            </section>
                        </div>
                        <span className="span-divider-2"></span>
                        <form onSubmit={this.updateUser}>
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
                                            <input type="text" class="form-control user-form" name="firstName" id="firstName" onChange={this.updateFirstName} defaultValue={this.state.selectedUser.firstName} placeholder={this.state.selectedUser.firstName} />
                                        </div>
                                    </div>

                                    {/* USER HOURS */}
                                    <div className="col-sm">
                                        <div className="user-form-group">
                                            <label className="user-label" for="lastName">Last Name:</label>
                                            <input type="text" class="form-control user-form" name="lastName" id="lastName" onChange={this.updateLastName} defaultValue={this.state.selectedUser.lastName} aria-describedby="emailHelp" name="lastName" placeholder={this.state.selectedUser.lastName} />
                                        </div>
                                    </div>
                                </div>

                                <span className="span-divider-2"></span>

                                <div className="row">
                                    {/* USER NAME */}
                                    <div className="col-sm">
                                        <div className="user-form-group">
                                            <label className="user-label" for="totalHours">Total Hours:</label>
                                            <input type="text" class="form-control user-form" name="totalHours" id="totalHours" onChange={this.updatetotalHours} defaultValue={this.state.selectedUser.totalHours} aria-describedby="emailHelp" name="totalHours" placeholder={this.state.selectedUser.totalHours} />
                                        </div>
                                    </div>

                                    {/* USER HOURS */}
                                    <div className="col-sm">
                                        <div className="user-form-group">
                                            <label className="user-label" for="weeklyHours">Weekly Hours:</label>
                                            <input type="text" class="form-control user-form" name="weeklyHours" id="weeklyHours" onChange={this.updateWeeklyHours} defaultValue={this.state.selectedUser.weeklyHours} aria-describedby="emailHelp" name="weeklyHours" placeholder={this.state.selectedUser.weeklyHours} />
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
                                            <input type="text" class="form-control user-form" name="district" id="district" onChange={this.updateDistrict} defaultValue={this.state.selectedUser.district} aria-describedby="emailHelp" name="district" placeholder={this.state.selectedUser.district} />
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
                                        <button type="submit" id="sign-in" className="btn btn-secondary save-button">Save</button>
                                    </article>
                                </div>
                            </div>
                        </form>
                    </div>


                    {/* ADD USER */}
                    <div id="add-user" className="col-sm">
                        <div className="row">
                            <section className="col-sm">
                                <h1 className="center-text h1-wh bold-wh">Add user</h1>
                            </section>
                        </div>
                        <span className="span-divider-2"></span>
                        <form onSubmit={this.addUser}>
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
                                            <input type="text" class="form-control user-form" name="firstName" id="firstName" onChange={this.updateFirstName} defaultValue={this.state.selectedUser.firstName} placeholder={this.state.selectedUser.firstName} />
                                        </div>
                                    </div>

                                    {/* USER HOURS */}
                                    <div className="col-sm">
                                        <div className="user-form-group">
                                            <label className="user-label" for="lastName">Last Name:</label>
                                            <input type="text" class="form-control user-form" name="lastName" id="lastName" onChange={this.updateLastName} defaultValue={this.state.selectedUser.lastName} aria-describedby="emailHelp" name="lastName" placeholder={this.state.selectedUser.lastName} />
                                        </div>
                                    </div>
                                </div>

                                <span className="span-divider-2"></span>

                                <div className="row">
                                    {/* USER NAME */}
                                    <div className="col-sm">
                                        <div className="user-form-group">
                                            <label className="user-label" for="totalHours">Total Hours:</label>
                                            <input type="text" class="form-control user-form" name="totalHours" id="totalHours" onChange={this.updatetotalHours} defaultValue={this.state.selectedUser.totalHours} aria-describedby="emailHelp" name="totalHours" placeholder={this.state.selectedUser.totalHours} />
                                        </div>
                                    </div>

                                    {/* USER HOURS */}
                                    <div className="col-sm">
                                        <div className="user-form-group">
                                            <label className="user-label" for="weeklyHours">Weekly Hours:</label>
                                            <input type="text" class="form-control user-form" name="weeklyHours" id="weeklyHours" onChange={this.updateWeeklyHours} defaultValue={this.state.selectedUser.weeklyHours} aria-describedby="emailHelp" name="weeklyHours" placeholder={this.state.selectedUser.weeklyHours} />
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
                                            <input type="text" class="form-control user-form" name="district" id="district" onChange={this.updateDistrict} defaultValue={this.state.selectedUser.district} aria-describedby="emailHelp" name="district" placeholder={this.state.selectedUser.district} />
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
                                        <button type="submit" id="sign-in" className="btn btn-secondary save-button">Add user</button>
                                    </article>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>

                <Pagination
                    userCount={this.state.users.length}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={this.handlePageChange}
                />
            </div >
















        )
    }
}

export default Users;