// gitprofile.config.ts
const CONFIG = {
  github: { username: 'gdakate' },

  // 배포 경로: https://gdakate.github.io/yongeun/
  base: '/yongeun/',

  projects: {
    github: {
      display: true,
      header: 'Selected Repos',
      mode: 'manual',
      automatic: {
        sortBy: 'updated',
        limit: 6,
        exclude: { forks: true, projects: [] },
      },
      // 수동 모드는 비워둠
      manual: { projects: [
        'ksta-google-simz/fawn',
    'gdakate/DataVisualization',
    'gdakate/sayosayo_ML',
    'dsc-sookmyung/2023-High-Light-SolutionChallenge',
      ] },
    },
    external: {
      header: 'Research Highlights',
      projects: [
        {
          title: 'F.A.W.N: Face Anonymization With Neural Networks',
          description:
            `• 53% faster diffusion anonymization (18.6s → 8.7s) via identity-exclusion + tuning
• Built privacy–utility evaluation: Re-ID rate, FID, demographic similarity (age/gender/race)
• Reduced identity leakage while preserving realism and facial attributes
• 2nd Prize — 2025 KSTA NIPA Google ML Bootcamp`,
          imageUrl:
            'https://img.freepik.com/free-photo/ai-face-anonymization.jpg',
          link: 'https://github.com/ksta-google-simz/fawn', // 깃허브/시연 링크 생기면 넣기
        },
    {
          title: 'Medical Image Segmentation with Vision Foundation Models (Ongoing)',
          description:
            `• Applied SAM to medical datasets (Kvasir-SEG, NCI-ISBI 2013) to study zero-shot domain gap
• Developing gaze-guided prompting using eye-tracking as weak supervision to reduce annotation cost`,
        // 빈 문자열은 런타임에서 터질 수 있어서 placeholder 추천
         imageUrl:
           '',
          link: '',
        },
        {
          title: 'Real-time Shopping Assistant for the Visually Impaired',
          description:
             `• YOLOv8 detection for cluttered groceries; 83% accuracy via data refinement and augmentation
• Real-time pipeline (Flask + AWS EC2) with sub-second latency
• MediaPipe gesture control + audio feedback for hands-free use
• 2nd Place — IPS AI Competition`,
          imageUrl:
            'https://img.freepik.com/free-photo/supermarket-app-ai.jpg',
          link: 'https://github.com/orgs/smwu-ips-Sayosayo/repositories',
        },
        {
          title: 'Drug Interaction & Adverse Event Prevention App',
          description:
            'Spring Boot + GCP; public APIs integration for conflict detection & personalized warnings.',
          imageUrl:
            'https://img.freepik.com/free-photo/medical-ai-app.jpg',
          link: '',
        },
      ],
    },
  },

  seo: {
    title: 'Yongeun Cho',
    description:
      'M.S. Data Science @ Stony Brook| Medical image segmentation, vision foundation models',
    imageURL: '',
  },

  social: {
    // 이력서의 링크드인 핸들 기준으로 수정
    // (resume에 표기: linkedin.com/in/yoneguncho)
    linkedin: 'yoneguncho',
    website: 'https://github.com/gdakate',
    phone: '',
    email: 'yongeun.cho@stonybrook.edu',
  },

  
    // 레포 루트에 PDF 올리고 아래 raw URL로 교체하세요.
    // 예: https://raw.githubusercontent.com/gdakate/yongeun/main/Yongeun%20Cho.pdf
    resume: {
  fileUrl: 'https://raw.githubusercontent.com/gdakate/yongeun/main/AI.pdf',
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
      companyLink: 'https://www.stonybrook.edu/',
    },
    {
      company: 'Mand.ro',
      position: 'Software Engineering Intern – Prosthetic Hand Project',
      from: 'Aug 2024',
      to: 'Sep 2024',
      companyLink: 'https://mand.ro/',
    },
    {
      company: 'Snowrose Reorganization Task Force',
      position: 'Backend Developer',
      from: 'Feb 2024',
      to: 'Aug 2024',
      companyLink: '',
    },
    {
      company: 'Sookmyung Women’s University',
      position: 'Undergraduate Researcher – Assistive AI & ML Applications',
      from: 'Sep 2023',
      to: 'Aug 2024',
      companyLink: 'https://www.sookmyung.ac.kr/',
    },
  ],

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
  ],

  publications: [
    {
      title: 'Real-time Shopping Assistant for the Visually Impaired',
      conferenceName: 'Korean Entertainment Media Society Fall Conference 2024',
      journalName: '',
      authors: 'Y.E. Cho, J.W. Lee',
      link: '',
      description:
        'Real-time Shopping Assistant for the Visually Impaired based on YOLOv8 + MediaPipe',
    },
    {
      title: 'A Study on Drug Interaction and Side Effect Prevention',
      conferenceName: 'Korea Digital Content Society Summer Conference 2024',
      journalName: '',
      authors: 'Y.E. Cho, J.W. Lee',
      link: '',
      description:
        '공공데이터 API 통합, Spring Boot + GCP 백엔드로 상호작용/부작용 예방.',
    },
  ],

  blog: { source: 'dev', username: '', limit: 2 },

  googleAnalytics: { id: '' },
  hotjar: { id: '', snippetVersion: 6 },

  themeConfig: {
    defaultTheme: 'bumblebee',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
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

  footer: `Made with <a class="text-primary" href="https://github.com/arifszn/gitprofile" target="_blank" rel="noreferrer">GitProfile</a> and ❤️`,
  enablePWA: true,
};

export default CONFIG;
