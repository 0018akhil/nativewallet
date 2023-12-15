import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-createwallet',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './createwallet.component.html',
  styleUrl: './createwallet.component.css'
})
export class CreatewalletComponent {

}
