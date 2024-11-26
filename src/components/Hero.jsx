import logoImage  from '../assets/images/logo.png'

export function Hero() {
  return (
    <section className="flex hero">
      <div className='flex flex-col gap-5'>
        <h1 className='title1'>EcoTrack</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id sem
          id urna scelerisque placerat non vel lacus. Nam fringilla magna eu
          scelerisque fringilla. Proin id sem id urna scelerisque placerat non
          vel lacus. Nam fringilla magna eu scelerisque fringilla.
        </p>
      </div>
      <div>
        <img src={logoImage} alt="Logo" width={600}/>
      </div>
    </section>
  );
}