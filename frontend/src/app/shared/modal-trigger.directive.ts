import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core'
import { JQUERY_TOKEN } from './jQuery.service'

@Directive({ selector: '[modal-trigger]' })
export class ModalTriggerDirective implements OnInit {

  el: HTMLElement
  @Input('modal-trigger') modalId: string

  constructor(
    @Inject(JQUERY_TOKEN) private $: any,
    ref: ElementRef) {
    this.el = ref.nativeElement
  }

  ngOnInit(): void {
    if (this.modalId !== 'false') {
      this.el.addEventListener('click', e => {
        this.$(`#${this.modalId}`).modal({})
      })
    }
  }

}
