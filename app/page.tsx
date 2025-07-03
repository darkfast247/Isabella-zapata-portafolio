"use client"

import { ArrowDown, Mail, Linkedin, ExternalLink, Crown, Heart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Portfolio() {
  // 🖼️ CONFIGURACIÓN DE IMÁGENES
  // Simplemente cambia estas rutas por las de tus imágenes en la carpeta public/images/
  const images = {
    // Foto de la diseñadora (recomendado: 500x500px)
    designer: "/images/designer.jpg",

    // Imágenes de proyectos (recomendado: 600x400px)
    projects: {
      project1: "/images/projects/haru-autenticidad.png",
      project2: "/images/projects/gdsc-futuro-distopico.png",
      project3: "/images/projects/saranghae-kpop.png",
      project4: "/images/projects/divinidad-femenina.png",
      project5: "/images/projects/insumision-punk.png",
    },
  }

  const projects = [
    {
      id: 1,
      title: "HARU",
      description:
        "Proyecto de moda que empodera a jóvenes a través de prendas que promueven la autoexpresión, autenticidad y libertad. Un movimiento que rompe normas tradicionales, ofreciendo ropa que refleja identidad personal sin etiquetas. Inspirado en rebeldía auténtica, inclusión y creatividad, conecta con una comunidad diversa creando diseños que hablan por quienes los usan.",
      image: images.projects.project1,
      category: "Conceptual",
      year: "2024",
    },
    {
      id: 2,
      title: "GDSC",
      description:
        "Colección de ropa interior y vestidos de baño inspirada en un futuro distópico donde la humanidad convive con tecnología y seres de otros mundos. Explora la expresión de identidad en una era hiperconectada, usando transparencias, amarres y texturas que fusionan lo humano con lo digital. Para quienes desean destacar en cualquier universo desde su autenticidad.",
      image: images.projects.project2,
      category: "Futurista",
      year: "2024",
    },
    {
      id: 3,
      title: "SARANGHAE",
      description:
        "Colección que nace del deseo de entender cómo los adolescentes buscan identidad y pertenencia en una etapa de cambios. Inspirada en el K-pop, canaliza esa necesidad de expresión y conexión a través de una estética vibrante y emocional, reflejando cómo la música y moda se convierten en herramientas para descubrir quiénes son.",
      image: images.projects.project3,
      category: "K-Culture",
      year: "2024",
    },
    {
      id: 4,
      title: "DIVINIDAD FEMENINA",
      description:
        "Diseño de prendas que mejoran el desempeño de bailarines de tango, reduciendo humedad y transpiración mediante textiles funcionales. Incorpora patrones no convencionales y técnicas creativas de ajuste y sujeción que brindan mayor comodidad, libertad de movimiento y una estética innovadora para la danza.",
      image: images.projects.project4,
      category: "Deportivo",
      year: "2024",
    },
    {
      id: 5,
      title: "INSUMISIÓN",
      description:
        "Colección que usa la estética punk como herramienta de protesta contra la censura y normas sociales. A través de diseños crudos y expresivos, refleja la lucha por la autenticidad y libertad del cuerpo en un entorno que impone límites. Una declaración visual de resistencia y autodeterminación.",
      image: images.projects.project5,
      category: "Punk/Activismo",
      year: "2024",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-silver">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black animate-gradient-shift"></div>

        {/* Westwood-inspired Animated Pattern Background */}
        <div className="absolute inset-0 opacity-20 animate-pattern-drift">
          <div
            className="absolute inset-0 animate-pattern-pulse"
            style={{
              backgroundImage: `
                linear-gradient(45deg, rgba(139, 92, 246, 0.1) 25%, transparent 25%),
                linear-gradient(-45deg, rgba(139, 92, 246, 0.1) 25%, transparent 25%),
                linear-gradient(45deg, transparent 75%, rgba(192, 192, 192, 0.05) 75%),
                linear-gradient(-45deg, transparent 75%, rgba(192, 192, 192, 0.05) 75%)
              `,
              backgroundSize: "20px 20px",
              backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
            }}
          ></div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-10 left-10 text-purple-400/30 animate-float-crown">
          <Crown className="w-12 h-12 animate-spin-slow" />
        </div>
        <div className="absolute top-20 right-20 text-silver/20 animate-twinkle">
          <Star className="w-8 h-8 animate-pulse-star" />
        </div>
        <div className="absolute bottom-20 left-20 text-purple-400/20 animate-heartbeat">
          <Heart className="w-10 h-10" />
        </div>
        <div className="absolute top-1/3 right-10 text-silver/15 animate-float-reverse">
          <Crown className="w-6 h-6 animate-spin-reverse" />
        </div>
        <div className="absolute bottom-1/3 left-10 text-purple-400/15 animate-drift">
          <Star className="w-5 h-5 animate-sparkle" />
        </div>

        {/* Animated Ornamental Borders */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent animate-border-glow"></div>
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-silver/50 to-transparent animate-border-glow-reverse"></div>

        <div className="relative z-10 text-center px-4 animate-hero-entrance">
          {/* Decorative Crown Above Name */}
          <div className="mb-6 flex justify-center animate-crown-entrance">
            <div className="relative">
              <Crown className="w-16 h-16 text-purple-400 mx-auto mb-4 animate-crown-glow" />
              <div className="absolute -top-2 -left-2 w-4 h-4 border-2 border-silver/30 rounded-full animate-orbit"></div>
              <div className="absolute -top-1 -right-3 w-3 h-3 border-2 border-purple-400/50 rounded-full animate-orbit-reverse"></div>
            </div>
          </div>

          <div className="mb-8 relative animate-name-reveal">
            {/* Ornamental Frame */}
            <div className="absolute -inset-8 border border-purple-500/20 rounded-lg animate-frame-glow"></div>
            <div className="absolute -inset-4 border border-silver/10 rounded-lg animate-frame-glow-delay"></div>

            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-silver via-purple-400 to-silver bg-clip-text text-transparent relative animate-text-shimmer">
              ISABELLA
              {/* Decorative Flourishes */}
              <span className="absolute -top-4 -left-4 text-purple-400/30 text-2xl animate-flourish-left">❦</span>
              <span className="absolute -top-4 -right-4 text-silver/30 text-2xl animate-flourish-right">❦</span>
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-purple-400 relative animate-subtitle-slide">
              ZAPATA LONDOÑO
              {/* Victorian-style ornaments */}
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-silver/40 text-lg animate-diamond-spin">
                ◆
              </span>
            </h2>
          </div>

          <div className="relative animate-content-fade-up">
            {/* Ornamental Divider */}
            <div className="flex items-center justify-center mb-8 animate-divider-expand">
              <div className="w-16 h-0.5 bg-purple-500 animate-line-grow"></div>
              <Crown className="w-6 h-6 text-purple-400 mx-4 animate-crown-pulse" />
              <div className="w-16 h-0.5 bg-purple-500 animate-line-grow-reverse"></div>
            </div>

            <p className="text-xl md:text-2xl text-silver/80 mb-8 font-light tracking-wider relative animate-title-glow">
              DISEÑADORA DE VESTUARIO
              {/* Punk-style decorations */}
              <span className="absolute -left-8 top-1/2 transform -translate-y-1/2 text-purple-400/40 animate-lightning-left">
                ⚡
              </span>
              <span className="absolute -right-8 top-1/2 transform -translate-y-1/2 text-purple-400/40 animate-lightning-right">
                ⚡
              </span>
            </p>

            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-8 relative animate-line-pulse">
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-silver rounded-full animate-dot-pulse"></div>
            </div>

            <p className="text-lg text-silver/60 max-w-2xl mx-auto leading-relaxed italic animate-quote-fade">
              "Creando revoluciones silenciosas a través del diseño. Cada prenda cuenta una historia de rebeldía y
              elegancia."
            </p>
          </div>

          <div className="mt-12 relative animate-scroll-indicator">
            {/* Decorative Chain Effect */}
            <div className="flex justify-center items-center mb-4 animate-chain-sway">
              <div className="w-3 h-3 border-2 border-silver/30 rounded-full animate-chain-link"></div>
              <div className="w-8 h-0.5 bg-silver/20 animate-chain-connect"></div>
              <div className="w-3 h-3 border-2 border-purple-400/50 rounded-full animate-chain-link-delay"></div>
              <div className="w-8 h-0.5 bg-silver/20 animate-chain-connect-delay"></div>
              <div className="w-3 h-3 border-2 border-silver/30 rounded-full animate-chain-link-delay-2"></div>
            </div>
            <ArrowDown className="w-8 h-8 text-purple-400 mx-auto animate-bounce-elegant" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900 relative animate-section-fade-in">
        {/* Decorative Corner Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 border-l-2 border-t-2 border-purple-500/30 animate-corner-glow"></div>
        <div className="absolute top-10 right-10 w-20 h-20 border-r-2 border-t-2 border-silver/30 animate-corner-glow-delay"></div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative animate-text-slide-in">
              {/* Ornamental Header */}
              <div className="flex items-center mb-6 animate-header-assemble">
                <Crown className="w-8 h-8 text-purple-400 mr-4 animate-crown-rotate" />
                <h3 className="text-4xl font-bold text-purple-400 animate-title-typewriter">SOBRE MÍ</h3>
                <div className="ml-4 flex space-x-1 animate-dots-sequence">
                  <div className="w-2 h-2 bg-silver/40 rounded-full animate-dot-1"></div>
                  <div className="w-2 h-2 bg-purple-400/60 rounded-full animate-dot-2"></div>
                  <div className="w-2 h-2 bg-silver/40 rounded-full animate-dot-3"></div>
                </div>
              </div>

              <div className="space-y-6 text-silver/80 leading-relaxed relative animate-text-reveal">
                {/* Decorative Quote Marks */}
                <div className="absolute -left-6 -top-2 text-6xl text-purple-400/20 font-serif animate-quote-entrance">
                  "
                </div>

                <p className="relative z-10 animate-paragraph-slide-1">
                  Soy Isabella Zapata profesional de diseñadora de vestuario en su último semestre de 22 años, con una
                  sólida formación académica y una pasión por crear piezas que fusionen creatividad, técnica y
                  sostenibilidad.
                </p>

                <p className="animate-paragraph-slide-2">
                  A lo largo de mi carrera he adquirido competencias en diseño básico y avanzado, patronaje manual y
                  digital, confección textil, análisis de tendencias y mercadeo de moda lo que me permite abordar
                  proyectos con un enfoque integral y estratégico.
                </p>

                {/* Highlighted Philosophy */}
                <div className="relative bg-purple-900/20 border-l-4 border-purple-500 pl-6 py-4 my-6 animate-philosophy-highlight">
                  <p className="italic text-purple-300 font-medium animate-philosophy-text">
                    "Mi trabajo se caracteriza por la atención al detalle, la innovación y el compromiso con soluciones
                    sostenibles que respondan a las necesidades del mercado actual."
                  </p>
                  <div className="absolute -right-2 -top-2 text-2xl text-purple-400/60 animate-ornament-float">❦</div>
                </div>

                <p className="animate-paragraph-slide-2">
                  Entiendo la moda como un medio de expresión personal y cultural, combinando estética y funcionalidad
                  para generar un impacto positivo. Estoy preparada para aportar mi visión creativa y técnica en
                  proyectos que busquen destacar en la industria del diseño de vestuario.
                </p>

                {/* Education Section */}
                <div className="mt-8 space-y-4">
                  <h4 className="text-xl font-bold text-purple-400 animate-header-assemble">Educación</h4>
                  <div className="space-y-3">
                    <div className="animate-paragraph-slide-1">
                      <p className="font-semibold text-silver">I.U Pascual Bravo</p>
                      <p className="text-silver/70">Profesional en diseño de vestuario (2021 - 2025)</p>
                    </div>
                    <div className="animate-paragraph-slide-2">
                      <p className="font-semibold text-silver">I.E El Salvador</p>
                      <p className="text-silver/70">
                        Bachiller técnico en diseño e integración de multimedia (2014 - 2019)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Skills Section */}
                <div className="mt-8 space-y-4">
                  <h4 className="text-xl font-bold text-purple-400 animate-header-assemble">Habilidades</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="animate-paragraph-slide-1">• Photoshop e Illustrator</div>
                    <div className="animate-paragraph-slide-2">• Optitex y patronaje manual</div>
                    <div className="animate-paragraph-slide-1">• Diseño creativo</div>
                    <div className="animate-paragraph-slide-2">• Creación de marca</div>
                    <div className="animate-paragraph-slide-1">• Desarrollo de colección</div>
                    <div className="animate-paragraph-slide-2">• Marketing y ventas</div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-4 text-4xl text-silver/10 font-serif animate-quote-exit">
                  "
                </div>
              </div>
            </div>

            <div className="relative animate-image-entrance">
              {/* Ornamental Photo Frame */}
              <div className="relative">
                <div className="absolute -inset-4 border-2 border-purple-500/30 rounded-lg animate-frame-outer"></div>
                <div className="absolute -inset-2 border border-silver/20 rounded-lg animate-frame-inner"></div>

                <div className="aspect-square bg-gradient-to-br from-purple-900/30 to-black border border-purple-500/30 rounded-lg overflow-hidden relative animate-image-reveal">
                  <img
                    src={images.designer || "/placeholder.svg"}
                    alt="Isabella Zapata"
                    className="w-full h-full object-cover opacity-80 animate-image-zoom"
                  />
                  {/* Overlay Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-900/10 to-black/20 animate-overlay-shift"></div>
                </div>

                {/* Decorative Elements Around Photo */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-silver/30 rounded-full animate-circle-rotate"></div>
                <div className="absolute -top-2 -left-2 w-6 h-6 border-2 border-purple-400/50 rounded-full animate-small-orbit"></div>
                <Crown className="absolute -top-4 right-4 w-8 h-8 text-purple-400/60 animate-crown-float" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-black relative animate-projects-entrance">
        {/* Decorative Background Pattern */}
        <div className="absolute inset-0 opacity-5 animate-pattern-wave">
          <div
            className="absolute inset-0 animate-pattern-shift"
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                rgba(139, 92, 246, 0.1),
                rgba(139, 92, 246, 0.1) 2px,
                transparent 2px,
                transparent 20px
              )`,
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16 animate-projects-header">
            {/* Ornamental Title */}
            <div className="flex items-center justify-center mb-6 animate-ornamental-line">
              <div className="flex items-center">
                <Star className="w-6 h-6 text-purple-400 mr-2 animate-star-twinkle" />
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-purple-500 animate-line-extend"></div>
                <Crown className="w-10 h-10 text-purple-400 mx-6 animate-crown-majesty" />
                <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-purple-500 animate-line-extend-reverse"></div>
                <Star className="w-6 h-6 text-purple-400 ml-2 animate-star-twinkle-delay" />
              </div>
            </div>

            <h3 className="text-5xl font-bold mb-4 text-silver relative animate-projects-title">
              PROYECTOS
              {/* Decorative Underline */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex items-center animate-underline-draw">
                <div className="w-8 h-0.5 bg-purple-500 animate-underline-left"></div>
                <div className="w-3 h-3 bg-purple-500 rounded-full mx-2 animate-center-dot"></div>
                <div className="w-8 h-0.5 bg-purple-500 animate-underline-right"></div>
              </div>
            </h3>
          </div>

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className={`bg-gray-900/50 border-purple-500/30 overflow-hidden group hover:border-purple-400/60 transition-all duration-700 relative animate-project-card hover:animate-project-hover ${index % 2 === 1 ? "md:flex-row-reverse animate-card-slide-left" : "animate-card-slide-right"}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Decorative Corner Ornaments */}
                <div className="absolute top-4 left-4 w-4 h-4 border-l-2 border-t-2 border-purple-400/40 animate-corner-draw-1"></div>
                <div className="absolute top-4 right-4 w-4 h-4 border-r-2 border-t-2 border-silver/40 animate-corner-draw-2"></div>
                <div className="absolute bottom-4 left-4 w-4 h-4 border-l-2 border-b-2 border-silver/40 animate-corner-draw-3"></div>
                <div className="absolute bottom-4 right-4 w-4 h-4 border-r-2 border-b-2 border-purple-400/40 animate-corner-draw-4"></div>

                <CardContent className="p-0">
                  <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? "md:grid-cols-2" : ""}`}>
                    <div className="relative overflow-hidden animate-image-container">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-64 md:h-80 object-cover group-hover:scale-110 transition-transform duration-1000 animate-project-image"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/40 transition-all duration-700"></div>

                      {/* Category Badge with Ornaments */}
                      <div className="absolute top-4 right-4 relative animate-badge-float">
                        <span className="bg-purple-600 text-white px-3 py-1 text-sm font-semibold rounded-full relative group-hover:bg-purple-500 transition-colors duration-300">
                          {project.category}
                          <div className="absolute -top-1 -right-1 w-2 h-2 bg-silver rounded-full animate-badge-dot"></div>
                        </span>
                      </div>

                      {/* Decorative Chain in Corner */}
                      <div className="absolute bottom-4 left-4 flex items-center animate-chain-decoration">
                        <div className="w-2 h-2 border border-silver/50 rounded-full animate-chain-dot-1"></div>
                        <div className="w-4 h-0.5 bg-silver/30 mx-1 animate-chain-line"></div>
                        <div className="w-2 h-2 border border-purple-400/50 rounded-full animate-chain-dot-2"></div>
                      </div>
                    </div>

                    <div className="p-8 flex flex-col justify-center relative animate-content-slide">
                      {/* Year Badge */}
                      <div className="mb-4 flex items-center animate-year-badge">
                        <Star className="w-4 h-4 text-purple-400 mr-2 animate-year-star" />
                        <span className="text-purple-400 text-sm font-semibold tracking-wider">{project.year}</span>
                      </div>

                      <h4 className="text-3xl font-bold mb-4 text-silver group-hover:text-purple-400 transition-colors duration-500 relative animate-project-title">
                        {project.title}
                        {/* Decorative Accent */}
                        <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-2 h-8 bg-gradient-to-b from-purple-500/50 to-transparent group-hover:from-purple-400 transition-all duration-500 animate-accent-bar"></div>
                      </h4>

                      <p className="text-silver/70 leading-relaxed mb-6 relative animate-project-description">
                        {project.description}
                      </p>

                      <Button
                        variant="outline"
                        className="w-fit border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-500 bg-transparent relative group/btn animate-project-button"
                        onClick={() => {
                          if (project.id === 1) {
                            window.open(
                              "https://www.canva.com/design/DAGXD76htAY/jdag1tXuPACSJSbi-AVVoQ/edit?utm_content=DAGXD76htAY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
                              "_blank",
                            )
                          } else if (project.id === 2) {
                            window.open(
                              "https://www.canva.com/design/DAFvJBTXq6o/9JjSLsthjIc12MzwZgCgKQ/edit?utm_content=DAFvJBTXq6o&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
                              "_blank",
                            )
                          } else if (project.id === 3) {
                            window.open(
                              "https://www.canva.com/design/DAFR_Q3Ft_c/ORQ8oSulZm_VX8W1TVR18A/edit?utm_content=DAFR_Q3Ft_c&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
                              "_blank",
                            )
                          } else if (project.id === 4) {
                            window.open(
                              "https://www.canva.com/design/DAFfppsJdc8/0xN_iflw6GkY1U395EPxEA/edit?utm_content=DAFfppsJdc8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
                              "_blank",
                            )
                          } else if (project.id === 5) {
                            window.open(
                              "https://www.canva.com/design/DAFA52I1Z1w/1P7E6IQje8W_DC5FKCOnbA/edit?utm_content=DAFA52I1Z1w&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
                              "_blank",
                            )
                          }
                        }}
                      >
                        Ver Proyecto
                        <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        {/* Button Decoration */}
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-silver/30 rounded-full opacity-0 group-hover/btn:opacity-100 transition-all duration-300 animate-button-dot"></div>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-t from-gray-900 to-black relative animate-contact-entrance">
        {/* Decorative Elements */}
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 animate-contact-decoration">
          <div className="flex items-center">
            <Crown className="w-6 h-6 text-purple-400/30 animate-crown-gentle" />
            <div className="w-20 h-0.5 bg-gradient-to-r from-purple-400/30 to-silver/30 mx-2 animate-contact-line"></div>
            <Crown className="w-6 h-6 text-silver/30 animate-crown-gentle-delay" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative">
          <h3 className="text-4xl font-bold mb-8 text-purple-400 relative animate-contact-title">
            COLABOREMOS
            {/* Ornamental Flourishes */}
            <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-silver/30 text-2xl animate-contact-flourish">
              ❦
            </span>
          </h3>

          <p className="text-xl text-silver/80 mb-12 max-w-2xl mx-auto italic animate-contact-text">
            ¿Tienes un proyecto en mente? Hablemos sobre cómo podemos crear algo extraordinario juntos.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 animate-contact-buttons">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg relative group animate-main-button hover:animate-button-pulse"
              onClick={() => window.open("mailto:isabelzalonzz@gmail.com", "_blank")}
            >
              <Mail className="w-5 h-5 mr-2 group-hover:animate-mail-bounce" />
              Contactar
              {/* Decorative Accent */}
              <div className="absolute -top-1 -right-1 w-3 h-3 border border-silver/40 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-button-accent"></div>
            </Button>

            <div className="flex gap-4 animate-social-buttons">
              <Button
                variant="outline"
                size="icon"
                className="border-silver/30 text-silver hover:bg-silver hover:text-black bg-transparent relative group animate-social-button hover:animate-social-hover"
                onClick={() =>
                  window.open("https://www.linkedin.com/in/isabella-zapata-londo%C3%B1o-439a711a3/", "_blank")
                }
              >
                <Linkedin className="w-5 h-5 group-hover:animate-social-icon" />
                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-purple-400/50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-social-dot"></div>
              </Button>
            </div>
          </div>

          <div className="text-silver/60 space-y-2 animate-contact-info">
            <p className="animate-email-fade">isabelzalonzz@gmail.com</p>
            <p className="animate-phone-fade">+57 322 571 3771</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black border-t border-purple-500/30 relative animate-footer-entrance">
        {/* Decorative Top Border */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex items-center animate-footer-decoration">
          <div className="w-8 h-0.5 bg-purple-500/50 animate-footer-line-left"></div>
          <Crown className="w-4 h-4 text-purple-400/50 mx-2 animate-footer-crown" />
          <div className="w-8 h-0.5 bg-silver/50 animate-footer-line-right"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center">
          <p className="text-silver/60 animate-footer-text">
            © 2024 Isabella Zapata Londoño. Todos los derechos reservados.
          </p>
          <div className="flex items-center justify-center mt-2 animate-footer-quote">
            <Star className="w-3 h-3 text-purple-400/40 mr-2 animate-footer-star-left" />
            <p className="text-purple-400/60 text-sm italic">"La moda se desvanece, el estilo es eterno"</p>
            <Star className="w-3 h-3 text-purple-400/40 ml-2 animate-footer-star-right" />
          </div>
        </div>
      </footer>
    </div>
  )
}
