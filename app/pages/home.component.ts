import { Component } from "@angular/core";

import { TestBlobService } from "../shared/test-blob/test-blob.service";


@Component({
    selector: "home",
    moduleId: module.id,
    providers: [TestBlobService],
    templateUrl: "./home.html",
})
export class HomeComponent  {
    constructor(private testBlobService: TestBlobService) {}
    testBlob() {
        this.testBlobService.loadImage("http://placehold.it/120x120&text=image1");
    }
}