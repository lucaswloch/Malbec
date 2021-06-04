
import Image from 'next/image'
import { useState } from 'react'
import { ShowProduct, Layout, Preview } from '../components'



const Carta = () => {

  const [detail, setDetail] = useState();



  return <Layout>
    <main className="carta">
      <h3 className="carta_title">Nuestros Platos</h3>
      {/* acordeon para elegir la categoria, entre todos , carnes, pescados, pastas, entrantes, etc */}
      {/* lista de item que concuerden con la categoria.. se vera la foto y el nombre del plato 
      y ahi esta la opcion de clickar y que se amplie la imagen y aparesca una descripcion del plato */}

      {detail && <ShowProduct product={detail} onExit={setDetail()} />}

      {/* {platos && platos.length > 0 && <div className="carta_container">
        <ul>
          {platos.map(product => <Preview product={product} onDetail={setDetail}/>)}
        </ul>
      </div>} */}
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />



    </main>
  </Layout>
}

export default Carta

// {platos.map(({ _id: id, name, description, price, glutenFree, vegan, alergenos }) =>
//           <li onClick={() => setDetail({ id, name, description, price, glutenFree, vegan, alergenos })} className="carta__li" key={id}>
//             <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
//             <h4 className="carta__name">{name}</h4>
//           </li>)}

{/* <span className={styles.logo}>
  <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
</span> */}

{/* {pescados && pescados.length > 0 && pescados.map(product => <EditProduct product={product} />)} */ }


  // < button className = "myProducts__acordion" onClick = { toggleView } name = "pescados" > Pescados</button >
  //   <div className="myProducts__panel">
  //     <ul className="myProducts__ul">
  //       {pescados && pescados.length > 0 && pescados.map(product => <EditProduct product={product} />)}
  //       <button className="myProducts__add" onClick={handleAdd} >Add</button>
  //       {add && <SaveProducts category={add} onExit={() => setAdd()} />}
  //     </ul>
  //   </div>