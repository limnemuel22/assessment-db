import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ServicesService } from "../services/services.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  users: any = [];
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiService: ServicesService
  ) {}

  ngOnInit() {
    this.getUsers();

    if (this.users.length <= 0) {
      this.users = [
        {
          username: "nem22",
          password: "khazlie22",
          firstName: "Nemuel",
          lastName: "Lim"
        }
      ];
    }
  }

  getUsers() {
    this.apiService.getUsers().subscribe((data: any) => {
      this.users = data;
    });
  }

  logOut() {
    window.localStorage.removeItem("token");
    this.router.navigate(["login"]);
  }
}
