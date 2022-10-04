import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { UtilitiesProvider } from 'src/app/providers/utilities/utilities';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-contact-three',
  templateUrl: './contact-three.component.html',
  styleUrls: ['./contact-three.component.css']
})
export class ContactThreeComponent implements OnInit {
  @Output() call: EventEmitter<any> = new EventEmitter();
  @Input() onDone: any;

  public contactForm = this.formBuilder.group({
    name: ["", Validators.required],
    email: ["", Validators.required],
    phone: ["", Validators.required],
    subject: ["", Validators.required],
    message: ["", Validators.required],
  });

  data: any;
  urls = "http://127.0.0.1:8000/api/contact";
  constructor(
    private httpservice: HttpService,
    private utilities: UtilitiesProvider,
    private formBuilder: FormBuilder,
  ) { }



  ngOnInit(): void {
  }

  send() {
    if (this.contactForm.valid) {
      // this.call.emit(this.contactForm.value);
      this.onSend();
    }
  }

  async onSend() {
    console.log('event emitted => ', event);
    this.httpservice.req(this.urls,this.contactForm.value).subscribe((res: any) => {
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
    this.contactForm.reset();
  }


}
