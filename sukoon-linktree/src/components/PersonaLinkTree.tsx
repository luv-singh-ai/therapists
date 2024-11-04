import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, MessageCircle, Users, BookOpen } from 'lucide-react';

const PersonaLinkTree = () => {
  const personas = [
    {
      name: "Rohan Mehta",
      description: "21-year-old Computer Science student from Mumbai dealing with anxiety and academic pressure",
      link: "https://gooey.ai/chat/sukoon-persona-bot-G4Z/",
      // tags: ["Anxiety", "Academic Stress", "Male"]
    },
    {
      name: "Aisha Khan",
      description: "22-year-old Mechanical Engineering student from Delhi struggling with depression and cultural expectations",
      link: "https://gooey.ai/chat/sukoon-persona-Vr7/",
      // tags: ["Stress", "Cultural Pressure", "Female"]
    },
    {
      name: "Sanket Sharma",
      description: "23-year-old Chemical Engineering student from Mumbai dealing with identity struggles and bullying",
      link: "https://gooey.ai/chat/sukoon-persona-bot-G4Z/",
      // tags: ["Loneliness", "Identity", "Male"]
    },
    {
      name: "Manasvi Kaur",
      description: "20-year-old Electrical Engineering student from Jharkhand facing isolation and language barriers",
      link: "https://gooey.ai/chat/sukoon-persona-ZGz/",
      // tags: ["Anxiety", "Social Isolation", "Female"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto p-4 md:p-8 space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Sukoon Persona Chatbots
          </h1>
          <p className="text-gray-600 text-lg">Practice conversations with diverse student personas</p>
          
          {/* Features Section */}
          <div className="flex flex-col md:flex-row justify-center md:space-x-8 space-y-4 md:space-y-0 mt-8">
            <div className="flex items-center justify-center bg-white p-3 rounded-lg shadow-sm">
              <MessageCircle className="w-5 h-5 mr-2 text-blue-600" />
              <span className="text-gray-700">Interactive Chat</span>
            </div>
            <div className="flex items-center justify-center bg-white p-3 rounded-lg shadow-sm">
              <Users className="w-5 h-5 mr-2 text-purple-600" />
              <span className="text-gray-700">Diverse Backgrounds</span>
            </div>
            <div className="flex items-center justify-center bg-white p-3 rounded-lg shadow-sm">
              <BookOpen className="w-5 h-5 mr-2 text-indigo-600" />
              <span className="text-gray-700">Student Focus</span>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {personas.map((persona) => (
            <Card key={persona.name} className="hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-2 border-transparent hover:border-blue-100">
              <CardHeader>
                <CardTitle className="text-xl text-blue-800">{persona.name}</CardTitle>
                <CardDescription className="text-gray-600">{persona.description}</CardDescription>
              </CardHeader>
              {/* <CardContent>
                <div className="flex flex-wrap gap-2">
                  {persona.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-800 text-sm px-3 py-1 rounded-full border border-blue-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent> */}
              <CardFooter>
                <Button 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300" 
                  onClick={() => window.open(persona.link, '_blank')}
                >
                  Chat with {persona.name.split(' ')[0]}
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonaLinkTree;