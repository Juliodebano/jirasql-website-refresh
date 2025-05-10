
import MainLayout from "@/components/layout/MainLayout";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Installation = () => {
  return (
    <MainLayout>
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">
            Guide d'installation
          </h1>
          <p className="text-lg text-gray-600 mb-10 text-center">
            Suivez notre tutoriel vidéo pour installer et configurer JiraSQL rapidement
          </p>
          
          <div className="rounded-lg overflow-hidden shadow-lg mb-12">
            <AspectRatio ratio={16 / 9}>
              <iframe
                src="https://www.youtube.com/embed/6ULVnQ9Qpas?list=TLGG1g6LeOxtD5cxMDA1MjAyNQ"
                title="Guide d'installation JiraSQL"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </AspectRatio>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Étapes d'installation</h2>
            <ol className="list-decimal space-y-4 ml-6">
              <li className="text-gray-700">
                <span className="font-medium text-gray-900">Téléchargement du plugin</span> - 
                Téléchargez la dernière version du plugin depuis notre site.
              </li>
              <li className="text-gray-700">
                <span className="font-medium text-gray-900">Installation dans Jira</span> - 
                Suivez les étapes d'installation dans le panneau d'administration de Jira.
              </li>
              <li className="text-gray-700">
                <span className="font-medium text-gray-900">Configuration</span> - 
                Configurez l'accès à votre base de données et les permissions.
              </li>
              <li className="text-gray-700">
                <span className="font-medium text-gray-900">Premier script</span> - 
                Créez et exécutez votre premier script SQL.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Installation;
