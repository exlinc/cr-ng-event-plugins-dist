import { Injectable } from '@angular/core';
import { AbstractEventPlugin } from './abstract.plugin';
export class CaptureEventPlugin extends AbstractEventPlugin {
    constructor() {
        super(...arguments);
        this.modifier = 'capture';
    }
    supports(event) {
        const split = event.split('.');
        return split.length === 2 && split.indexOf(this.modifier) !== -1;
    }
    addEventListener(element, event, handler) {
        element.addEventListener(this.unwrap(event), handler, true);
        return () => element.removeEventListener(this.unwrap(event), handler);
    }
}
/** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
CaptureEventPlugin.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FwdHVyZS5wbHVnaW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1ldmVudC1wbHVnaW5zL3NyYy9wbHVnaW5zL2NhcHR1cmUucGx1Z2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFHdEQsTUFBTSxPQUFPLGtCQUFtQixTQUFRLG1CQUFtQjtJQUQzRDs7UUFFdUIsYUFBUSxHQUFHLFNBQVMsQ0FBQztJQWlCNUMsQ0FBQztJQWZHLFFBQVEsQ0FBQyxLQUFhO1FBQ2xCLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFL0IsT0FBTyxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRUQsZ0JBQWdCLENBQ1osT0FBb0IsRUFDcEIsS0FBYSxFQUNiLE9BQXNCO1FBRXRCLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUU1RCxPQUFPLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzFFLENBQUM7Ozs7WUFsQkosVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Fic3RyYWN0RXZlbnRQbHVnaW59IGZyb20gJy4vYWJzdHJhY3QucGx1Z2luJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhcHR1cmVFdmVudFBsdWdpbiBleHRlbmRzIEFic3RyYWN0RXZlbnRQbHVnaW4ge1xuICAgIHByb3RlY3RlZCByZWFkb25seSBtb2RpZmllciA9ICdjYXB0dXJlJztcblxuICAgIHN1cHBvcnRzKGV2ZW50OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3Qgc3BsaXQgPSBldmVudC5zcGxpdCgnLicpO1xuXG4gICAgICAgIHJldHVybiBzcGxpdC5sZW5ndGggPT09IDIgJiYgc3BsaXQuaW5kZXhPZih0aGlzLm1vZGlmaWVyKSAhPT0gLTE7XG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gICAgICAgIGV2ZW50OiBzdHJpbmcsXG4gICAgICAgIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIsXG4gICAgKTogRnVuY3Rpb24ge1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodGhpcy51bndyYXAoZXZlbnQpLCBoYW5kbGVyLCB0cnVlKTtcblxuICAgICAgICByZXR1cm4gKCkgPT4gZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMudW53cmFwKGV2ZW50KSwgaGFuZGxlcik7XG4gICAgfVxufVxuIl19