import { Routes } from '@angular/router';
import { Welcome } from './page/welcome/welcome';
import { Login } from './page/login/login';
import { Dashboard } from './page/dashboard/dashboard';
import { Customer } from './page/customer/customer';
import { AddCustomer } from './page/customer/add-customer/add-customer';
import { ViewAll } from './page/customer/view-all/view-all';
import { Item } from './page/item/item';
import { AddItem } from './page/item/add-item/add-item';
import { ViweAllItem } from './page/item/viwe-all-item/viwe-all-item';
import { Order } from './page/order/order';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "welcome",
        pathMatch: "full"
    },
    {
        path: "welcome",
        component: Welcome
    },
    {
        path: "login",
        component: Login
    },
    {
        path: "dashboard",
        component: Dashboard,
        children: [
            {
                path: "customer",
                component: Customer,
                children: [
                    {
                        path: "add",
                        component: AddCustomer
                    },
                    {
                        path: "view",
                        component: ViewAll

                    }
                ]
            },
            {
                path: "item",
                component: Item,
                children: [
                    {
                        path: "add",
                        component: AddItem
                    },
                    {
                        path: "view",
                        component: ViweAllItem
                    }
                ]
            },
            {
                path: "order",
                component: Order
            }

        ]
    },

];
