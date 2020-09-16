import firebase from "firebase";


const firebaseConfig = ({
        apiKey: "AIzaSyBxXizJcjbNTXIxlzimeg-pukXag27TMqg",
        authDomain: "shop-a50ab.firebaseapp.com",
        databaseURL: "https://shop-a50ab.firebaseio.com",
        projectId: "shop-a50ab",
        storageBucket: "shop-a50ab.appspot.com",
        messagingSenderId: "144922168524",
        appId: "1:144922168524:web:d3235aae00ad45e77a0669",
        measurementId: "G-GNKVEQJ6LJ"
})


const firebaseApp= firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();


export {db, auth};