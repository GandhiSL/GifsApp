import { Component, OnInit } from '@angular/core';
import { Gif } from '../interface/gifs.interface';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss']
})
export class ResultadosComponent implements OnInit {

  get resultados() {
    return this.GifsService.resultados
  }

  constructor(private GifsService: GifsService) { }

  ngOnInit(): void {
  }

}
