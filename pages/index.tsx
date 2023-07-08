import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'

const HomePAge = () => {
	
	const [productList, setProduct] = useState<TProduct[]>([])
	useEffect(()=>{
		window.
		fetch('api/avo').
		then(response =>response.json()).
		then(({data,length})=>{
			setProduct(data)
			

		})
	},[])
	
  return (
	<div>
		<Navbar />
		<h1>Platzi and Next.js</h1>
		{productList.map((product)=>(
			<div>{product.image}</div>	
		))}
	</div>
  )
}

export default HomePAge