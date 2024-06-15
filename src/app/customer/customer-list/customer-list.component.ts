import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent implements OnInit {

  httpClient = inject(HttpClient);
  router = inject(Router);

  customerList: {
    id: string;
    firstName: string;
    lastName: string;
    gender: "Male" | "Female" | "Other"; // Assuming gender can only be one of these values
    address: string;
  }[] = [];


  ngOnInit(): void {
    this.fetchCustomers();
  }

  fetchCustomers() {
    this.httpClient.get(`${environment.baseApiUrl}/customers`).subscribe({
      next: (data) => {
        this.customerList = data as {
          id: string;
          firstName: string;
          lastName: string;
          gender: "Male" | "Female" | "Other"; // Assuming gender can only be one of these values
          address: string;
        }[];
      },
      error: () => {
        alert('There was an error!');
      }
    });
  }

  navToCreate() {
    this.router.navigate(['customers/create']);
  }

  onEdit(id: string) {
    this.router.navigate(['customers/edit/' + id]);
  }

  onDelete(id: string) {
    if (confirm("Do you want to Delete?")) {
      this.httpClient.delete(`${environment.baseApiUrl}/customers/${id}`).subscribe({
        next: (data) => {
          alert('Customer has been Deleted Sucessfully');
          this.fetchCustomers();
        },
        error: () => {
          alert('There was an error!');
        }
      });
    } else {
    }
  }
}
