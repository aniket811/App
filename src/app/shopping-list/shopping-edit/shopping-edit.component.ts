import { Ingredient } from './../../shared/ingredient.model';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameinput') nameInputRef:ElementRef
  @ViewChild('amount') amountRef:ElementRef
  @Output() ingredientAdded=new EventEmitter<Ingredient>()
  onAddItem(){
    const ingname=this.nameInputRef.nativeElement.value;
    const amount=this.amountRef.nativeElement.value;
    const newIngredient=new Ingredient(ingname,amount)
    this,this.ingredientAdded.emit(newIngredient)
  }
  constructor() { }
  ngOnInit(): void {
  }

}
