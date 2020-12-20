// Bring In Firestore
const db = firebase.firestore();

// Get Data
db.collection('users').get()
.then((snapshot) => {
	console.log(snapshot.docs.data())
}).catch((err) => {
	console.error(err)
})
