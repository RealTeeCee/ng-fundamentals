import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'upvote',
  styleUrls: ['./upvote.component.css'],
  template: `
    <div class="votingWidgetContainer pointable" (click)="onClick()">
      <div class="votingButton">
        <i *ngIf="voted" class="glyphicon glyphicon-heart"></i>
        <i *ngIf="!voted" class="glyphicon glyphicon-heart-empty"></i>
      </div>
      <div class="badge badge-inverse votingCount">
        <div>{{ count }}</div>
      </div>
    </div>
  `,
})
export class UpvoteComponent implements OnInit {
  @Input() count: number;
  @Input() voted: boolean;
  @Output() vote = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onClick() {
    this.vote.emit({});
  }
}
