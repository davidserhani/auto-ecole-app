import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EleveService } from 'src/app/services/eleve-service.service';

@Component({
  selector: 'app-create-eleve',
  templateUrl: './create-eleve.component.html',
  styleUrls: ['./create-eleve.component.scss']
})
export class CreateEleveComponent implements OnInit {

  profileForm: FormGroup;

  constructor(private eleveService: EleveService) {
    this.profileForm = new FormGroup({
      nom: new FormControl(''),
      prenom: new FormControl(''),
      dateDeNaissance: new FormControl(''),
      ville: new FormControl(''),
    });
  }

  ngOnInit() {

  }

  createEleve() {
    console.log(this.profileForm.value);
    this.eleveService.saveEleve(this.profileForm.value).subscribe((eleve: any) => {
      console.log(eleve.id);
    });
  }
}
