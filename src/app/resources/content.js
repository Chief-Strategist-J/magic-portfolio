import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Jaydeep",
  lastName: "Vagh",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Founder Of Scaibu",
  avatar: "/images/avatar.jpg",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi","Gujrati","Marathi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Chief-Strategist-J",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/chiefj/",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/ChiefErj",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:chief.strategist.j@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Welcome to my portfolio, where I share my journey as a tech entrepreneur, developer, and writer.`,
  headline: <>Tech Visionary, Innovator, and Educator</>,
  subline: (
    <>
      I'm Jaydeep Wagh, the founder of Scaibu, a company focused on building solutions at the intersection of  education, technology, and finance. With extensive experience as a Flutter developer
      and content writer for leading platforms, I craft user-friendly apps and share insights on cutting-edge tech topics.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://calendly.com/scaibu/one-on-one-consultation?month=2025-02",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Jaydeep Wagh is a tech entrepreneur, developer, and writer from Surat, India, with a
        strong passion for education, technology, and finance. As the founder of Scaibu,
        Jaydeep leads innovative projects at the intersection of AI, quantum computing, and finance,
        transforming ideas into impactful solutions. With experience as a Flutter developer and
        content creator for top tech platforms, he thrives at crafting practical and engaging applications.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Scaibu",
        timeframe: "Mar 2023 - Present",
        role: "Founder",
        achievements: [
          <>
            As the founder of a new venture, I found myself in unfamiliar territory.
            I had no prior experience and had to start from scratch. It was a difficult task,
            but I knew that it was necessary to make important changes in society.
            I had always rebelled against traditional systems, but I realized that sometimes,
            they were needed to bring about significant progress.
          </>,
          <>
            My ultimate goal was to make a significant contribution to my country,
            especially to students. I believed that education was the key to the future,
            and I wanted to ensure that every student had access to it.
          </>,
          <>
            The journey was not an easy one. I faced many challenges and obstacles along the way.
            But I was determined to overcome them and achieve excellence.
            I worked tirelessly day and night, and slowly but surely,
            my vision started to take shape.
          </>,
          <>
            I started to see small successes, which gave me the confidence to keep going.
            And as time passed, my efforts started to pay off. My venture gained traction,
            and people started to take notice of what I was doing.
          </>,
          <>
            But I knew that this was just the beginning. I had much bigger goals in mind,
            and I wasn't going to stop until I achieved them. I was driven by an unwavering
            commitment to make a positive impact, and nothing was going to stand in my way.
          </>,
          <>
            As I sit here today, reflecting on my journey,
            I feel proud of what I've accomplished. It hasn't been easy,
            but it has been worth it. And I know that there's so much more
            I can do in the future.
          </>,
          <>
            So, I'll keep pushing forward, I'll keep striving for excellence,
            and I'll keep making a difference. The road ahead may be uncertain,
            but I'm ready for whatever challenges come my way. And I know that one day,
            I'll achieve the greatness I've always dreamed of.
          </>,

        ],
        images: [],
      },
      // images: [
      //   // optional: leave the array empty if you don't want to display images
      //   {
      //     src: "/images/projects/project-01/cover-01.jpg",
      //     alt: "Once UI Project",
      //     width: 16,
      //     height: 9,
      //   },
      // ],
      {
        company: "Digipie Technologies",
        timeframe: "Jul 2024 - Jul 2024",
        role: "Application Developer",
        achievements: [
          <>Joining Digipie was a turning point in my career. The supportive and stimulating environment here has allowed me to expand my skills and take on challenging projects that have pushed my boundaries. I had the opportunity to work with a diverse team of talented individuals who were always willing to share their knowledge and support each other.</>,
          <>One of the most significant ways Digipie transformed my life was by providing me with the opportunity to learn and master React Native. This new skill set not only broadened my development capabilities but also opened up new avenues for career advancement. The company's commitment to professional development and continuous learning was evident through the numerous workshops, training sessions, and mentorship programs they offered.</>,
          <>The sense of camaraderie and teamwork at Digipie makes every day enjoyable and rewarding. I have built lasting relationships with my colleagues, who have become more than just coworkers—they are friends and mentors. The company's inclusive culture made me feel valued and empowered to contribute my ideas and take initiative on projects.</>,
          <>Overall, working at Digipie has been a transformative experience, helping me to achieve my career goals and more. I have grown both professionally and personally, gaining confidence in my abilities and a clear vision for my future in mobile application development.</>,
        ],
        images: [],
      },
      {
        company: "DK Infoway",
        timeframe: "Sep 2023 - Jul 2024",
        role: "Flutter & Laravel Developer",
        achievements: [
          <>The call of a new adventure led me to DK infoway., a realm where Flutter's wings met Laravel's strong foundation. Here, I assumed the role of a Flutter and Laravel alchemist, crafting seamless connections between the mobile realm and the server dominion.</>,
          <>In the Flutter realm, I orchestrated the creation of a customer-facing mobile application. The magical authentication spells of Firebase secured our users' trust, and real-time features danced to the rhythm of Flutter's WebSocket support. The application soared, and user engagement followed suit, a testament to the power of Flutter's spellbinding capabilities.</>,
          <>Meanwhile, in the Laravel realm, I shaped RESTful APIs and fortified the backend fortress. The integration of Laravel middleware became our shield against potential vulnerabilities, and the migration from MySQL to PostgreSQL fortified our data stronghold. As the architect of these backend endeavors, I witnessed a 20% reduction in API response time, and the scalability of our Laravel castle reached new heights.</>,
          <>In the enchanted forest of technology, I also took on the role of a mentor, guiding fellow developers through the Flutter maze. Training sessions became a platform for knowledge exchange, further reinforcing the collaborative spirit that fuels innovation at Dk Infoway And My StartUp.</>,
        ],
        images: [],
      },
      {
        company: "Google Developers Group",
        timeframe: "Jan 2022 - Jul 2024",
        role: "Member",
        achievements: [
          <>Google Cloud Platform (GCP) · Firebase · TensorFlow · Flutter · Android
          </>,
        ],
        images: [],
      },
      {
        company: "Goldenmace IT Solutions",
        timeframe: "Aug 2022 - May 2023",
        role: "Flutter Developer",
        achievements: [
          <>
            As a young and ambitious flutter developer, I was always searching for the perfect place to work. A place where I could learn, grow, and be inspired to do great things. And then, I found Goldenmace.
          </>,
          <>
            From the moment I stepped into the office, I knew that I was in the right place. The team was welcoming and full of energy, eager to help me learn and grow in my role. And boy, did I learn.
          </>,
          <>
            As I dove into projects, I found myself facing challenges I never thought possible. But with the support of my team, I pushed through and came out the other side stronger and more capable than ever before.
          </>,
          <>
            But what really made Goldenmace special was the culture of inspiration. Every day, I was surrounded by people who were passionate about what they did, and who inspired me to do the same. They pushed me to take risks, to think outside the box, and to never settle for anything less than my best.
          </>,
          <>
            And so, after a challenging and rewarding journey, I can confidently say that Goldenmace was the perfect place for me. It taught me so much and inspired me to be the best version of myself. And now, as I move on to my next adventure, I can only hope to find a workplace half as inspiring as Goldenmace.
          </>,
        ],
        images: [],
        // [
        //   // optional: leave the array empty if you don't want to display images
        //   {
        //     src: "/images/projects/project-01/cover-01.jpg",
        //     alt: "Once UI Project",
        //     width: 16,
        //     height: 9,
        //   },
        // ],
      },
      {
        company: "Goldenmace IT Solutions",
        timeframe: "Aug 2022 - Nov 2022",
        role: "Apprenticeship",
        achievements: [
          <>
            As a flutter trainee, I was always eager to learn and grow. I had entered the field with zero knowledge, and everything seemed foreign to me. However, as time passed, I quickly realized that I had a lot to catch up on if I wished to compete with the best in the business.
          </>,
          <>
            With each passing day, I pushed myself to learn new things, to study every aspect of digital marketing with a keen eye for detail. And as I did, I began to notice great changes within myself. Suddenly, things that once puzzled me no longer felt like insurmountable obstacles that I could not overcome.
          </>,
          <>
            Through this journey, I discovered a passion for copywriting and content writing. I found that my words could make a difference, that they could bring about change in the world. And so, I dedicated myself to my work, filling my days with research, creating content, and perfecting my craft.
          </>,
          <>
            As I grew in my work, I began to realize that I had surpassed my own expectations, and that I had achieved my goals through hard work, dedication, and an unrelenting desire to succeed.
          </>,
          <>
            And so, here I stand today, a successful content writer with a flourishing business and a growing client base. But the journey that brought me here was much more than just a series of accomplishments. It was a testament to the power of hard work, perseverance, and a willingness to take risks and step outside my comfort zone.
          </>,
          <>
            Looking back on it all now, I am awestruck by what I have achieved. And yet, as I look to the future, I can't help but wonder what other exciting challenges and opportunities await me. One thing is for sure: as long as I keep pushing myself to learn and grow, I know that the sky's the limit.
          </>,
        ],
        images: [],
      },

      {
        company: "Stackademic (Medium)",
        timeframe: "Jun 2024 - Present",
        role: "Writer (Hobbyist)",
        achievements: [
          <>Stackademic is a learning hub for programmers, devs, coders, and engineers. Our goal is to democratize free coding education for the world.</>,
        ],
        images: [
          {
            src: "/images/projects/project-01/artical_1.webp",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/artical_2.webp",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/artical_3.webp",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "DevOps (Medium)",
        timeframe: "Nov 2024 - Present",
        role: "Writer (Hobbyist)",
        achievements: [
          <>Devops.dev is a community of DevOps enthusiasts sharing insight, stories, and the latest development in the field.</>,
        ],
        images: [
          {
            src: "/images/projects/project-01/artical_4.webp",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/artical_5.webp",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/artical_6.webp",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "T3CH (Medium)",
        timeframe: "Nov 2024 - Present",
        role: "Writer (Hobbyist)",
        achievements: [
          <>Explore the latest in tech, from AI and cybersecurity to coding and software news. Join our community to learn, share, and stay ahead in the tech world!</>,
        ],
        images: [
          {
            src: "/images/projects/project-01/artical_7.webp",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/artical_8.webp",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/artical_9.webp",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Infosec Write-ups (Medium)",
        timeframe: "Jan 2024 - Present",
        role: "Writer (Hobbyist)",
        achievements: [
          <>I share and promote insightful write-ups from top cybersecurity experts on topics such as bug bounties, Capture The Flag (CTF) challenges, Hack the Box walkthroughs, hardware challenges, and real-life hacking encounters</>,
        ],
        images: [
          {
            src: "/images/projects/project-01/artical_10.webp",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/artical_11.webp",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/artical_12.webp",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "MBA, Indian Institute of Management Bangalore",
        description: <>Fostering excellence in Management, Innovation, and Entrepreneurship</>,
      },
      {
        name: "B.Tech, Sardar Vallabhbhai National Institute of Technology, Surat",
        description: <>Higher Education SURAT, Gujarat</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Flutter",
        description: <>Experienced in developing scalable and responsive mobile applications.</>,
        images: [
          {
            src: "/images/projects/project-01/project1.jpeg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/project2.jpeg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/project3.jpeg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/project4.jpeg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/project5.jpeg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/project6.jpeg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/project-flutter-01.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/project-flutter-02.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/project-flutter-03.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Laravel",
        description: <>Proficient in backend development with Laravel for secure and scalable APIs.</>,
        images: [
          {
            src: "/images/projects/project-01/project-laravel-01.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/project-laravel-02.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/project-laravel-03.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/project-laravel-04.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/project-2-laravel-01.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/project-2-laravel-02.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/project-2-laravel-03.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/project-2-laravel-04.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/project-3-laravel-01.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/project-3-laravel-02.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/project-3-laravel-03.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/project-3-laravel-04.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },

        ],
      },
      {
        title: "GraphQL",
        description: <>Skilled in API development using Apollo GraphQL for efficient data fetching.</>,
        images: [
          {
            src: "/images/projects/certification/graphQL-associte-certification.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/certification/graphQL-proffetional-certification.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Neo4j, MySQL & Apache Spark",
        description: <>Expert in graph data analytics and pathfinding algorithms with Neo4j. Experienced in designing, querying, and optimizing MySQL databases. Proficient in distributed data processing using Apache Spark.</>,
        images: [],
      },
      {
        title: "Cloud Computing, Git & GitHub, Docker & Kubernetes",
        description:
          <>Hands-on experience with cloud platforms and containerized deployments.Version control and collaborative development using Git and GitHub. Skilled in containerization and orchestration of microservices.</>,
        images: [],
      },
      {
        title: "React & Next.js",
        description: <>Experienced in developing interactive web applications with React.js. Building next-generation applications with server-side rendering.</>,
        images: [],
      },
      {
        title: "Technical Writing & Content Marketing",
        description: <>Authoring detailed technical articles on platforms like Medium and DevOps.dev. Crafting content strategies for audience engagement and SEO optimization.</>,
        images: [],
      },
      {
        title: "Project Management",
        description: <>Efficiently managing solo and collaborative long-term projects.</>,
        images: [],
      },
      {
        title: "Data Science",
        description: <>Application of data science techniques in finance and education.</>,
        images: [],
      },
      {
        title: "Quantum Computing",
        description: <>Understanding of wavefunctions and quantum algorithms for computation.</>,
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [],
  // images: [
  //   {
  //     src: "/images/gallery/img-01.jpg",
  //     alt: "image",
  //     orientation: "vertical",
  //   },
  //   {
  //     src: "/images/gallery/img-02.jpg",
  //     alt: "image",
  //     orientation: "horizontal",
  //   },
  //   {
  //     src: "/images/gallery/img-03.jpg",
  //     alt: "image",
  //     orientation: "vertical",
  //   },
  //   {
  //     src: "/images/gallery/img-04.jpg",
  //     alt: "image",
  //     orientation: "horizontal",
  //   },
  //   {
  //     src: "/images/gallery/img-05.jpg",
  //     alt: "image",
  //     orientation: "horizontal",
  //   },
  //   {
  //     src: "/images/gallery/img-06.jpg",
  //     alt: "image",
  //     orientation: "vertical",
  //   },
  //   {
  //     src: "/images/gallery/img-07.jpg",
  //     alt: "image",
  //     orientation: "horizontal",
  //   },
  //   {
  //     src: "/images/gallery/img-08.jpg",
  //     alt: "image",
  //     orientation: "vertical",
  //   },
  //   {
  //     src: "/images/gallery/img-09.jpg",
  //     alt: "image",
  //     orientation: "horizontal",
  //   },
  //   {
  //     src: "/images/gallery/img-10.jpg",
  //     alt: "image",
  //     orientation: "horizontal",
  //   },
  //   {
  //     src: "/images/gallery/img-11.jpg",
  //     alt: "image",
  //     orientation: "vertical",
  //   },
  //   {
  //     src: "/images/gallery/img-12.jpg",
  //     alt: "image",
  //     orientation: "horizontal",
  //   },
  //   {
  //     src: "/images/gallery/img-13.jpg",
  //     alt: "image",
  //     orientation: "horizontal",
  //   },
  //   {
  //     src: "/images/gallery/img-14.jpg",
  //     alt: "image",
  //     orientation: "horizontal",
  //   },
  // ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
