export const settings = {
  columnCreatorText: 'Add new column',
  cardCreatorText: 'Add new card',
  creator: {
    buttonOK: 'OK',
    buttonCancel: 'Cancel',
    defaultText: 'Add new item',
  },
  header: {
    icon: 'adjust',
  },
  link: {
    home: '/',
    info: '/info',
    faq: '/faq',
  },
  nav: {
    homePage: 'Home',
    infoPage: 'Info',
    faqPage: 'FAQ',
  },
  search: {
    defaultText: 'Search...',
    icon: 'search',
  },
  defaultListDescription: '<p>I can do all the things!!!</p>',
  defaultColumnIcon: 'list-alt',
};

export const faq = {
  title: 'Welcome to the FAQ!',
  description: 'It is a third page you can fill with anything you want',
  image: 'https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?cs=srgb&dl=ask-blackboard-chalk-board-chalkboard-356079.jpg&fm=jpg',
  titleText: 'Frequently asked questions',
};

export const info = {
  title: 'There is come info to check out',
  description: 'The to-do app contains all the task you need to complete',
  image: 'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?cs=srgb&dl=agenda-blank-checklist-3299.jpg&fm=jpg',
  imageText: 'Wrtite them down',
};

export const pageContents = {
  title: 'My first React app',
  subtitle: 'A simple to-do app, with lists, columns and cards',
};

export const listData = {
  title: 'Things to do <sup>soon!</sup>',
  description: 'Interesting things I want to check out!',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  columns: [
    {
      key: 0,
      title: 'Books',
      icon: 'book',
      cards: [
        {
          key: 0,
          title: 'This Is Going to Hurt',
        },
        {
          key: 1,
          title: 'Interpreter of Maladies',
        },
      ],
    },
    {
      key: 1,
      title: 'Movies',
      icon: 'film',
      cards: [
        {
          key: 0,
          title: 'Harry Potter',
        },
        {
          key: 1,
          title: 'Star Wars',
        },
      ],
    },
    {
      key: 2,
      title: 'Games',
      icon: 'gamepad',
      cards: [
        {
          key: 0,
          title: 'The Witcher',
        },
        {
          key: 1,
          title: 'Skyrim',
        },
      ],
    },
  ],
};

const lists = [
  {
    id: 'list-1',
    title: 'Things to do <sup>soon!</sup>',
    description: 'Interesting things I want to check out!',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
  {
    id: 'list-2',
    title: 'Rampampampam',
    description: 'Do not you worry about it',
    image: 'https://images.pexels.com/photos/2559484/pexels-photo-2559484.jpeg?cs=srgb&dl=white-cumulus-clouds-2559484.jpg&fm=jpg',
  },
  {
    id: 'list-3',
    title: 'Szibiduba',
    description: 'Check this out, only if you want',
    image: 'https://images.pexels.com/photos/3178786/pexels-photo-3178786.jpeg?cs=srgb&dl=close-up-photo-of-green-leaves-3178786.jpg&fm=jpg',
  },
];

const columns = [
  {
    id: 'column-1',
    listId: 'list-1',
    title: 'Books',
    icon: 'book',
  },
  {
    id: 'column-2',
    listId: 'list-1',
    title: 'Movies',
    icon: 'film',
  },
  {
    id: 'column-3',
    listId: 'list-1',
    title: 'Games',
    icon: 'gamepad',
  },
  {
    id: 'column-4',
    listId: 'list-2',
    title: 'Strange column',
    icon: 'question',
  },
];

const cards = [
  {
    id: 'card-1',
    index: 0,
    columnId: 'column-1',
    title: 'This Is Going to Hurt',
  },
  {
    id: 'card-2',
    index: 1,
    columnId: 'column-1',
    title: 'Interpreter of Maladies',
  },
  {
    id: 'card-3',
    index: 0,
    columnId: 'column-2',
    title: 'Harry Potter',
  },
  {
    id: 'card-4',
    index: 1,
    columnId: 'column-2',
    title: 'Star Wars',
  },
  {
    id: 'card-5',
    index: 0,
    columnId: 'column-3',
    title: 'The Witcher',
  },
  {
    id: 'card-6',
    index: 1,
    columnId: 'column-3',
    title: 'Skyrim',
  },
];

const initialStoreData = {
  app: {...pageContents},
  lists: [...lists],
  columns: [...columns],
  cards: [...cards],
  info: {...info},
  faq: {...faq},
};

export default initialStoreData;
