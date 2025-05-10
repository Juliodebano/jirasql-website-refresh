
import MainLayout from "@/components/layout/MainLayout";

const Index = () => {
  return (
    <MainLayout>
      {/* Contenu existant de la page d'accueil */}
      <div className="container mx-auto py-12">
        {/* Hero section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-16">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Simplifiez vos requêtes SQL directement dans Jira
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              JiraSQL permet à vos utilisateurs d'exécuter des requêtes SQL prédéfinies 
              directement depuis Jira sans accès direct à la base de données. 
              Sécurisé, simple et puissant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors">
                Demander une démo
              </button>
              <button className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg shadow-lg hover:bg-gray-50 transition-colors">
                En savoir plus
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="/jira-sql-dashboard.png" 
              alt="JiraSQL Dashboard" 
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
        
        {/* Features section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Pourquoi choisir JiraSQL ?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sécurité renforcée</h3>
              <p className="text-gray-600">
                Exécutez des requêtes SQL sans donner un accès direct à la base de données. 
                Contrôlez qui peut exécuter quelles requêtes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Productivité améliorée</h3>
              <p className="text-gray-600">
                Fournissez aux équipes les données dont elles ont besoin sans passer par 
                l'équipe technique pour chaque requête.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Intégration native</h3>
              <p className="text-gray-600">
                S'intègre parfaitement à l'interface de Jira pour une expérience utilisateur fluide 
                et sans interruption.
              </p>
            </div>
          </div>
        </div>
        
        {/* How it works section */}
        <div className="bg-gray-50 py-16 px-4 rounded-xl mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Comment ça fonctionne
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Pour les administrateurs</h3>
                <ol className="list-decimal space-y-3 ml-5">
                  <li className="text-gray-700">Installer le plugin JiraSQL</li>
                  <li className="text-gray-700">Configurer la connexion à la base de données</li>
                  <li className="text-gray-700">Créer des requêtes SQL prédéfinies avec des variables</li>
                  <li className="text-gray-700">Définir les permissions d'accès aux requêtes</li>
                </ol>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Pour les utilisateurs</h3>
                <ol className="list-decimal space-y-3 ml-5">
                  <li className="text-gray-700">Accéder aux requêtes autorisées dans l'interface Jira</li>
                  <li className="text-gray-700">Remplir les variables requises (le cas échéant)</li>
                  <li className="text-gray-700">Exécuter la requête avec un simple clic</li>
                  <li className="text-gray-700">Visualiser ou exporter les résultats</li>
                </ol>
              </div>
            </div>
            
            <div className="text-center">
              <img 
                src="/workflow-diagram.png" 
                alt="JiraSQL Workflow" 
                className="mx-auto rounded-lg shadow-lg max-w-full"
              />
            </div>
          </div>
        </div>
        
        {/* Testimonials section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Ce que nos clients disent
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">JD</span>
                </div>
                <div>
                  <h4 className="font-semibold">Jean Dupont</h4>
                  <p className="text-sm text-gray-600">Responsable IT, TechCorp</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "JiraSQL nous a permis de donner accès aux données essentielles tout en maintenant un 
                contrôle strict sur les requêtes exécutées. Une solution élégante à un problème complexe."
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">SM</span>
                </div>
                <div>
                  <h4 className="font-semibold">Sophie Martin</h4>
                  <p className="text-sm text-gray-600">Chef de Projet, DataViz</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "L'intégration dans Jira est parfaite. Nos analystes peuvent maintenant obtenir leurs données 
                sans attendre l'équipe technique, ce qui a considérablement accéléré nos cycles."
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">PL</span>
                </div>
                <div>
                  <h4 className="font-semibold">Pierre Leblanc</h4>
                  <p className="text-sm text-gray-600">DBA, SecurBank</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "En tant qu'administrateur de base de données, j'apprécie le contrôle fin sur les requêtes 
                accessibles. La sécurité n'est plus un frein à l'accès aux données."
              </p>
            </div>
          </div>
        </div>
        
        {/* CTA section */}
        <div className="bg-blue-600 text-white py-16 px-4 rounded-xl text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à simplifier l'accès à vos données ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Rejoignez des centaines d'entreprises qui utilisent JiraSQL pour améliorer leur productivité
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-white text-blue-600 rounded-lg shadow-lg hover:bg-gray-100 transition-colors text-lg font-medium">
              Demander une démo
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors text-lg font-medium">
              Télécharger
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
