import { Component } from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'oft-task';

  monthlyIncome = 200000;
  monthlyExpense = 20000;

  monthIncome(event: any){
    this.monthlyIncome = event.value;
  }

  monthExpense(event: any){
    this.monthlyExpense = event.value;
  }
}
