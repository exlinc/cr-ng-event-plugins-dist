import { ɵmarkDirty as markDirty } from '@angular/core';
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
export function shouldCall(predicate) {
    return (_, _key, desc) => {
        const { value } = desc;
        desc.value = function (...args) {
            if (predicate.apply(this, args)) {
                value.apply(this, args);
                markDirty(this);
            }
        };
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvdWxkLWNhbGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1ldmVudC1wbHVnaW5zL3NyYy9kZWNvcmF0b3JzL3Nob3VsZC1jYWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxVQUFVLElBQUksU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBR3REOzs7R0FHRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFrQkk7QUFFSjs7R0FFRztBQUNILE1BQU0sVUFBVSxVQUFVLENBQW1CLFNBQXVCO0lBQ2hFLE9BQU8sQ0FBQyxDQUFTLEVBQUUsSUFBcUIsRUFBRSxJQUF3QixFQUFFLEVBQUU7UUFDbEUsTUFBTSxFQUFDLEtBQUssRUFBQyxHQUFHLElBQUksQ0FBQztRQUVyQixJQUFJLENBQUMsS0FBSyxHQUFHLFVBQW1CLEdBQUcsSUFBVztZQUMxQyxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFO2dCQUM3QixLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDeEIsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ25CO1FBQ0wsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0FBQ04sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ybVtYXJrRGlydHkgYXMgbWFya0RpcnR5fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UHJlZGljYXRlfSBmcm9tICcuLi90eXBlcy9wcmVkaWNhdGUnO1xuXG4vKipcbiAqIFRPRE86IFRoaXMgd2lsbCBub3QgYmUgbmVlZGVkIGluIEFuZ3VsYXIgMTBcbiAqIHdoZW4gbGlicmFyaWVzIGFyZSBhbGxvd2VkIHRvIHVzZSBJdnkgcmVuZGVyZXIgYW5kIG1hcmtEaXJ0eSBiZWNvbWVzIHN0YWJsZSBBUElcbiAqL1xuLyogZXhwb3J0IGZ1bmN0aW9uIHNob3VsZENhbGw8VD4ocHJlZGljYXRlOiBQcmVkaWNhdGU8VD4pOiBNZXRob2REZWNvcmF0b3Ige1xuICAgIHJldHVybiAoXywga2V5LCBkZXNjOiBQcm9wZXJ0eURlc2NyaXB0b3IpID0+IHtcbiAgICAgICAgY29uc3Qge3ZhbHVlfSA9IGRlc2M7XG5cbiAgICAgICAgZGVzYy52YWx1ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc3Qgem9uZSA9IGFyZ3VtZW50c1swXSBhcyBOZ1pvbmU7XG5cbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBrZXksIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSh0aGlzOiBULCAuLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJlZGljYXRlLmFwcGx5KHRoaXMsIGFyZ3MpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB6b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICB9O1xufSAqL1xuXG4vKipcbiAqIFRPRE86IFVzZSB0aGlzIGluIEFuZ3VsYXIgMTBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNob3VsZENhbGw8VCBleHRlbmRzIG9iamVjdD4ocHJlZGljYXRlOiBQcmVkaWNhdGU8VD4pOiBNZXRob2REZWNvcmF0b3Ige1xuICAgIHJldHVybiAoXzogT2JqZWN0LCBfa2V5OiBzdHJpbmcgfCBzeW1ib2wsIGRlc2M6IFByb3BlcnR5RGVzY3JpcHRvcikgPT4ge1xuICAgICAgICBjb25zdCB7dmFsdWV9ID0gZGVzYztcblxuICAgICAgICBkZXNjLnZhbHVlID0gZnVuY3Rpb24gKHRoaXM6IFQsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgICAgICBpZiAocHJlZGljYXRlLmFwcGx5KHRoaXMsIGFyZ3MpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgICAgICAgICAgbWFya0RpcnR5KHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH07XG59XG4iXX0=