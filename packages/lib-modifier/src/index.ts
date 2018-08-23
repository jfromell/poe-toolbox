const templates = [
    {
        regex: /^[\+]([\d]+)\s(to)\s(strength)/i,
        parser([match, ...groups]) {
            const [value, type, attribute] = groups;

            return {
                attribute: parseAttribute(attribute),
                type: parseType(type),
                value: parseInt(value, 10),
            };
        },
    },
    {
        regex: /^([\d]+)\%\s(increased)\s(.*)$/i,
        parser([match, ...groups]) {
            const [value, type, attribute] = groups;

            return {
                attribute: parseAttribute(attribute),
                type: parseType(type),
                value: parseInt(value, 10),
            };
        },
    },
];

const types: Map<RegExp, string> = new Map<RegExp, string>([
    [/to/i, "ADD"],
    [/increased/i, "INC"],
]);

function parseType(str: string): string {
    for (const [key, value] of types) {
        if (key.test(str)) {
            return value;
        }
    }

    return str;
}

const attributes: Map<RegExp, string> = new Map<RegExp, string>([
    [/strength/i, "STR"],
    [/evasion rating/i, "EV"],
]);

function parseAttribute(str: string): string {
    for (const [key, value] of attributes) {
        if (key.test(str)) {
            return value;
        }
    }

    return str;
}

export function parse(modifier: string): object {
    for (const template of templates) {
        if (template.regex.test(modifier)) {
            const args = modifier.match(template.regex);

            return template.parser(args);
        }
    }

    return {};
}
