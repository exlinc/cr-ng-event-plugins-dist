import { AbstractEventPlugin } from './abstract.plugin';
export declare class SelfEventPlugin extends AbstractEventPlugin {
    protected readonly modifier = "self";
    addEventListener(element: HTMLElement, event: string, handler: Function): Function;
}
