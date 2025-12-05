import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';


@Directive({
    selector: '[appDropDown]'
})
export class DropDownDirective {
    isOpen: boolean = false;

    constructor(private el: ElementRef<HTMLElement>, private renderer: Renderer2) { }

    // Toggle on host click (works when clicking toggle anchor)
    @HostListener('click', ['$event']) toggle(event: Event) {
        this.isOpen = !this.isOpen;
        this.updateMenu(this.isOpen);
    }

    private updateMenu(open: boolean) {
        const hostEl = this.el.nativeElement;
        const menu = hostEl.querySelector('.dropdown-menu') as HTMLElement | null;


        if (menu) {
            if (open) {
                this.renderer.addClass(menu, 'show');
            } else {
                this.renderer.removeClass(menu, 'show');
            }
        }
    }
}