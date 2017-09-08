import { Item } from './item.model';

export const CATS: Item[] = [{
    'id': 1,
    'name': 'Angora',
    'description': 'Los angora son una de las razas más antiguas, originaria de la región de Ankara, en Turquía centra.',
    'stock': 5,
    'price': 12.50,
    'image': '../assets/image1.jpg',
    'selected': false,
    'quantity' : 0
  }, {
    'id': 2,
    'name': 'Otto',
    'description': 'Los Ottos son una de las razas más antiguas, originaria de la región de Ankara, en Turquía centra.',
    'stock': 8,
    'price': 10.50,
    'image': '../assets/image2.jpg',
    'selected': false,
    'quantity': 0
  }, {
    'id': 3,
    'name': 'Egipcio',
    'description': 'Los Egipcios son una de las razas más antiguas, originaria de la región de Ankara, en Turquía centra.',
    'stock': 0,
    'price': 15.50,
    'image': '../assets/image3.jpg',
    'selected': true,
    'quantity': 0
  }];
