import Hero from '../components/Hero'
import Stats from '../components/Stats'
import HowItWorks from '../components/Services'
import Features from '../components/Features'
import TrainingExperience from '../components/TrainingExperience'
import VideoSection from '../components/VideoSection'
import Industries from '../components/About'
import GlobalTrust from '../components/Projects'
import Blog from '../components/Blog'
import CTA from '../components/CTA'

const Home = () => {
  return (
    <main>
      <Hero />
      <Stats />
      <HowItWorks />
      <Features />
      <TrainingExperience />
      <VideoSection />
      <Industries />
      <GlobalTrust />
      <Blog />
      <CTA />
    </main>
  )
}

export default Home
