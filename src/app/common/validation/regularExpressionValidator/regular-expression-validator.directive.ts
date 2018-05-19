import {Directive, ElementRef, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator, ValidatorFn} from "@angular/forms";

@Directive({
  selector: '[regularExpressionValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: RegularExpressionValidatorDirective, multi: true}]
})

export class RegularExpressionValidatorDirective implements Validator {
  @Input('regularExpression') regularExpression: string;

  constructor(el: ElementRef) {
    // el.nativeElement.style.backgroundColor = 'yellow';
  }


  validate(control: AbstractControl): { [key: string]: any } {

    return this.regularExpression ? this.checkName(this.regularExpression)(control)
      : null;
  }


  checkName = function (pattern: string): ValidatorFn {

    let regularExp:RegExp = new RegExp(pattern, "g");
    var patt =/^[A-Z]{1}[a-z]{2,7}$/;
    return (control: AbstractControl): { [key: string]: any } => {
      const forbidden = regularExp.test(control.value);
      return !forbidden ? {'forbiddenName': {value: control.value}} : null;
    };

  }
}
