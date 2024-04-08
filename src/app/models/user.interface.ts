export interface Address {
  city: string | null;
  address: string | null;
}
export interface User {
  id: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  phone: string;
  // address:Partial<Address>[],
  // skills:Partial<string>[],
  // workExperiance:Partial<string>[]
}
// patchFormArray(data: any[]) {
//   const workExperiencesArray = this.form.get('skills') as FormArray;

//   while (workExperiencesArray.length) {
//     workExperiencesArray.removeAt(0);
//   }
//   data.forEach((item) => {
//     // console.log(item);
//     const newControl = new FormGroup({
//       skill: new FormControl(item.skill),
//     });

//     this.skills.push(newControl);
//   });
// }
// map((params) => params['id']),
// switchMap((id) => {
//   if (id) {
//     return this.service.getUser(id).pipe(
//       tap((user: any) => {
//         console.log(user, user.skills);
//         if (!user) return;
//         this.form.patchValue(user);
//         this.patchFormArray(user.skills);
//         console.log(this.form);
//       })
//     );
//   }
//   return of(null);
// })
// );

// this.service
// .createUser(user)
// .pipe(takeUntil(this.subj$))
// .subscribe(() => {
//   this.router.navigate(['/users']);
// });
// }
