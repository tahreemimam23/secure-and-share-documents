import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  // standalone: true,
  // imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private fireStorage: AngularFireStorage) { }

  url: string = "";
  urls: string[] = [];
  imagesFiles: any[] = [];
  imagesFile: any;

  onFileChange(event: any){
    
  }


  // async onFileChange(event: any) {
  //   if (event.target.files) {
  //     const file = event.target.files[0];
  //     this.imagesFile = event.target.files[0];
  //     var reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = (e: any) => {
  //       this.url = e.target.result;
  //     }

  //     for (let i = 0; i < File.length; i++) {
  //       this.imagesFiles.push(event.target.files[i]);
  //       var reader = new FileReader();
  //       reader.readAsDataURL(event.target.files[i]);
  //       reader.onload = (e: any) => {
  //         this.urls.push(e.target.result);
  //       }
  //     };
  //   }
  // }

  async onSubmit(myForm: NgForm) {
    // if(this.imagesFile){
    //   console.log(this.imagesFile)
    //   const path = `documents/${myForm.form.value.documentName}`;
    //   const uplaodTask = await this.fireStorage.upload(path, this.imagesFile);
    //   const url = await uplaodTask.ref.getDownloadURL();
    //   console.log(url);
    // }

    // if (this.imagesFiles.length > 0) {
    //   for (let i = 0; i < this.imagesFiles.length; i++) {
    //     console.log(this.imagesFiles[i]);
    //     const path = `documents/${myForm.form.value.documentName}`;
    //     const uplaodTask = await this.fireStorage.upload(path, this.imagesFiles[i]);
    //     const url = await uplaodTask.ref.getDownloadURL();
    //     console.log(url);
    //   }
    // }
  }

}
