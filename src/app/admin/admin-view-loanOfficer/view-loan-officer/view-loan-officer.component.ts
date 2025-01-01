import { Component } from '@angular/core';
import { LoanOfficerService } from 'src/app/services/loan-officer/loan-officer.service';

@Component({
  selector: 'app-view-loan-officer',
  templateUrl: './view-loan-officer.component.html',
  styleUrls: ['./view-loan-officer.component.css']
})
export class ViewLoanOfficerComponent {
  loanOfficers: any = { totalElements: 0, totalPages: 0, pageSize: 0, contents: [], isLastPage: false }; // Using 'any' to handle the response
  pageNumber: number = 0;
  pageSize: number = 10;
  searchText: string = '';

  constructor(private loanOfficerService: LoanOfficerService) {}

  ngOnInit(): void {
    this.loadPage(this.pageNumber);
  }

  // Load the current page
  loadPage(page: number): void {
    if (page < 0 || page >= this.loanOfficers.totalPages) return; // Check page bounds
    this.pageNumber = page;
    this.loanOfficerService.getAllLoanOfficer(this.pageNumber, this.pageSize).subscribe(response => {
      this.loanOfficers = response;
    });
  }

  // Disable the "Previous" button if on the first page
  isPrevDisabled(): boolean {
    return this.pageNumber === 0;
  }

  // Disable the "Next" button if on the last page
  isNextDisabled(): boolean {
    return this.pageNumber === this.loanOfficers.totalPages - 1;
  }

  // Delete loan officer
  deleteLoanOfficer(id: number): void {
    if (confirm('Are you sure you want to delete this loan officer?')) {
      this.loanOfficerService.deleteLoanOfficer(id).subscribe(() => {
        this.loadPage(this.pageNumber); // Reload the current page to refresh the list
      });
    }
  }
}