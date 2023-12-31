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
import { OrderStatusComponent } from './components/list/order-status/order-status.component';
import { OrderStatusFormComponent } from './components/forms/order-status-form/order-status-form.component';
import { OrderEditComponent } from './components/modal/edit/order-edit/order-edit.component';
import { ProductEditComponent } from './components/modal/edit/product-edit/product-edit.component';
import { SenderEditComponent } from './components/modal/edit/sender-edit/sender-edit.component';
import { RecipientEditComponent } from './components/modal/edit/recipient-edit/recipient-edit.component';
import { UserEditComponent } from './components/modal/edit/user-edit/user-edit.component';
import { OrderStatusEditComponent } from './components/modal/edit/order-status-edit/order-status-edit.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'order', component: OrderComponent },
    { path: 'order/new', component: OrderFormComponent },
    { path: 'order/:id/edit', component: OrderEditComponent },
    { path: 'product', component: ProductComponent },
    { path: 'product/new', component: ProductFormComponent },
    { path: 'product/:id/edit', component: ProductEditComponent },
    { path: 'sender', component: SenderComponent },
    { path: 'sender/new', component: SenderFormComponent },
    { path: 'sender/:id/edit', component: SenderEditComponent },
    { path: 'recipient', component: RecipientComponent },
    { path: 'recipient/new', component: RecipientFormComponent },
    { path: 'recipient/:id/edit', component: RecipientEditComponent },
    { path: 'user', component: UserComponent },
    { path: 'user/new', component: UserFormComponent },
    { path: 'user/:id/edit', component: UserEditComponent },
    { path: 'orderStatus', component: OrderStatusComponent },
    { path: 'orderStatus/new', component: OrderStatusFormComponent },
    { path: 'orderStatus/:id/edit', component: OrderStatusEditComponent },
    { path: '', redirectTo: 'order', pathMatch: 'full' },
];
