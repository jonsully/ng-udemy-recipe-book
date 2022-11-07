import { hostViewClassName } from '@angular/compiler';
import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  constructor(private elRef: ElementRef) {}
  // My old crazy crap
  // @HostBinding('classList.toggle(assignedClass)') assignedClass: string;

  // @HostListener('click') dropdownToggle(eventData: Event) {
  //   this.elRef.nativeElement.nextSibling.classList.toggle('show ');
  //   console.log(this.elRef.nativeElement.nextSibling);
  // }

  @HostBinding('class.show') isVisble = false;

  @HostListener('click') toggleOpen() {
    this.isVisble = !this.isVisble;
  }
}
