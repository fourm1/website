import {NextPage} from "next";

const modules = [
  { name: 'Quiz de drapeaux', path: 'quiz-flags' },
  { name: 'Recettes de cuisine', path: 'recipes' },
  { name: 'Blind test musical', path: 'blind-test' },
  { name: 'Convertisseur de devises', path: 'currency-converter' },
  { name: 'Générateur de tournoi Counter-Strike', path: 'csgo-tournament-generator' },
  { name: 'Gestionnaire de notes scolaires', path: 'school-grades-manager' },
];

const Home: NextPage = () => {
  return (
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center my-8">Modules</h1>
        <ul className="space-y-4">
          {modules.map((module) => (
              <li key={module.path}>
                <a href={module.path} className="block p-4 bg-gray-100 rounded-lg shadow hover:bg-gray-200 transition">{module.name}</a>
              </li>
          ))}
        </ul>
      </div>
  );
};

export default Home;
