(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/platform-browser'), require('@angular/core'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@tinkoff/ng-event-plugins', ['exports', '@angular/platform-browser', '@angular/core', 'rxjs', 'rxjs/operators'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.tinkoff = global.tinkoff || {}, global.tinkoff["ng-event-plugins"] = {}), global.ng.platformBrowser, global.ng.core, global.rxjs, global.rxjs.operators));
})(this, (function (exports, platformBrowser, core, rxjs, operators) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || Array.prototype.slice.call(from));
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    function dasharize(camel) {
        return camel.replace(/[a-z][A-Z]/g, function (letterLetter) {
            return letterLetter[0] + "-" + letterLetter[1].toLowerCase();
        });
    }

    var AbstractEventPlugin = /** @class */ (function () {
        function AbstractEventPlugin() {
        }
        AbstractEventPlugin.prototype.supports = function (event) {
            return event.split('.').indexOf(this.modifier) !== -1;
        };
        AbstractEventPlugin.prototype.addGlobalEventListener = function (_element, _event, _handler) {
            throw new Error("Global event targets are not supported by " + this.modifier + " plugin");
        };
        AbstractEventPlugin.prototype.unwrap = function (event) {
            var _this = this;
            return event
                .split('.')
                .filter(function (v) { return v !== _this.modifier; })
                .join('.');
        };
        return AbstractEventPlugin;
    }());

    var BindEventPlugin = /** @class */ (function (_super) {
        __extends(BindEventPlugin, _super);
        function BindEventPlugin() {
            var _this = _super.apply(this, __spreadArray([], __read(arguments))) || this;
            _this.modifier = '$';
            return _this;
        }
        BindEventPlugin.prototype.addEventListener = function (element, event) {
            var _a;
            element[event] = (_a = element[event]) !== null && _a !== void 0 ? _a : rxjs.EMPTY;
            var method = this.getMethod(element, event);
            var zone$ = this.manager.getZone().onStable;
            var sub = rxjs.concat(zone$.pipe(operators.takeWhile(function () { return element[event] === rxjs.EMPTY; })), rxjs.defer(function () { return element[event]; })).subscribe(method);
            return function () { return sub.unsubscribe(); };
        };
        BindEventPlugin.prototype.getMethod = function (element, event) {
            var _b = __read(event.split('.'), 4), key = _b[1], value = _b[2], _c = _b[3], unit = _c === void 0 ? '' : _c;
            if (event.endsWith('.attr')) {
                return function (v) { return v === null
                    ? element.removeAttribute(key)
                    : element.setAttribute(key, String(v)); };
            }
            if (key === 'class') {
                return function (v) { return element.classList.toggle(value, !!v); };
            }
            if (key === 'style') {
                return function (v) { return element.style.setProperty(dasharize(value), "" + v + unit); };
            }
            return function (v) { return (element[key] = v); };
        };
        return BindEventPlugin;
    }(AbstractEventPlugin));
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    BindEventPlugin.decorators = [
        { type: core.Injectable }
    ];

    var CaptureEventPlugin = /** @class */ (function (_super) {
        __extends(CaptureEventPlugin, _super);
        function CaptureEventPlugin() {
            var _this = _super.apply(this, __spreadArray([], __read(arguments))) || this;
            _this.modifier = 'capture';
            return _this;
        }
        CaptureEventPlugin.prototype.supports = function (event) {
            var split = event.split('.');
            return split.length === 2 && split.indexOf(this.modifier) !== -1;
        };
        CaptureEventPlugin.prototype.addEventListener = function (element, event, handler) {
            var _this = this;
            element.addEventListener(this.unwrap(event), handler, true);
            return function () { return element.removeEventListener(_this.unwrap(event), handler); };
        };
        return CaptureEventPlugin;
    }(AbstractEventPlugin));
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    CaptureEventPlugin.decorators = [
        { type: core.Injectable }
    ];

    var PreventEventPlugin = /** @class */ (function (_super) {
        __extends(PreventEventPlugin, _super);
        function PreventEventPlugin() {
            var _this = _super.apply(this, __spreadArray([], __read(arguments))) || this;
            _this.modifier = 'prevent';
            return _this;
        }
        PreventEventPlugin.prototype.addEventListener = function (element, event, handler) {
            var wrapped = function (event) {
                event.preventDefault();
                handler(event);
            };
            return this.manager.addEventListener(element, this.unwrap(event), wrapped);
        };
        PreventEventPlugin.prototype.addGlobalEventListener = function (element, event, handler) {
            var wrapped = function (event) {
                event.preventDefault();
                handler(event);
            };
            return this.manager.addGlobalEventListener(element, this.unwrap(event), wrapped);
        };
        return PreventEventPlugin;
    }(AbstractEventPlugin));
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    PreventEventPlugin.decorators = [
        { type: core.Injectable }
    ];

    var SelfEventPlugin = /** @class */ (function (_super) {
        __extends(SelfEventPlugin, _super);
        function SelfEventPlugin() {
            var _this = _super.apply(this, __spreadArray([], __read(arguments))) || this;
            _this.modifier = 'self';
            return _this;
        }
        SelfEventPlugin.prototype.addEventListener = function (element, event, handler) {
            var wrapped = function (event) {
                if (event.target === event.currentTarget) {
                    handler(event);
                }
            };
            return this.manager.addEventListener(element, this.unwrap(event), wrapped);
        };
        return SelfEventPlugin;
    }(AbstractEventPlugin));
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SelfEventPlugin.decorators = [
        { type: core.Injectable }
    ];

    var SilentEventPlugin = /** @class */ (function (_super) {
        __extends(SilentEventPlugin, _super);
        function SilentEventPlugin() {
            var _this = _super.apply(this, __spreadArray([], __read(arguments))) || this;
            _this.modifier = 'silent';
            return _this;
        }
        SilentEventPlugin.prototype.addEventListener = function (element, event, handler) {
            var _this = this;
            return this.manager
                .getZone()
                .runOutsideAngular(function () { return _this.manager.addEventListener(element, _this.unwrap(event), handler); });
        };
        SilentEventPlugin.prototype.addGlobalEventListener = function (element, event, handler) {
            var _this = this;
            return this.manager
                .getZone()
                .runOutsideAngular(function () { return _this.manager.addGlobalEventListener(element, _this.unwrap(event), handler); });
        };
        return SilentEventPlugin;
    }(AbstractEventPlugin));
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SilentEventPlugin.decorators = [
        { type: core.Injectable }
    ];

    var StopEventPlugin = /** @class */ (function (_super) {
        __extends(StopEventPlugin, _super);
        function StopEventPlugin() {
            var _this = _super.apply(this, __spreadArray([], __read(arguments))) || this;
            _this.modifier = 'stop';
            return _this;
        }
        StopEventPlugin.prototype.addEventListener = function (element, event, handler) {
            var wrapped = function (event) {
                event.stopPropagation();
                handler(event);
            };
            return this.manager.addEventListener(element, this.unwrap(event), wrapped);
        };
        StopEventPlugin.prototype.addGlobalEventListener = function (element, event, handler) {
            var wrapped = function (event) {
                event.stopPropagation();
                handler(event);
            };
            return this.manager.addGlobalEventListener(element, this.unwrap(event), wrapped);
        };
        return StopEventPlugin;
    }(AbstractEventPlugin));
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    StopEventPlugin.decorators = [
        { type: core.Injectable }
    ];

    /**
     * TODO: This will not be needed in Angular 10
     * when libraries are allowed to use Ivy renderer and markDirty becomes stable API
     */
    var ZoneEventPlugin = /** @class */ (function (_super) {
        __extends(ZoneEventPlugin, _super);
        function ZoneEventPlugin() {
            var _this = _super.apply(this, __spreadArray([], __read(arguments))) || this;
            _this.modifier = 'init';
            return _this;
        }
        ZoneEventPlugin.prototype.addEventListener = function (_element, _event, handler) {
            return this.handle(handler);
        };
        ZoneEventPlugin.prototype.addGlobalEventListener = function (_element, _event, handler) {
            return this.handle(handler);
        };
        ZoneEventPlugin.prototype.handle = function (handler) {
            var zone = this.manager.getZone();
            var subscription = zone.onStable.subscribe(function () {
                subscription.unsubscribe();
                handler(zone);
            });
            return function () { };
        };
        return ZoneEventPlugin;
    }(AbstractEventPlugin));
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ZoneEventPlugin.decorators = [
        { type: core.Injectable }
    ];

    var NG_EVENT_PLUGINS = [
        {
            provide: platformBrowser.EVENT_MANAGER_PLUGINS,
            useClass: SilentEventPlugin,
            multi: true,
        },
        {
            provide: platformBrowser.EVENT_MANAGER_PLUGINS,
            useClass: PreventEventPlugin,
            multi: true,
        },
        {
            provide: platformBrowser.EVENT_MANAGER_PLUGINS,
            useClass: SelfEventPlugin,
            multi: true,
        },
        {
            provide: platformBrowser.EVENT_MANAGER_PLUGINS,
            useClass: StopEventPlugin,
            multi: true,
        },
        {
            provide: platformBrowser.EVENT_MANAGER_PLUGINS,
            useClass: ZoneEventPlugin,
            multi: true,
        },
        {
            provide: platformBrowser.EVENT_MANAGER_PLUGINS,
            useClass: CaptureEventPlugin,
            multi: true,
        },
        {
            provide: platformBrowser.EVENT_MANAGER_PLUGINS,
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
        return function (_, _key, desc) {
            var value = desc.value;
            desc.value = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (predicate.apply(this, args)) {
                    value.apply(this, args);
                    core["ɵmarkDirty"](this);
                }
            };
        };
    }

    function asCallable(a) {
        return a;
    }

    // @dynamic
    var EventPluginsModule = /** @class */ (function () {
        function EventPluginsModule(plugins) {
            console.assert(!(plugins[0] instanceof SilentEventPlugin), 'EventManagerModule must come after BrowserModule in imports');
        }
        return EventPluginsModule;
    }());
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    EventPluginsModule.decorators = [
        { type: core.NgModule, args: [{
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
    EventPluginsModule.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Inject, args: [platformBrowser.EVENT_MANAGER_PLUGINS,] }] }
    ]; };

    /**
     * Public API Surface of @tinkoff/ng-event-plugins
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.BindEventPlugin = BindEventPlugin;
    exports.CaptureEventPlugin = CaptureEventPlugin;
    exports.EventPluginsModule = EventPluginsModule;
    exports.NG_EVENT_PLUGINS = NG_EVENT_PLUGINS;
    exports.PreventEventPlugin = PreventEventPlugin;
    exports.SilentEventPlugin = SilentEventPlugin;
    exports.StopEventPlugin = StopEventPlugin;
    exports.ZoneEventPlugin = ZoneEventPlugin;
    exports.asCallable = asCallable;
    exports.shouldCall = shouldCall;
    exports["ɵa"] = AbstractEventPlugin;
    exports["ɵb"] = SelfEventPlugin;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=tinkoff-ng-event-plugins.umd.js.map
