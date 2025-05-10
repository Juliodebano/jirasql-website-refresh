
import MainLayout from "@/components/layout/MainLayout";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Pricing = () => {
  const { toast } = useToast();
  
  const handlePurchaseClick = () => {
    toast({
      title: "Formulaire de commande",
      description: "Le formulaire de commande va s'ouvrir prochainement.",
    });
  };
  
  return (
    <MainLayout>
      <div className="container mx-auto py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 text-gray-900">Tarification simple et transparente</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choisissez l'option qui convient le mieux à vos besoins
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Option Licence Standard */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 bg-blue-50">
                <h3 className="text-xl font-bold text-gray-900">Licence Standard</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold text-gray-900">100€</span>
                  <span className="ml-1 text-gray-600">/licence</span>
                </div>
                <p className="mt-2 text-sm text-gray-600">Idéal pour les petites équipes</p>
              </div>
              
              <div className="p-6 border-t border-gray-200">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="ml-3 text-gray-700">Accès complet au plugin JiraSQL</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="ml-3 text-gray-700">Mises à jour mineures gratuites</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="ml-3 text-gray-700">Documentation complète</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="ml-3 text-gray-700">Licence perpétuelle</p>
                  </li>
                </ul>
              </div>
              
              <div className="px-6 py-8 border-t border-gray-200 bg-gray-50">
                <Button 
                  onClick={handlePurchaseClick}
                  className="w-full"
                >
                  Commander maintenant
                </Button>
              </div>
            </div>
            
            {/* Option Premium avec Support */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-blue-500">
              <div className="p-6 bg-blue-100">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-gray-900">Premium avec Support</h3>
                  <span className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    RECOMMANDÉ
                  </span>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold text-gray-900">200€</span>
                  <span className="ml-1 text-gray-600">/licence</span>
                </div>
                <p className="mt-2 text-sm text-gray-600">Support prioritaire inclus</p>
              </div>
              
              <div className="p-6 border-t border-gray-200">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="ml-3 text-gray-700">Tout ce qui est inclus dans la licence standard</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="ml-3 text-gray-700">Support technique prioritaire (48h)</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="ml-3 text-gray-700">Mises à jour majeures gratuites pendant 1 an</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="ml-3 text-gray-700">Session de configuration à distance (1h)</p>
                  </li>
                </ul>
              </div>
              
              <div className="px-6 py-8 border-t border-gray-200 bg-gray-50">
                <Button 
                  onClick={handlePurchaseClick}
                  className="w-full"
                  variant="default"
                >
                  Commander maintenant
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Pricing;
