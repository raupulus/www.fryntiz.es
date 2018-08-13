import { Component, OnInit } from '@angular/core';

// Importo Servicio para obtener información desde JSON
import { ServiceData } from '../../services/data.service';

// Importo librerías para construir formularios dinámicos
import { Validators, FormBuilder, FormControl,
         FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ServiceData]
})

export class ContactComponent implements OnInit {
  private datos;
  private config;
  public form:FormGroup;

  constructor( private _ServiceData:ServiceData,
               private formBuilder: FormBuilder ) {
    // Obtengo los datos directamente para la configuración
    this.config = _ServiceData.getConfig();

    // Obtengo los datos directamente para el menú
    this.datos = _ServiceData.getContact();

    // Asigno formulario con valores por defecto
    this.form = this.formBuilder.group({
      name: [ "", [
          Validators.required,
          Validators.minLength(4),
          Validators.pattern('^[a-zA-Z ]*'),
        ]
      ],
      lastName: [ "", [
          Validators.minLength(4),
        ]
      ],
      subject: [ "", [
          Validators.required,
          Validators.minLength(4),
        ]
      ],
      email: [ "", [
          Validators.email,
        ]
      ],
      mesagge: [ "", [
          Validators.required,
          Validators.minLength(20),
          Validators.maxLength(1200),
        ]
      ],
      emailfrom: this.config['emailfrom'],
      portsmtp: this.config['portsmtp'],
      mailserver: this.config['mailserver'],
      registeredOn : new Date().toISOString().substring(0, 10),
    });
  }

  ngOnInit() {

  }

  private sendForm(formValue) {
    console.log(formValue)
  }

  public onSubmit( formValue:any ) {
    if ( this.form.status === 'VALID' ) {
      this.sendForm(formValue);
    } else {
      console.log('Status: ' + this.form.status);
    }
  }
}
