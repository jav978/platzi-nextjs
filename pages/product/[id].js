import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";


const ProductItem = () => {
    // const router = useRouter();
    const [avo, setAvo] = useState<TProduct>([]);
   const {query: {id}} = useRouter(); //Desectruturar el router

   useEffect(()=>{
    (id) &&
    window.
		fetch(`api/avo/${id}`)
		.then(response =>response.json())
		.then(({data,length})=>setAvo(data))
        .catch(error=> console.error(error.message))

   }
   ,[id])



    return (
        <section>
            <p>Esta es la pagina de prueba del producto: {id}</p>
            <h3>{avo.name}</h3>
            <p>{avo.attributes.description}</p>
        </section>
    );
};

export default ProductItem;
