import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadServiceComponent } from './download-service.component';

describe('DownloadServiceComponent', () => {
  let component: DownloadServiceComponent;
  let fixture: ComponentFixture<DownloadServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DownloadServiceComponent]
    });
    fixture = TestBed.createComponent(DownloadServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
