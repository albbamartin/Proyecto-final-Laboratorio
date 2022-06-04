import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'miAPP';

  socio: FormGroup;
  constructor(){
    this.socio = new FormGroup({

      inNombre: new FormControl('', Validators.required),
      inApellidos: new FormControl('', Validators.required),
      inNumSocio: new FormControl('', Validators.required),
      inDNI: new FormControl('', Validators.required),
      inTelefono: new FormControl('', Validators.required),
      inSexo: new FormControl('', Validators.required)

    });
  }

  onSubmit() {
    console.log(this.socio.value);
    }

  ngOnInit(): void {}
}
