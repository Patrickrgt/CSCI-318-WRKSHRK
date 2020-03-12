import React, { Component } from 'react';

class NewEvents extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <nav>
                    <section>
                        <button>x</button>
                        <button><img src="" alt="" />x</button>
                        <button><img src="" alt="" />x</button>
                        <button><img src="" alt="" />x</button>
                    </section>


                    <section>
                        <button><img src="" alt="" />x</button>
                    </section>
                </nav>

                <div>
                    <h1>Events</h1>

                    <button>Edit page</button>
                    <button>Add event</button>
                </div>

                <div class="container">
                    <div class="row">
                        <div class="col-sm">
                            <section>
                                <h1>Ballet </h1>
                                <h2>Feb 25, 2020</h2>
                            </section>
                        </div>
                        <div class="col-sm">
                            <section>
                                <h1>Pizza Party</h1>
                                <h2>Feb 25, 2020</h2>
                            </section>
                        </div>
                        <div class="col-sm">
                            <section>
                                <h1>Agriculture</h1>
                                <h2>Feb 25, 2020</h2>
                            </section>
                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="row">
                        <div class="col-sm">
                            <section>
                                <h1>Soccer Class </h1>
                                <h2>Feb 25, 2020</h2>
                            </section>
                        </div>
                        <div class="col-sm">
                            <section>
                                <h1>Science Experiment</h1>
                                <h2>Feb 25, 2020</h2>
                            </section>
                        </div>
                        <div class="col-sm">
                            <section>
                                <h1>Bible Study</h1>
                                <h2>Feb 25, 2020</h2>
                            </section>
                        </div>
                    </div>
                </div>


            </React.Fragment>
        );
    }
}

export default NewEvents;