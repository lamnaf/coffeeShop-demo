import affogatoImg from '../assets/images/affogato.jpg'
import croissantImg from '../assets/images/croissant.jpg'
import bananaBreadImg from '../assets/images/banana-bread.jpg'
import springRollsImg from '../assets/images/spring-rolls.jpg'
import matchaLatteImg from '../assets/images/matcha-latte.jpg'
import tiramisuImg from '../assets/images/tiramisu.jpg'
import truffleFriesImg from '../assets/images/truffle-fries.jpg'
import sandwichClubImg from '../assets/images/sandwich-club.jpg'
import nachosSupremeImg from '../assets/images/nachos-supreme.jpg'
import chaiTeaLatteImg from '../assets/images/chai-tea-latte.jpg'
import refreshingLemonadeImg from '../assets/images/refreshing-lemonade.jpg'
import chocolateFrappeImg from '../assets/images/chocolate-frappe.jpg'
import cappuccinoImg from '../assets/images/cappuccino.jpg'
import flatWhiteImg from '../assets/images/flat-white.jpg'
import coldBrewNitroImg from '../assets/images/cold-brew-nitro.jpg'
import caramelMacchiatoImg from '../assets/images/caramel-macchiato.jpg'
import signatureEspressoImg from '../assets/images/signature-espresso.jpg'
import cheesecakeImg from '../assets/images/cheesecake.jpg'

export const menuCategories = [
  {
    id: 'coffee',
    name: 'Coffee',
    items: [
      {
        id: 1,
        name: 'Signature Espresso',
        description: 'Rich double shot espresso with velvety crema, sourced from single-origin beans.',
        price: 'IDR 35K',
        image: signatureEspressoImg,
      },
      {
        id: 2,
        name: 'Caramel Macchiato',
        description: 'Layered espresso with steamed milk, vanilla syrup, and housemade caramel.',
        price: 'IDR 48K',
        image: caramelMacchiatoImg,
      },
      {
        id: 3,
        name: 'Cold Brew Nitro',
        description: 'Slow-steeped 20-hour cold brew infused with nitrogen for a creamy finish.',
        price: 'IDR 42K',
        image: coldBrewNitroImg,
      },
      {
        id: 4,
        name: 'Cappuccino',
        description: 'Classic Italian cappuccino with perfectly frothed milk and cocoa dusting.',
        price: 'IDR 38K',
        image: cappuccinoImg,
      },
      {
        id: 5,
        name: 'Flat White',
        description: 'Smooth ristretto-based coffee with micro-foamed milk for a silky texture.',
        price: 'IDR 40K',
        image: flatWhiteImg,
      },
      {
        id: 6,
        name: 'Affogato',
        description: 'Vanilla gelato drowned with a hot shot of our signature espresso.',
        price: 'IDR 45K',
        image: affogatoImg,
      },
    ],
  },
  {
    id: 'non-coffee',
    name: 'Non Coffee',
    items: [
      {
        id: 7,
        name: 'Matcha Latte',
        description: 'Ceremonial-grade matcha whisked with steamed oat milk and honey.',
        price: 'IDR 45K',
        image: matchaLatteImg,
      },
      {
        id: 8,
        name: 'Chai Tea Latte',
        description: 'House-spiced chai concentrate with cinnamon, cardamom, and steamed milk.',
        price: 'IDR 42K',
        image: chaiTeaLatteImg,
      },
      {
        id: 9,
        name: 'Refreshing Lemonade',
        description: 'Freshly squeezed lemonade with a hint of mint and sparkling water.',
        price: 'IDR 35K',
        image: refreshingLemonadeImg,
      },
      {
        id: 10,
        name: 'Chocolate Frappe',
        description: 'Blended iced chocolate with whipped cream and chocolate shavings.',
        price: 'IDR 48K',
        image: chocolateFrappeImg,
      },
    ],
  },
  {
    id: 'dessert',
    name: 'Dessert',
    items: [
      {
        id: 11,
        name: 'Tiramisu',
        description: 'Classic Italian tiramisu layered with mascarpone and espresso-soaked ladyfingers.',
        price: 'IDR 52K',
        image: tiramisuImg,
      },
      {
        id: 12,
        name: 'Croissant',
        description: 'Flaky buttery croissant baked fresh every morning, golden and airy.',
        price: 'IDR 28K',
        image: croissantImg,
      },
      {
        id: 13,
        name: 'Cheesecake',
        description: 'Creamy New York-style cheesecake with berry compote drizzle.',
        price: 'IDR 48K',
        image: cheesecakeImg,
      },
      {
        id: 14,
        name: 'Banana Bread',
        description: 'Moist banana bread with walnuts, served warm with butter.',
        price: 'IDR 32K',
        image: bananaBreadImg,
      },
    ],
  },
  {
    id: 'snack',
    name: 'Snack',
    items: [
      {
        id: 15,
        name: 'Truffle Fries',
        description: 'Crispy golden fries tossed in truffle oil with parmesan and herbs.',
        price: 'IDR 38K',
        image: truffleFriesImg,
      },
      {
        id: 16,
        name: 'Sandwich Club',
        description: 'Triple-layer sandwich with roasted chicken, avocado, and fresh greens.',
        price: 'IDR 45K',
        image: sandwichClubImg,
      },
      {
        id: 17,
        name: 'Nachos Supreme',
        description: 'Crispy tortilla chips loaded with cheese, salsa, sour cream, and jalapeños.',
        price: 'IDR 42K',
        image: nachosSupremeImg,
      },
      {
        id: 18,
        name: 'Spring Rolls',
        description: 'Crispy vegetable spring rolls served with sweet chili dipping sauce.',
        price: 'IDR 32K',
        image: springRollsImg,
      },
    ],
  },
]
