export default function SectionMyJourney() {
  return (
    <section className="flex flex-col items-center justify-center w-full h-full">
      <h1 className="text-4xl font-bold">My Journey</h1>
      <div className="flex flex-row items-center justify-center gap-2">
        <div className="flex flex-col items-center justify-center gap-2">
          <h2 className="text-2xl font-bold">2021</h2>
          <p className="text-lg font-light">
            I started my journey as a web developer, I learned a lot of things
            and I created my first projects.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <h2 className="text-2xl font-bold">2022</h2>
          <p className="text-lg font-light">
            I learned a lot of things and I created my first projects.
          </p>
        </div>
      </div>
    </section>
  );
}
