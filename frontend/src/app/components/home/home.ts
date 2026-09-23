import { Component } from '@angular/core';

interface Roupa {
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
  badge?: string;
}

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  nomeVitrine = 'Style';

  produtos: Roupa[] = [
    { nome: 'Jaqueta', descricao: 'Jaqueta estilo casual', preco: 199.90, imagem: 'img/roupas/jaqueta.png' },
    { nome: 'Terno', descricao: 'Terno social elegante, ideal para ocasiões especiais', preco: 369.90, imagem: 'img/roupas/terno.png' },
    { nome: 'Tênis Casual', descricao: 'Tênis branco confortável para o dia a dia', preco: 259.90, imagem: 'img/roupas/teniscasual.webp' },
  ];
}