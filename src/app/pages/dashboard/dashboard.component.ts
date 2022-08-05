import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from './../../cargar-scripts.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _cargaScripts:CargarScriptsService) {
    _cargaScripts.carga(["reloj","chart-area-demo","chart-bar-demo"]);
   }

  ngOnInit(): void {
  }

}
