import Pill1 from "../../assets/images/pill1.png";
import Pill2 from "../../assets/images/pill2.png";
import Pill3 from "../../assets/images/pill3.png";
import Pill4 from "../../assets/images/pill4.png";
export const SUGGESTIONS_PILLS = [
  {
    id: 0,
    text: "Over the counter drugs",
  },
  {
    id: 1,
    text: "Safe for children",
  },
  {
    id: 2,
    text: "Pregnancy safe",
  },
  {
    id: 3,
    text: "Halal certified",
  },
];


const pills = [Pill1, Pill2, Pill3, Pill4];

// helper → pick a random pill image
const getRandomPill = () => pills[Math.floor(Math.random() * pills.length)];

export const ListItem = [
  {
    id: Date.now() + Math.random(),
    icon: getRandomPill(),
    name: "Delictase",
    unit: "250mg",
    type: "Capsule",
  },
  {
    id: Date.now() + Math.random(),
    icon: getRandomPill(),
    name: "Lariago",
    unit: "250mg",
    type: "Capsule",
  },
  {
    id: Date.now() + Math.random(),
    icon: getRandomPill(),
    name: "Nemocid",
    unit: "250mg",
    type: "Capsule",
  },
  {
    id: Date.now() + Math.random(),
    icon: getRandomPill(),
    name: "Nemocid",
    unit: "250mg",
    type: "Capsule",
  },
  {
    id: Date.now() + Math.random(),
    icon: getRandomPill(),
    name: "Nemocid",
    unit: "250mg",
    type: "Capsule",
  },
  {
    id: Date.now() + Math.random(),
    icon: getRandomPill(),
    name: "Nemocid",
    unit: "250mg",
    type: "Capsule",
  },
  {
    id: Date.now() + Math.random(),
    icon: getRandomPill(),
    name: "Nemocid",
    unit: "250mg",
    type: "Capsule",
  },
  {
    id: Date.now() + Math.random(),
    icon: getRandomPill(),
    name: "Nemocid",
    unit: "250mg",
    type: "Capsule",
  },
  {
    id: Date.now() + Math.random(),
    icon: getRandomPill(),
    name: "Nemocid",
    unit: "250mg",
    type: "Capsule",
  },
  {
    id: Date.now() + Math.random(),
    icon: getRandomPill(),
    name: "Nemocid",
    unit: "250mg",
    type: "Capsule",
  },
  {
    id: Date.now() + Math.random(),
    icon: getRandomPill(),
    name: "Nemocid",
    unit: "250mg",
    type: "Capsule",
  },
  {
    id: Date.now() + Math.random(),
    icon: getRandomPill(),
    name: "Nemocid",
    unit: "250mg",
    type: "Capsule",
  },
  {
    id: Date.now() + Math.random(),
    icon: getRandomPill(),
    name: "Nemocid",
    unit: "250mg",
    type: "Capsule",
  },
  {
    id: Date.now() + Math.random(),
    icon: getRandomPill(),
    name: "Nemocid",
    unit: "250mg",
    type: "Capsule",
  },
  {
    id: Date.now() + Math.random(),
    icon: getRandomPill(),
    name: "Nemocid",
    unit: "250mg",
    type: "Capsule",
  },
  {
    id: Date.now() + Math.random(),
    icon: getRandomPill(),
    name: "Nemocid",
    unit: "250mg",
    type: "Capsule",
  },
];

