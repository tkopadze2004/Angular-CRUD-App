import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { UserService } from '../../service/user.service';
import { AsyncPipe, NgStyle } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [AsyncPipe,RouterLink,NgStyle],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnDestroy {
service=inject(UserService)
users$=this.service.getUsers()
subj$ = new Subject();


delete(id:string){
   this.service.deleteUser(id).pipe(takeUntil(this.subj$))
   .subscribe(()=>{
     this.users$=this.service.getUsers()
   })
}
ngOnDestroy(): void {
  this.subj$.next('null');
  this.subj$.complete();
}
}
