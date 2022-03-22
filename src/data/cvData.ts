import { CVData } from 'types';

const data: CVData = {
  name: 'Andrei Stoica',
  title: 'Senior Javascript Full-stack Developer • Contractor • Freelancer ',
  photoUrl: '/profile.jpg',
  introduction: `<p>I am a Senior Javascript consultant / contractor / freelancer with <b>4+ years of experience</b>, only interested in remote work.
<p>I help companies around the world to design and implement their software solutions.</p>
<p>Do you need software solutions for your business? Let's connect!</p>`,
  contactInfo: {
    email: 'andrei00stoica@gmail.com',
    phone: '(+40) 763 368 2222',
    address: 'Timisoara, Romania',
    linkedin: 'https://www.linkedin.com/in/stoic-ndrei/',
    skype: 'https://join.skype.com/invite/GPqup0VYfWKO',
    github: 'https://github.com/stoicaandrei',
  },
  skills: [
    { name: 'Javascript', years: 4 },
    { name: 'Node.js', years: 4 },
    { name: 'React', years: 4 },
    { name: 'Python', years: 3 },
    { name: 'Django', years: 3 },
    { name: 'AWS', years: 2 },
    { name: 'Typescript', years: 2 },
    { name: 'jQuery', years: 2 },
    { name: 'Unit Testing', years: 1 },
  ],
  education: [],
  languages: [
    { name: 'English', level: 'Proficient' },
    { name: 'Romanian', level: 'Native' },
  ],
  experience: [
    {
      position: 'Backend developer & Co-founder',
      project: 'Math e-elarning platform',
      company: 'Prepi',
      startDate: '2018-10-01',
      endDate: '2021-02-01',
      description: `<p>The clients, a large group of Romanian high school students, were wasting money on private lessons and had no other efficient alternative when trying to study due to lacking a platform for finding reliable information tailored to their needs.</p>
<p>Succeeded in pitching the project to over 10 media apparitions and talked to investors by taking part in a start-up accelerator by developing from scratch a fully tailored MVP in less than 4 months.</p>
<p>Achieved over 5K users in the app and website, with over 6K hours of learning tracked in the first year after the launch by consistently offering users sought after features and continuously improving the product.</p>
<p>Skills: Nodejs, Express, MongoDB, jQuery, pug.js, LaTex, MathJax, Digitalocean, Team Management, Trello, Start-up Development, Git</p>`,
    },
    {
      position: 'Senior Django developer',
      project: 'Portfolio Manager Simulator',
      company: 'Traderion',
      startDate: '2020-05-01',
      endDate: '2021-08-01',
      description: `<p>The client, a startup providing e-learning services for the fintech sector, was struggling with low student satisfaction and low productivity among trainers, due to lacking a controlled environment for students to practice portfolio management.</p>
<p>Built a successful MVP in less than 5 months by keeping a starling line of communication with the client and by efficiently managing a team to optimize all client needs inside the web app.</p>
<p>Increased company profit by over 60% and client's customer pool by more than 25% by continuously growing the product over the next year and by constantly releasing new, highly requested features.</p>
<p>Skills: Django, PostgreSQL, Redis, Channels, Celery, Reactjs, Redux, Ant Design, AWS CI/CD, System Architecture, Agile Team Management, Jira</p>`,
    },
    {
      position: 'Senior Javascript developer',
      project: 'Agora',
      company: 'Upgrade Education',
      startDate: '2021-08-01',
      endDate: '2022-03-01',
      description: `
<p>The client, an e-learning startup dedicated to helping students with their university admission process, had problems scaling up the business and was unable to obtain more funding from investors, due to lacking a centralized system for content, staff and stats.</p>
<p>Secured funding of over $500k by building from scratch the MVP of a new centralized system by working closely with the client and understanding their needs. Also, fixed 90% of bugs by fixing the flaws in the existing system architecture.</p>
<p>Increased overall review scores by more than 150% and customer satisfaction by over 40% by improving user feedback process and solving their existing problems.</p>
<p>Skills: Nodejs, Express, MongoDB, Reactjs, React Query, Ant Design, NX monorepo, Digitalocean CI/CD, System Architecture, Agile, Asana, Pandadoc, Pubnub, socket.io</p>
      `,
    },
  ],
};

export default data;
