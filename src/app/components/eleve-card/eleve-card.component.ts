import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-eleve-card',
  templateUrl: './eleve-card.component.html',
  styleUrls: ['./eleve-card.component.scss']
})
export class EleveCardComponent implements OnInit {

  @Input() eleve;

  constructor() { }

  ngOnInit() {
  }

}
