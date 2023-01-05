import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'shared-ui-label',
    templateUrl: './label.component.html',
    styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {

    @Input() icon: string = 'fa-window-close';
    @Input() backgroundColor = '#BFEFFF';

    iconClassStr: string = 'fa fa-window-close';

    constructor() { }

    ngOnInit(): void {
        this.iconClassStr = `fa ${this.icon}`;
    }

}
