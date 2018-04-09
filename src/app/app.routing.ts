import { RouterModule, Routes } from '@angular/router';

import { MessagesComponent } from './messages/messages.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/messages', pathMatch: 'full' },
  { path: 'messages', component: MessagesComponent }
];

export const routing = RouterModule.forRoot(appRoutes, { enableTracing: true });