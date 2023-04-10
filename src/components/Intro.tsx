import Image from 'next/image'

export default function Intro() {
  return (
    <section
      id="home"
      className="flex flex-col justify-center items-center text-primary-content"
    >
      <Image
        className="mt-10 bg-glass w-72 aspect-square rounded-full"
        src="/images/profile.webp"
        alt="ShrJamal Profile"
        width="288"
        height="288"
        priority
      />
      <h1 className="mt-4 text-4xl text-center text-primary-content">
        Jamal ASAHRAOUI
      </h1>
      <h2 className="text-lg font-thin ">Self-taught Full Stack Developer</h2>
    </section>
  )
}
