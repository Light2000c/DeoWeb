import { Injectable } from "@angular/core";
import Swal, { SweetAlertIcon}  from "sweetalert2";

@Injectable({
  providedIn: 'root',
})

export class UtilitiesProvider{

  constructor(){
  }

  alert(icon: SweetAlertIcon, title: string, Content: string){
  Swal.fire({
    customClass: {
      container: "alertClass",
      confirmButton: "alertConfirm",
    },
    title,
    html: Content,
    icon: icon,
    heightAuto: false,
    confirmButtonColor: "#052389",
  });
  }
}
