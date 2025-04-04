import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'

import { CoffeeCard } from '../../components/CoffeeCard'

import { CoffeeList, Heading, Hero, HeroContent, Info } from './styles'
import { useEffect, useState } from 'react';
import { api } from '../../serves/api';

interface Coffee {
  id: string;
  title: string;
  description: string;
  tags: string[];
  price: number;
  image: string;
  quantity: number;
};

export function Home() {
  const theme = useTheme();

  const [coffee, setCoffee] = useState<Coffee | []>([]);

  useEffect(() => {
    const response = api.get('./coffee_bd.json')
    setCoffee(response.data)
  }, []);


  
  function incrementQuantity(id: string) {
    // Aqui você pode fazer a lógica para incrementar a quantidade do café
  }

  function decrementQuantity(id: string) {
    // Aqui você pode fazer a lógica para decrementar a quantidade do café
  }

  return (
    <div>
      <Hero>
        <HeroContent>
          <div>
            <Heading>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>

              <span>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </span>
            </Heading>

            <Info>
              <div>
                <ShoppingCart
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors['yellow-dark'] }}
                />
                <span>Compra simples e segura</span>
              </div>

              <div>
                <Package
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors['base-text'] }}
                />
                <span>Embalagem mantém o café intacto</span>
              </div>

              <div>
                <Timer
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors.yellow }}
                />
                <span>Entrega rápida e rastreada</span>
              </div>

              <div>
                <Coffee
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors.purple }}
                />
                <span>O café chega fresquinho até você</span>
              </div>
            </Info>
          </div>

          <img src="/images/hero.svg" alt="Café do Coffee Delivery" />
        </HeroContent>

        <img src="/images/hero-bg.svg" id="hero-bg" alt="" />
      </Hero>

      <CoffeeList>
        <h2>Nossos cafés</h2>

        <div>
        {[1,2,3].map((coffee) => (
            <CoffeeCard key={coffee} coffee={{
              description: 'Café expresso tradicional com espuma cremosa',
              id: '1',
              image: "/images/coffees/expresso-cremoso.png",
              price: 9.90,
              tags: ['Tradicional', 'Comum'],
              title: 'Expresso Tradicional',
              quantity: 1,
            }}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
            />
          ))}
        </div>
      </CoffeeList>
    </div>
  )
}
