import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-update-customer',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './update-customer.component.html',
  styleUrl: './update-customer.component.css'
})
export class UpdateCustomerComponent implements OnInit {
  @Input() id: string = '';

  form!: FormGroup;
  formBuilder = inject(FormBuilder);
  httpClient = inject(HttpClient);
  router = inject(Router);

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      address: ['', [Validators.required]]
    });

    this.httpClient.get(`${environment.baseApiUrl}/customers/${this.id}`).subscribe({
      next: (data: any) => {
        delete data.id;
        this.form.setValue(data);
      },
      error: () => {
        alert('There was an error!');
      }
    });
  }

  onUpdate() {
    this.httpClient.put(`${environment.baseApiUrl}/customers/${this.id}`, this.form.value).subscribe({
      next: (data) => {
        alert('Customer has been Updated Sucessfully')
        this.router.navigate(['customers']);
      },
      error: () => {
        alert('There was an error!');
      }
    });
  }

}

