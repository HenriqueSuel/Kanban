import { log } from "./log.utils";

describe('log function', () => {
    it('should log card information to the console', () => {
        const id = '123';
        const title = 'Test Card';
        const type = 'Type A';
        const mock = jest.fn();
        console.info = mock;

        log({ id, title, type });

        expect(mock).toHaveBeenCalledWith(expect.stringContaining(id));
        expect(mock).toHaveBeenCalledWith(expect.stringContaining(title));
        expect(mock).toHaveBeenCalledWith(expect.stringContaining(type));
    });
});
