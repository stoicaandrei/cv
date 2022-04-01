import { CVData } from 'types';

const data: CVData = {
  name: 'Andrei Stoica',
  title: 'Senior Javascript Developer <br /> Contractor • Freelancer',
  photoUrl: '/BUN_4475.jpg',
  body: [
    {
      title: 'about me',
      introduction: `<p>I am a Senior Javascript Developer / Consultant / Contractor / Freelancer with <b>4+ years of experience</b>, only interested in remote work.
<p>I use my passion, skills and experience to design and implement top of the line software solutions for online businesses worldwide.</p>
<p>Do you want to see how my expertise can help your business? <b>Let's discuss!</b></p>`,
    },
    {
      title: 'experience',
      items: [
        {
          position: 'Senior Javascript Full-Stack Developer',
          project: 'Agora',
          company: 'Upgrade Education',
          startDate: '2021-08-01',
          endDate: '2022-03-01',
          description: `
<p>The client, an e-learning startup dedicated to helping students with their university admission process, had problems scaling up the business and was unable to obtain more funding from investors, due to lacking a centralized system for content, staff and stats.</p>
<ul class="list-disc pl-5"><li><b>Secured funding of over $500k by building from scratch the MVP of a new centralized system</b> by working closely with the client and understanding their needs. Also, fixed 90% of bugs by fixing the flaws in the existing system architecture.</li></ul>
<ul class="list-disc pl-5"><li><b>Increased overall review scores by more than 150% and customer satisfaction by over 40%</b> by improving user feedback process and solving their existing problems.</li></ul>
<p>Skills: Nodejs, Express, MongoDB, Reactjs, React Query, Ant Design, NX monorepo, Digitalocean CI/CD, System Architecture, Agile, Asana, socket.io</p>`,
          mostRelevant: true,
        },
        {
          position: 'Senior Javascript Full-Stack Developer',
          project: 'Mergers & Acquisitions Simulator',
          company: 'Traderion',
          startDate: '2021-04-01',
          endDate: '2021-07-01',
          description: `
<p>The client, a startup providing e-learning services targeted at the fintech industry, was struggling with low student satisfaction and low productivity among trainers, due to lacking a controlled environment for students to practice mergers and acquisitions.</p>
<ul class="list-disc pl-5"><li><b>Improved development time by 30%</b> by optimizing the client's needs inside a web application and by designing the system’s architecture and tech stack.</li></ul>
<p>Skills: Django, PostgreSQL, Redis, Channels, Celery, Reactjs, React Query, Ant Design, AWS CI/CD, System Architecture</p>`,
          mostRelevant: false,
        },
        {
          position: 'Senior Javascript Full-Stack Developer',
          project: 'Portfolio Manager Simulator',
          company: 'Traderion',
          startDate: '2020-05-01',
          endDate: '2021-08-01',
          description: `<p>The client, a startup providing e-learning services for the fintech sector, was struggling with low student satisfaction and low productivity among trainers, due to lacking a controlled environment for students to practice portfolio management.</p>
<ul class="list-disc pl-5"><li><b>Built a successful MVP in less than 5 months</b> by keeping a starling line of communication with the client and by efficiently managing a team to optimize all client needs inside the web app.</li></ul>
<ul class="list-disc pl-5"><li><b>Increased company profit by over 60% and client's customer pool by more than 25%</b> by continuously growing the product over the next year and by constantly releasing new, highly requested features.</li></ul>
<p>Skills: Django, PostgreSQL, Redis, Channels, Celery, Reactjs, Redux, Ant Design, AWS CI/CD, System Architecture, Agile Team Management, Jira</p>`,
          mostRelevant: true,
        },
        {
          position: 'Javascript Full-Stack Developer',
          project: 'Excel Sampler',
          company: 'Traderion',
          startDate: '2020-05-01',
          endDate: '2020-02-01',
          description: `
<p>The client, a state financial agency, was dealing with low productivity among employees and frequent human errors, due to lacking an automated system for completing their tasks.</p>
<ul class="list-disc pl-5"><li><b>Improved procedure time from 2 hours to only 5 minutes and reduced the risk of human errors to virtually 0</b>, by designing a windows application for employees to upload documents and do their task automatically, by leveraging their local server to keep all the data in one place.</li></ul>
<p>Skills: Reactjs, Electronjs, SQLite, Sequelize, Ant Design</p>`,
          mostRelevant: false,
        },
        {
          position: 'Javascript Backend Developer (Co-founder)',
          project: 'Math e-elarning platform',
          company: 'Prepi',
          startDate: '2018-10-01',
          endDate: '2021-02-01',
          description: `<p>The clients, a large group of Romanian high school students, were wasting money on private lessons and had no other efficient alternative when trying to study due to lacking a platform for finding reliable information tailored to their needs.</p>
<ul class="list-disc pl-5"><li><b>Succeeded in pitching the project to over 10 media apparitions and talked to investors</b> by taking part in a start-up accelerator by developing from scratch a fully tailored MVP in less than 4 months.</li></ul>
<ul class="list-disc pl-5"><li><b>Achieved over 5K users in the app and website, with over 6K hours of learning tracked in the first year after the launch</b> by consistently offering users sought after features and continuously improving the product.</li></ul>
<p>Skills: Nodejs, Express, MongoDB, jQuery, pug.js, LaTex, MathJax, Digitalocean, Team Management, Trello, Start-up Development, Git</p>`,
          mostRelevant: true,
        },
      ],
    },
  ],
  sidebar: [
    {
      title: 'contact',
      items: [
        {
          icon: 'phone',
          text: '(+40) 763 682 222',
          url: 'tel:+40763682222',
        },
        {
          icon: 'envelope',
          text: 'andrei@stoica.dev',
          url: 'mailto:andrei@stoica.dev',
        },
        {
          icon: 'location-dot',
          text: 'Timisoara, Romania',
        },
        {
          icon: 'fab linkedin',
          text: 'in/stoic-ndrei',
          url: 'https://www.linkedin.com/in/stoic-ndrei/',
        },
        {
          icon: 'fab skype',
          text: 'Andrei Stoica',
          url: 'https://join.skype.com/invite/GPqup0VYfWKO',
        },
        {
          icon: 'fab github',
          text: 'Andrei Stoica',
          url: 'https://github.com/stoicaandrei',
        },
      ],
    },
    {
      title: 'skills',
      items: [
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
    },
    {
      title: 'open source',
      items: [
        {
          name: 'Redux State Manager',
          url: 'https://github.com/stoicaandrei/redux-state-manager',
        },
      ],
    },
    {
      title: 'awards',
      items: [{ name: 'Bronze Medal', competition: 'National CS Olympiad' }],
    },
  ],
};

export default data;
