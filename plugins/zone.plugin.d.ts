import { AbstractEventPlugin } from './abstract.plugin';
/**
 * TODO: This will not be needed in Angular 10
 * when libraries are allowed to use Ivy renderer and markDirty becomes stable API
 */
export declare class ZoneEventPlugin extends AbstractEventPlugin {
    protected readonly modifier = "init";
    addEventListener(_element: HTMLElement, _event: string, handler: Function): Function;
    addGlobalEventListener(_element: string, _event: string, handler: Function): Function;
    private handle;
}
