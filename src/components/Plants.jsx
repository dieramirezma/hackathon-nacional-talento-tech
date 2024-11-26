import plant from "../assets/images/plant.png";
import { Card } from "./Card";

export function Plants() {
  const plants = [
    {
      title: "Plant 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id sem id urna scelerisque placerat non vel lacus. Nam fringilla magna eu scelerisque fringilla.",
      image: plant,
    },
    {
      title: "Plant 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id sem id urna scelerisque placerat non vel lacus. Nam fringilla magna eu scelerisque fringilla. ",
      image: plant,
    },
  ];
  return (
    <section className="flex flex-col gap-5" id="plants">
      <h2 className="title1">Plants</h2>
      <div className="flex justify-evenly gap-10">
        {plants.map((plant, index) => (
          <Card key={index} {...plant} />
        ))}
      </div>
    </section>
  );
}