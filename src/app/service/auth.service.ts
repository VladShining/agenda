import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Injectable({ providedIn: 'root' })
export class AuthService {
  isAuth = false;
  constructor() {}
  createNewUser(email: string, password: string) {
    return new Promise<void>((res, rej) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(
          () => {
            res();
          },
          (e) => {
            rej(e);
          }
        );
    });
  }
  registerNewUser(email: string, password: string, id: string | undefined) {
    return new Promise<void>((res, rej) => {
      firebase
        .firestore()
        .collection('users')
        .doc(id)
        .set({ email: email, password: password }, { merge: true })
        .then(() => {
          console.log('Document successfully written!');
        })
        .catch((error) => {
          console.error('Error writing document: ', error);
        });
    });
  }
  signInUser(email: string, password: string): any {
    return new Promise<void>((res, rej) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(
          () => {
            res();
          },
          (e) => {
            rej(e);
          }
        );
    });
  }

  signOutUser() {
    firebase.auth().signOut();
  }
}
