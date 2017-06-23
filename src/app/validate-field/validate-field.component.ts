import {Component, Input } from '@angular/core';

@Component({
  selector: 'validate-field',
  templateUrl: './validate-field.component.html',
  styleUrls: ['./validate-field.component.scss']
})
export class ValidateFieldComponent {

  @Input() inputErrors: any;
  @Input() inputField: any;
  @Input() errorDefs: any;

  errorMessage: string = '';

  ngOnChanges(changes:any): void {
    let errors:any = changes.inputErrors.currentValue;

    this.errorMessage = '';
    if (errors) {
      Object.keys(this.errorDefs).some(key => {
        if (errors[key]) {
          this.errorMessage = this.errorDefs[key];
          return true;
        }
      });
    }
  }

}
