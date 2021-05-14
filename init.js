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