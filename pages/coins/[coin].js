import React from 'react'
import Image from 'next/image';
import Link from 'next/link';


export default function coin(props) {

  // Percentages
  const dailyChange = props.crypto.market_data.price_change_percentage_24h;
  const weeklyChange = props.crypto.market_data.price_change_percentage_7d;
  const monthlyChange = props.crypto.market_data.price_change_percentage_30d;
  const yearlyChange = props.crypto.market_data.price_change_percentage_1y;

  // In MC or $

  const dailyMCChange = props.crypto.market_data.market_cap_change_24h;
  const dailyMCPercentage = props.crypto.market_data.market_cap_change_percentage_24h;

  return (
    <section className='w-3/5 mx-auto mt-8 flex justify-between flex-wrap'>
      <div className='flex flex-col p-4 border-2 border-gray-200 rounded-xl w-[60%]'>
        <div className='flex items-center justify-between mb-3'>
          <Image src={props.crypto.image.large} width={64} height={64} alt={`Logo ${props.crypto.name}`}/>
          <h1 className='text-3xl font-bold'>{props.crypto.name}</h1>
          <p className='font-bold'>{props.crypto.symbol.toUpperCase()}</p> 
        </div>
        <div>
          <div className='flex justify-between items-center'>
            <h3><strong> Cours actuel <span className='text-gray-500'>:</span> </strong>{props.crypto.market_data.current_price.usd}$</h3>
            
          </div>
            <p>Market cap : {props.crypto.market_data.market_cap.usd.toLocaleString("fr-FR")} Mds $</p>
            <p>Rang par capitalisation : {props.crypto.market_data.market_cap_rank}</p>
            <p>Volume d'échange : {props.crypto.market_data.total_volume.usd.toLocaleString("fr-FR")} Mds $</p>
        </div>
      </div>   
      <div className='flex border-2 border-gray-200 rounded-xl w-[38%]'>
        <div className='flex flex-col w-11/12 p-2 justify-around mx-auto'>
          <h3 className='font-semibold text-center'>Variations en %</h3>
          <p>24h : <span className={dailyChange < 0 ? 'text-red-700' : dailyChange === 0 ? 'text-gray-700' : 'text-green-600'}>{dailyChange}%</span></p>
          <p>7j : <span className={weeklyChange < 0 ? 'text-red-700' : weeklyChange === 0 ? 'text-gray-700' : 'text-green-600'}>{weeklyChange}%</span></p>
          <p>30j : <span className={monthlyChange < 0 ? 'text-red-700' : monthlyChange === 0 ? 'text-gray-700' : 'text-green-600'}>{monthlyChange}%</span></p>
          <p>1a : <span className={yearlyChange < 0 ? 'text-red-700' : yearlyChange === 0 ? 'text-gray-700' : 'text-green-600'}>{yearlyChange}%</span></p>
        </div>
      </div>
      <div className='flex flex-col p-4 border-2 border-gray-200 rounded-xl w-[32%] my-4'>
        <div className='flex flex-col w-11/12 p-2 justify-around mx-auto'>
            <h3 className='font-semibold text-center'>Variations du MC</h3>
            <p>24h : <span className={dailyMCChange < 0 ? 'text-red-700' : dailyMCChange === 0 ? 'text-gray-700' : 'text-green-600'}>{dailyMCChange.toLocaleString("fr-FR")}</span> Mds$</p>
            <p>24h : <span className={dailyMCPercentage < 0 ? 'text-red-700' : dailyMCPercentage === 0 ? 'text-gray-700' : 'text-green-600'}>{dailyMCPercentage}%</span></p>
        </div>
      </div>
      <div className='flex flex-col p-4 border-2 border-gray-200 rounded-xl w-[32%] my-4'>
        <div className='flex flex-col w-11/12 p-2 justify-around mx-auto'>
            <h3 className='font-semibold text-center'>Variations du MC</h3>
            <p>24h : <span className={dailyMCChange < 0 ? 'text-red-700' : dailyMCChange === 0 ? 'text-gray-700' : 'text-green-600'}>{dailyMCChange.toLocaleString("fr-FR")}</span> Mds$</p>
            <p>24h : <span className={dailyMCPercentage < 0 ? 'text-red-700' : dailyMCPercentage === 0 ? 'text-gray-700' : 'text-green-600'}>{dailyMCPercentage}%</span></p>
        </div>
      </div>
      <div className='flex flex-col p-4 border-2 border-gray-200 rounded-xl w-[32%] my-4'>
        <div className='flex flex-col w-11/12 p-2 justify-around mx-auto'>
            <h3 className='font-semibold text-center'>Variations du MC</h3>
            <p>24h : <span className={dailyMCChange < 0 ? 'text-red-700' : dailyMCChange === 0 ? 'text-gray-700' : 'text-green-600'}>{dailyMCChange.toLocaleString("fr-FR")}</span> Mds$</p>
            <p>24h : <span className={dailyMCPercentage < 0 ? 'text-red-700' : dailyMCPercentage === 0 ? 'text-gray-700' : 'text-green-600'}>{dailyMCPercentage}%</span></p>
        </div>
      </div>
      <div className='flex flex-col p-4 border-2 border-gray-200 rounded-xl w-4/12 '>
          <h3 className='font-semibold text-center'>Socials</h3>
          <p>Website : <Link href={`${props.crypto.links.homepage[0]}`}>Bitcoin</Link></p>
          <p>Subreddit : <Link href={`${props.crypto.links.subreddit_url}`}>Reddit</Link></p>
          <p>{props.crypto.links.homepage[0]}</p>
      </div>
      <div className='flex flex-col p-4 border-2 border-gray-200 rounded-xl w-7/12 '>
                
      </div>
    </section>
  )
}


export async function getStaticProps(context){

  const id = context.params.coin;
  const data = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);

  const crypto = await data.json();
  return {
    props: {
      crypto
    }
  }
}

export async function getStaticPaths() {
  const datas = await fetch('https://api.coingecko.com/api/v3/coins/list');
  const cryptos =  await datas.json();
  const paths = cryptos.map(item => ({
      params: {coin: item.id.toString()}
  }))

  return {
    paths,
    fallback: false
  }
}