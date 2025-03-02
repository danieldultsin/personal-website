import Header from "../components/header";
import Footer from "../components/footer";
import Script from "next/script";

export default function Consulting() {
    return (
        <div>
            <Header />
            
            <main className="max-w-7xl mx-auto py-8 px-4 md:px-16">
                {/* Consulting Info Section */}
                <section className="max-w-3xl mx-auto mb-8">
                    <h2 className="mb-10 text-center text-[1.75rem]">B2B CRM Consulting</h2> 
                    <div>
                        <p className="description-content">
                            My software company - <span className="font-bold">Torpedo AI</span> - is 
                            currently doing consulting for high-volume B2B sales organizations in tech, 
                            insurance/benefits, and professional services. In the long run, my goal is 
                            to build a CRM plug-in (compatible with Hubspot, HighLevel, Close, Zoho, etc.) 
                            with an LLM that uses RAG [input relevant CRM data through a vectorized DB] 
                            to send post-call, world-class, follow-up emails in the name of the SDR, 
                            and on autopilot. The reason I am providing consulting is so I can have a 
                            close client base for testing Torpedo&apos;s MVP.
                        </p>
                        <p className="description-content"  >
                            I&apos;m leveraging my previous experience being responsible for a CRM with over 
                            900 mid-market clients, and scaling Flex Health, a B2B Section 125 insurance 
                            startup, into a successful exit. <span className="font-bold">Among my value-adds will be:</span>
                        </p>
                        <br />
                        <ul className="list-disc pl-5 text-foreground">
                            <li>Reviewing call recordings + optimizing scripts</li>
                            <li>Implementing an arsenal of VAs for any redundant SDR activities</li>
                            <li>Catering follow-up email sequences at every post-call deal stage</li>
                            <li>Re-engaging &quot;lost&quot; leads through a fresh cold email campaign</li>
                            <li>Tracking advanced KPIs through my proprietary tool</li>
                            <li>Building automated workflows for any other CRM/sales bottlenecks</li>
                        </ul>
                        <br />
                        <p className="description-content">
                            If you are a sales manager or executive of a B2B company doing over 500 
                            calls per month, book a 15m 1:1 call to learn more about what I can do. 
                            If it makes sense, <span className="font-bold">I will perform a CRM audit at no cost</span>, 
                            before we initiate a contract.
                        </p>
                    </div>
                </section>

                {/* Calendly Section */}
                <section className="mb-4">
                    <div className="calendly-inline-widget" data-url="https://calendly.com/danieldultsin/15m" style={{minWidth: '320px', height: '700px'}}></div>
                    <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
                </section>
            </main>

            <Footer />
        </div>
    )
}