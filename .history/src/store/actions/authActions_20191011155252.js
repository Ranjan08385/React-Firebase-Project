exports const signIn = (Credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase()
        firebase.auth().signInWithEmailAndPassword(
            Credentials.email,
            Credentials.password
        )
    }
}