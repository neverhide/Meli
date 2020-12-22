import React from 'react';
import Link from 'next/link'

export default function Card (props) {

    return(
        <section className="card-list">
            {props?.items?.results?.map((item) => (
                <Link href={`items/${item.id}`} key={item.id}>
                    <article className="card">
                        <div className="card-img">
                            <img src={item.thumbnail}/>
                        </div>
                        <div className="card-description">
                            <h4 className="card-title">{item.price}</h4>
                            <p className="card-text">{item.title}</p>
                        </div>
                    </article>
                </Link>
            ))}
        </section>
        
    )
}