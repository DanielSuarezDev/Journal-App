import { firebase,googleAuthProvider } from "../firebase/firebase-config";
import {types} from '../types/types';
import {startLoading, finishLoading} from '../actions/ui'
import Swal from 'sweetalert2';

export const startLoginEmailPassword = (email, password) => {   
    return (dispatch) => {
        dispatch(startLoading())
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(({user}) => {
        dispatch(finishLoading())
        dispatch(
            login(user.uid,user.displayName)
        )
    })
    .catch(err => {
        console.log(err);
        dispatch(finishLoading())
        Swal.fire('Error',err.message, 'error')
    })
   }

}


export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
        .then(({user}) => {
            dispatch(
                login(user.uid,user.displayName)
            )
        })
    }
}

export const starRegisterEmail = (email, password, name) => {
    return ( dispatch ) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(async ({user}) => {
           await user.updateProfile({displayName: name});
            console.log(user)
            dispatch(
                login(user.uid,user.displayName)
            )
        })
        .catch(err =>{
            Swal.fire('Error', err.message, 'error')
        } )
        
    }
}

export const login = (uid, displayName) => ({
        type: types.login,
        payload: {
            uid,
            displayName
        }    
})

export const startLogout = () => {
    return async( dispatch ) => {
        await firebase.auth().signOut();

        dispatch( logout() );
    }
}

export const logout = () => ({
    type: types.logout
})