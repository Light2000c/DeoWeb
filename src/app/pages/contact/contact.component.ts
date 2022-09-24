import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { UtilitiesProvider } from 'src/app/providers/utilities/utilities';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(
    private httpservice: HttpService,
    private utilities: UtilitiesProvider,
  ) { }

  ngOnInit(): void {
  }



}
