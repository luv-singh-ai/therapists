import React from 'react';

const PersonaLinkTree = () => {
  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '40px',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    padding: '20px',
  };

  const cardStyle = {
    backgroundColor: 'white',
    border: '1px solid #e0e0e0',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  };

  const titleStyle = {
    color: '#2c3e50',
    fontSize: '20px',
    marginBottom: '10px',
  };

  const descriptionStyle = {
    color: '#666',
    fontSize: '14px',
    marginBottom: '15px',
  };

  const tagsContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginBottom: '15px',
  };

  const tagStyle = {
    backgroundColor: '#e3f2fd',
    color: '#1976d2',
    padding: '5px 10px',
    borderRadius: '15px',
    fontSize: '12px',
  };

  const buttonStyle = {
    backgroundColor: '#1976d2',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    width: '100%',
    cursor: 'pointer',
    fontSize: '14px',
  };

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
      tags: ["Depression", "Cultural Pressure", "Female"]
    },
    {
      name: "Sanket Sharma",
      description: "23-year-old Chemical Engineering student from Mumbai dealing with identity struggles and bullying",
      link: "https://gooey.ai/chat/sukoon-persona-bot-G4Z/",
      tags: ["Depression", "Identity", "Male"]
    },
    {
      name: "Manasvi Kaur",
      description: "20-year-old Electrical Engineering student from Jharkhand facing isolation and language barriers",
      link: "https://gooey.ai/chat/sukoon-persona-ZGz/",
      tags: ["Anxiety", "Social Isolation", "Female"]
    }
  ];

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h1 style={{ color: '#2c3e50', marginBottom: '10px' }}>Sukoon Persona Chatbots</h1>
        <p style={{ color: '#666' }}>Practice conversations with diverse student personas</p>
      </div>

      <div style={gridStyle}>
        {personas.map((persona) => (
          <div key={persona.name} style={cardStyle}>
            <h2 style={titleStyle}>{persona.name}</h2>
            <p style={descriptionStyle}>{persona.description}</p>
            
            <div style={tagsContainerStyle}>
              {persona.tags.map((tag) => (
                <span key={tag} style={tagStyle}>
                  {tag}
                </span>
              ))}
            </div>
            
            <button 
              style={buttonStyle}
              onClick={() => window.open(persona.link, '_blank')}
            >
              Chat with {persona.name.split(' ')[0]}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonaLinkTree;