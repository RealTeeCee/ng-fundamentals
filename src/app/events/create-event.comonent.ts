import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService, IEvent } from './shared';

@Component({
  templateUrl: './create-event.component.html',
  styles: [
    `
      em {
        float: right;
        color: #e05c65;
        padding-left: 10px;
      }
      .error input {
        background-color: #e3c3c5;
      }
      .error ::-webkit-input-placeholder {
        color: #999;
      }
      .error ::-moz-placeholder {
        color: #999;
      }
      .error :-moz-placeholder {
        color: #999;
      }
      .error :-ms-input-placeholder {
        color: #999;
      }
    `,
  ],
})
export class CreateEventComponent implements OnInit {
  event: any;
  isDirty: boolean = true;
  constructor(private router: Router, private eventServices: EventsService) {}

  ngOnInit() {
    this.event = {
      name: '',
      date: null,
      time: '',
      price: null,
      location: {
        address: '',
        city: '',
        country: '',
      },
      onlineUrl: '',
      imageUrl: '',
    };
  }

  saveEvent(formValues) {
    this.eventServices.saveEvent(formValues);
    this.isDirty = false;
    this.router.navigate(['/events']);
  }

  cancel() {
    this.router.navigate(['/events']);
  }
}
