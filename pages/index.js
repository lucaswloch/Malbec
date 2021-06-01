import Layout from '../components/layout'
import Image from 'next/image'
import useState from 'react'
import ShowProduct from '../components/ShowProduct'



const Carta = () => {

  // const [detail, setDetail] = useState();

  

  return <Layout>
    <main className="carta">
      <h3 className="carta_title">Nuestros Platos</h3>
      {/* acordeon para elegir la categoria, entre todos , carnes, pescados, pastas, entrantes, etc */}
      {/* lista de item que concuerden con la categoria.. se vera la foto y el nombre del plato 
      y ahi esta la opcion de clickar y que se amplie la imagen y aparesca una descripcion del plato */}

      {/* {detail && <ShowProduct product={detail} onExit={setDetail()} />} */}

      <div className="carta_container">
        {/* {platos && platos.length > 0 && platos.map(product => <Preview product={product} />)} */}
        {/* {platos && platos.length > 0 && platos.map((img, name, width, height, description, price, glutenFree, vegan, alergenos) =>
          <div className="carta_product-preview"
            onClick={() => setDetail({ name, description, price, glutenFree, vegan, alergenos })}>

            <Image src={img} alt={name} width={width} height={height} />
            <h4>{name}</h4>
          </div>)} */}
      </div>

    </main>
  </Layout>
}

export default Carta

{/* {pescados && pescados.length > 0 && pescados.map(product => <EditProduct product={product} />)} */ }


  // < button className = "myProducts__acordion" onClick = { toggleView } name = "pescados" > Pescados</button >
  //   <div className="myProducts__panel">
  //     <ul className="myProducts__ul">
  //       {pescados && pescados.length > 0 && pescados.map(product => <EditProduct product={product} />)}
  //       <button className="myProducts__add" onClick={handleAdd} >Add</button>
  //       {add && <SaveProducts category={add} onExit={() => setAdd()} />}
  //     </ul>
  //   </div>