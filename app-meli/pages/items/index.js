import Head from 'next/head'
import Card from '../../components/card/Card'
import Search from '../../components/search/search';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';

export default function Home({items}) {
  return (
      <div>
          <Search></Search>
          <nav className="breadcrumb">
            <Breadcrumb breadcrumb={items}></Breadcrumb>
          </nav>
          <main className="container">
            <Card items={items}></Card>
          </main>
      </div>
  )
}

export async function getServerSideProps({query}){

    const res = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query.search}`);
    const items = await res.json()
  
    return{
      props:{
        items,
      }
    }
}