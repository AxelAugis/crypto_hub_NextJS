import React from 'react'
import { useRouter } from 'next/router'


export default function coin(props) {

  const router = useRouter();
  const coin = router.query.coin;

  return (
    <div>
        <h1>{coin}</h1>
    </div>
  )
}


export async function getStaticProps(){

  const slug = context.params.coin;
  const data = await fetch(`https://api.coingecko.com/api/v3/coins/${slug}`);
  console.log(data);
  // const currentCoin = data.find(item => item.id === slug);
  // console.log(currentCoin);
  return {
    props: {
      results 
    }
  }
}

export async function getStaticPaths() {
  const datas = await fetch('https://api.coingecko.com/api/v3/coins/list');
  const results = await datas.json();
  console.log(results);
  const paths = results.map(item => ({
    params: { coin: item.id }
  }))

  return {
    paths,
    fallback: false
  }
}