import { Offer } from './shared/offer.model'
import { reject } from 'q';

export class OffersService{
    public offers: Array<Offer> = [
        {
            id: 1,
            cattegory: "restaurante",
            title: "Super Burger",
            description: "Rodízio de Mini-hambúrger com opção de entrada.",
            advertiser: "Original Burger",
            value: 29.90,
            spotlight: true,
            images: [
                {url: "/assets/offers/1/img1.jpg"},
                {url: "/assets/offers/1/img2.jpg"},
                {url: "/assets/offers/1/img3.jpg"},
                {url: "/assets/offers/1/img4.jpg"}
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
                {url: "/assets/offers/2/img1.jpg"},
                {url: "/assets/offers/2/img2.jpg"},
                {url: "/assets/offers/2/img3.jpg"},
                {url: "/assets/offers/2/img4.jpg"}
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
                {url: "/assets/offers/3/img1.jpg"},
                {url: "/assets/offers/3/img2.jpg"},
                {url: "/assets/offers/3/img3.jpg"},
                {url: "/assets/offers/3/img4.jpg"},
                {url: "/assets/offers/3/img5.jpg"},
                {url: "/assets/offers/3/img6.jpg"}
            ]
        }
    ]

    public getOffers(): Promise<Array<Offer>> {
        return new Promise((resolve,reject) => {
            // just a test
            let works = false;
            if(works){
                setTimeout(() => resolve(this.offers), 3000);
            }else{
                reject({errorCode: 404, errorMessage: 'Deu ruim'});
            }
        }
        )
        
        
    }
}