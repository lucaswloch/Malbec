import Image from 'next/image'


const Preview = (product, onDetail) => {
    const {_id: id, name, description, price, glutenFree, vegan, alergenos} = product

    return <li onClick={onDetail(id, name, description, price, glutenFree, vegan, alergenos)} className="preview" key={id}>
        <Image className="preview__img" src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            <h4 className="preview__name">{name}</h4>
    </li>


}

export default Preview



