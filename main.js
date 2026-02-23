<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cerrajero en Naranjito | Cerrajería J3R | Servicio de Emergencia 24/7</title>
    <meta name="description" content="¿Se quedó fuera de su casa o auto? Cerrajería J3R en Naranjito ofrece apertura de puertas, cambio de cerraduras y llaves con chip. ¡Llámenos al 787-516-7378!">
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Lucide Icons -->
    <script src="https://unpkg.com/lucide@latest"></script>
    <!-- GSAP for Animations -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>

    <link rel="stylesheet" href="style.css">

    <!-- Schema Markup -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Locksmith",
      "name": "Cerrajería J3R Naranjito",
      "image": "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80",
      "@id": "https://www.cerrajeriaj3r.com",
      "url": "https://www.cerrajeriaj3r.com",
      "telephone": "787-516-7378",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Cruze el Abanico, PR-152 Km 9.2",
        "addressLocality": "Naranjito",
        "postalCode": "00719",
        "addressRegion": "PR",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 18.1444,
        "longitude": -66.1642
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "50"
      }
    }
    </script>
</head>
<body class="bg-[#1a1a1a] text-white selection:bg-blue-600">

    <!-- Header -->
    <header class="fixed top-0 w-full z-50 bg-[#1a1a1a]/90 backdrop-blur-md border-b border-white/10">
        <div class="container mx-auto px-4 h-20 flex items-center justify-between">
            <div class="flex items-center gap-2">
                <span class="text-2xl font-black tracking-tighter text-white">CERRAJERÍA <span class="text-blue-500">J3R</span></span>
            </div>
            
            <nav class="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
                <a href="#inicio" class="hover:text-blue-400 transition-colors">Inicio</a>
                <a href="#servicios" class="hover:text-blue-400 transition-colors">Servicios</a>
                <a href="#nosotros" class="hover:text-blue-400 transition-colors">Nosotros</a>
                <a href="#contacto" class="hover:text-blue-400 transition-colors">Contacto</a>
            </nav>

            <a href="tel:7875167378" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-bold flex items-center gap-2 transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-blue-600/20">
                <i data-lucide="phone" class="w-4 h-4"></i>
                <span class="hidden sm:inline">Llamar Ahora</span>
            </a>
        </div>
    </header>

    <!-- Hero Section -->
    <section id="inicio" class="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div class="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1510519133418-66a36ec3978e?auto=format&fit=crop&q=80" alt="Locksmith Background" class="w-full h-full object-cover opacity-40">
            <div class="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/60 to-transparent"></div>
        </div>

        <div class="container mx-auto px-4 relative z-10">
            <div class="max-w-3xl">
                <div class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-6 animate-fade-in">
                    <span class="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
                    <span class="text-xs font-bold uppercase tracking-widest">Servicio de Emergencia 24/7</span>
                </div>
                <h1 class="text-5xl md:text-7xl font-black mb-6 leading-tight">
                    Seguridad y Rapidez: <br>
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Su Cerrajero de Confianza.</span>
                </h1>
                <p class="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
                    Expertos en aperturas residenciales, comerciales y de autos en Naranjito. Respuesta inmediata garantizada.
                </p>

                <div class="flex flex-col sm:flex-row gap-4 mb-12">
                    <a href="tel:7875167378" class="btn-pulse flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-xl font-black text-lg transition-all">
                        <i data-lucide="phone-call"></i>
                        LLAMAR AHORA
                    </a>
                    <a href="https://wa.me/17875167378" class="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-xl font-black text-lg transition-all">
                        <i data-lucide="message-circle"></i>
                        WHATSAPP
                    </a>
                </div>

                <div class="flex items-center gap-8">
                    <div class="flex flex-col">
                        <span class="text-3xl font-bold text-white">5.0</span>
                        <div class="flex text-yellow-400">
                            <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                            <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                            <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                            <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                            <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                        </div>
                        <span class="text-xs text-gray-500 mt-1 uppercase tracking-tighter">Reseñas de Google</span>
                    </div>
                    <div class="h-12 w-px bg-white/10"></div>
                    <div class="flex flex-col">
                        <span class="text-3xl font-bold text-white">100%</span>
                        <span class="text-xs text-gray-500 mt-1 uppercase tracking-tighter">Local de Naranjito</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="nosotros" class="py-24 bg-black">
        <div class="container mx-auto px-4">
            <div class="grid md:grid-cols-2 gap-16 items-center">
                <div class="reveal">
                    <h2 class="text-4xl font-black mb-8">Más que una cerrajería... <br><span class="text-blue-500">Su aliado en seguridad.</span></h2>
                    <p class="text-gray-400 text-lg leading-relaxed mb-6">
                        Ubicados en el corazón de Naranjito (Cruze el Abanico), en Cerrajería J3R combinamos años de experiencia con tecnología de vanguardia para garantizar que su propiedad y su familia estén siempre protegidas.
                    </p>
                    <p class="text-gray-400 text-lg leading-relaxed">
                        Nuestra reputación de 5 estrellas nos avala como los más rápidos y eficientes de la región central de Puerto Rico. Técnicos certificados listos para cualquier reto.
                    </p>
                </div>
                <div class="relative group reveal">
                    <div class="absolute -inset-4 bg-blue-600/20 rounded-2xl blur-2xl group-hover:bg-blue-600/30 transition-all"></div>
                    <div class="relative bg-[#1a1a1a] p-8 border border-white/10 rounded-2xl">
                        <div class="grid grid-cols-2 gap-6">
                            <div class="text-center p-4">
                                <i data-lucide="shield-check" class="w-12 h-12 text-blue-500 mx-auto mb-4"></i>
                                <h4 class="font-bold">Garantizado</h4>
                            </div>
                            <div class="text-center p-4">
                                <i data-lucide="clock" class="w-12 h-12 text-blue-500 mx-auto mb-4"></i>
                                <h4 class="font-bold">24 Horas</h4>
                            </div>
                            <div class="text-center p-4">
                                <i data-lucide="map-pin" class="w-12 h-12 text-blue-500 mx-auto mb-4"></i>
                                <h4 class="font-bold">Local</h4>
                            </div>
                            <div class="text-center p-4">
                                <i data-lucide="award" class="w-12 h-12 text-blue-500 mx-auto mb-4"></i>
                                <h4 class="font-bold">Expertos</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="servicios" class="py-24">
        <div class="container mx-auto px-4">
            <div class="text-center mb-16 reveal">
                <h2 class="text-4xl font-black mb-4 uppercase tracking-tight">Servicios Especializados</h2>
                <div class="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>

            <div class="grid md:grid-cols-3 gap-8">
                <!-- Service Cards -->
                <div class="service-card group bg-[#222] p-8 rounded-2xl border border-white/5 hover:border-blue-500/50 transition-all duration-500">
                    <i data-lucide="door-open" class="w-12 h-12 text-blue-500 mb-6 group-hover:scale-110 transition-transform"></i>
                    <h3 class="text-2xl font-bold mb-4">Apertura de Puertas</h3>
                    <p class="text-gray-400">Técnicas no invasivas para abrir su hogar o negocio sin daños estructurales.</p>
                </div>
                <div class="service-card group bg-[#222] p-8 rounded-2xl border border-white/5 hover:border-blue-500/50 transition-all duration-500">
                    <i data-lucide="car" class="w-12 h-12 text-blue-500 mb-6 group-hover:scale-110 transition-transform"></i>
                    <h3 class="text-2xl font-bold mb-4">Apertura de Autos</h3>
                    <p class="text-gray-400">Herramientas especializadas para todas las marcas. Apertura segura y sin rayaduras.</p>
                </div>
                <div class="service-card group bg-[#222] p-8 rounded-2xl border border-white/5 hover:border-blue-500/50 transition-all duration-500">
                    <i data-lucide="key-round" class="w-12 h-12 text-blue-500 mb-6 group-hover:scale-110 transition-transform"></i>
                    <h3 class="text-2xl font-bold mb-4">Cambio de Cerraduras</h3>
                    <p class="text-gray-400">Actualice su seguridad con cilindros y sistemas de alta resistencia.</p>
                </div>
                <div class="service-card group bg-[#222] p-8 rounded-2xl border border-white/5 hover:border-blue-500/50 transition-all duration-500">
                    <i data-lucide="lock" class="w-12 h-12 text-blue-500 mb-6 group-hover:scale-110 transition-transform"></i>
                    <h3 class="text-2xl font-bold mb-4">Instalación de Seguridad</h3>
                    <p class="text-gray-400">Cerrojos (deadbolts) y sistemas anti-ganzúa de marcas líderes.</p>
                </div>
                <div class="service-card group bg-[#222] p-8 rounded-2xl border border-white/5 hover:border-blue-500/50 transition-all duration-500">
                    <i data-lucide="copy" class="w-12 h-12 text-blue-500 mb-6 group-hover:scale-110 transition-transform"></i>
                    <h3 class="text-2xl font-bold mb-4">Copias de Llaves</h3>
                    <p class="text-gray-400">Duplicados precisos al instante, desde llaves residenciales hasta de alta seguridad.</p>
                </div>
                <div class="service-card group bg-blue-600 p-8 rounded-2xl transition-all duration-500">
                    <i data-lucide="siren" class="w-12 h-12 text-white mb-6 animate-pulse"></i>
                    <h3 class="text-2xl font-bold mb-4 text-white">Emergencias 24/7</h3>
                    <p class="text-blue-100">Las emergencias no tienen horario. Estamos listos para asistirle ahora mismo.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Why Us -->
    <section class="py-16 bg-blue-600">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div class="reveal">
                    <div class="text-4xl font-black mb-2">5.0</div>
                    <div class="text-blue-100 text-sm font-bold uppercase tracking-widest">Estrellas</div>
                </div>
                <div class="reveal">
                    <div class="text-4xl font-black mb-2">100%</div>
                    <div class="text-blue-100 text-sm font-bold uppercase tracking-widest">Negocio Local</div>
                </div>
                <div class="reveal">
                    <div class="text-4xl font-black mb-2">15m</div>
                    <div class="text-blue-100 text-sm font-bold uppercase tracking-widest">Respuesta Prom.</div>
                </div>
                <div class="reveal">
                    <div class="text-4xl font-black mb-2">$$$</div>
                    <div class="text-blue-100 text-sm font-bold uppercase tracking-widest">Precios Justos</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contacto" class="py-24 bg-black">
        <div class="container mx-auto px-4">
            <div class="grid lg:grid-cols-2 gap-16">
                <div class="reveal">
                    <h2 class="text-4xl font-black mb-8">Contáctenos Hoy</h2>
                    <div class="space-y-6">
                        <div class="flex items-start gap-4">
                            <div class="bg-[#1a1a1a] p-3 rounded-lg border border-white/10">
                                <i data-lucide="phone" class="text-blue-500"></i>
                            </div>
                            <div>
                                <p class="text-gray-500 text-sm uppercase font-bold tracking-widest">Teléfono</p>
                                <a href="tel:7875167378" class="text-xl font-bold hover:text-blue-500 transition-colors">(787) 516-7378</a>
                            </div>
                        </div>
                        <div class="flex items-start gap-4">
                            <div class="bg-[#1a1a1a] p-3 rounded-lg border border-white/10">
                                <i data-lucide="map-pin" class="text-blue-500"></i>
                            </div>
                            <div>
                                <p class="text-gray-500 text-sm uppercase font-bold tracking-widest">Ubicación</p>
                                <p class="text-lg">Cruze el Abanico, PR-152 Km 9.2, <br>Naranjito, Puerto Rico</p>
                            </div>
                        </div>
                        <div class="flex items-start gap-4">
                            <div class="bg-[#1a1a1a] p-3 rounded-lg border border-white/10">
                                <i data-lucide="clock" class="text-blue-500"></i>
                            </div>
                            <div>
                                <p class="text-gray-500 text-sm uppercase font-bold tracking-widest">Horario</p>
                                <p class="text-lg">Lunes - Domingo: Emergencias 24/7</p>
                            </div>
                        </div>
                    </div>

                    <!-- Map Placeholder -->
                    <div class="mt-12 rounded-2xl overflow-hidden grayscale border border-white/10 h-64 relative group">
                        <iframe src="<iframe src="<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d796.5885343216885!2d-66.27821904521564!3d18.245045118999204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2spr!4v1771867117062!5m2!1ses-419!2spr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>

                <div class="bg-[#1a1a1a] p-10 rounded-3xl border border-white/10 reveal">
                    <h3 class="text-2xl font-bold mb-6">Solicitar Asistencia</h3>
                    <form id="contact-form" class="space-y-4">
                        <div class="grid grid-cols-2 gap-4">
                            <div class="space-y-2">
                                <label class="text-xs font-bold uppercase tracking-widest text-gray-500">Nombre</label>
                                <input type="text" placeholder="Su nombre" class="w-full bg-black/50 border border-white/10 px-4 py-3 rounded-xl focus:border-blue-500 outline-none transition-all">
                            </div>
                            <div class="space-y-2">
                                <label class="text-xs font-bold uppercase tracking-widest text-gray-500">Teléfono</label>
                                <input type="tel" placeholder="787-000-0000" class="w-full bg-black/50 border border-white/10 px-4 py-3 rounded-xl focus:border-blue-500 outline-none transition-all">
                            </div>
                        </div>
                        <div class="space-y-2">
                            <label class="text-xs font-bold uppercase tracking-widest text-gray-500">Servicio</label>
                            <select class="w-full bg-black/50 border border-white/10 px-4 py-3 rounded-xl focus:border-blue-500 outline-none transition-all appearance-none">
                                <option>Apertura de Auto</option>
                                <option>Apertura de Casa</option>
                                <option>Cambio de Cerradura</option>
                                <option>Otro Servicio</option>
                            </select>
                        </div>
                        <div class="space-y-2">
                            <label class="text-xs font-bold uppercase tracking-widest text-gray-500">Mensaje</label>
                            <textarea rows="4" placeholder="¿En qué podemos ayudarle?" class="w-full bg-black/50 border border-white/10 px-4 py-3 rounded-xl focus:border-blue-500 outline-none transition-all"></textarea>
                        </div>
                        <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 rounded-xl transition-all shadow-lg shadow-blue-600/20">
                            ENVIAR SOLICITUD
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="py-12 border-t border-white/10 text-center">
        <div class="container mx-auto px-4">
            <span class="text-xl font-black tracking-tighter text-white mb-6 block">CERRAJERÍA <span class="text-blue-500">J3R</span></span>
            <div class="flex justify-center gap-6 mb-8">
                <a href="#" class="text-gray-400 hover:text-white transition-colors"><i data-lucide="facebook"></i></a>
                <a href="#" class="text-gray-400 hover:text-white transition-colors"><i data-lucide="instagram"></i></a>
            </div>
            <p class="text-gray-500 text-sm">© 2026 Cerrajería J3R Naranjito. Todos los derechos reservados.</p>
        </div>
    </footer>

    <!-- Mobile Bottom Bar -->
    <div class="md:hidden fixed bottom-0 w-full z-50 p-4 flex gap-3 bg-[#1a1a1a]/80 backdrop-blur-xl border-t border-white/10">
        <a href="tel:7875167378" class="flex-1 bg-blue-600 text-white flex items-center justify-center gap-2 py-4 rounded-2xl font-black shadow-lg shadow-blue-600/30">
            <i data-lucide="phone"></i> LLAMAR
        </a>
        <a href="https://wa.me/17875167378" class="flex-1 bg-green-600 text-white flex items-center justify-center gap-2 py-4 rounded-2xl font-black shadow-lg shadow-green-600/30">
            <i data-lucide="message-circle"></i> WHATSAPP
        </a>
    </div>

    <script type="module" src="main.js"></script>
</body>
</html>
