var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { DataService } from '../data.service';
var HomeComponent = /** @class */ (function () {
    function HomeComponent(_data) {
        this._data = _data;
        this.btnText = 'Add an item';
        this.goalText = 'My first life goal';
        this.goals = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.itemCount = this.goals.length;
        this._data.goal.subscribe(function (res) { return _this.goals = res; });
        this._data.changeGoal(this.goals);
    };
    HomeComponent.prototype.addItem = function () {
        this.goals.push(this.goalText);
        this.goalText = '';
        this.itemCount = this.goals.length;
        this._data.changeGoal(this.goals);
    };
    HomeComponent.prototype.removeItem = function (i) {
        this.goals.splice(i, 1);
        this._data.changeGoal(this.goals);
    };
    HomeComponent = __decorate([
        Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.scss'],
            animations: [
                trigger('goals', [
                    transition('* => *', [
                        query(':enter', style({ opacity: 0 }), { optional: true }),
                        query(':enter', stagger('300ms', [
                            animate('.6s ease-in', keyframes([
                                style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
                                style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
                                style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
                            ]))
                        ]), { optional: true }),
                        query(':leave', stagger('300ms', [
                            animate('.6s ease-in', keyframes([
                                style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
                                style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
                                style({ opacity: 0, transform: 'translateY(-75%)', offset: 1 }),
                            ]))
                        ]), { optional: true })
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [DataService])
    ], HomeComponent);
    return HomeComponent;
}());
export { HomeComponent };
//# sourceMappingURL=home.component.js.map