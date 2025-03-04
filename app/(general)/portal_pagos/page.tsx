import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Coloca metadatas escribiendo mr',
    description: 'Descripción de la metadata! Por culpa de esto debo aprender Next :D',
    keywords: ['Antonio De Santis', 'Precios', 'Pricing', 'Arrechísimo...']
};
export default function PricingPage() {
    
    return (
        <>
            <span className="text-5xl">Pricing Page</span>
        </>
    )
}