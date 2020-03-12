import React, { Component } from 'react';
import firebase from "firebase";

constructor() {
    super();
    const db = firebase.firestore();

    db.collection("users").get().then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        console.log(data);
    });

    this.state = {
        users: ""
    };
}

componentDidMount() {
    db.collection("users")
        .get()
        .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
            console.log(data);
            this.setState({ users: data });
        });
}