import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";
import NewsletterForm from "./components/newsletter-form";
import {
  RiInstagramLine,
  RiTwitterXLine,
  RiLinkedinFill,
  RiYoutubeFill,
  RiGithubFill,
} from "react-icons/ri";
import { FaCode } from "react-icons/fa6";
import { GoPeople } from "react-icons/go";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto py-2 md:py-16 px-4 md:px-16">
        {/* Intro Section */}
        <section className="mb-16 md:mb-28">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center pt-6 pb-4 md:py-8 px-4 md:px-12 bg-[#232323] rounded-3xl border border-[#676767]">
            <div className="flex flex-row md:flex-col gap-3 items-center md:w-auto overflow-x-auto md:overflow-visible px-2 md:px-0">
              <a
                href="https://www.instagram.com/danieldultsin/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-container"
              >
                <RiInstagramLine className="social-icon" />
              </a>
              <a
                href="https://x.com/daniel_dultsin"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-container"
              >
                <RiTwitterXLine className="social-icon" />
              </a>
              <a
                href="https://www.youtube.com/@danieldultsin"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-container"
              >
                <RiYoutubeFill className="social-icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/danieldultsin/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-container"
              >
                <RiLinkedinFill className="social-icon" />
              </a>
              <a
                href="https://github.com/danieldultsin"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-container"
              >
                <RiGithubFill className="social-icon" />
              </a>
            </div>
            <div className="flex-1 text-left md:w-[550px] py-2">
              <h2 className="mb-4">Intro</h2>
              <p className="text-[1rem] tracking-[0.4%]">
                Hello all. I am a no-BS businessman and GTM-operator. My love
                for building companies started when I was 18 (add existentially
                lost), and I have since found myself starting ventures in
                industries ranging from construction, healthcare, software, to
                digital marketing. I&apos;m not the most talented, brightest, or
                empathetic person. But I do have a capacity for inhaling new
                aptitudes. Philosophically, I believe intelligence precedes
                consciousness - occupying the very fabric of reality. I&apos;m
                not here to have fun (although I can). Through my work, my
                mission is to acquire, share, and deploy this intelligence. [And
                live an exceptional fucking life]
                <br />
                <br />~{" "}
                <span className="italic">
                  Looking for my help? Let&apos;s get in touch. ~
                </span>
              </p>
            </div>

            <div className="w-full md:w-[352px] aspect-square relative rounded-xl overflow-hidden">
              <Image
                src="/headshot.jpg"
                alt="Daniel Dultsin"
                fill
                sizes="(max-width: 768px) 100vw, 352px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-32">
          <div className="flex flex-col md:flex-row gap-20">
            <div className="w-full md:w-1/2 border-l-4 border-[#FFD700] pl-6">
              <div className="flex items-center gap-4 mb-4">
                <GoPeople className="w-9 h-9" />
                <h2 className="text-[1.75rem]">B2B Sales</h2>
              </div>
              <p className="leading-[1.625rem] tracking-[0.4%]">
                My experience in sales began with closing D2D solar and roofing
                contracts in Texas. This evolved into taking calls with
                enterprise C-Suite execs, managing a pipeline of over 900
                companies ($60M+ in LTV), and building custom B2B CRM
                automations, while I was the COO of a health insurance agency. I
                have both the sales background and technical dexterity to
                replicate this system in any B2B SaaS, insurance, or
                professional-services startup.
              </p>
            </div>

            <div className="w-full md:w-1/2 border-l-4 border-[#FFD700] pl-6">
              <div className="flex items-center gap-4 mb-4">
                <FaCode className="w-9 h-9" />
                <h2 className="text-[1.75rem]">Software</h2>
              </div>
              <p className="leading-[1.625rem] tracking-[0.4%]">
                In 2024, while living in South America, I taught myself how to
                design and develop web applications. What was once an outlet for
                nihilistic boredom turned into working on two software
                side-projects: Torpedo and Rooftics. See &quot;My History&quot;
                for more info. By Q3 of 2025, I aim to have the proficiency of a
                full-stack developer and UI/UX designer, plus an impressive
                portfolio.
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px w-full bg-foreground mb-36"></div>

        {/* My History Section */}
        <section className="mb-12">
          <h2 className="mb-20 text-center">My History</h2>
          <div className="space-y-10">
            <div className="history-container">
              <div className="history-header">
                <h3>Torpedo AI</h3>
                <span className="history-date">2025 — Present</span>
              </div>
              <p className="history-content">
                Through managing countless B2B outreach campaigns,
                conversations, demos, and follow-up sequences, I have realized
                that 80% of the sale happens after the call - in the email
                follow-up. C-Suite executives don&apos;t make decision over
                calls - they perform extensive due diligence internally -
                leading me to sending 100+ personalized FU emails/week.
                &quot;AI-driven&quot; email outreach tools exist. So do
                customizable email sequences. What does not exist is CRM-trained
                (on SDR notes, call recordings, docs/SOPs, and ALL past email
                conversations) model to send these FU emails on autopilot, in
                the SDRs name. Torpedo is a long-term project of mine; at
                present I am working with a few key B2B CRM-consulting clients
                to pinpoint their needs and test an MVP.
              </p>
            </div>

            <div className="history-container">
              <div className="history-header">
                <h3>Rooftics</h3>
                <span className="history-date">2025 — Present</span>
              </div>
              <p className="history-content">
                Working in the roofing industry, I had the opportunity of
                witnessing contractors paying $1,500 - $5,000+ annually on
                satellite measurements, and waiting up to 24 hours to receive a
                PDF report. The vendors in this space rely on VAs to manually
                trace the roof geometry. I have set out to build a software-only
                solution that trains a computer vision model to detect key
                vertices in order to produce an orthographic mock-up, such that
                reports are instantaneous and more cost efficient.
              </p>
            </div>

            <div className="history-container">
              <div className="history-header">
                <h3>Flex Health</h3>
                <span className="history-date">2024 — 2025</span>
              </div>
              <p className="history-content">
                I was the co-founder of an agency specializing in a Section 125
                healthcare program, onboarding mid-market to enterprise-lite
                clients in the staffing, home care, food franchise, and
                manufacturing sectors. I oversaw a CRM of over 900 companies,
                formed several key referral partnerships, built our suite of
                design assets/marketing materials, and worked closely with the
                HealthCues team to sign new clients. As of March 2025, Flex
                Health is making plans for being acquired.
              </p>
            </div>

            <div className="history-container">
              <div className="history-header">
                <h3>Redacted Studio</h3>
                <span className="history-date">2024</span>
              </div>
              <p className="history-content">
                I co-founded and operated a full-stack design studio (branding,
                landers, decks, UI/UX, product) targeted toward post-seed
                startups in crypto, tech, finance, and beyond. Clients ranging
                from BlueReceipt, Scale, COET, Blackline, Kingdomly, and more.
              </p>
            </div>

            <div className="history-container">
              <div className="history-header">
                <h3>D2D Sales</h3>
                <span className="history-date">2023</span>
              </div>
              <p className="history-content">
                After I left university, I thought there was no better place to
                start as an &quot;entrepreneur&quot; than in sales. Partnering
                with companies in solar and roofing, I knocked over 15,000
                doors, closed + serviced 32 residential contracts, and learned
                the business fundamentals. I made over 6-figures in commissions
                and put all my money in crypto :)
              </p>
            </div>

            <div className="history-container">
              <div className="history-header">
                <h3>Arqua Liquidation</h3>
                <span className="history-date">2023</span>
              </div>
              <p className="history-content">
                This was my first company (and kick in the nuts). While in high
                school, I flipped hundreds of items on eBay/Facebook and resold
                pallet auctions from a warehouse in PA. I wanted to replicated
                this buy-and-sell business on a larger scale. In Austin, I
                rented a few storage units and a U-Haul truck, purchased pallets
                from big liquidation companies (Home Depot/Amazon returns,
                overstock, unclaimed freight, etc.), and set out to build a
                &quot;full-circle e-commerce platform for the liquidation
                industry&quot;. However, I did not realize that my costs were
                prohibitive; soon enough, as my cash dwindled, so did my
                delusion of grandeur.
              </p>
            </div>

            <div className="history-container">
              <div className="history-header">
                <h3>U-M Aerospace Engineering</h3>
                <span className="history-date">2022 — 2023</span>
              </div>
              <p className="history-content">
                I never wanted to go to college, but I also wanted to get a role
                at SpaceX before I turned 20. Something motivated me about
                working with an elite team of engineers, striving for a big
                vision, and laying the technical foundation for building an
                aerospace startup. So I decided to enroll in the University of
                Michigan Aerospace program and graduate within 2 years (I
                finished my first semester with 69 credits). I hated school and
                started becoming depressed as I questioned the purpose of what I
                was doing. By fortune, I had a serious existential crisis,
                realized the flaws in my motives, dropped out the next week, and
                booked a one-way flight to Austin - beginning a new chapter.
              </p>
            </div>

            <div className="history-container">
              <div className="history-header">
                <h3>Earlier Years</h3>
                <span className="history-date">2004 — 2022</span>
              </div>
              <p className="history-content">
                I was born and raised in New York City, thanks to my parents -
                both Russian immigrants. A childhood in the largest metropolitan
                city is not something I would wish for others, as it left me
                socially detached and somewhat lost as to what all of this
                meant. Seeing a McKinsey consultant leaving the office at 10pm,
                a mentally-ill heroin addict begging for change on the subway, a
                gay rights protestor with &quot;their&quot; titties out, or a
                hedge fund manager taking off into the sunset on his chopper...
                left a murky picture of what I really wanted to do. I excelled
                in STEM academics and kept my mind occupied with books from a
                young age.
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px w-full bg-foreground my-20"></div>
        {/* Newsletter Section */}
        <NewsletterForm />
      </main>

      <Footer />
    </div>
  );
}
