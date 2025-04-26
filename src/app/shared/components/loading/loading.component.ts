import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent {
  @Input() isLoading: boolean = false;
  @Input() message: string = 'Loading...';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() type: 'spinner' | 'dots' | 'bar' = 'spinner';

  @HostBinding('class') get hostClasses(): string {
    return `loading-${this.size} loading-${this.type}`;
  }
}
