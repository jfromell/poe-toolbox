const templates = [
    {
        regex: /^([\+])([\d]+)\s(to)\s(strength)/i,
        parser(match?: string, symbol?: string, value?: string, type?: string, attribute?: string): object {
            return {
                attribute,
                type,
                value,
            };
        },
    },
];

export function parse(modifier: string): object {
    for (const template of templates) {
        if (template.regex.test(modifier)) {
            const args = modifier.match(template.regex);

            return template.parser(...args);
        }
    }

    return {};
}
