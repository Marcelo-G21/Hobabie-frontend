import * as React from 'react';
import Head from "next/head";
import { Navbar, SideMenu } from '../ui';
import { UserProvider } from '../../context';


/* 
interface Props {
    children?: React.ReactNode;
    title: string;
    pageDescription: string;
    imageFullUrl?: string;
} */

export const ShopLayout = ({ user, loading = false, children, title, pageDescription }) => {
  return (
    <UserProvider value={{user, loading}}>
        <Head>
            <title>{ title }</title>

            <meta name='description' content={ pageDescription } />

            <meta name='og:titile' content={ title } />
            <meta name='og:description' content={ pageDescription } />
            {/* 
            {
                imageFullUrl && (
                    <meta name='og:image' content={ imageFullUrl } />
                )
            } */}

        </Head>

        <nav>
            <Navbar />
        </nav>

            <SideMenu />

        <main style={{
            margin: '80px auto',
            maxWidth: '1140px',
            padding: '0px 30px'
        }}>
            { children }
        </main>
        
        <footer>
            {/* TODO: my custom footer */}
        </footer>
    </UserProvider>
  )
}
