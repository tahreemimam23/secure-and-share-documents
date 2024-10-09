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

  constructor(private fireStorage:AngularFireStorage){}

  url: string = "";
  urls: string[] = [];
  imagesFiles: any[]=[];
  imagesFile: any;
  async onFileChange(event: any) {
    if (event.target.files) {
      const file = event.target.files[0];
      this.imagesFile = event.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e: any) => {
        this.url = e.target.result;
      }
      // for(let i=0; i<File.length; i++){
      //   var reader = new FileReader();
      //   reader.readAsDataURL(event.target.files[i]);
      //   reader.onload = (e: any) => {
      //     this.urls.push(e.target.result);
      //   }
      // };
    }
    // throw new Error('Method not implemented.');
  }
  async onSubmit(myForm: NgForm) {
    if(this.imagesFile){
      console.log(this.imagesFile)
      const path = `documents/${myForm.form.value.documentName}`;
      const uplaodTask = await this.fireStorage.upload(path, this.imagesFile);
      const url = await uplaodTask.ref.getDownloadURL();
      console.log(url);
    }
  }

}
