
import { Component, OnInit } from '@angular/core';
import { EleveService } from 'src/app/services/eleve-service.service';

@Component({
  selector: 'app-eleve-liste',
  templateUrl: './eleve-liste.component.html',
  styleUrls: ['./eleve-liste.component.scss']
})
export class EleveListeComponent implements OnInit {

  eleves;

  constructor(private eleveService: EleveService) { }

  ngOnInit() {
    this.eleveService.getAllEleves().subscribe(data => {
      this.eleves = data;
      console.log(data);
    });
  }

}
