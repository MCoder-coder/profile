import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, l as renderSlot, j as renderComponent } from '../astro_8kWVznuq.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from './404_COutjM-_.mjs';
import 'clsx';

const $$Astro$1 = createAstro();
const $$TimeLine = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TimeLine;
  const { title, subtitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex"> <div class="education__time"> <span class="w-4 h-4 bg-primary block rounded-full mt-1"></span> <span class="education__line bg-primary block h-full w-[2px] translate-x-[7px]"></span> </div> <div class="experience__data bd-grid px-5"> <h3 class="font-semibold mb-1">${title}</h3> <span class="font-light text-sm">${subtitle}</span> <p class="my-2 text-justify"> ${renderSlot($$result, $$slots["default"])} </p> </div> </div>`;
}, "/Users/manueljesusreeb/Documents/astrofy-main/profile/src/components/cv/TimeLine.astro", void 0);

const $$Astro = createAstro();
const $$Cv = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Cv;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Resume", "sideBarActiveItemID": "cv" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-5"> <div class="text-3xl w-full font-bold">Perfil</div> </div> <div class="mb-10 text-justify">
Soy un desarrollador Full Stack apasionado con experiencia en el desarrollo web y la creación de 
    aplicaciones móviles Android.
<br>
Me centro en crear software robusto y limpio, siguiendo las mejores prácticas del "código limpio" e implementando pruebas exhaustivas para garantizar la calidad del producto.

    Habilidades:
    Desarrollo Web:
<br>
Frontend: Experto en Angular, con experiencia en la construcción de componentes, servicios y manejo de rutas para crear aplicaciones web dinámicas y de una sola página (SPA).
<br>
Backend: Experto en Node.js, con experiencia en la creación de APIs RESTful y el manejo de solicitudes HTTP.
    Bases de datos: Conocimiento en el manejo de bases de datos en entornos Node.js, como MongoDB o MySQL.
<br>
Pruebas: Familiaridad con pruebas unitarias utilizando Jest en el frontend y backend.
    Renderizado del lado del servidor (SSR): Conocimientos básicos en SSR con Node.js para mejorar el rendimiento.
    Despliegue: Experiencia en el despliegue de aplicaciones Angular y Node.js en plataformas como Firebase, Netlify, Heroku o AWS.
    Android:
<br>
Desarrollo nativo: Experiencia en la creación de aplicaciones Android nativas con Java y Kotlin.
    Material Design: Implementación de las directrices de Material Design para crear interfaces de usuario intuitivas y atractivas.
    Arquitectura: Conocimiento de patrones de arquitectura como MVVM y MVP para crear aplicaciones escalables y mantenibles.
<br>
Pruebas: Experiencia en pruebas unitarias y de instrumentación para garantizar la calidad del código.
    Integración con APIs: Experiencia en la integración de aplicaciones Android con APIs RESTful.
    Cualidades:
<br>
Apasionado por el desarrollo de software y la creación de productos de alta calidad.
    Meticuloso y orientado a los detalles, con un fuerte enfoque en la calidad del código.
    Autodidacta y con capacidad para aprender nuevas tecnologías rápidamente.
    Capaz de trabajar de forma independiente y como parte de un equipo.
    Excelente comunicador y colaborador.
<br>
¿Qué puedo ofrecer?
    Puedo desarrollar aplicaciones web y móviles robustas, escalables y de alto rendimiento.
    Puedo trabajar de forma autónoma o como parte de un equipo.
<br>
Soy un rápido aprendiz y tengo una gran capacidad de adaptación a nuevas tecnologías.
    Tengo un fuerte compromiso con la calidad del código y las mejores prácticas de desarrollo.
<br>
Si buscas un desarrollador Full Stack apasionado, con experiencia y confiable, no dudes en contactarme.
</div> <div class="mb-5"> <div class="text-3xl w-full font-bold">Education</div> </div> <div class="time-line-container grid gap-4 mb-10"> ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "Angular (Intermediate)" })} <a href="https://www.hackerrank.com/certificates/02f1c21ba380">
hackerrank</a> ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "Kotlin Java Developers" })} <a href="https://www.coursera.org/account/accomplishments/verify/CDKHPF5CG3W4">
Coursera Accomplishment</a> </div> <div class="mb-5"> <div class="text-3xl w-full font-bold">Experience</div> </div> <div class="time-line-container mb-10"> ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "Indra", "subtitle": "Buenos AIres" })} ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "Siskit", "subtitle": "Coronel Suarez" })} </div> <div class="mb-5"> <div class="text-3xl w-full font-bold">Skills</div> </div> <ul class="list-disc md:columns-5 columns-2 mx-6"> <li>Android</li> <li>Angular</li> <li>Git</li> <li>Javascript</li> <li>Node.js</li> <li>HTML</li> <li>CSS</li> <li>RESTful APIs</li> <li>Databases (MySQL)</li> <li>Unit Testing (Jest)</li> <li>Version Control (Git)</li> </ul> ` })}`;
}, "/Users/manueljesusreeb/Documents/astrofy-main/profile/src/pages/cv.astro", void 0);

const $$file = "/Users/manueljesusreeb/Documents/astrofy-main/profile/src/pages/cv.astro";
const $$url = "/cv";

export { $$Cv as default, $$file as file, $$url as url };
