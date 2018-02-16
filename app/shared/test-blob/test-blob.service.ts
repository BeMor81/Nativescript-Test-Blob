
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import "rxjs/add/operator/map";
import { tap } from "rxjs/operators";

@Injectable()
export class TestBlobService {
  constructor(private http: HttpClient) {}

  loadImage(imgUrl: string) {
    console.log(imgUrl);
        let headers = new HttpHeaders();
        headers = headers.append("Content-Type", "blob");
        this.http.get(
        imgUrl, {responseType: 'blob', headers: headers})
        .pipe(
            tap(
            data => console.log("data " + data),
            error => console.dir(error)
            )
        ).subscribe();
  }
}