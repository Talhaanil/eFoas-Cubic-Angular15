import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

import { AccordionLinkDirective } from './accordionlink.directive';



@Directive({
  selector: '[appAccordion]',
})
export class AccordionDirective implements OnInit {

  protected navlinks: Array<AccordionLinkDirective> = [];
  private _router!: Subscription;
  closeOtherLinks(openLink: AccordionLinkDirective): void {
    this.navlinks.forEach((link: AccordionLinkDirective) => {
      if (link !== openLink && (link.group === 'sub-toggled' || openLink.group !== 'sub-toggled')) {
        link.open = false;
      }
    });
  }

  addLink(link: AccordionLinkDirective): void {
    this.navlinks.push(link);
  }

  removeGroup(link: AccordionLinkDirective): void {
    const index = this.navlinks.indexOf(link);
    if (index !== -1) {
      this.navlinks.splice(index, 1);
    }
  }

  getUrl() {
    return this.router.url;
  }

  ngOnInit(): any {
    // this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
    //   this.navlinks.forEach((link: AccordionLinkDirective) => {
    //     if (link.group) {
    //       const routeUrl = this.getUrl();
    //       const currentUrl = routeUrl.split('/');
    //       if (currentUrl.indexOf( link.group ) > 0) {
    //         link.open = true;
    //         this.closeOtherLinks(link);
    //       }
    //     }
    //   });
    // });
  }

  constructor( private router: Router, public renderer: Renderer2, public hostElement: ElementRef) {}
}
