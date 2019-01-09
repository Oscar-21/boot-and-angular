import { Component, Input, ViewChild, ElementRef, Inject } from '@angular/core'
import { JQUERY_TOKEN } from './jQuery.service'

@Component({
  selector: 'simple-modal',
  template: `
    <div #modalcontainer
         id='{{elementId}}'
         class='modal fades'
         tabindex='-1'>
      <div class='modal-dialog'>
        <div class='modal-content'>
          <div class='modal-header'>
            <button type='button'
                    class='close'
                    data-dismiss='modal'>
              <span>&times</span>
            </button>
            <h4 class='modal-title'>{{title}}</h4>
          </div>
          <div (click)='closeModal()'
               class='modal.body'>
            <ng-content></ng-content>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .modal-body { height: 250px overflow-y: scroll }
  `]
})
export class SimpleModalComponent {

  @Input() title: string
  @Input() elementId: string
  @Input() closeOnBodyClick: string
  @ViewChild('modalcontainer') containerEl: ElementRef

  constructor(
    @Inject(JQUERY_TOKEN) private $: any) {

  }

  closeModal(): void {
    if (this.closeOnBodyClick.toLocaleLowerCase() === 'true') {
      // this.$(`#${this.elementId}`).modal('hide')
      this.$(this.containerEl.nativeElement).modal('hide')
    }
  }

}
