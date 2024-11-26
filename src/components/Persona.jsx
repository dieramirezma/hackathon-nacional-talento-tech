/* eslint-disable react/prop-types */
export function Persona({ name, description, photo}) {
  return (
    <div className="flex flex-col items-center gap-4">
      <img src={photo} alt={name} className="w-32 h-32 rounded-full" />
      <div className="flex flex-col gap-3">
        <h3 className="title3">{name}</h3>
        <p className="text-center">{description}</p>
      </div>
    </div>
  )
}