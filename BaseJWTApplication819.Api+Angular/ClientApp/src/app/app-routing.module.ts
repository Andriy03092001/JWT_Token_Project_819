import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AddProductComponent } from './Admin-area/add-product/add-product.component';
import { AdminAreaComponent } from './Admin-area/Admin-area.component';
import { ProductListComponent } from './Admin-area/product-list/product-list.component';
import { ClientAreaComponent } from './Client-area/Client-area.component';
import { AdminGuard } from './guards/admin.guard';
import { LoggedInGuard } from './guards/loggedIn.guard';
import { NotLoginGuard } from './guards/notLogin.guard';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent },
    { path: 'sign-in', canActivate: [NotLoginGuard], pathMatch: 'full', component: SignInComponent },
    { path: 'sign-up', canActivate: [NotLoginGuard], pathMatch: 'full', component: SignUpComponent },
    {
        path: 'admin-panel',
        component: AdminAreaComponent,
        children: [
            { path: '', pathMatch: 'full', component: ProductListComponent },
            { path: 'add-new-product', pathMatch: 'full', canActivate: [AdminGuard], component: AddProductComponent }
        ]
    },
    { path: 'client-panel', canActivate: [LoggedInGuard], pathMatch: 'full', component: ClientAreaComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
