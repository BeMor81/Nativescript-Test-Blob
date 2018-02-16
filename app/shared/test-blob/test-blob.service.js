"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
require("rxjs/add/operator/map");
var operators_1 = require("rxjs/operators");
var TestBlobService = /** @class */ (function () {
    function TestBlobService(http) {
        this.http = http;
    }
    TestBlobService.prototype.loadImage = function (imgUrl) {
        console.log(imgUrl);
        var headers = new http_1.HttpHeaders();
        headers = headers.append("Content-Type", "blob");
        this.http.get(imgUrl, { responseType: 'blob', headers: headers })
            .pipe(operators_1.tap(function (data) { return console.log("data " + data); }, function (error) { return console.dir(error); })).subscribe();
    };
    TestBlobService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], TestBlobService);
    return TestBlobService;
}());
exports.TestBlobService = TestBlobService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC1ibG9iLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0ZXN0LWJsb2Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUEyQztBQUMzQyw2Q0FBNkU7QUFDN0UsaUNBQStCO0FBQy9CLDRDQUFxQztBQUdyQztJQUNFLHlCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUcsQ0FBQztJQUV4QyxtQ0FBUyxHQUFULFVBQVUsTUFBYztRQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hCLElBQUksT0FBTyxHQUFHLElBQUksa0JBQVcsRUFBRSxDQUFDO1FBQ2hDLE9BQU8sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDYixNQUFNLEVBQUUsRUFBQyxZQUFZLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FBQzthQUNoRCxJQUFJLENBQ0QsZUFBRyxDQUNILFVBQUEsSUFBSSxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEVBQTNCLENBQTJCLEVBQ25DLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsQ0FDMUIsQ0FDSixDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFmVSxlQUFlO1FBRDNCLGlCQUFVLEVBQUU7eUNBRWUsaUJBQVU7T0FEekIsZUFBZSxDQWdCM0I7SUFBRCxzQkFBQztDQUFBLEFBaEJELElBZ0JDO0FBaEJZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5pbXBvcnQgeyB0YXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFRlc3RCbG9iU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxyXG5cclxuICBsb2FkSW1hZ2UoaW1nVXJsOiBzdHJpbmcpIHtcclxuICAgIGNvbnNvbGUubG9nKGltZ1VybCk7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXJzID0gaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJibG9iXCIpO1xyXG4gICAgICAgIHRoaXMuaHR0cC5nZXQoXHJcbiAgICAgICAgaW1nVXJsLCB7cmVzcG9uc2VUeXBlOiAnYmxvYicsIGhlYWRlcnM6IGhlYWRlcnN9KVxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICB0YXAoXHJcbiAgICAgICAgICAgIGRhdGEgPT4gY29uc29sZS5sb2coXCJkYXRhIFwiICsgZGF0YSksXHJcbiAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUuZGlyKGVycm9yKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKS5zdWJzY3JpYmUoKTtcclxuICB9XHJcbn0iXX0=