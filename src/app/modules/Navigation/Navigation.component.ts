import { Component, Inject, Renderer2, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-Navigation',
  templateUrl: './Navigation.component.html',
  styleUrls: ['./Navigation.component.scss']
})
export class NavigationComponent implements OnInit {


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    title = "easyposi";

    get isDarkMode(): boolean {
      return this.currentTheme === 'theme-dark';
    }

    private currentTheme = 'theme-light';

    constructor(
      private breakpointObserver: BreakpointObserver,
      @Inject(DOCUMENT) private document: Document,
      private renderer: Renderer2
    ) {}

    ngOnInit(): void {
      this.currentTheme = localStorage.getItem('activeTheme') || 'theme-light';
      this.renderer.setAttribute(this.document.body, 'class', this.currentTheme);
    }

    switchMode(isDarkMode: boolean) {
      this.currentTheme = isDarkMode ? 'theme-dark' : 'theme-light';
      this.renderer.setAttribute(this.document.body, 'class', this.currentTheme);
      localStorage.setItem('activeTheme', this.currentTheme);
    }

}
