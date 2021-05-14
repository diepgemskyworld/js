const firebaseConfig = {
    apiKey: "AIzaSyBRTmY3FO_jKqO7pVJXcMQduOHaYk4C-gM",
    authDomain: "diep-gemskyworld.firebaseapp.com",
    projectId: "diep-gemskyworld",
    storageBucket: "diep-gemskyworld.appspot.com",
    messagingSenderId: "887953951081",
    appId: "1:887953951081:web:c9a165fc5fa25b105dd5f8",
    measurementId: "G-GC5F188DW9"
};
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
$(document).ready(function(){
    db.collection("config").doc("LA").set({
        name: "Los Angeles",
        state: "CA",
        country: "USA"
    })
    .then(() => {
        console.log("Document successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
    var docRef = db.collection("config").doc("ZdjpUuWcjTjvr9FkiPqe");
    docRef.get().then((doc) => {
        if (doc.exists) {
            alert("Document data:", doc.data().color);
        } else {
            // doc.data() will be undefined in this case
            alert("No such document!");
        }
    }).catch((error) => {
        alert("Error getting document:", error);
    });
    alert('0k')
})