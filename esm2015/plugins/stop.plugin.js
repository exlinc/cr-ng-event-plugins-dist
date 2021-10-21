import { Injectable } from '@angular/core';
import { AbstractEventPlugin } from './abstract.plugin';
export class StopEventPlugin extends AbstractEventPlugin {
    constructor() {
        super(...arguments);
        this.modifier = 'stop';
    }
    addEventListener(element, event, handler) {
        const wrapped = (event) => {
            event.stopPropagation();
            handler(event);
        };
        return this.manager.addEventListener(element, this.unwrap(event), wrapped);
    }
    addGlobalEventListener(element, event, handler) {
        const wrapped = (event) => {
            event.stopPropagation();
            handler(event);
        };
        return this.manager.addGlobalEventListener(element, this.unwrap(event), wrapped);
    }
}
/** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
StopEventPlugin.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcC5wbHVnaW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1ldmVudC1wbHVnaW5zL3NyYy9wbHVnaW5zL3N0b3AucGx1Z2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFHdEQsTUFBTSxPQUFPLGVBQWdCLFNBQVEsbUJBQW1CO0lBRHhEOztRQUV1QixhQUFRLEdBQUcsTUFBTSxDQUFDO0lBbUJ6QyxDQUFDO0lBakJHLGdCQUFnQixDQUFDLE9BQW9CLEVBQUUsS0FBYSxFQUFFLE9BQWlCO1FBQ25FLE1BQU0sT0FBTyxHQUFHLENBQUMsS0FBWSxFQUFFLEVBQUU7WUFDN0IsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3hCLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUM7UUFFRixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDL0UsQ0FBQztJQUVELHNCQUFzQixDQUFDLE9BQWUsRUFBRSxLQUFhLEVBQUUsT0FBaUI7UUFDcEUsTUFBTSxPQUFPLEdBQUcsQ0FBQyxLQUFZLEVBQUUsRUFBRTtZQUM3QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDeEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLENBQUMsQ0FBQztRQUVGLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNyRixDQUFDOzs7O1lBcEJKLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBYnN0cmFjdEV2ZW50UGx1Z2lufSBmcm9tICcuL2Fic3RyYWN0LnBsdWdpbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdG9wRXZlbnRQbHVnaW4gZXh0ZW5kcyBBYnN0cmFjdEV2ZW50UGx1Z2luIHtcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgbW9kaWZpZXIgPSAnc3RvcCc7XG5cbiAgICBhZGRFdmVudExpc3RlbmVyKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBldmVudDogc3RyaW5nLCBoYW5kbGVyOiBGdW5jdGlvbik6IEZ1bmN0aW9uIHtcbiAgICAgICAgY29uc3Qgd3JhcHBlZCA9IChldmVudDogRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgaGFuZGxlcihldmVudCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHRoaXMubWFuYWdlci5hZGRFdmVudExpc3RlbmVyKGVsZW1lbnQsIHRoaXMudW53cmFwKGV2ZW50KSwgd3JhcHBlZCk7XG4gICAgfVxuXG4gICAgYWRkR2xvYmFsRXZlbnRMaXN0ZW5lcihlbGVtZW50OiBzdHJpbmcsIGV2ZW50OiBzdHJpbmcsIGhhbmRsZXI6IEZ1bmN0aW9uKTogRnVuY3Rpb24ge1xuICAgICAgICBjb25zdCB3cmFwcGVkID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBoYW5kbGVyKGV2ZW50KTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gdGhpcy5tYW5hZ2VyLmFkZEdsb2JhbEV2ZW50TGlzdGVuZXIoZWxlbWVudCwgdGhpcy51bndyYXAoZXZlbnQpLCB3cmFwcGVkKTtcbiAgICB9XG59XG4iXX0=