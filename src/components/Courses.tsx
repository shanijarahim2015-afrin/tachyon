import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, ExternalLink } from "lucide-react";
import devopsImage from "@/assets/devops-course.jpg";
import reactImage from "@/assets/react-course.jpg";
import cloudImage from "@/assets/cloud-course.jpg";

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Complete DevOps Masterclass",
      description: "Master CI/CD, Docker, Kubernetes, Jenkins, and infrastructure automation with hands-on projects.",
      image: devopsImage,
      duration: "12 weeks",
      students: "500+",
      rating: "4.9",
      level: "Intermediate",
      technologies: ["Docker", "Kubernetes", "Jenkins", "AWS", "Terraform"],
      price: "₹15,999",
      features: [
        "Live online classes",
        "Real-world projects",
        "Industry mentorship",
        "Job placement assistance"
      ]
    },
    {
      id: 2,
      title: "React Development Bootcamp",
      description: "Build modern web applications with React, Redux, TypeScript, and Next.js from scratch to deployment.",
      image: reactImage,
      duration: "10 weeks",
      students: "800+",
      rating: "4.8",
      level: "Beginner to Advanced",
      technologies: ["React", "TypeScript", "Next.js", "Redux", "Tailwind"],
      price: "₹12,999",
      features: [
        "Project-based learning",
        "Modern React patterns",
        "Performance optimization",
        "Portfolio development"
      ]
    },
    {
      id: 3,
      title: "Cloud Computing Fundamentals",
      description: "Comprehensive training on AWS, Azure, and Google Cloud with certification preparation.",
      image: cloudImage,
      duration: "8 weeks",
      students: "300+",
      rating: "4.9",
      level: "Beginner",
      technologies: ["AWS", "Azure", "Google Cloud", "Serverless", "Monitoring"],
      price: "₹13,999",
      features: [
        "Multi-cloud approach",
        "Certification guidance",
        "Cost optimization",
        "Security best practices"
      ]
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="courses" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Courses</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive training programs designed to accelerate your career in technology. 
            Learn from industry experts with hands-on projects and real-world applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card 
              key={course.id} 
              className="overflow-hidden hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-fade-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 text-primary">
                    {course.level}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-white">
                    {course.price}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {course.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {course.students}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    {course.rating}
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {course.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Features */}
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  onClick={scrollToContact}
                  className="w-full bg-gradient-primary text-white hover:shadow-glow"
                >
                  Enroll Now
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Can't decide which course is right for you?
          </p>
          <Button 
            variant="outline" 
            size="lg"
            onClick={scrollToContact}
            className="hover:bg-primary hover:text-white"
          >
            Get Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Courses;