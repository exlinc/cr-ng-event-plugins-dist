import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';
import { Injectable, ɵmarkDirty, NgModule, Inject } from '@angular/core';
import { EMPTY, concat, defer } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

function dasharize(camel) {
    return camel.replace(/[a-z][A-Z]/g, letterLetter => {
        return `${letterLetter[0]}-${letterLetter[1].toLowerCase()}`;
    });
}

class AbstractEventPlugin {
    supports(event) {
        return event.split('.').indexOf(this.modifier) !== -1;
    }
    addGlobalEventListener(_element, _event, _handler) {
        throw new Error(`Global event targets are not supported by ${this.modifier} plugin`);
    }
    unwrap(event) {
        return event
            .split('.')
            .filter(v => v !== this.modifier)
            .join('.');
    }
}

class BindEventPlugin extends AbstractEventPlugin {
    constructor() {
        super(...arguments);
        this.modifier = '$';
    }
    addEventListener(element, event) {
        var _a;
        element[event] = (_a = element[event]) !== null && _a !== void 0 ? _a : EMPTY;
        const method = this.getMethod(element, event);
        const zone$ = this.manager.getZone().onStable;
        const sub = concat(zone$.pipe(takeWhile(() => element[event] === EMPTY)), defer(() => element[event])).subscribe(method);
        return () => sub.unsubscribe();
    }
    getMethod(element, event) {
        const [, key, value, unit = ''] = event.split('.');
        if (event.endsWith('.attr')) {
            return v => v === null
                ? element.removeAttribute(key)
                : element.setAttribute(key, String(v));
        }
        if (key === 'class') {
            return v => element.classList.toggle(value, !!v);
        }
        if (key === 'style') {
            return v => element.style.setProperty(dasharize(value), `${v}${unit}`);
        }
        return v => (element[key] = v);
    }
}
/** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
BindEventPlugin.decorators = [
    { type: Injectable }
];

class CaptureEventPlugin extends AbstractEventPlugin {
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

class PreventEventPlugin extends AbstractEventPlugin {
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

class SelfEventPlugin extends AbstractEventPlugin {
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

class SilentEventPlugin extends AbstractEventPlugin {
    constructor() {
        super(...arguments);
        this.modifier = 'silent';
    }
    addEventListener(element, event, handler) {
        return this.manager
            .getZone()
            .runOutsideAngular(() => this.manager.addEventListener(element, this.unwrap(event), handler));
    }
    addGlobalEventListener(element, event, handler) {
        return this.manager
            .getZone()
            .runOutsideAngular(() => this.manager.addGlobalEventListener(element, this.unwrap(event), handler));
    }
}
/** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
SilentEventPlugin.decorators = [
    { type: Injectable }
];

class StopEventPlugin extends AbstractEventPlugin {
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

/**
 * TODO: This will not be needed in Angular 10
 * when libraries are allowed to use Ivy renderer and markDirty becomes stable API
 */
class ZoneEventPlugin extends AbstractEventPlugin {
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

const NG_EVENT_PLUGINS = [
    {
        provide: EVENT_MANAGER_PLUGINS,
        useClass: SilentEventPlugin,
        multi: true,
    },
    {
        provide: EVENT_MANAGER_PLUGINS,
        useClass: PreventEventPlugin,
        multi: true,
    },
    {
        provide: EVENT_MANAGER_PLUGINS,
        useClass: SelfEventPlugin,
        multi: true,
    },
    {
        provide: EVENT_MANAGER_PLUGINS,
        useClass: StopEventPlugin,
        multi: true,
    },
    {
        provide: EVENT_MANAGER_PLUGINS,
        useClass: ZoneEventPlugin,
        multi: true,
    },
    {
        provide: EVENT_MANAGER_PLUGINS,
        useClass: CaptureEventPlugin,
        multi: true,
    },
    {
        provide: EVENT_MANAGER_PLUGINS,
        useClass: BindEventPlugin,
        multi: true,
    },
];

/**
 * TODO: This will not be needed in Angular 10
 * when libraries are allowed to use Ivy renderer and markDirty becomes stable API
 */
/* export function shouldCall<T>(predicate: Predicate<T>): MethodDecorator {
    return (_, key, desc: PropertyDescriptor) => {
        const {value} = desc;

        desc.value = function() {
            const zone = arguments[0] as NgZone;

            Object.defineProperty(this, key, {
                value(this: T, ...args: any[]) {
                    if (predicate.apply(this, args)) {
                        zone.run(() => {
                            value.apply(this, args);
                        });
                    }
                },
            });
        };
    };
} */
/**
 * TODO: Use this in Angular 10
 */
function shouldCall(predicate) {
    return (_, _key, desc) => {
        const { value } = desc;
        desc.value = function (...args) {
            if (predicate.apply(this, args)) {
                value.apply(this, args);
                ɵmarkDirty(this);
            }
        };
    };
}

function asCallable(a) {
    return a;
}

// @dynamic
class EventPluginsModule {
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

/**
 * Public API Surface of @tinkoff/ng-event-plugins
 */

/**
 * Generated bundle index. Do not edit.
 */

export { BindEventPlugin, CaptureEventPlugin, EventPluginsModule, NG_EVENT_PLUGINS, PreventEventPlugin, SilentEventPlugin, StopEventPlugin, ZoneEventPlugin, asCallable, shouldCall, AbstractEventPlugin as ɵa, SelfEventPlugin as ɵb };
//# sourceMappingURL=tinkoff-ng-event-plugins.js.map
