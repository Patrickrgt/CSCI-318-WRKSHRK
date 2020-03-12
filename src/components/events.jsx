import React, { Component } from 'react';
import * as firebase from 'firebase';
import { db } from '../store/firebase.js';
import Pagination from '../common/pagination'
import { paginate } from '../utils/paginate';

class Events extends Component {

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
            pageSize: 4
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

    handleSelect = user => {
        const users = this.state.users.filter(m => m.clientID == user.clientID);
        console.log(users)
        this.setState({ selectedUser: user })
    }

    handlePageChange = page => {
        this.setState({ currentPage: page });
    }


    render() {
        const { pageSize, currentPage, selectedUser, users: allUsers } = this.state;

        const users = paginate(allUsers, currentPage, pageSize)

        return (
            <div className="container">
                <span className="span-divider-2"></span>

                {/* EVENT TYPES */}
                <div className="row">
                    <div className="col-sm">
                        <div className="row">
                            <section className="col-sm">
                                <h1 className="left-text h1-wh bold-wh">Event Types</h1>
                            </section>
                            <section className="col-sm btn-right-align">
                                <button id="create-type" className="btn btn-secondary btn-right-align">Add type</button>
                            </section>
                        </div>

                        <div>

                            <React.Fragment>
                                <span className="span-divider-2"></span>

                                <div className="center-text events-container">
                                    <h2 className="h1-wh bold-wh">Ballet Recital</h2>
                                    <hr />
                                </div>

                                <span className="span-divider-2"></span>

                                <div className="center-text events-container">
                                    <h2 className="h1-wh bold-wh">Ballet Recital</h2>
                                    <hr />
                                </div>
                                <span className="span-divider-2"></span>

                                <div className="center-text events-container">
                                    <h2 className="h1-wh bold-wh">Ballet Recital</h2>
                                    <hr />
                                </div>
                                <span className="span-divider-2"></span>

                                <div className="center-text events-container">
                                    <h2 className="h1-wh bold-wh">Ballet Recital</h2>
                                    <hr />
                                </div>

                                <span className="span-divider-2"></span>

                                <div className="center-text events-container">
                                    <h2 className="h1-wh bold-wh">Ballet Recital</h2>
                                    <hr />
                                </div>

                                <span className="span-divider-2"></span>

                                <div className="center-text events-container">
                                    <h2 className="h1-wh bold-wh">Ballet Recital</h2>
                                    <hr />
                                </div>

                            </React.Fragment>

                        </div>
                    </div>


                    <div className="col-sm">
                        <div className="row">
                            <section className="col-sm">
                                <h1 className="left-text h1-wh bold-wh">Event Details</h1>
                            </section>
                            <section className="col-sm btn-right-align">
                                <button id="create-type" className="btn btn-secondary btn-right-align">Add details</button>
                            </section>
                        </div>
                        <span className="span-divider-2"></span>

                        <div className="user-data-container">
                            <div>
                                <section className="">
                                    <h2 className="h1-wh bold-wh center-text">Ballet Recital</h2>
                                </section>
                            </div>

                            <span className="span-divider-2"></span>

                            <div className="row">
                                {/* USER NAME */}
                                <div className="col-sm">
                                    <div className="user-form-group">
                                        <label className="user-label" for="firstName">District:</label>
                                        <input type="text" class="form-control user-form" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={this.state.selectedUser.firstName} />
                                    </div>
                                </div>

                                {/* USER HOURS */}
                                <div className="col-sm">
                                    <div className="user-form-group">
                                        <label className="user-label" for="lastName">Date:</label>
                                        <input type="text" class="form-control user-form" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={this.state.selectedUser.lastName} />
                                    </div>
                                </div>
                            </div>

                            <span className="span-divider-2"></span>

                        </div>
                        <div className="user-schedule">
                            <section className="center-text">
                                <h3 className="h3-wh">Workers</h3>
                            </section>
                            <span className="span-divider-2"></span>
                            <div className="center-text">
                                <article>
                                    <div className="row">
                                        {/* USER NAME */}
                                        <div className="col-sm">
                                            <div className="user-form-group">
                                                <label className="worker-num-avail">0</label>
                                                <label className="worker-label" for="firstName">Availiable:</label>
                                                <div>
                                                    <h6 className="worker-avail">Nuran</h6>
                                                </div>
                                                <div>
                                                    <h6 className="worker-avail">Nuran</h6>
                                                </div>
                                                <div>
                                                    <h6 className="worker-avail">Nuran</h6>
                                                </div>
                                                <div>
                                                    <h6 className="worker-avail">Nuran</h6>
                                                </div>
                                                <div>
                                                    <h6 className="worker-avail">Nuran</h6>
                                                </div>
                                                <div>
                                                    <h6 className="worker-avail">Nuran</h6>
                                                </div>
                                                <label className="worker-num-avail">0</label>
                                            </div>
                                        </div>

                                        {/* USER HOURS */}
                                        <div className="col-sm">
                                            <div className="user-form-group">
                                                <div className="center-text">
                                                    <label className="worker-num-selected">0</label>
                                                    <label className="worker-label" for="lastName">Selected:</label>
                                                </div>
                                                <div>
                                                    <h6 className="worker-selected">Nuran</h6>
                                                </div>
                                                <div>
                                                    <h6 className="worker-selected">Nuran</h6>
                                                </div>
                                                <div>
                                                    <h6 className="worker-selected">Nuran</h6>
                                                </div>
                                                <div>
                                                    <h6 className="worker-selected">Nuran</h6>
                                                </div>
                                                <div>
                                                    <h6 className="worker-selected">Nuran</h6>
                                                </div>
                                                <div>
                                                    <h6 className="worker-selected">Nuran</h6>
                                                </div>
                                                <label className="worker-num-avail">0</label>
                                            </div>
                                        </div>
                                    </div>
                                </article>

                                <span className="span-divider-2"></span>

                                <article>
                                    <button id="sign-in" className="btn btn-secondary save-button">Create Event</button>
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
            </div >
















        )
    }
}

export default Events;