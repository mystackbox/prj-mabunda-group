import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemesService {
  constructor() {}

  private _isDark = false;

  toggleTheme(): void {
    this._isDark = !this._isDark;
    const themeClass = this._isDark ? 'dark-theme' : '';
    document.body.className = themeClass;
    localStorage.setItem('theme', this._isDark ? 'dark' : 'light');
  }

  isDarkMode(): boolean {
    return this._isDark;
  }

  initTheme(): void {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this._isDark = true;
      document.body.className = 'dark-theme';
    }
  }
}
