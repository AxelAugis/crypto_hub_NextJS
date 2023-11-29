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
      <h1 className='pl-4 pt-2 text-2xl text-white'>Liste des 250 cryptos en terme de capitalisation boursière</h1>
      <section className={utilsStyle.wrapper}>
        {props.results.map(el => (
          <div className={`${utilsStyle.cryptoWrapper} hover:scale-105 hover:transition-all transition-all`}>
            <div className="flex flex-col items-start justify-center h-1/5">
              <div className='flex items-center justify-between w-full'>
                <div className='flex items-center justify-between'>
                  <Image src={el.image} width={36} height={36} className='rounded-xl mr-4'/>
                  <p className='text-white'>{el.name}</p>  
                </div>
                <p className='text-white font-semibold'>{el.symbol.toUpperCase()}</p>
              </div>
            </div>
            <div className='flex flex-col justify-around h-3/5 py-1 px-2 '>
              <p className='font-semibold'>Cours actuel : {el.current_price}$</p>
              <p className='text-sm text-white'><span className='text-sm text-black font-semibold'>MarketCap : </span>{el.market_cap.toLocaleString("fr-FR")} {(el.market_cap.toString().length) > 9 ? 'Mds' : 'Mns'} $</p>
              <p className='text-sm text-white'><span className='text-sm text-black font-semibold'>Position : </span>{el.market_cap_rank}</p>
              <p className='text-sm text-white'><span className='text-sm text-black font-semibold'>ATH : </span>{el.ath} $</p>
            </div>
            <Link href={`/coins/${el.id}`} className='text-sm ml-auto mr-2 hover:text-white hover:underline-offset-1'>Plus d'infos</Link>
          </div>
        ))}
      </section>
    </>

  )
}



export async function getServerSideProps() {
  const datas = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=24&page=1&sparkline=false&locale=en');
  const results = await datas.json();
  console.log(results);

  return {
    props: {
      results,
    },
  };
}
