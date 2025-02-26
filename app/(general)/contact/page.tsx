import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Contact',
 description: 'Contact',
 keywords: ['El precio', '2', 'ta caro!!', 'bueno, 3', 'comprar', 'tenes que decirlo con asteriscos', '']
};

export default function ContactPage () {
    return (
        <>
            <span className="text-5xl">Contact page</span>
        </>
    )
}