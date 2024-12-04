export interface HamperItem {
    key: string;
    title: string;
    ingredients: string[];
    method: string[];
    servingSuggestion: string;
    image: string;
}

const hamperItems: HamperItem[] = [
    {
        key: '1',
        title: 'Cranberry and pumpkin seed crackers',
        ingredients: ['Cranberries', 'Pumpkin seeds', 'Flour', 'Butter', 'Sugar', 'Salt', 'Baking powder', 'Egg'],
        method: ['mix everything together', 'roll out', 'cut into shapes', 'bake'],
        servingSuggestion: 'Serve with vegan boursin cheese',
        image: 'cranberryCrackers',
    },
    {
        key: '2',
        title: 'Vegan boursin cheese',
        ingredients: ['Cashews', 'Garlic', 'Nutritional yeast', 'Lemon juice', 'Salt', 'Pepper'],
        method: ['blend everything together', 'refrigerate'],
        servingSuggestion: 'Serve with crackers, or some soughdough bread',
        image: 'boursin',
    },
    {
        key: '3',
        title: 'Gingernut biscuits',
        ingredients: ['Flour', 'Bicarbonate of soda', 'Ground ginger', 'Butter', 'Sugar', 'Golden syrup'],
        method: ['mix everything together', 'roll into balls', 'bake'],
        servingSuggestion: 'Serve with a cup of tea',
        image: 'biscuits',
    }, 
    {
        key: '4',
        title: 'Branston Pickle',
        ingredients: ['Carrots', 'Swede', 'Onions', 'Apples', 'Dates', 'Prunes', 'Tomatoes', 'Vinegar', 'Sugar', 'Salt', 'Spices'],
        method: ['chop everything', 'boil together', 'jar'],
        servingSuggestion: 'Serve with a ploughman\'s sarnie',
        image: 'pickle',
    },
    {
        key: '5',
        title: 'Rhubarb Chilli Jam',
        ingredients: ['Rhubarb', 'Sugar', 'Lemon juice', 'Chilli'],
        method: ['cook everything together', 'jar'],
        servingSuggestion: 'Pairs well with a cheese board',
        image: 'chiliJam',
    },
    {
        key: '6',
        title: 'Lemon and thyme blueberry jam',
        ingredients: ['Blueberries', 'Sugar', 'Lemon juice', 'Thyme'],
        method: ['cook everything together', 'jar'],
        servingSuggestion: 'Serve with scones and cream',
        image: 'jam',
    },
    {
        key: '7',
        title: 'Black charcoal and sesame crackers',
        ingredients: ['Flour', 'Butter', 'Black sesame seeds', 'Salt', 'Baking powder', 'Egg'],
        method: ['mix everything together', 'roll out', 'cut into shapes', 'bake'],
        servingSuggestion: 'Serve with vegan boursin cheese',
        image: 'charcoalCrackers',
    }
]

export default hamperItems;