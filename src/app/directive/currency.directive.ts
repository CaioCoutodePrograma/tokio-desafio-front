import { Directive, ElementRef, HostListener, Input, Optional } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[currency]',
  standalone:false,
})
export class CurrencyDirective {
  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event'])
  onInput(event: any): void {
    let input = event.target;
    let value = input.value;

    // Remove qualquer coisa que não seja número ou vírgula
    value = value.replace(/[^0-9,]/g, '');

    // Divide o valor em parte inteira e decimal
    let [integerPart, decimalPart] = value.split(',');

    // Limita a parte decimal a no máximo 2 dígitos
    if (decimalPart) {
      decimalPart = decimalPart.substring(0, 2); // Garantir apenas 2 dígitos após a vírgula
    }

    // Reconstruir o valor com a parte inteira e decimal separados por vírgula
    if (decimalPart) {
      input.value = `${integerPart},${decimalPart}`;
    } else {
      input.value = integerPart;
    }
  }
}