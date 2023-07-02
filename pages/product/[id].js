import React from "react";
import { useRouter } from "next/router";

const ProductItem = () => {
   // const router = useRouter();
   const {query: {id}} = useRouter(); //Desectruturar el router
    return (
        <div>
            <p>Esta es la pagina de prueba del producto: {id}</p>
        </div>
    );
};

export default ProductItem;
