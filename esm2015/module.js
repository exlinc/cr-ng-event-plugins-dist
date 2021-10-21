import { Inject, NgModule } from '@angular/core';
import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';
import { NG_EVENT_PLUGINS } from './constants/plugins';
import { SilentEventPlugin } from './plugins/silent.plugin';
// @dynamic
export class EventPluginsModule {
    constructor(plugins) {
        console.assert(!(plugins[0] instanceof SilentEventPlugin), 'EventManagerModule must come after BrowserModule in imports');
    }
}
/** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
EventPluginsModule.decorators = [
    { type: NgModule, args: [{
                providers: NG_EVENT_PLUGINS,
            },] }
];
/**
 * @type {function(): !Array<(null|{
 *   type: ?,
 *   decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>),
 * })>}
 * @nocollapse
 */
EventPluginsModule.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [EVENT_MANAGER_PLUGINS,] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcHJvamVjdHMvbmctZXZlbnQtcGx1Z2lucy9zcmMvbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxNQUFNLEVBQUUsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQy9DLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3JELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBRTFELFdBQVc7QUFJWCxNQUFNLE9BQU8sa0JBQWtCO0lBQzNCLFlBQTJDLE9BQTJCO1FBQ2xFLE9BQU8sQ0FBQyxNQUFNLENBQ1YsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsWUFBWSxpQkFBaUIsQ0FBQyxFQUMxQyw2REFBNkQsQ0FDaEUsQ0FBQztJQUNOLENBQUM7Ozs7WUFUSixRQUFRLFNBQUM7Z0JBQ04sU0FBUyxFQUFFLGdCQUFnQjthQUM5Qjs7Ozs7Ozs7Ozs0Q0FFZ0IsTUFBTSxTQUFDLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0LCBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0VWRU5UX01BTkFHRVJfUExVR0lOU30gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQge05HX0VWRU5UX1BMVUdJTlN9IGZyb20gJy4vY29uc3RhbnRzL3BsdWdpbnMnO1xuaW1wb3J0IHtTaWxlbnRFdmVudFBsdWdpbn0gZnJvbSAnLi9wbHVnaW5zL3NpbGVudC5wbHVnaW4nO1xuXG4vLyBAZHluYW1pY1xuQE5nTW9kdWxlKHtcbiAgICBwcm92aWRlcnM6IE5HX0VWRU5UX1BMVUdJTlMsXG59KVxuZXhwb3J0IGNsYXNzIEV2ZW50UGx1Z2luc01vZHVsZSB7XG4gICAgY29uc3RydWN0b3IoQEluamVjdChFVkVOVF9NQU5BR0VSX1BMVUdJTlMpIHBsdWdpbnM6IHJlYWRvbmx5IHVua25vd25bXSkge1xuICAgICAgICBjb25zb2xlLmFzc2VydChcbiAgICAgICAgICAgICEocGx1Z2luc1swXSBpbnN0YW5jZW9mIFNpbGVudEV2ZW50UGx1Z2luKSxcbiAgICAgICAgICAgICdFdmVudE1hbmFnZXJNb2R1bGUgbXVzdCBjb21lIGFmdGVyIEJyb3dzZXJNb2R1bGUgaW4gaW1wb3J0cycsXG4gICAgICAgICk7XG4gICAgfVxufVxuIl19