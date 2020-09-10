import { ActionTypes } from '../actions/actionTypes';

export const addPassenger = (passenger) => {
	return (dispatch, getState, {getFirestore}) => {		
		const firestore = getFirestore();		
		firestore.collection('passengers').add(passenger).then(() => {
			dispatch({ type: ActionTypes.ADD_PASSENGER_SUCCESS, passenger});			
		}).catch((err) => {
			dispatch({ type: ActionTypes.ADD_PASSENGER_ERROR, err });
		});
	}
}

export const updatePassenger = (id, passenger) => {
	return (dispatch, getState, {getFirestore}) => {
		const firestore = getFirestore();
		
		firestore.collection('passengers').doc(id).update(passenger).then(()=> {
			dispatch({ type: ActionTypes.UPDATE_PASSENGER_SUCCESS});
		}).catch((err) => {
			dispatch({ type: ActionTypes.UPDATE_PASSENGER_ERROR, err});
		});
	}
}