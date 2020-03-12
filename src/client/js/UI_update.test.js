import { getInfoUI } from './UI_update'

describe("check for getInfoUI()", () => {
    test("I should return true", async() => {
            expect(getInfoUI).toBeDefined();
        }),
        test("I should be a function", async() => {
            expect(typeof getInfoUI).toBe("function");
        })
})