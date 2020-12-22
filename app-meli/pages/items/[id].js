import Search from '../../components/search/search'
import Detail from '../../components/item-detail/Detail'

export default function Item({item, description }){
    console.log(description)
    return (
        <div>
            <Search></Search>
            <div className="container">
                <Detail item={item} description={description}></Detail>
            </div>
        </div>
    )
}

export async function getServerSideProps({ query }) {
    const resitems = await fetch(`https://api.mercadolibre.com/items/${query.id}`)
    const resDescription = await fetch(`https://api.mercadolibre.com/items/${query.id}/description`)

    const item = await resitems.json()
    const description = await resDescription.json()
  
    return { props: { item, description} }
  }