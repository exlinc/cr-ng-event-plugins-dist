import { AbstractEventPlugin } from './abstract.plugin';
export declare class SilentEventPlugin extends AbstractEventPlugin {
    protected readonly modifier = "silent";
    addEventListener(element: HTMLElement, event: string, handler: Function): Function;
    addGlobalEventListener(element: string, event: string, handler: Function): Function;
}
