// Importar los metodos de api.js
import { getAlmacenropa, getProductByID, updateRopa, deleteRopa } from "./api";

// Traer todos los productos y mostrarlos en la pagina principal
document.addEventListener("DOMContentLoaded", async () => {
    const productList = document.getElementById ("product-list");

    const products = await getAlmacenropa();
    productList.innerHTML = products.map(product => `
         <div class="col-xs-12 col-sm-6 col-md-3 card">
            <div class="card-body d-flex flex-column justify-content-end">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.price}</p>
                <a onclick="viewProduct(${product.id})" class=btn btn-primary">Ver mas<a/>
            </div>
        </div>
        `).json("");

});