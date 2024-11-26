/* eslint-disable react/prop-types */
export function Card({ title, description, image }) {
  return (
    <div className="flex flex-col w-1/3 gap-4 border-2 rounded-3xl border-agroGreen-medium p-2">
      <img src={image} alt={title} />
      <div>
        <h3 className="title3">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
