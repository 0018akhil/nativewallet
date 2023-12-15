import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-accesswallet',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './accesswallet.component.html',
  styleUrl: './accesswallet.component.css'
})
export class AccesswalletComponent {

}
