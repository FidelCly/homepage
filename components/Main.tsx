export default function Main() {
  return (
    <section className="text-gray-600 body-font">
      <div className="flex flex-col items-center px-5 py-24 mx-auto max-w-7xl md:flex-row">
        <div className="flex flex-col items-center pt-6 mb-40 text-center lg:flex-grow md:w-1/2 md:ml-24 md:items-start md:text-left">
          <h1 className="items-center mb-5 text-5xl text-green-400 sm:text-6xl Avenir xl:w-2/2">
            La fidelite sans tracas
          </h1>
          <p className="mb-4 text-lg text-gray-600 xl:w-3/4">
            Fidecly est une application qui vous permet de gérer vos cartes de
            fidélité en un seul endroit. Vous pouvez également découvrir de
            d'obtenir des analyses sur les habitudes de vos clients.
          </p>
          <div className="flex justify-center">
            <a
              className="inline-flex items-center px-5 py-3 mt-2 font-medium text-gray-600 transition duration-500 ease-in-out transform bg-transparent bg-green-400 border rounded-lg"
              href="/"
            >
              <span className="justify-center">Apprenez en plus</span>
            </a>
          </div>
        </div>
        <div className="mb-0 mr-48 xl:mr-44 sm:mr-0 sm:mb-28 lg:mb-0 md:pl-10">
          <img
            className="ml-24 w-80 md:ml-1"
            alt="iPhone-12"
            src="/images/iPhone-13.png"
          ></img>
        </div>
      </div>
      <section className="mx-auto">
        <div className="container px-5 mx-auto lg:px-24 ">
          <div className="flex flex-col w-full mb-4 text-left lg:text-center">
            <h1 className="mb-8 text-2xl font-semibold text-black Avenir">
              Nos partenaires de confiance
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-16 mb-16 text-center lg:grid-cols-1">
            <div className="flex items-center justify-center">
              <img
                src="/images/etna-logo-2-quadri.png"
                alt="etna Logo"
                className="block object-contain h-16 greyC"
              ></img>
            </div>
          </div>
        </div>
      </section>
      <div className="pt-20 mx-auto text-center grr max-w-7xl">
        <h1 className="mb-8 text-6xl font-semibold text-green-400 Avenir">
          Optimiser votre fidelite
        </h1>
        <h1 className="mb-8 text-2xl font-semibold text-center text-gray-600 Avenir">
          Support d'analyse de données pour les entreprises avec possibilite de campagne d'email ciblee.
        </h1>
        <div className="container flex flex-col items-center justify-center mx-auto rounded-lg ">
          <img
            className="object-cover object-center w-3/4 mb-10 border rounded-lg shadow-md g327"
            alt="Placeholder Image"
            src="./images/Tableau de bord.png"
          ></img>
        </div>
      </div>
      <section className="relative">
        <div className="max-w-6xl px-4 mx-auto text-center sm:px-6">
          <div className="py-24 md:py-36">
            <h1 className="mb-5 text-6xl font-semibold text-green-400 Avenir">
              Inscrivez-vous pour recevoir nos newsletters
            </h1>
            <h1 className="text-2xl font-semibold text-gray-600 mb-9">
              Entrer votre email pour recevoir nos newsletters
            </h1>
            <input
              placeholder="jack@example.com"
              name="email"
              type="email"
              autoComplete="email"
              className="w-1/4 py-3 pl-2 pr-2 mt-2 font-semibold text-gray-800 border border-gray-600 rounded-md hover:border-gray-900"
            ></input>{" "}
            <a
              className="inline-flex items-center py-3 mt-2 ml-2 font-medium text-gray-600 transition duration-500 ease-in-out transform bg-transparent bg-green-400 border rounded-lg px-14"
              href="/"
            >
              <span className="justify-center">S'inscire</span>
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}
