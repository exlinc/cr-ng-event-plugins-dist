import { Injectable } from '@angular/core';
import { AbstractEventPlugin } from './abstract.plugin';
export class PreventEventPlugin extends AbstractEventPlugin {
    constructor() {
        super(...arguments);
        this.modifier = 'prevent';
    }
    addEventListener(element, event, handler) {
        const wrapped = (event) => {
            event.preventDefault();
            handler(event);
        };
        return this.manager.addEventListener(element, this.unwrap(event), wrapped);
    }
    addGlobalEventListener(element, event, handler) {
        const wrapped = (event) => {
            event.preventDefault();
            handler(event);
        };
        return this.manager.addGlobalEventListener(element, this.unwrap(event), wrapped);
    }
}
/** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
PreventEventPlugin.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldmVudC5wbHVnaW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1ldmVudC1wbHVnaW5zL3NyYy9wbHVnaW5zL3ByZXZlbnQucGx1Z2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFHdEQsTUFBTSxPQUFPLGtCQUFtQixTQUFRLG1CQUFtQjtJQUQzRDs7UUFFdUIsYUFBUSxHQUFHLFNBQVMsQ0FBQztJQW1CNUMsQ0FBQztJQWpCRyxnQkFBZ0IsQ0FBQyxPQUFvQixFQUFFLEtBQWEsRUFBRSxPQUFpQjtRQUNuRSxNQUFNLE9BQU8sR0FBRyxDQUFDLEtBQVksRUFBRSxFQUFFO1lBQzdCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN2QixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsQ0FBQyxDQUFDO1FBRUYsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUFFRCxzQkFBc0IsQ0FBQyxPQUFlLEVBQUUsS0FBYSxFQUFFLE9BQWlCO1FBQ3BFLE1BQU0sT0FBTyxHQUFHLENBQUMsS0FBWSxFQUFFLEVBQUU7WUFDN0IsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZCLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUM7UUFFRixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsc0JBQXNCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDckYsQ0FBQzs7OztZQXBCSixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QWJzdHJhY3RFdmVudFBsdWdpbn0gZnJvbSAnLi9hYnN0cmFjdC5wbHVnaW4nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJldmVudEV2ZW50UGx1Z2luIGV4dGVuZHMgQWJzdHJhY3RFdmVudFBsdWdpbiB7XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IG1vZGlmaWVyID0gJ3ByZXZlbnQnO1xuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcihlbGVtZW50OiBIVE1MRWxlbWVudCwgZXZlbnQ6IHN0cmluZywgaGFuZGxlcjogRnVuY3Rpb24pOiBGdW5jdGlvbiB7XG4gICAgICAgIGNvbnN0IHdyYXBwZWQgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaGFuZGxlcihldmVudCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHRoaXMubWFuYWdlci5hZGRFdmVudExpc3RlbmVyKGVsZW1lbnQsIHRoaXMudW53cmFwKGV2ZW50KSwgd3JhcHBlZCk7XG4gICAgfVxuXG4gICAgYWRkR2xvYmFsRXZlbnRMaXN0ZW5lcihlbGVtZW50OiBzdHJpbmcsIGV2ZW50OiBzdHJpbmcsIGhhbmRsZXI6IEZ1bmN0aW9uKTogRnVuY3Rpb24ge1xuICAgICAgICBjb25zdCB3cmFwcGVkID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGhhbmRsZXIoZXZlbnQpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB0aGlzLm1hbmFnZXIuYWRkR2xvYmFsRXZlbnRMaXN0ZW5lcihlbGVtZW50LCB0aGlzLnVud3JhcChldmVudCksIHdyYXBwZWQpO1xuICAgIH1cbn1cbiJdfQ==