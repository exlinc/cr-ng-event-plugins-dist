import { AbstractEventPlugin } from './abstract.plugin';
export declare class StopEventPlugin extends AbstractEventPlugin {
    protected readonly modifier = "stop";
    addEventListener(element: HTMLElement, event: string, handler: Function): Function;
    addGlobalEventListener(element: string, event: string, handler: Function): Function;
}
