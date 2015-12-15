import {NgIf} from 'angular2/common';
import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

import {NgbPagination} from './pagination';
import {NgbProgressbar} from './progressbar';

@Component({
  selector: 'ng-bootstrap-app',
  template: `
    <section id="pagination">
      <h3>Pagination</h3>
      <ngb-pagination [collectionSize]="collectionSize" [(page)]="page" (pageChange)="pageChanged(page)" [pageSize]="pageSize"></ngb-pagination>
      Page is: {{page}}
      <div *ngIf="newPage">
        Page changed to: {{newPage}}
      </div>
      <div *ngIf="priorPage">
        Page changed from: {{priorPage}}
      </div>
    </section>
    <section id="progressbar">
      <h3>Progressbar</h3>
      <ngb-progressbar striped="true" type="success" [value]="progressValue"></ngb-progressbar>
      <input (input)="progressValue = $event.target.value">
    </section>
  `,
  directives: [NgbPagination, NgbProgressbar, NgIf]
})
export class NgBootstrapApp {
  //Pagination
  collectionSize: number = 30;
  newPage: number;
  page: number = 1;
  pageSize: number = 10;
  priorPage: number;

  pageChanged(page) {
    this.priorPage = this.newPage || 1;
    this.newPage = page;
  }

  //Progressbar
  progressValue: number = 0;
}

bootstrap(NgBootstrapApp);