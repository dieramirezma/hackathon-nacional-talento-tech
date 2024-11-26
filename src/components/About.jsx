import diegoImage from '../assets/images/Personas/diego.png'
import danielaImage from '../assets/images/Personas/daniela.png'
import johnImage from '../assets/images/Personas/john.png'
import erikaImage from '../assets/images/Personas/erika.jpg'
import { Persona } from './Persona'

export function About() {
  const personas = [
    {
      name: "Diego",
      description: 'Frontend',
      photo: diegoImage
    },
    {
      name: "Daniela",
      description: 'Data Analyst',
      photo: danielaImage
    },
    {
      name: "John",
      description: 'Data Analyst',
      photo: johnImage
    },
    {
      name: "Erika",
      description: 'Backend',
      photo: erikaImage
    }
  ]

  return (
    <section id="about" className="flex flex-col gap-5">
      <h2 className="title1">Nosotros</h2>
      <div className="flex justify-evenly gap-10">
        {personas.map((persona, index) => (
          <Persona key={index} {...persona} />
        ))}
      </div>
    </section>
  );
}