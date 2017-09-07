import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CatShop';

  myCats = [{
    'id': 1,
    'name': 'Angora',
    'description': 'Los angora son una de las razas más antiguas, originaria de la región de Ankara, en Turquía centra.',
    'stock': 5
  }, {
    'id': 2,
    'name': 'Otto',
    'description': 'Los Ottos son una de las razas más antiguas, originaria de la región de Ankara, en Turquía centra.',
    'stock': 8
  }, {
    'id': 3,
    'name': 'Egipcio',
    'description': 'Los Egipcios son una de las razas más antiguas, originaria de la región de Ankara, en Turquía centra.',
    'stock': 0
  }];
}
