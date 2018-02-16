"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var test_blob_service_1 = require("../shared/test-blob/test-blob.service");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(testBlobService) {
        this.testBlobService = testBlobService;
    }
    HomeComponent.prototype.testBlob = function () {
        this.testBlobService.loadImage("http://placehold.it/120x120&text=image1");
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "home",
            moduleId: module.id,
            providers: [test_blob_service_1.TestBlobService],
            templateUrl: "./home.html",
        }),
        __metadata("design:paramtypes", [test_blob_service_1.TestBlobService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUUxQywyRUFBd0U7QUFTeEU7SUFDSSx1QkFBb0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO0lBQUcsQ0FBQztJQUN4RCxnQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMseUNBQXlDLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBSlEsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFNBQVMsRUFBRSxDQUFDLG1DQUFlLENBQUM7WUFDNUIsV0FBVyxFQUFFLGFBQWE7U0FDN0IsQ0FBQzt5Q0FFdUMsbUNBQWU7T0FEM0MsYUFBYSxDQUt6QjtJQUFELG9CQUFDO0NBQUEsQUFMRCxJQUtDO0FBTFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgVGVzdEJsb2JTZXJ2aWNlIH0gZnJvbSBcIi4uL3NoYXJlZC90ZXN0LWJsb2IvdGVzdC1ibG9iLnNlcnZpY2VcIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImhvbWVcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBwcm92aWRlcnM6IFtUZXN0QmxvYlNlcnZpY2VdLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmh0bWxcIixcclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdGVzdEJsb2JTZXJ2aWNlOiBUZXN0QmxvYlNlcnZpY2UpIHt9XHJcbiAgICB0ZXN0QmxvYigpIHtcclxuICAgICAgICB0aGlzLnRlc3RCbG9iU2VydmljZS5sb2FkSW1hZ2UoXCJodHRwOi8vcGxhY2Vob2xkLml0LzEyMHgxMjAmdGV4dD1pbWFnZTFcIik7XHJcbiAgICB9XHJcbn0iXX0=