
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Database, FileText, Settings, Shield } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const handleDemoRequest = () => {
    toast({
      title: "Demo request received",
      description: "We'll contact you shortly with more information.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
              Execute SQL <span className="text-blue-600">directly from Jira</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              JiraSQL connects your Jira instance to your database, allowing team members to run pre-defined SQL scripts without direct database access.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleDemoRequest}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
              >
                Request a Demo <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <button className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-medium py-3 px-6 rounded-lg transition-colors">
                Learn More
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-white p-2 rounded-xl shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                alt="JiraSQL Interface Preview" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Security First",
                description: "Secured access to database without direct credentials",
                icon: <Shield className="h-8 w-8 text-blue-600" />
              },
              {
                title: "User Friendly",
                description: "No SQL knowledge required for end users",
                icon: <FileText className="h-8 w-8 text-blue-600" />
              },
              {
                title: "Configurable",
                description: "Easily define and parameterize your SQL scripts",
                icon: <Settings className="h-8 w-8 text-blue-600" />
              },
              {
                title: "Data Access",
                description: "Connect to any database through JDBC drivers",
                icon: <Database className="h-8 w-8 text-blue-600" />
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="mb-2">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">How JiraSQL Works</h2>
          <Tabs defaultValue="admin" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="admin">For Administrators</TabsTrigger>
              <TabsTrigger value="users">For End Users</TabsTrigger>
            </TabsList>
            <TabsContent value="admin" className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <ol className="space-y-6">
                <li className="flex gap-4">
                  <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold">1</div>
                  <div>
                    <h3 className="font-medium text-lg">Install the Plugin</h3>
                    <p className="text-slate-600">Install JiraSQL plugin from the Atlassian Marketplace into your Jira instance.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold">2</div>
                  <div>
                    <h3 className="font-medium text-lg">Configure Database Connection</h3>
                    <p className="text-slate-600">Set up database connection details securely in the admin panel.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold">3</div>
                  <div>
                    <h3 className="font-medium text-lg">Define SQL Scripts</h3>
                    <p className="text-slate-600">Create and parameterize SQL queries that users will be able to execute.</p>
                  </div>
                </li>
              </ol>
            </TabsContent>
            <TabsContent value="users" className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <ol className="space-y-6">
                <li className="flex gap-4">
                  <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold">1</div>
                  <div>
                    <h3 className="font-medium text-lg">Access JiraSQL Panel</h3>
                    <p className="text-slate-600">Navigate to the JiraSQL panel in your Jira project.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold">2</div>
                  <div>
                    <h3 className="font-medium text-lg">Choose a Script</h3>
                    <p className="text-slate-600">Select from available pre-defined SQL scripts configured by administrators.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold">3</div>
                  <div>
                    <h3 className="font-medium text-lg">Fill Parameters & Run</h3>
                    <p className="text-slate-600">Enter any required parameters and execute the script to see results instantly.</p>
                  </div>
                </li>
              </ol>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="bg-slate-800 py-16 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "JiraSQL has transformed how our team manages database queries. No more bottlenecks with the database team!",
                author: "Sarah Johnson",
                role: "Project Manager, TechCorp"
              },
              {
                quote: "The ability to run predefined SQL queries directly from Jira has improved our team's productivity significantly.",
                author: "Mark Williams",
                role: "Development Lead, DataSphere"
              },
              {
                quote: "As a database administrator, I love that I can give teams access to the data they need without compromising security.",
                author: "Alex Rodriguez",
                role: "DBA, Enterprise Solutions"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-slate-700 border-none">
                <CardContent className="pt-6">
                  <p className="italic mb-4">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-slate-300 text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to empower your team?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get started with JiraSQL today and streamline your database access workflow.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={handleDemoRequest}
              className="bg-white text-blue-700 hover:bg-blue-50 font-medium py-3 px-8 rounded-lg transition-colors"
            >
              Request a Demo
            </button>
            <button className="bg-transparent hover:bg-blue-700 border border-white text-white font-medium py-3 px-8 rounded-lg transition-colors">
              View Documentation
            </button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">JiraSQL</h3>
              <p className="mb-4">Execute SQL scripts directly from your Jira instance.</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Knowledge Base</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} JiraSQL. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
