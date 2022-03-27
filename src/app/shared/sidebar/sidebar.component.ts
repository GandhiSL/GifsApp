import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  get historial() {
    return this.GifsService.historial
  }

  constructor(private GifsService: GifsService) { 
  }

  ngOnInit(): void {
  }

  buscar(valor: string){
    this.GifsService.buscarGifs(valor)
  }

}
