import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


import { VideolistComponent } from './videolist.component';

describe('VideolistComponent', () => {
  let component: VideolistComponent;
  let fixture: ComponentFixture<VideolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideolistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
