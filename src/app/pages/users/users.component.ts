import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../../service/user.service';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [AsyncPipe,RouterLink],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
service=inject(UserService)
users$=this.service.getUsers()


// edit(id:number){
// console.log(`id is ${id}`);
// }
delete(id:string){
  // console.log(`id is ${id}`);
   this.service.deleteUser(id).subscribe((res)=>{
    //  console.log(res);
     this.users$=this.service.getUsers()
   })
}
}
