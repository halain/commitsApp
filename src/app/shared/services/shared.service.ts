import { Injectable } from '@angular/core';
import Swal, {SweetAlertIcon} from 'sweetalert2';



@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  showMessage(type:  SweetAlertIcon, msg: string, title: string = 'Error...'){
    Swal.fire({
      icon: type,
      title,
      text: msg,
      heightAuto: false,
    })
  }


  

}
