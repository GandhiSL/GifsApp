import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial: string[] = []
  private _resultados: Gif[] = []
  private URL_API: string = 'https://api.giphy.com/v1/gifs'
  private API_KEY: string = 'zu0JWpJu7w1fSai93Yfo84lKYC76U70z'
  private endpoint = 'api.giphy.com/v1/gifs/search'

  get historial():string[]{
    return [...this._historial]
  }

  get resultados():Gif[]{
    return [...this._resultados]
  }

  constructor( private http: HttpClient) { 
    this._historial = JSON.parse(localStorage.getItem('historial')!) || []
    this._resultados = JSON.parse(localStorage.getItem('resultados')!) || []
  }

  buscarGifs(query: string){
    if (!this._historial.includes(query)){
      this._historial.unshift(query)
      this._historial = this._historial.splice(0, 10)
      localStorage.setItem('historial', JSON.stringify(this._historial))
    }

    const params = new HttpParams()
    .set('api_key', this.API_KEY)
    .set('limit', 10)
    .set('q', query)

    this.http.get<SearchGifsResponse>(`${this.URL_API}/search`, {params: params})
    .subscribe({
      next: (data) => {
        this._resultados = data.data
        localStorage.setItem('resultados', JSON.stringify(data.data))

      },
      error(err){
        console.log(err)
      }
    })
  }

}
