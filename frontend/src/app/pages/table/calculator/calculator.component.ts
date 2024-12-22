import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
    calculatorOpen: boolean = true;
  showCalculator: boolean = true;

  toggleCalculator() {
    this.showCalculator = !this.showCalculator;
    this.calculatorOpen = !this.calculatorOpen;
  }
  
  display: string = '';

    appendInput(value: string): void {
        this.display += value;
    }

    clear(): void {
        this.display = '';
    }

    calculate(): void {
        try {
            this.display = eval(this.display);
        } catch (e) {
            this.display = 'Error';
        }
    }
}
