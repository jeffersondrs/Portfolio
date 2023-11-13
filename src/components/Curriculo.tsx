import Link from 'next/link';

export default function Home() {
  async function downloadCurriculoEnglish() {
    try {
      const response = await fetch(
        'https://portfolio-backend-2pwo.onrender.com/curriculoenglish',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      if (!response.ok) {
        throw new Error('Erro ao fazer o download do currículo em inglês.');
      }

      const contentDisposition = response.headers.get('Content-Disposition');
      const fileName = contentDisposition
        ? contentDisposition.split('filename=')[1]
        : 'curriculo_ingles.pdf';

      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error(error);
    }
  }

  async function downloadCurriculoPortugues() {
    try {
      const response = await fetch('https://portfolio-backend-2pwo.onrender.com/curriculoptbr', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Erro ao fazer o download do currículo em portiguês.');
      }

      const contentDisposition = response.headers.get('Content-Disposition');
      const fileName = contentDisposition
        ? contentDisposition.split('filename=')[1]
        : 'Curriculo-português.pdf';

      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="flex flex-row items-center justify-center gap-2 ">
      <button
        onClick={downloadCurriculoEnglish}
        className="w-40 flex flex-row items-center justify-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200 ease-in-out"
      >
        Currículo <br />em inglês
      </button>
      <button
        onClick={downloadCurriculoPortugues}
        className="w-40 flex flex-row items-center justify-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200 ease-in-out"
      >
       Currículo < br/> em português
      </button>
    </div>
  );
}
