import { useState } from 'react'
import Link from 'next/link'

export default function Search(){
    const [results, setResults] = useState()

    const handleChange = (e) => {
        setResults(e?.target?.value);
    }

    return (
        <header className="container">
            <div className="logo">
                <img src="/Logo_ML.png" alt="mercadolibre"/>
            </div>
            <div className="search">
                <input className="search-box" type="search" value={results} onChange={handleChange}/>
                <div className="search-icon">
                    <Link href={`items?search=${results}`}><img src="/ic_Search.png"/></Link>
                </div>
            </div>
        </header>
        
    )
}