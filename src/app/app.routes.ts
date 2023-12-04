import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { OrderComponent } from './components/order/order.component';
import { ProductComponent } from './components/product/product.component';
import { SenderComponent } from './components/sender/sender.component';
import { RecipientComponent } from './components/recipient/recipient.component';
import { UserComponent } from './components/user/user.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'order', component: OrderComponent },
    { path: 'product', component: ProductComponent },
    { path: 'sender', component: SenderComponent },
    { path: 'recipient', component: RecipientComponent },
    { path: 'user', component: UserComponent },
    { path: '', redirectTo: 'order', pathMatch: 'full' },
];
