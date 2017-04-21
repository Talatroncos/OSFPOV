"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var app_component_1 = require("./app.component");
describe('AppComponent', function () {
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [
                app_component_1.AppComponent
            ],
        }).compileComponents();
    }));
    it('should create the app', testing_1.async(function () {
        var fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        var app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
    it("should have as title 'app works!'", testing_1.async(function () {
        var fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        var app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('app works!');
    }));
    it('should render title in a h1 tag', testing_1.async(function () {
        var fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        fixture.detectChanges();
        var compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('app works!');
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLmNvbXBvbmVudC5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaURBQXVEO0FBRXZELGlEQUErQztBQUUvQyxRQUFRLENBQUMsY0FBYyxFQUFFO0lBQ3ZCLFVBQVUsQ0FBQyxlQUFLLENBQUM7UUFDZixpQkFBTyxDQUFDLHNCQUFzQixDQUFDO1lBQzdCLFlBQVksRUFBRTtnQkFDWiw0QkFBWTthQUNiO1NBQ0YsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDekIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVKLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxlQUFLLENBQUM7UUFDaEMsSUFBTSxPQUFPLEdBQUcsaUJBQU8sQ0FBQyxlQUFlLENBQUMsNEJBQVksQ0FBQyxDQUFDO1FBQ3RELElBQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUM7UUFDbkQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzNCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFSixFQUFFLENBQUMsbUNBQW1DLEVBQUUsZUFBSyxDQUFDO1FBQzVDLElBQU0sT0FBTyxHQUFHLGlCQUFPLENBQUMsZUFBZSxDQUFDLDRCQUFZLENBQUMsQ0FBQztRQUN0RCxJQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDO1FBQ25ELE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFSixFQUFFLENBQUMsaUNBQWlDLEVBQUUsZUFBSyxDQUFDO1FBQzFDLElBQU0sT0FBTyxHQUFHLGlCQUFPLENBQUMsZUFBZSxDQUFDLDRCQUFZLENBQUMsQ0FBQztRQUN0RCxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEIsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUM7UUFDcEQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzNFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDTixDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRlc3RCZWQsIGFzeW5jIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcclxuXHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XHJcblxyXG5kZXNjcmliZSgnQXBwQ29tcG9uZW50JywgKCkgPT4ge1xyXG4gIGJlZm9yZUVhY2goYXN5bmMoKCkgPT4ge1xyXG4gICAgVGVzdEJlZC5jb25maWd1cmVUZXN0aW5nTW9kdWxlKHtcclxuICAgICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgQXBwQ29tcG9uZW50XHJcbiAgICAgIF0sXHJcbiAgICB9KS5jb21waWxlQ29tcG9uZW50cygpO1xyXG4gIH0pKTtcclxuXHJcbiAgaXQoJ3Nob3VsZCBjcmVhdGUgdGhlIGFwcCcsIGFzeW5jKCgpID0+IHtcclxuICAgIGNvbnN0IGZpeHR1cmUgPSBUZXN0QmVkLmNyZWF0ZUNvbXBvbmVudChBcHBDb21wb25lbnQpO1xyXG4gICAgY29uc3QgYXBwID0gZml4dHVyZS5kZWJ1Z0VsZW1lbnQuY29tcG9uZW50SW5zdGFuY2U7XHJcbiAgICBleHBlY3QoYXBwKS50b0JlVHJ1dGh5KCk7XHJcbiAgfSkpO1xyXG5cclxuICBpdChgc2hvdWxkIGhhdmUgYXMgdGl0bGUgJ2FwcCB3b3JrcyEnYCwgYXN5bmMoKCkgPT4ge1xyXG4gICAgY29uc3QgZml4dHVyZSA9IFRlc3RCZWQuY3JlYXRlQ29tcG9uZW50KEFwcENvbXBvbmVudCk7XHJcbiAgICBjb25zdCBhcHAgPSBmaXh0dXJlLmRlYnVnRWxlbWVudC5jb21wb25lbnRJbnN0YW5jZTtcclxuICAgIGV4cGVjdChhcHAudGl0bGUpLnRvRXF1YWwoJ2FwcCB3b3JrcyEnKTtcclxuICB9KSk7XHJcblxyXG4gIGl0KCdzaG91bGQgcmVuZGVyIHRpdGxlIGluIGEgaDEgdGFnJywgYXN5bmMoKCkgPT4ge1xyXG4gICAgY29uc3QgZml4dHVyZSA9IFRlc3RCZWQuY3JlYXRlQ29tcG9uZW50KEFwcENvbXBvbmVudCk7XHJcbiAgICBmaXh0dXJlLmRldGVjdENoYW5nZXMoKTtcclxuICAgIGNvbnN0IGNvbXBpbGVkID0gZml4dHVyZS5kZWJ1Z0VsZW1lbnQubmF0aXZlRWxlbWVudDtcclxuICAgIGV4cGVjdChjb21waWxlZC5xdWVyeVNlbGVjdG9yKCdoMScpLnRleHRDb250ZW50KS50b0NvbnRhaW4oJ2FwcCB3b3JrcyEnKTtcclxuICB9KSk7XHJcbn0pO1xyXG4iXX0=