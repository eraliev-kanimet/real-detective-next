
export default function hasAnyValueRecursive(obj, values) {
    const stack = [obj];

    while (stack.length > 0) {
        const current = stack.pop();
        if (typeof current === 'object') {
            if (Object.values(current).some(value => values.includes(value))) {
                return true;
            }
            for (const prop in current) {
                stack.push(current[prop]);
            }
        }
    }

    return false;
}