import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarComponent } from './side-bar.component';

describe('SideBarComponent', () => {
  let component: SideBarComponent;
  let fixture: ComponentFixture<SideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBarComponent ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("test initialization component", () => {
    const sidebar = new SideBarComponent();
    sidebar.ngOnInit();
    expect(sidebar.mainMenu.defaultOptions.length).toBe(4);
    expect(sidebar.mainMenu.accessLink.length).toBe(0);
    expect(sidebar.customOptions.length).toBe(0);
});

it("test array updates", () => {
  const sidebar = new SideBarComponent();
  sidebar.ngOnInit();
  sidebar.mainMenu.defaultOptions.push({
      name: 'Contact',
      icon: 'uil uil-phone',
      router: ['/', 'contact']
  });
  sidebar.mainMenu.accessLink.push({
      name: 'Skills',
      icon: 'uil-heart-medical',
      router: ['/', 'history'],
  });
  sidebar.customOptions.push({
      name: 'º1',
      router: ['/']
  });
  expect(sidebar.mainMenu.defaultOptions.length).toBe(5);
  expect(sidebar.mainMenu.accessLink.length).toBe(1);
  expect(sidebar.customOptions.length).toBe(1);
});


it("test default options set", () => {
  const component = new SideBarComponent();
  component.ngOnInit();
  expect(component.mainMenu.defaultOptions.length).toBe(4);
  expect(component.mainMenu.defaultOptions[0].name).toBe('Home');
  expect(component.mainMenu.defaultOptions[1].icon).toBe('uil uil-search');
  expect(component.mainMenu.defaultOptions[2].router).toEqual(['/', 'projects']);
  expect(component.mainMenu.defaultOptions[3].name).toBe('Skills');
});
});
