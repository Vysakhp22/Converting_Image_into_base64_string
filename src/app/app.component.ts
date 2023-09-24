import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from './common-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myApp';
  public imagePath: any
  constructor(private commonService: CommonServiceService) { }
  public onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.commonService.convertToBase64(file).then((base64Sting) => {
        console.log(base64Sting);
      }).catch(error => {
        console.log(error);
      });
    }
  }
  ngOnInit(): void {

  }

}
