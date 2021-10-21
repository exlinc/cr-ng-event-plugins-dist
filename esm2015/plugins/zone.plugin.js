import { Injectable } from '@angular/core';
import { AbstractEventPlugin } from './abstract.plugin';
/**
 * TODO: This will not be needed in Angular 10
 * when libraries are allowed to use Ivy renderer and markDirty becomes stable API
 */
export class ZoneEventPlugin extends AbstractEventPlugin {
    constructor() {
        super(...arguments);
        this.modifier = 'init';
    }
    addEventListener(_element, _event, handler) {
        return this.handle(handler);
    }
    addGlobalEventListener(_element, _event, handler) {
        return this.handle(handler);
    }
    handle(handler) {
        const zone = this.manager.getZone();
        const subscription = zone.onStable.subscribe(() => {
            subscription.unsubscribe();
            handler(zone);
        });
        return () => { };
    }
}
/** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
ZoneEventPlugin.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9uZS5wbHVnaW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1ldmVudC1wbHVnaW5zL3NyYy9wbHVnaW5zL3pvbmUucGx1Z2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFFdEQ7OztHQUdHO0FBRUgsTUFBTSxPQUFPLGVBQWdCLFNBQVEsbUJBQW1CO0lBRHhEOztRQUV1QixhQUFRLEdBQUcsTUFBTSxDQUFDO0lBdUJ6QyxDQUFDO0lBckJHLGdCQUFnQixDQUFDLFFBQXFCLEVBQUUsTUFBYyxFQUFFLE9BQWlCO1FBQ3JFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsc0JBQXNCLENBQ2xCLFFBQWdCLEVBQ2hCLE1BQWMsRUFDZCxPQUFpQjtRQUVqQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVPLE1BQU0sQ0FBQyxPQUFpQjtRQUM1QixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3BDLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUM5QyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDM0IsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUM7SUFDcEIsQ0FBQzs7OztZQXhCSixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QWJzdHJhY3RFdmVudFBsdWdpbn0gZnJvbSAnLi9hYnN0cmFjdC5wbHVnaW4nO1xuXG4vKipcbiAqIFRPRE86IFRoaXMgd2lsbCBub3QgYmUgbmVlZGVkIGluIEFuZ3VsYXIgMTBcbiAqIHdoZW4gbGlicmFyaWVzIGFyZSBhbGxvd2VkIHRvIHVzZSBJdnkgcmVuZGVyZXIgYW5kIG1hcmtEaXJ0eSBiZWNvbWVzIHN0YWJsZSBBUElcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFpvbmVFdmVudFBsdWdpbiBleHRlbmRzIEFic3RyYWN0RXZlbnRQbHVnaW4ge1xuICAgIHByb3RlY3RlZCByZWFkb25seSBtb2RpZmllciA9ICdpbml0JztcblxuICAgIGFkZEV2ZW50TGlzdGVuZXIoX2VsZW1lbnQ6IEhUTUxFbGVtZW50LCBfZXZlbnQ6IHN0cmluZywgaGFuZGxlcjogRnVuY3Rpb24pOiBGdW5jdGlvbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZShoYW5kbGVyKTtcbiAgICB9XG5cbiAgICBhZGRHbG9iYWxFdmVudExpc3RlbmVyKFxuICAgICAgICBfZWxlbWVudDogc3RyaW5nLFxuICAgICAgICBfZXZlbnQ6IHN0cmluZyxcbiAgICAgICAgaGFuZGxlcjogRnVuY3Rpb24sXG4gICAgKTogRnVuY3Rpb24ge1xuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGUoaGFuZGxlcik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoYW5kbGUoaGFuZGxlcjogRnVuY3Rpb24pOiBGdW5jdGlvbiB7XG4gICAgICAgIGNvbnN0IHpvbmUgPSB0aGlzLm1hbmFnZXIuZ2V0Wm9uZSgpO1xuICAgICAgICBjb25zdCBzdWJzY3JpcHRpb24gPSB6b25lLm9uU3RhYmxlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIGhhbmRsZXIoem9uZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAoKSA9PiB7fTtcbiAgICB9XG59XG4iXX0=