import Card from "./Card.jsx"
import Title from "./Title.jsx"
import Navbar from "./Navbar.jsx"
import Footer from "./Footer.jsx"
import Frontend from "./Frontend.jsx"

function App() {
  return (
    <>
      <Title/>
      <Navbar/>
      <div className="main-container">
        <Frontend/>

{/*         
        <Card url="https://react.dev" shadow="20bcff" logo="react.svg" title="ReactJS" desc="React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js."/>
        <Card url="https://angular.io" shadow="e23237" logo="angular.svg" title="AngularJS" desc="Angular is a TypeScript-based, free and open-source single-page web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS." />
        <Card url="https://vuejs.org" shadow="42b883" logo="vue.svg" title="VueJS" desc="Vue.js is an open-source model view viewmodel front end JavaScript library for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members. Vue.js features an incrementally adaptable architecture that focuses on declarative rendering and component composition." />
        <Card url="https://svelte.dev" shadow="ff3e00" logo="svelte.svg" title="Svelte" desc="Svelte is a free and open-source front-end component framework and language created by Rich Harris and maintained by the Svelte core team members. Svelte is not a monolithic JavaScript library imported by applications: instead, Svelte compiles HTML templates to specialized code that manipulates the DOM directly." />
        <Card url="https://backbonejs.org" shadow="0071b5" logo="backbone.svg" title="Backbone" desc="Backbone.js is a JavaScript rich-client web app framework based on the model–view–controller design paradigm, intended to connect to an API over a RESTful JSON interface. Backbone has only hard dependency, which is on one JavaScript library, Underscore.js. jQuery can also be optionally used for the library." />
        <Card url="https://preactjs.com" shadow="673ab8" logo="preact.svg" title="Preact" desc="Preact provides the thinnest possible Virtual DOM abstraction on top of the DOM. It builds on stable platform features, registers real event handlers and plays nicely with other libraries. Preact can be used directly in the browser without any transpilation steps." />
        <Card url="https://jquery.com" shadow="0868ac" logo="jquery.svg" title="JQuery" desc="The jQuery framework is one of the initial frameworks introduced in 2006. It stands apart in today’s tech ecosphere even today owing to the simplicity it offers, ease to use and the minimal need to write extensive JavaScript codes while using Vue.js. Another major benefit of jQuery is that it is still being continually developed into a better version each passing day."/>
        <Card url="https://emberjs.com" shadow="e3ab5e" logo="ember.svg" title="Ember" desc="Ember resembles Angular in terms of component-based functionality and two-way data binding. It was developed in 2011 to handle the growing demands of modern-day technologies. Multifaceted web and mobile applications can be built using ember and its effective design will handle all the concerns. The developer community is trivial despite it being new and unexplored." />
        <Card url="https://astro.build" shadow="e73cb2" logo="astro-icon-light-gradient.svg" title="Astro" desc="Astro is the web framework for building content-driven websites like blogs, marketing, and e-commerce. Astro is best-known for pioneering a new frontend architecture to reduce JavaScript overhead and complexity compared to other frameworks. If you need a website that loads fast and has great SEO, then Astro is for you." />
        <Card url="https://qwik.dev" shadow="18b6f6" logo="qwick.svg" title="Qwik" desc="Qwik offers the fastest possible page load times - regardless of the complexity of your website. Qwik is so fast because it allows fully interactive sites to load with almost no JavaScript and pickup from where the server left off.As users interact with the site, only the necessary parts of the site load on-demand. This precision lazy-loading is what makes Qwik so quick." />
        <Card url="https://www.phoenixframework.org" shadow="fd4f00" logo="phoenix.svg" title="Phoenix" desc="Phoenix is a web development framework written in Elixir which implements the server-side Model View Controller (MVC) pattern. Many of its components and concepts will seem familiar to those of us with experience in other web frameworks like Ruby on Rails or Python's Django." /> 
        */}
        
        <Footer/>
      </div>
    </>
  )
}

export default App
