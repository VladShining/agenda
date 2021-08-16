import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from 'angular-custom-modal';
import { User } from '../../interface/user';
import { UserProfilService } from '../../services/user-profil.service';
import { firebaseAuth, firebaseStore } from 'src/environments/firebase';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.scss'],
})
export class UserProfilComponent implements OnInit {
  user: User;
  editMode: boolean = false;
  constructor(private userProfil: UserProfilService) {
    this.user = { email: '', firstName: '', lastName: '', password: '***' };
  }
  @ViewChild('firstName') firstName: ElementRef | undefined;
  @ViewChild('lastName') lastName: ElementRef | undefined;
  @ViewChild('userWelcome', { static: true }) userWelcome:
    | ModalComponent
    | undefined;
  @ViewChild('successSaveUser', { static: true }) successSaveUser:
    | ModalComponent
    | undefined;
  @ViewChild('saveUserConfirmation', { static: true }) saveUserConfirmation:
    | ModalComponent
    | undefined;
  ngOnInit(): void {
    this.userProfil.getCurrentUserProfil().then((user) => {
      this.user.email = user.email;
      this.user.firstName = user.firstName;
      this.user.lastName = user.lastName;
      this.initUser(user);
    });
  }
  editUser() {
    this.editMode = true;
  }
  saveUser() {
    this.saveFirstName(this.firstName?.nativeElement.value);
    this.saveLastName(this.lastName?.nativeElement.value);
    this.saveUserConfirmation?.close();
    this.successSaveUser?.open();
    this.editMode = false;
  }
  initUser(user: any) {
    if (
      user.firstName === '' ||
      user.lastName === '' ||
      !user.firstName ||
      !user.lastName
    ) {
      this.userWelcome?.open();
      this.editUser();
    } else this.editMode = false;
  }
  saveFirstName(val: string) {
    firebaseStore()
      .collection('users')
      .doc(firebaseAuth().currentUser?.uid)
      .set({ firstName: val }, { merge: true })
      .then()
      .catch();
  }
  saveLastName(val: string) {
    firebaseStore()
      .collection('users')
      .doc(firebaseAuth().currentUser?.uid)
      .set({ lastName: val }, { merge: true })
      .then()
      .catch();
  }
}
