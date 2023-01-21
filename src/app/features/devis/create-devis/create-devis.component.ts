import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { Product } from '../../features';
import { Router } from '@angular/router';
import { concat } from 'rxjs';

@Component({
  selector: 'create-devis',
  templateUrl: './create-devis.component.html',
  styleUrls: ['./create-devis.component.scss'],
})
export class CreateDevisComponent implements OnInit {
  createDevisForm!: FormGroup;
  totalSum: number = 0;
  createDevisFormChanges$: any;
  refDevis = Date.now();
  //= concat(
  //   substr(today(), 2, 4)
  // substr(today(), 7, 5),
  // substr(today(), 10, 8),
  // substr(now(), 13, 11),
  // substr(now(), 16, 14),
  // substr(now(), 19, 17)
  // );

  @Output() devisEmitter = new EventEmitter<any>();

  constructor(
    private formBuilder: FormBuilder,
    private currencyPipe: CurrencyPipe,
    private router: Router
  ) {}

  ngOnInit() {
    this.createDevisForm = this.formBuilder.group({
      ref: this.refDevis,
      date: ['10/10/2022', Validators.required],
      tax: [''],
      subject: ['Renforccemnt Eclairage exterieur', Validators.required],
      dueDate: ['01/01/2023'],
      lot: [''],
      discount: [''],
      availability: [''],
      billValidaty: [''],
      details: [''],
      client: this.formBuilder.group({
        clientCompanyName: ['Renault', Validators.required],
        clientMainContact: ['Mohamed', Validators.required],
      }),
      products: this.formBuilder.array([this.getProduct()]),
    });

    // initialize stream on products
    this.createDevisFormChanges$ =
      this.createDevisForm.controls['products'].valueChanges;
    // subscribe to the stream so listen to changes on units
    this.createDevisFormChanges$.subscribe((prods: Array<Product>) =>
      this.updateTotalProductPrice(prods)
    );
  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid);
    // console.log('form', form.value);
    this.devisEmitter.emit(form.value);

    // this.router.navigate(['devis/displayDevis']);
  }

  private getProduct() {
    return this.formBuilder.group({
      prodName: ['prod1', Validators.required],
      quantity: ['11', Validators.required],
      // unit: [''],
      priceHT: ['1000', Validators.required],
      total: [{ value: '', disabled: true }],
    });
  }

  get _products() {
    return (this.createDevisForm.get('products') as FormArray).controls;
  }

  addProduct() {
    const control = <FormArray>this.createDevisForm.controls['products'];
    control.push(this.getProduct());
  }

  removeProduct(i: number) {
    const control = <FormArray>this.createDevisForm.controls['products'];
    control.removeAt(i);
  }

  clearAllProducts() {
    const control = <FormArray>this.createDevisForm.controls['products'];
    while (control.length) {
      control.removeAt(control.length - 1);
    }
    control.clearValidators();
    control.push(this.getProduct());
  }

  /**
   * Update prices as soon as something changed on products group
   */
  private updateTotalProductPrice(products: Array<Product>) {
    // get our units group controll
    const control = <FormArray>this.createDevisForm.controls['products'];
    // before recount total price need to be reset.
    this.totalSum = 0;
    for (let i in products) {
      let totalProductPrice = products[i].quantity * products[i].priceHT;
      // now format total price with angular currency pipe
      // let totalProductPriceFormatted = this.currencyPipe.transform(
      //   totalProductPrice,
      //   'MAD',
      //   'symbol-narrow',
      //   '1.2-2',
      // );
      // update total sum field on products and do not emit event createDevisFormValueChanges$ in this case on products
      control.at(+i).get('total')!.setValue(totalProductPrice, {
        onlySelf: true,
        emitEvent: false,
      });
      // update total price for all units
      this.totalSum += totalProductPrice;
    }
  }
}
function substr(arg0: any, arg1: number, arg2: number): any {
  throw new Error('Function not implemented.');
}

function today(): any {
  throw new Error('Function not implemented.');
}

function now(): any {
  throw new Error('Function not implemented.');
}
