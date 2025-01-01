import { Component } from '@angular/core';

@Component({
  selector: 'app-queries',
  templateUrl: './queries.component.html',
  styleUrls: ['./queries.component.css']
})
export class QueriesComponent {
  queryTypes: string[] = ['Loan Status', 'Payment Issue', 'General Query', 'Technical Issue'];
  selectedQuery: string = '';
  queryDescription: string = '';
  submittedQueries: Array<{ title: string; description: string; adminRemarks: string; status: string }> = [];

  submitQuery() {
    if (!this.selectedQuery || !this.queryDescription) {
      alert('Please fill out all fields before submitting.');
      return;
    }

    const newQuery = {
      title: this.selectedQuery,
      description: this.queryDescription,
      adminRemarks: 'Pending',
      status: 'Unresolved',
    };

    this.submittedQueries.push(newQuery);

    // Clear the form
    this.selectedQuery = '';
    this.queryDescription = '';
  }

}

