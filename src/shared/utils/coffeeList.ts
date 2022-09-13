export interface Coffee {
  url: string;
  title: string;
  description: string;
  price: number;
  features: string[];
}

export var coffeeList: Coffee[] = [
  {
    url: 'traditional.svg',
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.90,
    features: ['TRADICIONAL']
  },
  {
    url: 'americano.svg',
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 12.00,
    features: ['TRADICIONAL']
  },
  {
    url: 'cremoso.svg',
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 15.00,
    features: ['TRADICIONAL']
  },
  {
    url: 'gelado.svg',
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 15.90,
    features: ['TRADICIONAL', 'GELADO']
  },
  {
    url: 'leite.svg',
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 20.30,
    features: ['TRADICIONAL', 'COM LEITE']
  },
  {
    url: 'latte.svg',
    title: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 22.00,
    features: ['TRADICIONAL', 'COM LEITE']
  },
  {
    url: 'capuccino.svg',
    title: 'Capuccino',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 18.75,
    features: ['TRADICIONAL', 'COM LEITE']
  },
  {
    url: 'machiatto.svg',
    title: 'Macchiato',
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: 19.00,
    features: ['TRADICIONAL', 'COM LEITE']
  },
  {
    url: 'mocaccino.svg',
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 19.50,
    features: ['TRADICIONAL', 'COM LEITE']
  },
  {
    url: 'chocolate.svg',
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 17.00,
    features: ['ESPECIAL', 'COM LEITE']
  },
  {
    url: 'cubano.svg',
    title: 'Cubano',
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 22.00,
    features: ['ESPECIAL', 'ALCOÓLICO', 'GELADO']
  },
  {
    url: 'havaiano.svg',
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 16.00,
    features: ['ESPECIAL']
  },
  {
    url: 'arabe.svg',
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 15.00,
    features: ['ESPECIAL']
  },
  {
    url: 'irlandes.svg',
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 18.50,
    features: ['ESPECIAL', 'ALCOÓLICO']
  },
]