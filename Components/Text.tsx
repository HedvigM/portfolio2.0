import {
  faGithub,
  faLinkedinIn,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';

export const IconText = [
  {
    iconName: 'GitHub',
    icon: faGithub,
    href: 'https://github.com/HedvigM',
    ariaLabel: 'A link to my GitHub account',
  },
  {
    iconName: 'stack Overflow',
    icon: faStackOverflow,
    href: 'https://stackoverflow.com/users/16650863/hedvig',
    ariaLabel: 'A link to my Stack Overflow account',
  },
  {
    iconName: 'LinkedIn',
    icon: faLinkedinIn,
    href: 'https://www.linkedin.com/in/hedvig-mejstedt',
    ariaLabel: 'A link to my LinkedIn profile',
  },
];

export const HeaderText = [
  {
    portfolio: 'portfolio:',
    name: 'Hedvig Mejstedt',
    title: 'frontend developer',
    more: '+ a creative socialworker, and a UX enthusiast',
    image: '',
  },
];

/* Rewrite this text. */
export const PresentationText = [
  {
    paragraphOne:
      'Hello! I am a frontend developer who is not afraid to venture into new situations in search of new knowledge or challenges',
    paragraphTwo: `I am a trained social worker that recently graduated from Technigo's 24 week bootcamp where I spent every day learning about web
    technologies. I loved every second of it, and I'm looking forward to working as a frontend developer and being a part of the coding community.`,
  },
];

export const projects = [
  {
    image: '/./Pictures/voyd.png',
    alt: 'The voyd web page',
    name: 'VOYD',
    discription: `As a developer at VOYD, I developed the front page of the company's website. I gained experience and refined my knowledge of TypeScript, Next.js, Git and other technologies. I was part of a development where we worked according to the agile working method with standups, retros and sprints.`,

    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'Vanilla Extract',
      'JavaScript',
      'node.js',
    ],
    deployed: 'https://voyd.tv/en-US',
    github: 'https://github.com/HedvigM/my-final-project',
  },
  {
    image: '/./Pictures/irish.png',
    alt: 'The tunes & friends web page',
    name: 'Tunes & Friends',
    discription:
      'Tunes & Friends was my final project at the Technigo bootcamp. I had been thinking about the concept for a long time, and I was finally ready to build it! Sign up to browse Irish folk tunes, tag tunes you know or want to learn, and find your friends to see what tunes you have in common. You can also see sheet music for tunes. Music data is provided by The Session (länk).',
    tags: [
      'React',
      'Styled components',
      'Redux',
      'JavaScript',
      'node.js',
      'mongoose',
      'mongoDB',
      'Local storage',
    ],
    deployed: 'https://tunesandfriends.netlify.app/login',
    github: 'https://github.com/HedvigM/my-final-project',
  },
  {
    image: '/./Pictures/labyrinth.png',
    alt: 'labyrinth',
    name: 'Labyrinth',
    discription:
      'The Labyrinth app is a text based game where the player chooses where to go until they have made it out of the labyrinth.',
    tags: [
      'JavaScript',
      'React',
      'Redux',
      'Asynchronous Functions',
      'Styled components',
    ],
    deployed: 'https://hedvigs-labyrinth.netlify.app/',
    github: 'https://github.com/HedvigM/project-labyrinth',
  },
  /*   {
    image: '/./Pictures/todo.png',
    alt: 'todo',
    name: 'Todo app',
    discription:
      'The app is a classic todo app where you can list yor todos and sort them in categories and then check them off as you go.',
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Styled components'],
    deployed: 'https://hedvigs-todo.netlify.app/',
    github: 'https://github.com/HedvigM/project-todos',
  }, */
  {
    image: '/./Pictures/happy.png',
    alt: 'Happy thoughts',
    name: 'Happy Thoughts',
    discription:
      'Happy Thoughts is a twitter like web app that show the twenty last posts made to an API I made for ths project. It is a simple micro blog where you can write your happy thoughts and "heart" earlier posts.',
    tags: ['React', 'CSS', 'API', 'JSX'],
    deployed: 'https://hedvigs-happy-thoughts.netlify.app/',
    github: 'https://github.com/HedvigM/project-happy-thoughts',
  },
];

export const OtherProjectsText = [
  {
    name: `Hedvig's party`,
    description: `Hedvig's Party is a sign up form built with React. There is a series of questions with different inputs, buttons, radio buttons, checkboxes, etc. There is also a last page that sums up the answers from the form.`,
    tags: ['React', 'JSX', 'Styled Components', 'CSS-variables', 'State'],
    deployed: 'https://hedvigs-party.netlify.app/',
    github: 'https://github.com/HedvigM/project-survey',
    ariaLabel: 'Link to the deployed project',
    iconImage1: 'fab',
    iconImage2: 'github',
  },
  {
    name: 'Harry Potter quiz',
    description: `This project is a Harry Potter themed quiz using Redux and the global state. There are a bunch questions with different input styles, like button, picture and radiobuttons. On the last page there is a sum page that show the player's answers and the correct answers.`,
    tags: ['React', 'JSX', 'Styled components'],
    deployed: 'https://reduxquizliongroup1.netlify.app/',
    github: 'https://github.com/Zancotti/project-redux-quiz',
    ariaLabel: 'Link to the deployed project',
    iconImage1: 'fab',
    iconImage2: 'github',
  },
];

export const ThoughtsText = [
  {
    image: '/./Pictures/code.jpg',
    alt: 'picture of happy man holding up an post-it',
    date: 'JUL 2022',
    name: 'Why I love to code',
    text: 'When I’m at work, I often find myself thinking — I get to work with this, I get to have this much fun and I even get paid for it!',
    href: 'https://medium.com/@hedvig.mejstedt/why-i-love-to-code-db6fe946e1e9',
    more: 'Read more',
  },
  {
    image: '/./Pictures/pexels-pic.jpg',
    alt: 'a picture of a person sitting with the computer',
    date: 'Dec 2021',
    name: 'A small guide on how to use brackets while coding',
    text: 'One thing that you quickly become aware of when learning to code is that there are a variety of parentheses. How to use these do not always feel as obvious, so I thought I would make a small guide on how to think about the use of these.',
    href: 'https://medium.com/@hedvig.mejstedt/a-small-guide-on-how-to-use-brackets-while-coding-90d00e7d8d2a',
    more: 'Read more',
  },
];

export const MoreThoughtsText = [
  {
    date: 'Mar 2022',
    name: 'Tunes & Friends',
    text: 'During my parental leave, I have managed to make a website I can be proud of, a page I hope I can develop further and develop together with. ',
    href: 'https://medium.com/@hedvig.mejstedt/tunes-friends-f54e995e64ef',
    more: 'Read more',
  },
  {
    date: 'Mar 2022',
    name: 'Finally, Monday!',
    text: 'Half of the course has passed. Wow. It feels incredible that half of the time has passed and that I’ve enjoyed and cherished every second. It is amazing to be able to say that I’m longing for Mondays, and mean it! But am I now a pro that always knows how to solve the problem and never does anything wrong? No.',
    href: 'https://medium.com/@hedvig.mejstedt/finally-monday-889fe0399a0f',
    more: 'Read more',
  },
];

export const SkillsText = [
  {
    name: 'code',
    list: [
      '*JavaScript',
      'Redux',
      'Next.js',
      '*React',
      'Node.js',
      'CSS3',
      'Styled Components',
      'Vanilla Extract',
      '*TypeScript',
      'HTML5',
      'JSX',
      'mongoose',
    ],
  },
  {
    name: 'toolbox',
    list: [
      '*Github',
      'VSCode',
      'Mongo DB',
      'Adobe Photoshop',
      '*Figma',
      'Slack',
      'Jira',
      'Confluence',
      'Postman',
      'git',
      'CodePen',
      'Notion',
      'Trello',
      'Miro',
    ],
  },
  {
    name: 'more',
    list: [
      'Office package',
      'Pair programming',
      '*Agile methodology',
      'Mob programming',
      '*Web accessibility',
    ],
  },
];

export const ContactText = [
  {
    heading: 'contact',
    name: 'Hedvig Mejstedt',
    number: '+46 70 - 51 20 226',
    email: 'hedvig@mejstedt.se',
  },
];
