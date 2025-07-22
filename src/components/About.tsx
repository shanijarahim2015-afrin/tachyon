import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Clock, TrendingUp, Target, Heart } from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: Users,
      value: "2000+",
      label: "Students Trained",
      description: "Successfully trained students from 15+ countries"
    },
    {
      icon: Award,
      value: "95%",
      label: "Success Rate",
      description: "Students successfully completing our programs"
    },
    {
      icon: Clock,
      value: "500+",
      label: "Hours Content",
      description: "Comprehensive curriculum with practical projects"
    },
    {
      icon: TrendingUp,
      value: "85%",
      label: "Job Placement",
      description: "Students placed in top tech companies"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Practical Learning",
      description: "Focus on hands-on experience with real-world projects and industry-standard tools."
    },
    {
      icon: Users,
      title: "Expert Mentorship",
      description: "Learn from seasoned professionals with years of industry experience."
    },
    {
      icon: Heart,
      title: "Student Success",
      description: "Dedicated to your growth with personalized support and career guidance."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">About Us</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Empowering <span className="bg-gradient-primary bg-clip-text text-transparent">Tech Careers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            DevOps Training Centre is dedicated to providing world-class technical education 
            that bridges the gap between academic learning and industry requirements.
          </p>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="text-center p-6 hover:shadow-card transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2">{stat.value}</h3>
                <p className="font-semibold mb-2">{stat.label}</p>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              To democratize quality technical education by providing accessible, practical, 
              and industry-relevant training programs. We believe that with the right guidance 
              and hands-on experience, anyone can build a successful career in technology.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              Our live online format ensures that geographical boundaries don't limit access 
              to world-class education. Whether you're a fresh graduate or an experienced 
              professional looking to upskill, we're here to support your journey.
            </p>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold mb-6">Why Choose Our Training?</h3>
            
            <div className="space-y-6">
              {values.map((value, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <value.icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{value.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Approach */}
        <Card className="p-8 bg-gradient-secondary border-none animate-fade-in">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Our Teaching Approach</h3>
            <p className="text-muted-foreground">
              We combine theoretical knowledge with practical application to ensure comprehensive learning
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h4 className="font-semibold mb-2">Learn</h4>
              <p className="text-sm text-muted-foreground">
                Interactive live sessions with expert instructors and comprehensive course materials
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h4 className="font-semibold mb-2">Practice</h4>
              <p className="text-sm text-muted-foreground">
                Hands-on projects and real-world scenarios to reinforce your learning
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h4 className="font-semibold mb-2">Apply</h4>
              <p className="text-sm text-muted-foreground">
                Job placement assistance and portfolio development for career success
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;