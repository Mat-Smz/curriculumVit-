import React from "react";
import "./App.css";

// ICONS
import {
  Smile,
  MessageSquare,
  Phone,
  Map,
  AtSign,
  GitHub,
  Settings,
  PlusCircle,
  Plus,
  Briefcase,
  Award,
  Heart,
  Globe,
} from "react-feather";

// COMPONENTS
import IdPhoto from "./components/IdPhoto";
import Section from "./components/Section";
import IconListItem from "./components/IconListItem";

// DATA
import mathieuSmolarz from "./assets/datas/dataMathieuSmolarz";

function App() {
  return (
    <>
      <aside>
        <IdPhoto />
        <Section title="Qui suis-je ?" icon={<Smile />}>
          <p style={{ textAlign: "justify" }}>
            {mathieuSmolarz.profil.shortDescription}
          </p>
        </Section>

        <Section title="Contact" icon={<MessageSquare />}>
          <ul>
            <IconListItem icon={<Phone />}>
              {mathieuSmolarz.profil.phone}
            </IconListItem>
            <IconListItem icon={<AtSign />}>
              {mathieuSmolarz.profil.email}
            </IconListItem>
            <IconListItem icon={<Map />}>
              {mathieuSmolarz.profil.adress.line1}
              <br />
              {mathieuSmolarz.profil.adress.line2}
            </IconListItem>
            <IconListItem icon={<GitHub />}>
              {mathieuSmolarz.profil.github}
            </IconListItem>
          </ul>
        </Section>

        <Section title="Qualités" icon={<PlusCircle />}>
          <ul>
            {mathieuSmolarz.profil.capacity.map((item) => {
              return (
                <IconListItem key={item} icon={<Plus />}>
                  {item}
                </IconListItem>
              );
            })}
          </ul>
        </Section>

        <Section icon={<Heart />} title={"Hobbies"}>
          <ul style={{ listStyle: "square" }}>
            {mathieuSmolarz.profil.hobbies.map((hobbie) => {
              return (
                <IconListItem key={hobbie} icon={<Plus />}>
                  {hobbie}
                </IconListItem>
              );
            })}
          </ul>
        </Section>
      </aside>
      <main>
        <div>
          <header>
            <h1>
              {mathieuSmolarz.profil.nom} {mathieuSmolarz.profil.prenom}
            </h1>
            <h2>{mathieuSmolarz.profil.title}</h2>
          </header>
        </div>

        <Section title="Expériences" icon={<Briefcase />}>
          {mathieuSmolarz.categories.experiences.map((experience) => {
            return (
              <>
                <h3>
                  {`${experience.company} — ${experience.title} — 
                ${experience.year.start}-${experience.year.end}`}
                </h3>
                <p>{experience.description}</p>
              </>
            );
          })}
        </Section>
        <Section title="Formations" icon={<Award />}>
          {mathieuSmolarz.categories.formations.map((formation) => {
            return (
              <>
                <h3>
                  {`${formation.shortTitle} — ${formation.entitled} — 
                ${formation.year}`}
                </h3>
                <p>{formation.description}</p>
              </>
            );
          })}
        </Section>

        <Section title="Technos" icon={<Settings />}>
          <ul className="twoColumns">
            {mathieuSmolarz.categories.skills[1].values.map((skill) => {
              return (
                <IconListItem
                  key={skill.value}
                  icon={<img src={skill.thumbnail} />}
                >
                  {skill.value}
                </IconListItem>
              );
            })}
          </ul>
        </Section>

        <Section title="Langues" icon={<Globe />}>
          <ul>
            {mathieuSmolarz.categories.skills[0].values.map((langue) => {
              return (
                <IconListItem icon={<img src={langue.thumbnail} />}>
                  {langue.value} : {langue.level}
                </IconListItem>
              );
            })}
          </ul>
        </Section>
      </main>
    </>
  );
}

export default App;
