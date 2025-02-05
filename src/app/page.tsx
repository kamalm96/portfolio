import Header from "../components/Header";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
// import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
// import Footer from "../components/Footer";
import { data } from "../data/data";
import Introduction from "../components/Introduction";
import Experience from "../components/Experience";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Hero title={data.title} description={data.summary} />
      <Introduction />
      <Skills skills={data.skills} />
      <Experience />
      <Projects projects={data.projects} />
      {/* <Testimonials testimonials={data.testimonials} /> */}
      <Contact />
      {/* <Footer name={data.name} /> */}
    </div>
  );
}
