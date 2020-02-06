let delay = require('./delay');

jest.useFakeTimers();

test('should call the interval', () => {
    console.log(delay);

    let time = 2000;
    let message = 'test-message';

    let resolve = (data) => {
        expect(data).toBe(message);
    };

    delay(time, message).then(resolve);

    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000);
});