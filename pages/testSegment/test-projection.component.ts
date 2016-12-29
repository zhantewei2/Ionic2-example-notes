import {Component} from '@angular/core';
@Component({
	selector:'my-stomach',
	template:`<ion-item><ion-title item-content>My fruit</ion-title></ion-item>
			<ng-content name='select' > </ng-content>
			`
})export class TestProjectionComponent{
	
};