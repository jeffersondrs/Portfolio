import { myJourney } from '@/utils/data';
import Image from 'next/image';

export default function SectionMyJourney() {
  return (
    <section className="flex flex-col items-center justify-center w-full h-full py-10">
      <h1 className="text-xl font-bold mb-4">Minha jornada começou...</h1>
      <p className="text-sm text-center max-w-lg mb-4">
        Alguns momentos importantes da minha jornada, e como tudo começou.
      </p>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical w-full max-w-4xl">
        {myJourney.map((item, index) => (
          <li key={index} className="-mb-2">
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div
              className={`timeline-${index % 2 === 0 ? 'start' : 'end'} mb-10`}
            >
              <time className="font-mono italic">{item.date}</time>
              <div className="text-lg font-black mb-2">{item.title}</div>
              <p className="text-sm">{item.description}</p>
              <Image
                src={item.image}
                alt={`Imagem de ${item.date}`}
                width={500}
                height={300}
                layout="responsive"
                className="shadow object-cover filter mt-2 w-full h-full"
              />
            </div>
            <hr />
          </li>
        ))}
      </ul>
    </section>
  );
}
