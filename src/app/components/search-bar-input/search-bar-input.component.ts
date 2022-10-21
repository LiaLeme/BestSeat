//#region Imports

import { Component, EventEmitter, Input, Output } from '@angular/core';

//#endregion

@Component({
  selector: 'app-search-bar-input',
  templateUrl: './search-bar-input.component.html',
  styleUrls: ['./search-bar-input.component.scss'],
})
export class SearchBarInputComponent {

  //#region Properties

  @Input()
  public maxLength: number = 255;

  @Input()
  public value: string = '';

  @Output()
  public onChangeValue: EventEmitter<string> = new EventEmitter<string>();

  //#endregion

  //#region Public methods

  public onChange($event: string): void {
    this.value = $event;
    this.onChangeValue.emit(this.value);
  }

  //#endregion

}
