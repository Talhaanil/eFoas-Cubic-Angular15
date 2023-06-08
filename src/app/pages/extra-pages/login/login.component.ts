import { Component, OnInit } from '@angular/core';
import { trigger, state, style, AUTO_STYLE, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  animations: [
    trigger('cardToggle', [
      state('collapsed, void',
        style({
          overflow: 'hidden',
          height: '0px',
        })
      ),
      state('expanded',
        style({
          height: AUTO_STYLE,
        })
      ),
      transition('collapsed <=> expanded', [
        animate('500ms ease-in-out')
      ])
    ]),
    trigger('cardToggleInverse', [
      state('collapsed, void',
        style({
          overflow: 'hidden',
          height: '0px',
        })
      ),
      state('expanded',
        style({
          height: AUTO_STYLE,
        })
      ),
      transition('collapsed <=> expanded', [
        animate('50ms ease-in-out')
      ])
    ])
  ]
})
export class LoginComponent implements OnInit {
  public menuType: string='';
  public headerType: string='';
  public sidebarType: string='';
  public themeType: string;
  public toggledArrow: string;
  public windowHeight: number;
  public windowWidth: number;
  public settingToggle: string;
  public cardToggle = 'collapsed';

  constructor() {
    this.themeType = 'default';
    this.toggledArrow = 'icon-arrow-left-circle';
    this.settingToggle = 'off';
    this.windowHeight = window.innerHeight - 60;
    this.windowWidth = window.innerWidth;
    if (this.windowWidth < 1170) {
      this.menuType = 'mini-sidebar';
    }
    if (this.windowWidth < 768) {
      this.toggledArrow = 'fa fa-bars';
    }
  }

  ngOnInit() {
  }

  onResize(event:any) {
    this.windowHeight = event.target.innerHeight - 60;
    this.windowWidth = window.innerWidth;
    if (this.windowWidth < 1170) {
      this.menuType = 'mini-sidebar';
    } else {
      this.menuType = '';
    }

    if (this.windowWidth < 768) {
      this.toggledArrow = this.menuType === 'mini-sidebar show-sidebar' ? 'fa fa-close' : 'fa fa-bars';
    } else {
      this.toggledArrow = this.menuType === 'mini-sidebar' ? 'fa fa-bars' : 'icon-arrow-left-circle';
    }
  }

  toggleCard() {
    this.cardToggle = this.cardToggle === 'collapsed' ? 'expanded' : 'collapsed';
  }

}
