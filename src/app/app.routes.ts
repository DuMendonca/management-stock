import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { OrderComponent } from './components/list/order/order.component';
import { ProductComponent } from './components/list/product/product.component';
import { SenderComponent } from './components/list/sender/sender.component';
import { RecipientComponent } from './components/list/recipient/recipient.component';
import { UserComponent } from './components/list/user/user.component';
import { ProductFormComponent } from './components/forms/product-form/product-form.component';
import { OrderFormComponent } from './components/forms/order-form/order-form.component';
import { SenderFormComponent } from './components/forms/sender-form/sender-form.component';
import { RecipientFormComponent } from './components/forms/recipient-form/recipient-form.component';
import { UserFormComponent } from './components/forms/user-form/user-form.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'order', component: OrderComponent },
    { path: 'order/new', component: OrderFormComponent },
    { path: 'product', component: ProductComponent },
    { path: 'product/new', component: ProductFormComponent },
    { path: 'sender', component: SenderComponent },
    { path: 'sender/new', component: SenderFormComponent },
    { path: 'recipient', component: RecipientComponent },
    { path: 'recipient/new', component: RecipientFormComponent },
    { path: 'user', component: UserComponent },
    { path: 'user/new', component: UserFormComponent },
    { path: '', redirectTo: 'order', pathMatch: 'full' },
];
