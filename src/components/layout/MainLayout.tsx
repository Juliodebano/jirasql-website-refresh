
import { ReactNode } from "react";
import {
  Sidebar,
  SidebarProvider,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
  SidebarInset,
  SidebarGroup,
  SidebarTrigger
} from "@/components/ui/sidebar";
import { Home, Settings, DollarSign, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import ContactForm from "../forms/ContactForm";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const isMobile = useIsMobile();

  const handleToggleSidebar = () => {
    const sidebarTrigger = document.querySelector('[data-sidebar="trigger"]') as HTMLElement;
    if (sidebarTrigger) {
      sidebarTrigger.click();
    }
  };

  return (
    <SidebarProvider defaultOpen={false}>
      <div className="w-full min-h-screen flex">
        <Sidebar variant="sidebar" collapsible="offcanvas">
          <SidebarHeader className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-purple-700 to-indigo-600">
            <div className="flex items-center gap-2">
              <div className="bg-white rounded-full p-1 shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=32&h=32&fit=crop" 
                  alt="JiraSQL Logo" 
                  className="w-7 h-7 rounded-full" 
                />
              </div>
              <h2 className="font-bold text-lg text-white">JiraSQL</h2>
            </div>
            <SidebarTrigger className="text-white hover:bg-white/20" />
          </SidebarHeader>
          <SidebarContent className="bg-gradient-to-b from-indigo-900/90 to-purple-900/90 text-white">
            <SidebarGroup>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild tooltip="Accueil" className="hover:bg-white/10 text-white transition-colors">
                    <Link to="/">
                      <Home className="text-purple-200" />
                      <span>Accueil</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild tooltip="Installation" className="hover:bg-white/10 text-white transition-colors">
                    <Link to="/installation">
                      <Settings className="text-purple-200" />
                      <span>Installation</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild tooltip="Prix" className="hover:bg-white/10 text-white transition-colors">
                    <Link to="/pricing">
                      <DollarSign className="text-purple-200" />
                      <span>Prix</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <SidebarInset>
          <div className="flex flex-col min-h-full">
            <header className="bg-gradient-to-r from-purple-600 to-indigo-600 shadow-md p-4 flex items-center">
              <Button 
                variant="ghost" 
                size="icon"
                className="mr-2 text-white hover:bg-white/20"
                onClick={handleToggleSidebar}
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
              <div className="flex items-center">
                <div className="bg-white rounded-full p-0.5 shadow-sm mr-2">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=24&h=24&fit=crop" 
                    alt="JiraSQL Logo" 
                    className="w-5 h-5 rounded-full" 
                  />
                </div>
                <h1 className="text-xl font-bold text-white">JiraSQL</h1>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                  Documentation
                </Button>
                <Button size="sm" variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-none">
                  Se connecter
                </Button>
              </div>
            </header>
            <div className="flex-grow">
              {children}
            </div>
            <div className="mt-16 bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
              <ContactForm />
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default MainLayout;
