import { Injectable } from '@angular/core'
import { HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Observable } from 'rxjs'
import { IFuncionario } from './funcionario'
import { tokenGetter } from '../app.module';

@Injectable({ providedIn: 'root' })
export class CrudService<T> implements HttpInterceptor {

  public uri: string = '';
  private apiServer: string = '';
  token: string

  constructor(private httpClient: HttpClient) {
    this.apiServer = 'http://localhost:3000/api/';
    this.token = ''
  }

  getToken() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    request = request.clone({
      setHeaders: {
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("access_token")}`,
      }
    });

    return next.handle(request);
  }

  getUri() {
    return this.apiServer + this.uri;
  }

  create(funcionario: T): Observable<OkResponse<T>> {
    return this.httpClient.post<OkResponse<T>>(this.getUri(),
      JSON.stringify(funcionario))
  }

  getById(id: string): Observable<OkResponse<T>> {
    return this.httpClient.get<OkResponse<T>>(this.getUri() + '/' + id)
  }

  getAll(): Observable<OkResponse<T[]>> {
    return this.httpClient.get<OkResponse<T[]>>(this.getUri());
  }

  update(id: string, funcionario: IFuncionario): Observable<OkResponse<T>> {
    return this.httpClient.put<OkResponse<T>>(this.getUri() + '/' + id, JSON.stringify(funcionario))
  }

  delete(id: string): Observable<OkResponse<T>> {
    return this.httpClient.delete<OkResponse<T>>(this.getUri() + '/' + id)
  }
}

export class OkResponse<T> {
  result: boolean;
  data: T
}