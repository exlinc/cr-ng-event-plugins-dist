import { AbstractEventPlugin } from './abstract.plugin';
export declare class PreventEventPlugin extends AbstractEventPlugin {
    protected readonly modifier = "prevent";
    addEventListener(element: HTMLElement, event: string, handler: Function): Function;
    addGlobalEventListener(element: string, event: string, handler: Function): Function;
}
