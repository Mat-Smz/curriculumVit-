const mathieuSmolarzData = {
  profil: {
    nom: "Mathieu",
    prenom: "Smolarz",
    adress: {
      line1: "27 rue de Lyon",
      line2: "75012 Paris",
    },
    age: "30",
    email: "mathieu.smolarz@gmail.com",
    phone: "06 25 89 43 59",
    github: "https://github.com/Mat-Smz",
    shortDescription:
      "Après une formation full-stack et une première expérience front-end, je souhaite renforcer et développer mes compétences en effectuant un stage au sein d'une équipe dynamique",
    title: "Développeur ReactJS & React Native",
    capacity: ["Impliqué", "Curieux", "Aime apprendre"],
    hobbies: ["Tennis", "Littérature", "Géopolitique"],
  },
  categories: {
    experiences: [
      {
        company: "Okate",
        title: "Développeur",
        description:
          "Développement front et back d'un MVP d'application web au sein d'une equipe de 3 développeurs",
        year: {
          start: "2020",
          end: "2020",
        },
      },
      {
        company: "French Pulp Editions",
        title: "Editeur",
        description:
          "Co-fondateur / 120 ouvrages publiés en tant que directeur littéraire",
        year: {
          start: "2014",
          end: "2019",
        },
      },
      {
        company: "CAL - France",
        title: "Chargé de projet",
        description:
          "Pitch devant jury d’œuvres destinées à l'adaptation audiovisuelle. Selection dans différents festivals internationaux.",
        year: {
          start: "2013",
          end: "2019",
        },
      },
    ],
    formations: [
      {
        title: "",
        shortTitle: "Développeur de site web et d'applications mobile",
        entitled: "Le Reacteur",
        shortEntitled: "Développeur web et mobile",
        description:
          "Formation Javascript, Node, React et React Native. Realisation d'applications web et mobile, back et front.",
        year: "2020",
      },
      {
        title: "",
        shortTitle: "Master Management & Relations Internationales",
        entitled: "Double Curcus GEM & Iris Sup",
        shortEntitled: "Master",
        description:
          "Sujet de mémoire : Gouvernance du cyber-espace & cybersécurité",
        year: "2013 / 2015",
      },
    ],
    skills: [
      {
        categorie: "Langues",
        values: [
          {
            value: "Français",
            level: "Langue maternelle",
            thumbnail: require("../images/fr.png"),
          },
          {
            value: "Anglais",
            level: "Courant",
            thumbnail: require("../images/en.png"),
          },
        ],
      },
      {
        categorie: "Programmation",
        values: [
          { value: "Node.js", thumbnail: require("../images/node.png") },
          { value: "JavaScript", thumbnail: require("../images/js.png") },
          { value: "GIT", thumbnail: require("../images/git.png") },
          { value: "React", thumbnail: require("../images/react.png") },
          {
            value: "React Native",
            thumbnail: require("../images/reactNative.png"),
          },
          { value: "MongoDB", thumbnail: require("../images/mongo.png") },
          { value: "HTML", thumbnail: require("../images/html5.png") },
          { value: "CSS", thumbnail: require("../images/css3.png") },
        ],
      },
    ],
  },
};

export default mathieuSmolarzData;
