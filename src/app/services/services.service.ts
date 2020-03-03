import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/index";
import { User } from "../Model/user";
import { ApiResponse } from "../Model/api-response";

@Injectable({
  providedIn: "root"
})
export class ServicesService {
  constructor(private http: HttpClient) {}
  baseUrl = "http://localhost/assessment-db";

  login(loginData): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + "/login.php", loginData);
  }

  getUsers(): Observable<ApiResponse> {
    console.log(this.http.get<ApiResponse>(this.baseUrl + "/list.php"));

    return this.http.get<ApiResponse>(this.baseUrl + "/list.php");
  }

  createUser(user: User): Observable<ApiResponse> {
    console.log(user);
    return this.http.post<ApiResponse>(this.baseUrl + "/insert.php", user);
  }
}
