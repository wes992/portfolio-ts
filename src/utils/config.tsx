export enum Labels {
  COMMON = "common",
  SKILLS = "skills",
  SOCIAL = "social",
}

export const labels = new Map([
  [
    Labels.COMMON,
    new Map([
      ["greeting", "Hey, I'm Wes - a web developer based in Washington D.C."],
      ["secondGreeting", "I love what I do. Let me show you."],
      [
        "longGreeting2",
        "I have developed several web applications from Banking apps to Disaster Planning and Recovery apps.",
      ],
      [
        "longGreeting3",
        "I am passionate about creating performant and beautiful UI's that optimize user experience.",
      ],
      ["tagline", "React | Node | Everything in between"],
      ["header", "This is just a test header"],
      ["body", "This is just a test body"],
    ]),
  ],
  [
    Labels.SKILLS,
    new Map([
      ["1", "a skill"],
      ["2", "2 skills"],
    ]),
  ],
  [Labels.SOCIAL, new Map([["header", "Social Links:"]])],
]);

export const useLabels = (key: Labels) => labels.get(key);
export const useCommonLabels = () => labels.get(Labels.COMMON)!;

export const socialLinks = [
  {
    name: "Linked In",
    url: "https://www.linkedin.com/in/wes992/",
    target: "_blank",
  },

  {
    name: "GitHub",
    url: "https://github.com/wes992",
    target: "_blank",
  },

  {
    name: "Stack Overflow",
    url: "https://stackoverflow.com/users/13972274/wes-hampton",
    target: "_blank",
  },

  {
    name: "Facebook",
    url: "https://www.facebook.com/wes.hampton.9",
    target: "_blank",
  },
];
