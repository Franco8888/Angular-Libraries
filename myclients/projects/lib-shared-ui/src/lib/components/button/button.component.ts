import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

// Text button
@Component({
	selector: 'shared-ui-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss']
})
export class UIButtonComponent implements OnInit {

	@Output() clicked = new EventEmitter<any>();
	hovered = false;

	constructor(
	) {}

	ngOnInit() {
	}

	onClick(event: MouseEvent) {
		this.clicked.emit();
	}

}
