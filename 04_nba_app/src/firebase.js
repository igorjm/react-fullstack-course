import * as firebase from 'firebase'

var config = {
    apiKey: "AIzaSyAtiojCeGuh65I7oSVEqfilrxi94sNcocg",
    authDomain: "nba-full-9a526.firebaseapp.com",
    databaseURL: "https://nba-full-9a526.firebaseio.com",
    projectId: "nba-full-9a526",
    storageBucket: "nba-full-9a526.appspot.com",
    messagingSenderId: "359291118196"
}

firebase.initializeApp(config)

const firebaseDB = firebase.database()
const firebaseArticles = firebaseDB.ref('articles')
const firebaseTeams = firebaseDB.ref('teams')
const firebaseVideos = firebaseDB.ref('videos')

const firebaseLooper = (snapshot) => {
    const data = []
    snapshot.forEach((childSnapshot) => {
        data.push({
            ...childSnapshot.val(),
            id: childSnapshot.key
        })
    })
    return data
}

export {
    firebase,
    firebaseDB,
    firebaseArticles,
    firebaseVideos,
    firebaseTeams,
    firebaseLooper
}