import Head from 'next/head'

    
const Layout = (props) => {

return <>
        <Head>
            <title>Malbec</title>
            <link rel="icon"
                type="image/png"
                href="/icon.png" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        {props.children}
    </>
}

export default Layout