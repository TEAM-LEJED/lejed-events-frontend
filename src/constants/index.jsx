import { eventsImg } from "../assets";

const k = {
    NAVLINKS:[
        {
            name:"Home",
            path: "/",
        },
        {
            name:"CreateEvents",
            path: "/createEvents",  
        },
        {
            name:"EventDetails",
            path: "/eventDetails",
        },
       

    ],

    CATEGORIES:[
        {
            label: 'Formal Events',
            subcategories: [
              { label: 'Charity Ball', value: 'charity-ball' },
              { label: 'Gala Dinners', value: 'gala-dinners' },
              { label: 'Award Ceremonies', value: 'award-ceremonies' },
              { label: 'Corporate Conferences', value: 'corporate-conferences' },
              { label: 'Banquets', value: 'banquets' },
            ]
          },
          {
            label: 'Informal Events',
            subcategories: [
              { label: 'Weddings', value: 'weddings' },
              { label: 'Birthday Parties', value: 'birthday-parties' },
              { label: 'Festivals', value: 'festivals' },
              { label: 'Fundraising Events', value: 'fundraising-events' },
              { label: 'Themed Parties', value: 'themed-parties' },
            ]
        }
    ],
    EVENTS: [
        {
            id: 1,
            img: eventsImg, 
            eventName: "Award Ceremony ", 
            location: "Accra",
            date: "4th Dec,2024",
            price: "ghs 4"
        },
        {
            id: 2,
            img: eventsImg, 
            eventName: "Bazile - The RoyalS Wedding", 
            location: "Accra",
            date: "28th July,2024",
            price: "free"
        },
        {
            id: 2,
            img: eventsImg, 
            eventName: " Aboakyire ", 
            location: "Kumasi",
            date: "4th February",
            price: "ghs4"
        },
        {
            id: 2,
            img: eventsImg, 
            eventName: "Come One Come All", 
            location: "Cape Coast",
            date: "7th October,2024",
            price: "ghs405"
        },
        {
            id: 3,
            img: eventsImg, 
            eventName: "The Birthday", 
            location: "Honey Suckle Accra",
            date: "4 February",
            price: "4"
        },

    ],
    


}
export default k;