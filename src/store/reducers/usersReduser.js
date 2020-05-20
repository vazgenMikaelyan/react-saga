const initState = [
  {
    address: "2851 Mariane LocksFeestborough, MT 97148",
    dob: "1985-11-24",
    email: "stark.vicenta@example.org",
    first_name: "yogini_1",
    gender: "female",
    id: "1396",
    last_name: "aaaaaaa",
    phone: "962-547-6588 x110",
    status: "active",
    website: "http://kilback.org/labore-ullam-necessitatibus-velit-error",
    _links: {
        avatar: {href: "https://lorempixel.com/250/250/people/?26443"},
    }
},
{
        address: "2851 Mariane LocksFeestborough, MT 97148",
        dob: "1985-11-24",
        email: "stark.vicenta@example.org",
        first_name: "yogini_1",
        gender: "female",
        id: "1396",
        last_name: "aaaaaaa",
        phone: "962-547-6588 x110",
        status: "active",
        website: "http://kilback.org/labore-ullam-necessitatibus-velit-error",
        _links: {
            avatar: {href: "https://lorempixel.com/250/250/people/?26443"},
        }
    },
    {
            address: "2851 Mariane LocksFeestborough, MT 97148",
            dob: "1985-11-24",
            email: "stark.vicenta@example.org",
            first_name: "yogini_1",
            gender: "female",
            id: "1396",
            last_name: "aaaaaaa",
            phone: "962-547-6588 x110",
            status: "active",
            website: "http://kilback.org/labore-ullam-necessitatibus-velit-error",
            _links: {
                avatar: {href: "https://lorempixel.com/250/250/people/?26443"},
            }
    }        
  
];

const usersReducer = (state = initState, action) => {

    debugger;
    switch (action.type) {
        case 'GET_USER_LIST':
            return state.concat(action.users);
        default:
            return state;
    }
}

export default usersReducer;