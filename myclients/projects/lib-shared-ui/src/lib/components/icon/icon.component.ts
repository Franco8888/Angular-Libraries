import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-ui-icon',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

    @Input() icon: string = 'fa-window-close';
	@Input() size: number = 43;
    @Input() color: string = '#050505';

    constructor() { }

    iconClassStr = '';

    ngOnInit(): void {
        this.iconClassStr = `fa ${this.icon}`;
    }

}
