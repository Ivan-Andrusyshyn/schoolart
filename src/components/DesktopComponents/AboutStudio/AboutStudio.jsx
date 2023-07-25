import React from "react";
import "./aboutDesktop.css";
import image1 from "../../../image/gonchar1.jpg";
import image2 from "../../../image/majster-klas-goncharnogo-mystecztva-dlya-dvoh-01.jpg";
const teamMembers = [
  {
    name: "Іван Іванович Іванов",
    position: "Генеральний директор",
    description:
      "Іван Іванович Іванов має багаторічний досвід у сфері управління і розвитку бізнесу. Він відповідає за стратегічне планування та прийняття стратегічних рішень компанії.",
    image: image1,
  },
  {
    name: "Марія Петрівна Сидоренко",
    position: "Маркетинговий директор",
    description:
      "Марія Петрівна Сидоренко - експерт в області маркетингу та реклами. Вона керує всіма маркетинговими ініціативами та забезпечує ефективні маркетингові кампанії компанії.",
    image: image2,
  },
];

const Teams = ({ name, position, description, image }) => {
  return (
    <div className="team-member">
      <div className="member-image">
        <img src={image} alt={name} />
      </div>
      <div className="member-info">
        <h3>{name}</h3>
        <p className="team-position">{position}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export const AboutStudio = () => {
  return (
    <div className="about-section" id="about">
      <h2 className="about-title ">Про нас</h2>
      <div className="team-container">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
          veritatis, commodi ab debitis, facilis ratione maiores rerum
          quibusdam, aspernatur necessitatibus in ipsam odio repellendus sequi
          repudiandae. Corporis quo, dolorum totam iure quis sit accusantium est
          architecto autem recusandae quia cupiditate consectetur laudantium
          asperiores modi voluptates nostrum minima quidem aliquid? Repellendus
          corporis vero velit inventore sed dolor asperiores harum mollitia tur
          expedita in cum at vitae? Iure qui illum tempora similique accusantium
          voluptatibus omnis fugiat in magni corrupti adipisci nihil. Saepe
          iusto nesciunt nulla laboriosam!
        </p>
      </div>
      <h3 className="team-title">Наша команда</h3>

      <div className="team-container">
        {teamMembers.map((member, index) => (
          <Teams
            key={index}
            name={member.name}
            position={member.position}
            image={member.image}
            description={member.description}
          />
        ))}
      </div>
    </div>
  );
};
