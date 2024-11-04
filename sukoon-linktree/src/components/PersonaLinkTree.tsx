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
      tags: ["Anxiety", "Academic Stress", "Male"]
    },
    {
      name: "Aisha Khan",
      description: "22-year-old Mechanical Engineering student from Delhi struggling with depression and cultural expectations",
      link: "https://gooey.ai/chat/sukoon-persona-Vr7/",
      tags: ["Stress", "Cultural Pressure", "Female"]
    },
    {
      name: "Sanket Sharma",
      description: "23-year-old Chemical Engineering student from Mumbai dealing with identity struggles and bullying",
      link: "https://gooey.ai/chat/sukoon-persona-bot-G4Z/",
      tags: ["Loneliness", "Identity", "Male"]
    },
    {
      name: "Manasvi Kaur",
      description: "20-year-old Electrical Engineering student from Jharkhand facing isolation and language barriers",
      link: "https://gooey.ai/chat/sukoon-persona-ZGz/",
      tags: ["Anxiety", "Social Isolation", "Female"]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">Sukoon Persona Chatbots</h1>
        <p className="text-gray-600">Practice conversations with diverse student personas</p>
        <div className="flex justify-center space-x-4">
          <div className="flex items-center">
            <MessageCircle className="w-4 h-4 mr-2" />
            <span>Interactive Chat</span>
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-2" />
            <span>Diverse Backgrounds</span>
          </div>
          <div className="flex items-center">
            <BookOpen className="w-4 h-4 mr-2" />
            <span>Student Focus</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {personas.map((persona) => (
          <Card key={persona.name} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{persona.name}</CardTitle>
              <CardDescription>{persona.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {persona.tags.map((tag) => (
                  <span key={tag} className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full flex items-center justify-center" 
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
  );
};

export default PersonaLinkTree;