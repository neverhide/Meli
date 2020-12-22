import React from 'react';

export default function Detail (props){
    console.log(props)
        return(
            <section className="container">
                <article className="detail">
                    <div className="detail-picture">
                        <img src={props.item.pictures && props.item.pictures.length > 0 ? props.item.pictures[0].url: ''} alt={props.item.title}/>
                    </div>
                    <div className="detail-price">
                        <p className="subtitle">{props.item.sold_quantity} vendidos</p>
                        <h4 className="title">{props.item.title}</h4>
                        <h1 className="price">$ {props.item.price}</h1>
                        <button className="btn btn-primary">Comprar</button>
                    </div>
                    <div className="detail-description">
                        <h4>Descripción del producto</h4>
                        <p dangerouslySetInnerHTML={{__html: props.description.plain_text}}></p>
                    </div>
                </article>
            </section>
        )
}