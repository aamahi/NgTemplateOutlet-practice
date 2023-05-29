import {ChangeDetectionStrategy, Component, Input, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-app-common-template',
  templateUrl: './app-common-template.component.html',
  styleUrls: ['./app-common-template.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppCommonTemplateComponent {
  @Input() Data: any;
  @Input() refTemplate: TemplateRef<any> = null!;
}
