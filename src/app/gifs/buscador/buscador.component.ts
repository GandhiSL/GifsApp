import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {

  @ViewChild('input') buscador!: ElementRef<HTMLInputElement>

  constructor(private GifsService: GifsService) { }

  ngOnInit(): void {
  }

  buscar() {
    const input:string = this.buscador.nativeElement.value
    if (input.trim().length === 0) {return}
    this.GifsService.buscarGifs(input)
  }

}
