import React, { Component } from 'react';
import * as firebase from 'firebase';
import { db } from '../store/firebase.js';
import Pagination from '../common/pagination'
import { paginate } from '../utils/paginate';

class Home extends Component {

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
                                <h1 className="left-text h1-wh bold-wh">Today's Events</h1>
                            </section>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>

                <section className="home-events">
                    <div className="row">
                        <div className="col-sm">
                            <h1>Time</h1>
                        </div>
                        <div className="col-sm">
                            <h1>Location</h1>
                        </div>
                        <div className="col-sm">
                            <h1>Type</h1>
                        </div>
                        <div className="col-sm">
                            <h1>Workers</h1>
                        </div>
                    </div>

                    <section className="home-events-1">
                        <div className="row">
                            <div className="col-sm">
                                <div className="row">
                                    <div className="col-sm">
                                        <section>
                                            <div className="home-event-box">
                                                <h3>Start</h3>
                                                <h6>12:00 PM</h6>
                                                <h3>End</h3>
                                                <h6>12:00 PM</h6>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="row">
                                    <div className="col-sm">
                                        <h3>Start</h3>
                                        <h3>End</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="row">
                                    <div className="col-sm">
                                        <h3>Start</h3>
                                        <h3>End</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="row">
                                    <div className="col-sm">
                                        <h3>Start</h3>
                                        <h3>End</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>

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

export default Home;