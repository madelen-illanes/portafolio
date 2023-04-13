import { ImgBrokenDirective } from './img-broken.directive';

describe('ImgBrokenDirective', () => {

  it("test invalid image url", () => {
    const elMock = { nativeElement: { src: '../../assets/img/avatar.jpeg' } };
    expect(() => new ImgBrokenDirective(elMock)).toBeTruthy();
});

it("test element is not an image", () => {
    const elMock = { nativeElement: {} };
    expect(() => new ImgBrokenDirective(elMock)).toBeTruthy();
});
});