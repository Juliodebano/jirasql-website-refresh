
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

  return (
    <SidebarProvider defaultOpen={false}>
      <div className="w-full min-h-screen flex">
        <Sidebar variant="sidebar" collapsible="offcanvas">
          <SidebarHeader className="flex items-center justify-between px-4 py-2">
            <div className="flex items-center gap-2">
              <img 
                src="/logo-jirasql.png" 
                alt="JiraSQL Logo" 
                className="w-8 h-8" 
              />
              <h2 className="font-bold text-lg">JiraSQL</h2>
            </div>
            <SidebarTrigger />
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild tooltip="Accueil">
                    <Link to="/">
                      <Home />
                      <span>Accueil</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild tooltip="Installation">
                    <Link to="/installation">
                      <Settings />
                      <span>Installation</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild tooltip="Prix">
                    <Link to="/pricing">
                      <DollarSign />
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
            <header className="bg-white shadow-sm p-4 flex items-center">
              <Button 
                variant="ghost" 
                size="icon"
                className="mr-2"
                onClick={() => document.querySelector('[data-sidebar="trigger"]')?.click()}
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
              <h1 className="text-xl font-semibold">JiraSQL</h1>
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
