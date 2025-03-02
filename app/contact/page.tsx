import Header from "../components/header";
import Footer from "../components/footer";
import NewsletterForm from "../components/newsletter-form";
import { RiInstagramLine, RiTwitterXLine, RiLinkedinFill, RiYoutubeFill, RiGithubFill } from "react-icons/ri";

export default function Contact() {
    return (
        <div>
            <Header />
            
            <main className="max-w-7xl mx-auto py-8 md:py-16 px-4 md:px-16">

                <section className="max-w-3xl mx-auto mb-20">
                    <h2 className="mb-10 text-center text-[1.75rem]">Get In Touch</h2>
                    
                    <p className="description-content">
                        Whether you are a rising talent, seasoned entrepreneur, mutual
                        connect, investor, potential business partner, local in my area, or a
                        lovely young woman (yes, I&apos;m looking for one), I make an effort to
                        entertain conversations with those who share like-minded trajectories.
                        <br /><br />
                        The best place to make a formal or informal intro is over email:
                        daniel@tryflexhealth.com
                        <br /><br />
                        If we already met, book a 15m call with me to catch up. I don&apos;t do
                        &quot;let&apos;s grab coffee&quot;.
                    </p>
                </section>

                {/* My Socials Section */}
                <section className="max-w-3xl mx-auto text-center mb-28">
                    <h2 className="mb-8 text-[1.75rem]">My Socials</h2>
                    
                    <div className="flex flex-row justify-center gap-3 items-center px-2">
                        <a href="https://www.instagram.com/danieldultsin/" target="_blank" rel="noopener noreferrer" className="social-icon-container bg-foreground">
                            <RiInstagramLine className="social-icon" />
                        </a>
                        <a href="https://x.com/daniel_dultsin" target="_blank" rel="noopener noreferrer" className="social-icon-container bg-foreground">
                            <RiTwitterXLine className="social-icon" />
                        </a>
                        <a href="https://www.youtube.com/@danieldultsin" target="_blank" rel="noopener noreferrer" className="social-icon-container bg-foreground">
                            <RiYoutubeFill className="social-icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/danieldultsin/" target="_blank" rel="noopener noreferrer" className="social-icon-container bg-foreground">
                            <RiLinkedinFill className="social-icon" />
                        </a>
                        <a href="https://github.com/danieldultsin" target="_blank" rel="noopener noreferrer" className="social-icon-container bg-foreground">
                            <RiGithubFill className="social-icon" />
                        </a>
                    </div>
                </section>

                {/* Newsletter Section */}
                <NewsletterForm />
            </main>

            <Footer />
        </div>
    )
}