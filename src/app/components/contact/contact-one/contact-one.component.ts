import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilitiesProvider } from 'src/app/providers/utilities/utilities';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-contact-one',
  templateUrl: './contact-one.component.html',
  styleUrls: ['./contact-one.component.css']
})
export class ContactOneComponent implements OnInit {

public serviceForm = this.formBuilder.group({
  service: ["", Validators.required],
  email: ["", Validators.required],
  phone: ["", Validators.required],
  budget: ["", Validators.required],
  duration: ["", Validators.required],
  address: ["", Validators.required],
});

data: any;
  urls = "http://127.0.0.1:8000/api/service";
  constructor(
    private httpservice: HttpService,
    private utilities: UtilitiesProvider,
    private formBuilder: FormBuilder,
  ) { }



  ngOnInit(): void {
  }

  send() {
    if (this.serviceForm.valid) {
      // this.call.emit(this.contactForm.value);
      this.onSend();
    }
  }

  async onSend() {
    console.log('event emitted => ', this.serviceForm.value);
    this.httpservice.req(this.urls,this.serviceForm.value).subscribe((res: any) => {
      console.log(res);
      this.data = res.status;
      if (this.data == "Success") {
        console.log(this.data)
        this.reset();
        this.utilities.alert('success', 'Success!', 'Message sent success');
      } else {
        this.utilities.alert('error', 'Failed!', 'Something went wrong, please try again later.');
      }
    },(error)=>{
      this.utilities.alert('error', 'Failed!', 'Something went wrong, please try again later.');
    });
  }


  reset(){
    this.serviceForm.reset();
  }


}
