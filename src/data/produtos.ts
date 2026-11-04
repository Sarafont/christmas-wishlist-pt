export const categorias = [
  "Maquilhagem",
  "Roupa & Calçado",
  "Acessórios",
  "Livros",
  "Variados",
] as const;

export type Categoria = (typeof categorias)[number];

export type Produto = {
  id: number;
  nome: string;
  categoria: Categoria;
  preço: string;
  notas: string;
  imagem: string;
  link: string;
}

export const products: Produto[] = [
  {
    id: 1,
    nome: "Bronzer Stick Rare Beauty",
    categoria: "Maquilhagem",
    preço: "34,00 €",
    notas: "Na cor Happy Soul",
    imagem: "https://media.sephora.eu/content/dam/gdam/europe/digital/pim/published/R/RARE_BEAUTY/577239/268491-media_swatch.jpg",
    link: "https://www.sephora.pt/p/warm-wishes-effortless-bronzer---bronzeador-577239.html",
  },
  {
    id: 2,
    nome: "Batom Kiko 3d hydra lip stylo",
    categoria: "Maquilhagem",
    preço: "13,99 €",
    notas: "Na cor 03 ou 12",
    imagem: "https://www.kikocosmetics.com/_next/image/?url=https%3A%2F%2Fimages.kikocosmetics.com%2Fcatalog%2FKM000000499003B%2F01-20251103.webp&q=80&w=1200&av=v1",
    link: "https://www.kikocosmetics.com/pt-pt/makeup/lips/lipstick/3d-hydra-lip-stylo-01.html",
  },
  {
    id: 3,
    nome: "Batom Kiko Jelly Stylo",
    categoria: "Maquilhagem",
    preço: "13,99 €",
    notas: "Na cor 507",
    imagem: "https://www.kikocosmetics.com/_next/image/?url=https%3A%2F%2Fassets.joqhl8w6.on-eva.io%2Fblob%2F3bc676dc-833f-9c48-165b-d9de306c239c&q=80&w=1200&av=v1",
    link: "https://www.kikocosmetics.com/pt-pt/p/jelly-stylo-507-46802/",
  },
  {
    id: 4,
    nome: "Sweat Adidas",
    categoria: "Roupa & Calçado",
    preço: "65 €",
    notas: "Cor: Off white tamanho S",
    imagem: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/198a79fa4ba54d1db777decf865d138a_9366/CAMISOLA_COM_CAPUZ_COM_LOGOTIPO_PEQUENO_KIT_ADIDAS_Branco_KV9792_01_laydown.jpg",
    link: "https://www.adidas.pt/camisola-com-capuz-com-logotipo-pequeno-kit-adidas/KV9792.html",
  },
  {
    id: 5,
    nome: "Nude Project - Origins Hoodie Ivory",
    categoria: "Roupa & Calçado",
    preço: "69 €",
    notas: "Cor: Ivory tamanho S",
    imagem: "https://nude-project.com/cdn/shop/files/ORIGINS_HOODIE_MARSHMALLOW_FRONT.webp?v=1790024621&width=550",
    link: "https://nude-project.com/pt-pt/products/sella-fw25-hoodie-marshmallow",
  },
  {
    id: 6,
    nome: "Polo Club - Camisola polo de fecho",
    categoria: "Roupa & Calçado",
    preço: "59,99 €",
    notas: "Cor Azul Marinho, Tamanho M",
    imagem: "https://cdn.shopify.com/s/files/1/0052/6503/1286/files/47432_10.webp?v=1783328599",
    link: "https://www.poloclub.com/pt-pt/products/camisola-rigby-go-zipper-wool-w-io-azul-marinho-47432",
  },
  {
    id: 7,
    nome: "Polo Club - Camisola polo de fecho",
    categoria: "Roupa & Calçado",
    preço: "64,95 € (sem desconto)",
    notas: "Cor Garnet, Tamanho M",
    imagem: "https://cdn.shopify.com/s/files/1/0052/6503/1286/files/47446_10.webp?v=1783332310",
    link: "https://www.poloclub.com/pt-pt/products/camisola-rigby-go-wool-cable-u-w-io-grena-47446",
  },
  {
    id: 8,
    nome: "Perfume EDP YSL Berry Crush",
    categoria: "Variados",
    preço: "49,94 €",
    notas: "50ml",
    imagem: "https://cdnpt2.primor.eu/media/catalog/product/cache/f3020b7489dcfc4d1d147cf4dad07b7f/3/6/3614274521368_1_9ea0.jpg",
    link: "https://pt.primor.eu/pt_pt/yves-saint-laurent-eau-de-parfum-berry-crush-gratis-138992.html?&utm_source=google&utm_medium=cpc&utm_campaign=pt-i-p-p-31-60&utm_term=&utm_content=&utm_id=20544744920&gad_source=1&gad_campaignid=20539160136&gbraid=0AAAAACzh5V8P26rXtqbUy7Vr-NPZvY4xE&gclid=CjwKCAiAzKvXBhBAEiwABLl9AmI8RzEtka39hTfepZmPE7abJXoacdtqWFKcix4t8K-S8TOEkTmBGxoC-scQAvD_BwE#854=66334",
  },
  {
    id: 9,
    nome: "Pincél M242 Bronzer Brush",
    categoria: "Maquilhagem",
    preço: "16,99 €",
    notas: "Também vende na cult beauty!",
    imagem: "https://media.douglas.pt/media/a6/d8/93/1783086972/1222637_0.jpg?ts=1791394371",
    link: "https://www.douglas.pt/p/morphe-m242-bronzer-brush-1222637",
  },
  {
    id: 10,
    nome: "Pincél M204 Blush Brush",
    categoria: "Maquilhagem",
    preço: "14,99 €",
    notas: "Também vende na cult beauty!",
    imagem: "https://media.douglas.pt/media/ae/76/36/1783086482/1222631_0.jpg?ts=1791394371",
    link: "https://www.douglas.pt/p/morphe-m204-blush-brush-1222631"
  },
  {
    id: 11,
    nome: "Saie SuperSuede Radiant Blush Powder",
    categoria: "Maquilhagem",
    preço: "29,90 €",
    notas: "Cor: Ma Donna",
    imagem: "https://www.cultbeauty.com/images?url=https://static.thcdn.com/productimg/original/17765653-5455341185646536.jpg&format=webp&auto=avif&width=1200&height=1200&fit=cover&dpr=2",
    link: "https://www.cultbeauty.com/p/saie-supersuede-radiant-blush-powder-3g-various-shades/15826878/"
  },
  {
    id: 12,
    nome: "Saie Dew Blush Mini Trio",
    categoria: "Maquilhagem",
    preço: "34,50 €",
    notas: "",
    imagem: "https://www.cultbeauty.com/images?url=https://static.thcdn.com/productimg/original/17924276-3765358326976117.jpg&format=webp&auto=avif&width=985&height=985&fit=cover&dpr=2",
    link: "https://www.cultbeauty.com/p/saie-dew-blush-mini-trio/17924276/"
  },
  {
    id: 13,
    nome: "Cecotec - SurfCare 3200 PlasmaWaves Modelador de cabelo de 32 mm",
    categoria: "Variados",
    preço: "29.90 € (sem promoção)",
    notas: "",
    imagem: "https://media.cecotec.cloud/a01_eu01_118901/surfcare-3200-plasmawaves_u2staf_2.png:md",
    link: "https://cecotec.pt/frisadores-de-cabelo/surfcare-3200-plasmawaves?gad_source=1&gad_campaignid=20747763342&gbraid=0AAAAAqecmX-wcXUMauJOrQFHZCa6uAtK6&gclid=CjwKCAiAzKvXBhBAEiwABLl9At5Jy2QJojV5_FqM7Af-fp9L0gGhRPPbs3eiRgY1M86yInlUkTZrhBoCVhkQAvD_BwE",
  },
  {
    id: 14,
    nome: "Comando para o kindle",
    categoria: "Variados",
    preço: "",
    notas: "Nenhum em específico, este é só um exemplo. Existem opções mais acessíveis na amazon",
    imagem: "https://m.media-amazon.com/images/I/51XRSU2GwoL._AC_SL1500_.jpg",
    link: "https://www.amazon.es/dp/B0H431P5WZ/ref=asc_df_B0H431P5WZ?mcid=7033a8afcd2c3c558f616e43ca86b81f&language=pt_PT&tag=ptgogshpadde-21&linkCode=df0&hvadid=718356968128&hvpos=&hvnetw=g&hvrand=14454195236410478648&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9216083&hvtargid=pla-2504816925518&psc=1&hvocijid=14454195236410478648-B0H431P5WZ-&hvexpln=0&language=pt_PT",
  },
  {
    id: 15,
    nome: "Bolsa Cleo JW PEI",
    categoria: "Acessórios",
    preço: "137,95 €",
    notas: "Na cor Claret",
    imagem: "https://www.jwpei.com/cdn/shop/files/1786959152312-yy85etq79pc.jpg?v=1786960765&width=1920",
    link: "https://www.jwpei.com/products/cleo-woven-texture-box-shape-top-handle-bag-claret",
  },
  {
    id: 16,
    nome: "Boné Polo Club",
    categoria: "Acessórios",
    preço: "24,95 €",
    notas: "Na cor chocolate",
    imagem: "https://cdn.shopify.com/s/files/1/0052/6503/1286/files/47125_01.webp?v=1768236417",
    link: "https://www.poloclub.com/pt-pt/products/bone-rigby-go-vo-chocolate-47125",
  },
  {
    id: 17,
    nome: "Agatha Christie - Um crime no expresso oriente",
    categoria: "Livros",
    preço: "13,50 €",
    notas: "",
    imagem: "https://img.wook.pt/images/um-crime-no-expresso-do-oriente-agatha-christie/MXwxODkwOTk1NXwxNDY0MDk1NnwxNzc3MDMwNjk2MDAwfHdlYnB8OA==/550x",
    link: "https://www.wook.pt/livro/um-crime-no-expresso-do-oriente-agatha-christie/18909955",
  },
  {
    id: 18,
    nome: "Agatha Christie - Morte no Nilo",
    categoria: "Livros",
    preço: "13,50 €",
    notas: "",
    imagem: "https://img.wook.pt/images/morte-no-nilo-agatha-christie/MXwyNTg0MjY5OXwyMjEwNjc3MXwxNzc4MjI3MjIwMDAwfHdlYnB8OA==/550x",
    link: "https://www.wook.pt/livro/morte-no-nilo-agatha-christie/25842699",
  },
  {
    id: 19,
    nome: "Agatha Christie - O enigma do sapato",
    categoria: "Livros",
    preço: "13,50 €",
    notas: "",
    imagem: "https://img.wook.pt/images/o-enigma-do-sapato-agatha-christie/MXwxODEzODE1NHwxMzgyMDQ3MHwxNzc3MDI5OTk3MDAwfHdlYnB8OA==/550x",
    link: "https://www.wook.pt/livro/o-enigma-do-sapato-agatha-christie/18138154",
  }, 
  {
    id: 20,
    nome: "Ficará Sempre o Amor - Alice Kellen",
    categoria: "Livros",
    preço: "19,90 € (sem desconto)",
    notas: "",
    imagem: "https://img.wook.pt/images/ficara-sempre-o-amor-alice-kellen/MXwzMjE3OTc1NHwyODYyMjUxNXwxNzc3MDMyODY0MDAwfHdlYnB8NDI=/550x",
    link: "https://www.wook.pt/livro/ficara-sempre-o-amor-alice-kellen/32179754",
  }
];