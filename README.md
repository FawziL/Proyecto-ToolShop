#Aair-t-ToolShop

> Este es un proyecto realizado en el curso de React JS. Es un ecommerce de ventas en el cual podras filtrar los productos con respecto a su categoria y adquirir una orden de compra de los productos que has seleccionado.

## Installation git clone

Para acceder al proyecto clonándolo, deberás ejecutar en consola: 
```sh
git clone  https://github.com/FawziL/rectjs
npm install 
npm start
```

## Installation download ZIP
```sh
Ir a “code” > download ZIP
Descomprimir el archivo
En la carpeta donde se encuentra “package.json” ejecutar en terminal: 
npm install
npm start
```
## Techs

🛠️ React JS

🛠️ JavaScript

🛠️ HTML

🛠️ CSS

## Dependencies

Para que el proyecto se logre realizar de una manera esperada utilicé las siguientes herramientas:

⚡ React-router-dom: routing de la web

⚡ React-Firebase: base de datos

## Firebase / Firestore

- Colección: categories. Cada categoría será según lo siguiente:

|   Campo      | Tipo   |            Valor       |
| -------------| ------------- | ------------- |
| Description  | String | Categoría del producto|

- Colección: Products. Cada product tiene las siguientes características:

|    Campo      |   Tipo        |   Valor       |
| ------------- | ------------- | ------------- |
|   description |   String      |   Descripción |
|   category    |   String      |   Categoría   |
|       img     |   String      |       img     |
|       name    |   String      |      Nombre   |
|       price   |   number      |     Precio    |
|       stock   |   number      |       stock   |

## Análisis de los componentes

El inicio de la web app es la ruta '/' será la página de bienvenida, asi que, aparte del saludo no habrá mucho más adicional al boton de ir  ver los productos y el saludo. En la ruta '/productos' se encontrarán todos los productos de la página sin un filtro, allí mismo podrás ir a las Cards de cada productos con el botón "Ver detalles" que te redireccionará hacia "ItemDetailContainer", donde verás con sus características, como por ejemplo: una imagen, nombre, precio. Desde aquí mismo podrás añadir la cantidad de vinos que quieras a tu carrito gracias al componente "ItemCount". La función de este componente será el colocar el número de productos a ingresar al carrito, (este nunca superará al stock del producto).

Por otro lado tenemos las opciones de categorias ubicado en el NavBar. Al clickear sobre alguna categoría encontrarás el componente "ItemListContainer", el cual, contiene a "ItemList", quien es el encargado de mapear los vinos según la categoría que estos tengan. A su vez también desde aquí a "ItemDetailContainer", "ItemDetail" e "Item".

En el mismo Navbar, encontrarás el componente "CartWidget", el cual, mostrará la cantidad de productos que trae consigo el carrito de compras, agregados por el usuario, además este mismo componente nos rediccionará al hacer click sobre él hacia "Cart", donde veremos cada productos que haya sido agregado. Aquí cada producto será traído gracias al componente "Cart" (también esta la opción de crear un nuevo componente donde creara las cards de los productos en carrito, pero no quise). En este componente se encuentran botones tales como "vaciar carrito", "eliminar productos" y "comprar", donde los primeros dos, serán funciones traidas por el grandioso "CartContext".  Al dar click al boton "comprar", se te redireccionará a "Form" donde deberás completar tus datos, y al llenar todos los datos, tu compra será guardada en nuestros servidores, con el fin de contactarte y de esta manera hacer el intercambio (dinero x productos).

# De esta forma se verá el proyecto

![Alt text](https://github.com/FawziL/rectjs/blob/main/Docs/demostration.gif)

# Funciones "CartContext"

⚡ "addItem" => agrega un producto al carrito. En el caso de que el producto ya esté en el carrito, solo modificará la cantidad de dicho producto.

⚡ "getQuantity" => esta función permite que cuando agregas productos al carrito se muestre la cantidad en el CartWidget.

⚡ "isInCart" => reconoce si el producto está o no en el carrito.

⚡ "clearCart" => esta función está asociada al botón de vaciar carrito y limpiará todo lo que se encuentre en el.

⚡ "removeItem" => esta función removerá el producto con ese id y seteará el nuevo valor del CartWidget.

⚡ "getQuantityProd" => esta función se utiliza en ItemDetail para guardar la cantidad que seleccionás de ese producto en el contador. 

⚡ "totalCost" => esta función calcula el valor total de la compra.
