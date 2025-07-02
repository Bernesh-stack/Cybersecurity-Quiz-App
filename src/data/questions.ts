export interface Question {
    question: string;
    options: string[];
    correctAnswer: string;
  }
  
  export const levels = [
    {
        level: 1,
        questions: [
          {
            question: "What is phishing?",
            options: ["Email fraud", "Sport", "Fishing technique", "Painting"],
            correctAnswer: "Email fraud"
          },
          {
            question: "Which of the following is a sign of a phishing email?",
            options: [
              "Generic greeting like 'Dear user'",
              "Coming from official company email",
              "Personalized message from a friend",
              "Uses your name and title"
            ],
            correctAnswer: "Generic greeting like 'Dear user'"
          },
          {
            question: "What should you do when receiving a suspicious link?",
            options: [
              "Click it immediately",
              "Ignore your instincts",
              "Hover over it to verify",
              "Forward it to friends"
            ],
            correctAnswer: "Hover over it to verify"
          },
          {
            question: "Who is most likely to fall for social engineering?",
            options: [
              "Anyone",
              "Only children",
              "Only IT professionals",
              "Only elderly people"
            ],
            correctAnswer: "Anyone"
          },
          {
            question: "Which is the safest response to a suspicious phone call?",
            options: [
              "Give your personal details quickly",
              "Hang up and call back through official contact",
              "Trust their urgency",
              "Put them on hold"
            ],
            correctAnswer: "Hang up and call back through official contact"
          }
        ]
      }
      ,
      {
        level: 2,
        questions: [
          {
            question: "Which is a social engineering tactic?",
            options: ["Phishing", "Firewall", "Encryption", "Antivirus"],
            correctAnswer: "Phishing"
          },
          {
            question: "What is pretexting?",
            options: [
              "Pretending to be someone to get info",
              "Texting your manager",
              "Sending malware",
              "Protecting identity"
            ],
            correctAnswer: "Pretending to be someone to get info"
          },
          {
            question: "What is baiting?",
            options: [
              "Using a tempting offer to trick someone",
              "Hooking users into games",
              "Offering free upgrades",
              "Hacking password files"
            ],
            correctAnswer: "Using a tempting offer to trick someone"
          },
          {
            question: "What is quid pro quo in social engineering?",
            options: [
              "Trading help for access",
              "Logging in securely",
              "Encrypting documents",
              "Paying for protection"
            ],
            correctAnswer: "Trading help for access"
          },
          {
            question: "Which device can be used in baiting attacks?",
            options: [
              "USB drives",
              "Firewall",
              "Smartphone",
              "Wi-Fi routers"
            ],
            correctAnswer: "USB drives"
          }
        ]
      }
      ,
      {
        level: 3,
        questions: [
          {
            question: "What is tailgating in cybersecurity?",
            options: [
              "Accessing without a badge",
              "Fishing with bait",
              "Following up",
              "Logging in remotely"
            ],
            correctAnswer: "Accessing without a badge"
          },
          {
            question: "You see a USB stick on the ground at work. What should you do?",
            options: [
              "Plug it in to find the owner",
              "Give it to IT",
              "Take it home",
              "Throw it away"
            ],
            correctAnswer: "Give it to IT"
          },
          {
            question: "An attacker posing as IT support asks for your login. What's this called?",
            options: [
              "Pretexting",
              "Logging",
              "Spoofing",
              "Baiting"
            ],
            correctAnswer: "Pretexting"
          },
          {
            question: "Your coworker clicks a suspicious link. What’s the best action?",
            options: [
              "Ignore it",
              "Report it to security",
              "Unplug the monitor",
              "Send it to another coworker"
            ],
            correctAnswer: "Report it to security"
          },
          {
            question: "What is an example of shoulder surfing?",
            options: [
              "Reading someone’s screen over their shoulder",
              "Watching Netflix at work",
              "Using a screen protector",
              "Snooping phone calls"
            ],
            correctAnswer: "Reading someone’s screen over their shoulder"
          }
        ]
      }
      
  ];
  

