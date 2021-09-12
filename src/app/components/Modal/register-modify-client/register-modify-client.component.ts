import { Component, OnInit, Input } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register-modify-client',
  templateUrl: './register-modify-client.component.html'
})
export class RegisterModifyClientComponent implements OnInit {

  @Input() mode : string = '';
  @Input() index : number = 5;

  constructor(private modal:NgbModal, private router : Router) { }

  ngOnInit(): void {
  }

  openModal(contenido : any){
    this.modal.open(contenido,{centered:true, size:'lg'});
  }

  salesRedirect(){
    this.router.navigate( ['/sales'] );
  }
  

}
