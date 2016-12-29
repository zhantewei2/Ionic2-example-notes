import {Component,ViewChild} from '@angular/core';

@Component({
	templateUrl:'test.html',

})
export class TestComponent{
	@ViewChild('fruitForm')private form;
	segment:string='strawberry';
	show:{}={};
	ngOnInit(){
		this.form.form.valueChanges.subscribe(val=>{
			let favourite=this.form.form.get('segment');
			if(!favourite) return ;
			let value=favourite.value;
			for(let i in this.show){
				this.show[i]=false;
			}
			this.show[value]=true;
		})

	}

	
}

