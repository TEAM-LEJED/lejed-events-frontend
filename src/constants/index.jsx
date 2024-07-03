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
    ]
}
export default k;