import { Component } from '@angular/core';
import { ThemesService } from '../../shared/services/app-themes/themes.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
  standalone: false,
})
export class NavBarComponent {
  constructor(private _themeService: ThemesService) {}

  ngOnInit(): void {
    this._themeService.initTheme();
  }

  toggleTheme(): void {
    this._themeService.toggleTheme();
  }
}
