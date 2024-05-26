import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  fileChange(event:any){
    const file = event.target.files[0]

    let reader = new FileReader()
    if(file){
      reader.onload = () =>{

      }
      reader.readAsDataURL(file)
    }
  }
  UploadFile(){
    alert('Uploading ...')
  }


}
