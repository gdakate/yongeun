// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'gdakate', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/yongeun/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.

      projects: {
  github: {
    display: true,
    header: 'GitHub Projects',
    mode: 'automatic',
    automatic: {
      sortBy: 'updated',
      limit: 6,
      exclude: { forks: true, projects: [] },
    },
  },
  external: {
    header: 'Highlighted Projects',
    projects: [
      {
        title: 'F.A.W.N: Face Anonymization With Neural Networks',
        description:
          'Enhanced diffusion-based anonymization model; reduced inference time by 53% without quality loss. Designed multi-metric evaluation using FID, AGR, and Re-ID.',
        imageUrl: 'https://img.freepik.com/free-photo/ai-face-anonymization.jpg',
        link: '',
      },
      {
        title: 'Real-time Shopping Assistant for the Visually Impaired',
        description:
          'YOLOv8 + MediaPipe–based mobile vision system enabling audio-guided grocery shopping for visually impaired users.',
        imageUrl: 'https://img.freepik.com/free-photo/supermarket-app-ai.jpg',
        link: '',
      },
      {
        title: 'Drug Interaction and Adverse Event Prevention App',
        description:
          'Developed backend (Spring Boot + GCP) integrating public APIs to detect drug conflicts and generate personalized warnings.',
        imageUrl: 'https://img.freepik.com/free-photo/medical-ai-app.jpg',
        link: '',
      },
    ],
  },
},

      
      // projects: [
      //   {
      //     title: 'Project Name',
      //     description:
      //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      //     imageUrl:
      //       'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
      //     link: 'https://example.com',
      //   },
      //   {
      //     title: 'Project Name',
      //     description:
      //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      //     imageUrl:
      //       'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
      //     link: 'https://example.com',
      //   },
      // ],
  //   },
  // },
seo: { 
  title: 'Portfolio of Yongeun Cho', 
  description: 'AI & Computer Vision Researcher | Data Science M.S. at Stony Brook University', 
  imageURL: '',
},
      social: {
    linkedin: 'yongeuncho',
    website: '',
    phone: '',
    email: 'yongeun.cho@stonybrook.edu',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    // Core Languages
  'Python',
  'Java',
  'SQL',

  // ML / CV
  'PyTorch',
  'TensorFlow',
  'YOLOv8',
  'OpenCV',
  'MediaPipe',

  // Backend & Cloud
  'Spring Boot',
  'Flask',
  'Docker',
  'AWS',

  // Tools & Collaboration
  'Git',
  'Computer Vision',
  ],
  experiences: [
     {
    company: 'Computer Vision Lab, Stony Brook University',
    position: 'Graduate Researcher (Advisor: Prof. Zhaozheng Yin)',
    from: '2025',
    to: 'Present',
    // companyLink: 'https://www.stonybrook.edu/',
  },
    {
      company: 'Mand.ro',
    position: 'Software Engineering Intern – Prosthetic Hand Project',
    from: 'Aug 2024',
    to: 'Sep 2024',
    // companyLink: 'https://mand.ro/',
    },
    {
    company: 'Snowrose Reorganization Task Force',
    position: 'Backend Developer',
    from: 'Feb 2024',
    to: 'Aug 2024',
    // companyLink: '',
    },
    {
      company: 'Sookmyung Women’s University',
    position: 'Undergraduate Researcher – Assistive AI & ML Applications',
    from: 'Sep 2023',
    to: 'Aug 2024',
    // companyLink: 'https://www.sookmyung.ac.kr/',
    },
  ],
  // certifications: [
  //   {
  //     name: 'Lorem ipsum',
  //     body: 'Lorem ipsum dolor sit amet',
  //     year: 'March 2022',
  //     link: 'https://example.com',
  //   },
  // ],
  educations: [
  {
    institution: 'Stony Brook University',
    degree: 'M.S. in Data Science',
    from: '2025',
    to: 'Present',
  },
  {
    institution: 'Sookmyung Women’s University',
    degree: 'B.S. in IT Engineering',
    from: '2020',
    to: '2024',
  },
]
  publications: [
  {
    title: 'Real-time Shopping Assistant for the Visually Impaired',
    conferenceName: 'Korean Entertainment Media Society Fall Conference 2024',
    journalName: '',
    authors: 'Y.E. Cho, J.W. Lee',
    link: '',
    description:
      'Developed a real-time grocery shopping assistant app using YOLOv8 and MediaPipe; enhanced accessibility for visually impaired users.',
  },
  {
    title: 'A Study on Drug Interaction and Side Effect Prevention',
    conferenceName: 'Korea Digital Content Society Summer Conference 2024',
    journalName: '',
    authors: 'Y.E. Cho, J.W. Lee',
    link: '',
    description:
      'Proposed a drug management and interaction prevention system integrating public health APIs and GCP-based backend infrastructure.',
  },
]
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
