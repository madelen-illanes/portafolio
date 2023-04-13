import { OrderListPipe } from './order-list.pipe';

describe('OrderListPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderListPipe();
    expect(pipe).toBeTruthy();
  });

  it('returning original array', () => {
    const pipe = new OrderListPipe();
    const input = [
      {
        name: 'Track 1',
        album: 'Album 1',
        cover: 'cover1.jpg',
        url: 'url1',
        _id: 1,
      },
    ];
    const output = pipe.transform(input, 'nonexistent_property');
    expect(output).toEqual(input);
  });


});
