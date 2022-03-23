import { CVData } from 'types';

const data: CVData = {
  name: 'Andrei Stoica',
  title: 'Senior Javascript Full-Stack Developer • Contractor • Freelancer ',
  photoUrl: '/profile.jpg',
  introduction: `<p>I am a Senior Javascript consultant / contractor / freelancer with <b>4+ years of experience</b>, only interested in remote work.
<p>I use my passion, skills and experience to design and implement top of the line software solutions for online businesses worldwide.</p>
<p>Do you want to see how my expertise can help your business? <b>Let's discuss!</b></p>`,
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
      position: 'Senior Javascript Full-Stack Developer',
      project: 'Agora',
      company: 'Upgrade Education',
      startDate: '2021-08-01',
      endDate: '2022-03-01',
      description: `
<p>The client, an e-learning startup dedicated to helping students with their university admission process, had problems scaling up the business and was unable to obtain more funding from investors, due to lacking a centralized system for content, staff and stats.</p>
<ul class="list-disc pl-5">
<li><b>Secured funding of over $500k by building from scratch the MVP of a new centralized system</b> by working closely with the client and understanding their needs. Also, fixed 90% of bugs by fixing the flaws in the existing system architecture.</li>
<li><b>Increased overall review scores by more than 150% and customer satisfaction by over 40%</b> by improving user feedback process and solving their existing problems.</li>
</ul>
<p>Skills: Nodejs, Express, MongoDB, Reactjs, React Query, Ant Design, NX monorepo, Digitalocean CI/CD, System Architecture, Agile, Asana, socket.io</p>`,
    },
    {
      position: 'Senior Javascript Full-Stack Developer',
      project: 'Portfolio Manager Simulator',
      company: 'Traderion',
      startDate: '2020-05-01',
      endDate: '2021-08-01',
      description: `<p>The client, a startup providing e-learning services for the fintech sector, was struggling with low student satisfaction and low productivity among trainers, due to lacking a controlled environment for students to practice portfolio management.</p>
<ul class="list-disc pl-5">
<li><b>Built a successful MVP in less than 5 months</b> by keeping a starling line of communication with the client and by efficiently managing a team to optimize all client needs inside the web app.</li>
<li><b>Increased company profit by over 60% and client's customer pool by more than 25%</b> by continuously growing the product over the next year and by constantly releasing new, highly requested features.</li>
</ul>
<p>Skills: Django, PostgreSQL, Redis, Channels, Celery, Reactjs, Redux, Ant Design, AWS CI/CD, System Architecture, Agile Team Management, Jira</p>`,
    },
    {
      position: 'Backend Developer & Co-founder',
      project: 'Math e-elarning platform',
      company: 'Prepi',
      startDate: '2018-10-01',
      endDate: '2021-02-01',
      description: `<p>The clients, a large group of Romanian high school students, were wasting money on private lessons and had no other efficient alternative when trying to study due to lacking a platform for finding reliable information tailored to their needs.</p>
<ul class="list-disc pl-5">
<li><b>Succeeded in pitching the project to over 10 media apparitions and talked to investors</b> by taking part in a start-up accelerator by developing from scratch a fully tailored MVP in less than 4 months.</li>
<li><b>Achieved over 5K users in the app and website, with over 6K hours of learning tracked in the first year after the launch</b> by consistently offering users sought after features and continuously improving the product.</li>
</ul>
<p>Skills: Nodejs, Express, MongoDB, jQuery, pug.js, LaTex, MathJax, Digitalocean, Team Management, Trello, Start-up Development, Git</p>`,
    },
  ],
  awards: [{ name: 'Bronze Medal', competition: 'National CS Olympiad' }],
};

export default data;
