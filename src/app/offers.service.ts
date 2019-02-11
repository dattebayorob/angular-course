import { Offer } from './shared/offer.model'

export class OffersService{
    public getOffers(): Array<Offer> {
        return [
            {
                id: 1,
                cattegory: "restaurante",
                title: "Super Burger",
                description: "Rodízio de Mini-hambúrger com opção de entrada.",
                advertiser: "Original Burger",
                value: 29.90,
                spotlight: true,
                images: [
                    {url: "/assets/ofertas/1/img1.jpg"},
                    {url: "/assets/ofertas/1/img2.jpg"},
                    {url: "/assets/ofertas/1/img3.jpg"},
                    {url: "/assets/ofertas/1/img4.jpg"}
                ]
            },
            {
                id: 2,
                cattegory: "restaurante",
                title: "Cozinha Mexicana",
                description: "Almoço ou Jantar com Rodízio Mexicano delicioso.",
                advertiser: "Mexicana",
                value: 32.90,
                spotlight: true,
                images: [
                    {url: "/assets/ofertas/2/img1.jpg"},
                    {url: "/assets/ofertas/2/img2.jpg"},
                    {url: "/assets/ofertas/2/img3.jpg"},
                    {url: "/assets/ofertas/2/img4.jpg"}
                ]
            
            },
            {
                id: 4,
                cattegory: "diversao",
                title: "Estância das águas",
                description: "Diversão garantida com piscinas, trilhas e muito mais.",
                advertiser: "Estância das águas",
                value: 31.90,
                spotlight: true,
                images: [
                    {url: "/assets/ofertas/3/img1.jpg"},
                    {url: "/assets/ofertas/3/img2.jpg"},
                    {url: "/assets/ofertas/3/img3.jpg"},
                    {url: "/assets/ofertas/3/img4.jpg"},
                    {url: "/assets/ofertas/3/img5.jpg"},
                    {url: "/assets/ofertas/3/img6.jpg"}
                ]
            }
        ]
    }
}