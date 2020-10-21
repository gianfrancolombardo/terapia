import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-landing-professional',
  templateUrl: './landing-professional.component.html',
  styleUrls: ['./landing-professional.component.css']
})
export class LandingProfessionalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
