import { parse } from "../index";

const modifiers = {
    "+40 to Strength": {
        attribute: "STR",
        type: "ADD",
        value: 40,
    },
    "18% increased Evasion Rating": {
        attribute: "EV",
        type: "INC",
        value: 18,
    },
};

describe(".parse", () => {
    for (const modifier in modifiers) {
        if (modifiers.hasOwnProperty(modifier)) {
            it(`returns the correct object for the string ${modifier}`, () => {
                expect(parse(modifier)).toEqual(modifiers[modifier]);
            });
        }
    }
});
