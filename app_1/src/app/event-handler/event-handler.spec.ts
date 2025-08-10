import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventHandler } from './event-handler';

describe('EventHandler', () => {
  let component: EventHandler;
  let fixture: ComponentFixture<EventHandler>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventHandler]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventHandler);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
