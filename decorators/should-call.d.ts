import { Predicate } from '../types/predicate';
/**
 * TODO: This will not be needed in Angular 10
 * when libraries are allowed to use Ivy renderer and markDirty becomes stable API
 */
/**
 * TODO: Use this in Angular 10
 */
export declare function shouldCall<T extends object>(predicate: Predicate<T>): MethodDecorator;
