import { Component, OnInit } from '@angular/core';
import { ApplyloansService } from 'src/app/services/applyloan/applyloans.service';

@Component({
  selector: 'app-applyloan',
  templateUrl: './applyloan.component.html',
  styleUrls: ['./applyloan.component.css']
})
export class ApplyloanComponent implements OnInit {
  loanDetails = {
    user_id: 1,
    loanamount: 50000.0,
    time: 2,
    loanscheme: {
      id: 1,
      schemeName: 'Home Loan'
    }
  };

  loanSchemes = [
    { id: 1, schemeName: 'Home Loan' },
    { id: 2, schemeName: 'Personal Loan' },
    { id: 3, schemeName: 'Car Loan' }
  ];

  constructor(private loanService: ApplyloansService) {}

  ngOnInit(): void {
    // You can load available loan schemes here, if needed
  }

  onSubmit(): void {
    this.loanService.submitLoanApplication(this.loanDetails).subscribe(
      response => {
        alert('Loan Application Submitted Successfully!');
        // Handle response, like redirecting to another page
      },
      error => {
        alert('An error occurred while submitting your loan application');
      }
    );
  }
}
