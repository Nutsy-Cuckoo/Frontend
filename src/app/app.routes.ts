import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'customers',
        pathMatch: 'full'
    },
    {
        path: 'customers',
        loadComponent: () =>
            import('./customer/customer-list/customer-list.component').then((x) => x.CustomerListComponent),
    },
    {
        path: 'customers/edit/:id',
        loadComponent: () =>
            import('./customer/update-customer/update-customer.component').then((x) => x.UpdateCustomerComponent),
    },
    {
        path: 'customers/create',
        loadComponent: () =>
            import('./customer/create-customer/create-customer.component').then((x) => x.CreateCustomerComponent),
    },
];
