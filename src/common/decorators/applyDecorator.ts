export const applyDecorator = (func: (args: any[], original: any) => any) => {
    return (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) => {
        const original = descriptor.value
        descriptor.value = function (...args: any) {
            return func(args, original)
        }
    }
}
