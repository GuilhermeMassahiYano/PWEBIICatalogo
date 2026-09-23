import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-item',
  standalone: false,
  templateUrl: './card-item.html',
  styleUrl: './card-item.css',
  host: {
    class: 'col-md-4 mb-4'
  }
})
export class CardItem {
  @Input() nome: string = '';
  @Input() descricao: string = '';
  @Input() preco: number = 0;
  @Input() imagem: string = '';
  @Input() badge: string = '';
}