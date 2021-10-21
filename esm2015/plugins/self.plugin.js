import { Injectable } from '@angular/core';
import { AbstractEventPlugin } from './abstract.plugin';
export class SelfEventPlugin extends AbstractEventPlugin {
    constructor() {
        super(...arguments);
        this.modifier = 'self';
    }
    addEventListener(element, event, handler) {
        const wrapped = (event) => {
            if (event.target === event.currentTarget) {
                handler(event);
            }
        };
        return this.manager.addEventListener(element, this.unwrap(event), wrapped);
    }
}
/** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
SelfEventPlugin.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZi5wbHVnaW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1ldmVudC1wbHVnaW5zL3NyYy9wbHVnaW5zL3NlbGYucGx1Z2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFHdEQsTUFBTSxPQUFPLGVBQWdCLFNBQVEsbUJBQW1CO0lBRHhEOztRQUV1QixhQUFRLEdBQUcsTUFBTSxDQUFDO0lBV3pDLENBQUM7SUFURyxnQkFBZ0IsQ0FBQyxPQUFvQixFQUFFLEtBQWEsRUFBRSxPQUFpQjtRQUNuRSxNQUFNLE9BQU8sR0FBRyxDQUFDLEtBQVksRUFBRSxFQUFFO1lBQzdCLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxLQUFLLENBQUMsYUFBYSxFQUFFO2dCQUN0QyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDbEI7UUFDTCxDQUFDLENBQUM7UUFFRixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDL0UsQ0FBQzs7OztZQVpKLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBYnN0cmFjdEV2ZW50UGx1Z2lufSBmcm9tICcuL2Fic3RyYWN0LnBsdWdpbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZWxmRXZlbnRQbHVnaW4gZXh0ZW5kcyBBYnN0cmFjdEV2ZW50UGx1Z2luIHtcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgbW9kaWZpZXIgPSAnc2VsZic7XG5cbiAgICBhZGRFdmVudExpc3RlbmVyKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBldmVudDogc3RyaW5nLCBoYW5kbGVyOiBGdW5jdGlvbik6IEZ1bmN0aW9uIHtcbiAgICAgICAgY29uc3Qgd3JhcHBlZCA9IChldmVudDogRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQgPT09IGV2ZW50LmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyKGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gdGhpcy5tYW5hZ2VyLmFkZEV2ZW50TGlzdGVuZXIoZWxlbWVudCwgdGhpcy51bndyYXAoZXZlbnQpLCB3cmFwcGVkKTtcbiAgICB9XG59XG4iXX0=