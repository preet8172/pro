import logo from "./image/logo-dark-full.png"
import heroImage from "./image/demo-img.png"
import modernImage from "./image/modern-light.png"
import reactIcon from "./image/react.png"
import tailwindIcon from "./image/tailwind.png"
import hookIcon from "./image/hook.png"
import reduxIcon from "./image/redux-toolkit.png"
import darkModeIcon from "./image/dark-mode.png"
import layoutIcon from "./image/layout.png"
import configIcon from "./image/config.png"
import colorsIcon from "./image/colors.png"
import practicalIcon from "./image/practical.png"
import localizationIcon from "./image/localization.png"
import documentationIcon from "./image/documentation.png"
import supportIcon from "./image/support.png"
import updateIcon from "./image/update.png"
import salesDashboard from "./image/sales-dashboard-light.jpg"
import projectDashboard from "./image/project-dashboard-light.jpg"
import crmDashboard from "./image/crm-dashboard-lightjpg.jpg"
import cryptoDashboard from "./image/crypto-dashboard-light.jpg"
import accountSettings from "./image/account-settings-light.jpg"
import helpCenter from "./image/knowledge-base-help-center-light.jpg"
import typescript from "./image/typescript.png"
import vite from "./image/vite.png"
import config from "./image/config.png"
import practical from "./image/practical.png"
import responsive from "./image/responsive.png"
import documentation from "./image/documentation.png"
import support from "./image/support.png"
import update from "./image/update.png"
import "./elstar.css"

const features = [
  {
    icon: reactIcon,
    title: "Latest React",
    description: "Elstar built with latest version of react (v18) & Create React App without build setup configuration"
  },
  {
    icon: tailwindIcon,
    title: "Tailwind",
    description: "Tailwind CSS is a first-utility framework that allow developers build a unique User Interface"
  },
  {
    icon: hookIcon,
    title: "React Hooks",
    description: "All component written in functional way that let you to use state or other React lifecycle without a class"
  },
  {
    icon: darkModeIcon,
    title: "Dark Mode",
    description: "Elstar provide dark & light mode selection, every single piece of UI was adaptable with dark mode"
  },
  {
    icon: localizationIcon,
    title: "Localization",
    description: "Elstar support multi language & able you to create your personalized apps in your language"
  },
  {
    icon: reduxIcon,
    title: "Redux Toolkit",
    description: "Redux toolkit make state management easier to maintain & less boilerplate compare with just Redux"
  },
  {
    icon: colorsIcon,
    title: "Colors Options",
    description: "Unlimited color options allows you to set your application color as your branding"
  },
  {
    icon: layoutIcon,
    title: "Various Layout",
    description: "Elstar has various option of layouts & allow you to set different layouts for different routes"
  },
   {
    icon: typescript,
    title: "typescript",
    description: "Elstar written in Typescript, allowing you to write type-safe and scalable code."
  },
  {
    icon: vite,
    title: "vite",
    description: "Elstar is built using Vite, a fast and efficient build tool for modern web applications."
  },
  {
    icon: config,
    title: "Configurable Structure",
    description: "We offers a configurable structure that allows you to easily customize and organize your project."
  },
  {
    icon: practical,
    title: "Practical Demo",
    description: "Unlike others template, all demo pages in Elstar not just a UI demo, it included real cases implementation"
  },
  {
    icon: responsive,
    title: "Full responsive",
    description: "Every page & components in Elstar is fully responsive and able to fit perfectly in any screens"
  },
  {
    icon: documentation,
    title: "Well Documented",
    description: "Well-documented and industry code structure that help developers understand the code easily"
  },
  {
    icon: update,
    title: "Constantly Update",
    description: "Elstar is constantly updated to ensure compatibility with the latest technologies and best practices in the industry."
  },
  {
    icon: support,
    title: "Trusted Support",
    description: "We will always around, when you have any question or concern, our support helps you solve any issues you have"
  }
]

const demos = [
  { image: salesDashboard, title: "Sales Dashboard", category: "Analytics" },
  { image: projectDashboard, title: "Project Dashboard", category: "Management" },
  { image: crmDashboard, title: "CRM Dashboard", category: "Customer" },
  { image: cryptoDashboard, title: "Crypto Dashboard", category: "Finance" },
  { image: accountSettings, title: "Account Settings", category: "Profile" },
  { image: helpCenter, title: "Knowledge Base", category: "Support" }
]
const components = [
  "Buttons",
  "Forms",
  "Tables",
  "Charts",
  "Cards",
  "Navigation",
  "Modals",
  "Badges",
  "Menus",
  "Tabs",
  "Inputs",
  "Layouts"
]

const resources = [
  {
    icon: documentationIcon,
    title: "Documentation",
    text: "Clear setup and customization notes for building faster."
  },
  {
    icon: supportIcon,
    title: "Support",
    text: "Organized sections make it easier to maintain and extend the template."
  },
  {
    icon: updateIcon,
    title: "Updates",
    text: "Reusable sections and local assets are ready for new pages and demos."
  }
]

const Elstar = () => {
  return (
    <div className="elstar-page">
      <section className="hero-section">
        <div className="bg-circle bg-circle-outer"></div>
        <div className="bg-circle bg-circle-inner"></div>

        <header className="main-header">
          <a className="logo" href="#top" aria-label="Elstar home">
            <img src={logo} alt="Elstar" />
          </a>

          <nav className="nav-menu" aria-label="Primary navigation">
            <a href="#features">Features</a>
            <a href="#demos">Demos</a>
            <a href="#components">Components</a>
            <a href="#docs">Docs</a>
          </nav>

          <a className="header-action" href="#cta">Buy now</a>
        </header>

        <main id="top" className="hero-container">
          <div className="hero-split-grid">
            <div className="hero-text-block">
              <p className="hero-eyebrow">React Tailwind Admin Template</p>
              <h1 className="hero-heading">
                Modern admin UI kit built with React & Tailwind
              </h1>
              <p className="hero-description">
                Elstar includes dashboards, apps, layouts, components, and polished pages that help you start a professional admin project quickly.
              </p>
              <div className="hero-actions">
                <a className="btn-preview" href="#demos">Preview demos</a>
                <a className="btn-template" href="#cta">Get this template</a>
              </div>
            </div>

            <div className="hero-image-block">
              <div className="dashboard-window">
                <img src={heroImage} alt="Elstar admin dashboard preview" />
              </div>
            </div>
          </div>
        </main>
      </section>

      <section id="features" className="section-features">
        <div className="section-container">
          <div className="section-header">   
            <h1 className="section-title">Amazing Features</h1>
            <p className="section-subtitle">
             Elstar is feature rich, yet not overly complex and easily extensible, it comes with  <br /> everything developers have been looking for.
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.title}>
                <img className="feature-icon" src={feature.icon} alt="" />
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-showcase">
         <h2 className="section-title"  >Ready-to-use page layouts</h2>
            <p className="section-subtitle left">
              Every page in Elstar applied a pre-built layout, which makes it very easy to switch individual page designs or create a new page. It is possible to keep your pages consistent across your application or to use different layouts for different routes.
            </p>
        <div className="section-container showcase-grid">
          <div className="showcase-copy">
       
          </div>
          <div className="showcase-image">
            <img src={modernImage} alt="Modern Elstar dashboard layout" />
          </div>
        </div>
      </section>

       <section id="demos" className="section-demos">
        <div className="section-container">
          <div className="section-header">
            <p className="section-kicker">Demos</p>
            <h2 className="section-title">Ready-made pages</h2>
            <p className="section-subtitle">
              Start from complete screens instead of building every layout from zero.
            </p>
          </div> 

          <div className="demos-grid">
            {demos.map((demo) => (
              <article className="demo-card" key={demo.title}>
                <img src={demo.image} alt={demo.title} />
                <div className="demo-content">
                  <span className="demo-badge">{demo.category}</span>
                  <h3 className="demo-title">{demo.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="components" className="section-components">
        <div className="section-container">
          <div className="section-header">
            <p className="section-kicker">Components</p>
            <h2 className="section-title">Reusable interface building blocks</h2>
            <p className="section-subtitle">
              Common dashboard controls are organized for fast page creation.
            </p>
          </div>

          <div className="components-grid">
            {components.map((component) => (
              <div className="component-item" key={component}>{component}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-highlights">
        <div className="section-container highlights-grid">
          {highlights.map((item) => (
            <article className="highlight-card" key={item.title}>
              <img src={item.icon} alt="" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="docs" className="section-docs">
        <div className="section-container">
          <div className="section-header">
            <p className="section-kicker">Resources</p>
            <h2 className="section-title">Documentation, support, and updates</h2>
          </div>

          <div className="docs-content">
            {resources.map((item) => (
              <article className="docs-card" key={item.title}>
                <img src={item.icon} alt="" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <a className="docs-link" href="#cta">Learn more</a>
              </article>
            ))}
          </div>
        </div>
      </section> 

      <section id="cta" className="section-cta">
        <div className="section-container cta-content">
          <h2 className="cta-title">Build your next admin dashboard with Elstar</h2>
          <p className="cta-description">
            A polished React admin template with ready pages, components, layouts, and assets.
          </p>
          <a className="btn-cta" href="#top">Get this template</a>
        </div>
      </section>

      <footer className="footer">
        <div className="section-container footer-content">
          <a className="footer-logo" href="#top">
            <img src={logo} alt="Elstar" />
          </a>
          <div className="footer-links">
            <a href="#features">Features</a>
            <a href="#demos">Demos</a>
            <a href="#components">Components</a>
            <a href="#docs">Docs</a>
          </div>
        </div>
        <p className="footer-bottom">Elstar React Tailwind admin template.</p>
      </footer>
    </div>
  ) }
 

export default Elstar
