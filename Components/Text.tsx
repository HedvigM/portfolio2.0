import {
  faGithub,
  faLinkedinIn,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

export const IconText = [
  {
    iconName: "GitHub",
    icon: faGithub,
    href: "https://github.com/HedvigM",
    ariaLabel: "A link to my GitHub account",
  },
  {
    iconName: "stack Overflow",
    icon: faStackOverflow,
    href: "https://stackoverflow.com/users/16650863/hedvig",
    ariaLabel: "A link to my Stack Overflow account",
  },
  {
    iconName: "LinkedIn",
    icon: faLinkedinIn,
    href: "https://www.linkedin.com/in/hedvig-mejstedt",
    ariaLabel: "A link to my LinkedIn profile",
  },
];

export const HeaderText = [
  {
    portfolio: "portfolio:",
    name: "Hedvig Mejstedt",
    title: "Hedvig Mejstedt",
    more: "+ UX enthusiast (TAGLINE)",
    image: "",
  },
];

export const PresentationText = [
  {
    paragraphOne:
      "Hello! I am a frontend developer who is not afraid to venture into new situations in search of new knowledge and challenges.",
    paragraphTwo: `I am a trained social worker (socionom) that chose to take a leap and devote myself to my dream of becoming a frontend developer. Now I find myself at work thinking about how fortunate I am to work with something I love, all day long!`,
  },
];

export const projects = [
  {
    image: "/./Pictures/irish.png",
    alt: "The Tunes & Friends web page",
    name: "Tunes & Friends",
    description:
      "Sign up to browse Irish folk tunes, tag tunes you know or want to learn, and find your friends to see what tunes you have in common. You can also see sheet music for tunes. Music data is provided by The Session.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "node.js",
      "Postgres",
      "Prisma",
      "Local storage",
      "MUI",
    ],
    deployed: "https://tunes-and-friends.vercel.app/",
    github: "https://github.com/HedvigM/TunesAndFriends",
  },
  {
    image: "/./Pictures/todo.png",
    alt: "todo",
    name: "Todo app",
    description:
      "The app is a classic todo app where you can list yor todos and sort them in categories and then check them off as you go.",
    tags: ["HTML", "CSS", "JavaScript", "React", "Redux", "Styled components"],
    deployed: "https://hedvigs-todo.netlify.app/",
    github: "https://github.com/HedvigM/project-todos",
  },
  {
    image: "/./Pictures/happy.png",
    alt: "Happy thoughts",
    name: "Happy Thoughts",
    description:
      'Happy Thoughts is a twitter-like web app that show the twenty last posts made to an API I made for ths project. It is a simple micro blog where you can write your happy thoughts and "heart" earlier posts.',
    tags: ["React", "CSS", "API", "JavaScript"],
    deployed: "https://hedvigs-happy-thoughts.netlify.app/",
    github: "https://github.com/HedvigM/project-happy-thoughts",
  },
];

export const OtherProjectsText = [
  {
    name: `Hedvig's party`,
    description: `Hedvig's Party is a sign up form built with React. There is a series of questions with different inputs, buttons, radio buttons, checkboxes, etc. There is also a last page that displays the answers from the form.`,
    tags: [
      "React",
      "JavaScript",
      "styled-components",
      "CSS variables",
      "State",
    ],
    deployed: "https://hedvigs-party.netlify.app/",
    github: "https://github.com/HedvigM/project-survey",
    ariaLabel: "Link to the deployed project",
    iconImage1: "fab",
    iconImage2: "github",
  },
  {
    name: "Harry Potter quiz",
    description: `This is a Harry Potter themed quiz using Redux and the global state. There are a bunch questions with different input styles, like button, picture and radio buttons. On the last page there is a page that shows the player's answers and the correct answers.`,
    tags: ["React", "JSX", "Styled components"],
    deployed: "https://reduxquizliongroup1.netlify.app/",
    github: "https://github.com/Zancotti/project-redux-quiz",
    ariaLabel: "Link to the deployed project",
    iconImage1: "fab",
    iconImage2: "github",
  },
];

export const ThoughtsText = [
  {
    image: "/./Pictures/code-pic.png",
    alt: "Picture of code",
    date: "Oct 2022",
    name: "A guide to Prisma (Swedish)",
    text: "In the latest version of my hobby project Tunes & Friends I used Prisma.",
    href: "https://medium.com/@hedvig.mejstedt/en-nyb%C3%B6rjarguide-till-prisma-de8cdbb4d767",
    more: "Read more",
  } /* I learned quite a lot during the process, and made a beginner's guide with my new knowledge. */,
  {
    image: "/./Pictures/code.jpg",
    alt: "picture of happy man holding up an post-it",
    date: "Jul 2022",
    name: "Why I love to code",
    text: "When I'm at work, I often find myself thinking — I get to work with this....",
    href: "https://medium.com/@hedvig.mejstedt/why-i-love-to-code-db6fe946e1e9",
    more: "Read more",
  } /* I get to have this much fun and I even get paid for it! */,
  {
    image: "/./Pictures/pexels-pic.jpg",
    alt: "picture of a person sitting with a laptop",
    date: "Dec 2021",
    name: "How to use brackets",
    text: "One thing that you quickly become aware of when learning to code is that there are a variety of parentheses.",
    href: "https://medium.com/@hedvig.mejstedt/a-small-guide-on-how-to-use-brackets-while-coding-90d00e7d8d2a",
    more: "Read more",
  } /* How to use these do not always feel as obvious, so I thought I would make a small guide on how to think about the use of these. */,
  {
    image: "/./Pictures/pexels-pic.jpg",
    alt: "picture of a person sitting with a laptop",
    date: "Dec 2021",
    name: "How to use brackets",
    text: "One thing that you quickly become aware of when learning to code is that there are a variety of parentheses.",
    href: "https://medium.com/@hedvig.mejstedt/a-small-guide-on-how-to-use-brackets-while-coding-90d00e7d8d2a",
    more: "Read more",
  } /* How to use these do not always feel as obvious, so I thought I would make a small guide on how to think about the use of these. */,
];

export const MoreThoughtsText = [
  {
    date: "Mar 2022",
    name: "Tunes & Friends",
    text: "Even before I started programming, I thought that there should be an app or website for musicians — a social site where you can list the tunes you know and then see what tunes your friends know. When I had come so far in the education that we would start thinking about the final project, I knew exactly what I wanted to do — and I also felt competent enough to implement my idea I had been mulling over for a long time, finally!",
    href: "https://medium.com/@hedvig.mejstedt/tunes-friends-f54e995e64ef",
    more: "Read more",
  },
  {
    date: "Nov 2021",
    name: "Finally, Monday!",
    text: "It is amazing to be able to say that I'm longing for Mondays, and mean it! But am I now a pro that always knows how to solve the problem and never does anything wrong? No.",
    href: "https://medium.com/@hedvig.mejstedt/finally-monday-889fe0399a0f",
    more: "Read more",
  },
];

export const SkillsText = [
  {
    name: "code",
    list: [
      "*JavaScript",
      "Redux",
      "Next.js",
      "*React",
      "Node.js",
      "Prisma",
      "CSS3",
      "styled-components",
      "vanilla-extract",
      "*TypeScript",
      "HTML5",
      "JSX",
      "Postgres",
      "mongoose",
    ],
  },
  {
    name: "toolbox",
    list: [
      "*Github",
      "VSCode",
      "Mongo DB",
      "Adobe Photoshop",
      "*Figma",
      "Slack",
      "Jira",
      "Confluence",
      "Postman",
      "git",
      "CodePen",
      "Notion",
      "Trello",
      "Miro",
    ],
  },
  {
    name: "more",
    list: [
      "Office package",
      "Pair programming",
      "*Agile methodology",
      "Mob programming",
      "*Web accessibility",
    ],
  },
];

export const ContactText = [
  {
    heading: "contact",
    name: "Hedvig Mejstedt",
    number: "+46 70 - 51 20 226",
    email: "hedvig@mejstedt.se",
  },
];
