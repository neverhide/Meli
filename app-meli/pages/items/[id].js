import Search from '../../components/search/search'
import Detail from '../../components/item-detail/Detail'
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';

export default function Item({item, description, breadcrumb }){
    
    return (
        <div>
            <Search></Search>
            <nav className="breadcrumb">
                <Breadcrumb breadcrumb={breadcrumb}></Breadcrumb>
            </nav>
            <main className="container">
                <Detail item={item} description={description}></Detail>
            </main>
        </div>
    )
}

export async function getServerSideProps({ query }) {
    const resitems = await fetch(`https://api.mercadolibre.com/items/${query.id}`)
    const resDescription = await fetch(`https://api.mercadolibre.com/items/${query.id}/description`)
    

    const item = await resitems.json()
    const description = await resDescription.json()

    const resBreadcrumb = await fetch(`https://api.mercadolibre.com/categories/${item.category_id}`);
    const breadcrumb = await resBreadcrumb.json()
  
    return { props: { item, description, breadcrumb} }
}