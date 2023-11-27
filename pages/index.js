import React from 'react'
import utilsStyle from '@/styles/utils.module.css'
import Image from 'next/image';
import Link from 'next/link';

export default function index(props) {

  if(!props.results) {
    return (
      <h1>Chargement</h1>
    )
  }

  return (
    <>
      <h1>Liste des 250 cryptos en terme de capitalisation boursière</h1>
      <section className={utilsStyle.wrapper}>
        {props.results.map(el => (
          <div className={utilsStyle.cryptoWrapper}>
            <div className="flex flex-col items-start justify-center h-1/5">
              <div className='flex items-center justify-between w-full'>
                <div className='flex items-center justify-between'>
                  <Image src={el.image} width={36} height={36} className='rounded-xl mr-4'/>
                  <p>{el.name}</p>  
                </div>
                <p>{el.symbol.toUpperCase()}</p>
              </div>
            </div>
            <div className='flex flex-col justify-around h-3/5 py-1 px-2 '>
              <p className='font-bold'>{el.current_price}$</p>
              <p className='text-sm bg-gray-200'><span className='text-xs text-blue-400'>MarketCap : </span>{el.market_cap.toLocaleString("fr-FR")} Mds $</p>
              <p className='text-sm'><span className='text-xs text-blue-400'>Position : </span>{el.market_cap_rank}</p>
              <p className='text-sm'><span className='text-xs text-blue-400'>ATH : </span>{el.ath} $</p>
            </div>
            <Link href={`/coins/${el.id}`} className='text-sm ml-auto mr-2 hover:text-green-600 hover:underline-offset-1'>Plus d'infos</Link>
          </div>
        ))}
      </section>
    </>

  )
}



export async function getServerSideProps() {
  const datas = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=25&page=1&sparkline=false&locale=en');
  const results = await datas.json();
  console.log(results);

  return {
    props: {
      results,
    },
  };
}
