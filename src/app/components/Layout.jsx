import React from 'react';
import Header from "@/app/components/header/header";
import Footer from "@/app/components/footer/footer";
import {Geologica} from "next/font/google";

const geologica = Geologica({subsets: ['latin', 'cyrillic']})

const Layout = ({children, properties, categories}) => {
    return (
        <>
            <head>
                <title>{properties.title}</title>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="description" content={properties.description}/>
            </head>
            <body className={geologica.className}>
            <Header properties={properties} categories={categories}/>
            {children}
            <Footer properties={properties} categories={categories}/>
            </body>
        </>
    );
};

export default Layout;