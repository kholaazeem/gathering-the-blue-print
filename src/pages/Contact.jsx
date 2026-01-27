import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/contact/ContactForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@gathering.com",
    href: "mailto:hello@gathering.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+1-555-123-4567",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "123 Billiards Lane, Los Angeles, CA 90001",
    href: null,
  },
  {
    icon: Clock,
    label: "Support Hours",
    value: "Mon-Fri: 9AM - 6PM PST",
    href: null,
  },
];

const Contact = () => {
  return (
    <Layout>
      {/* Header Section */}
      <section className="section-padding bg-secondary">
        <div className="container-wide text-center">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            We're Here to Help
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mt-3 mb-4">
            Contact Us
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have questions about our lessons or need help getting started? Our
            friendly support team is ready to assist you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
                Get in Touch
              </h2>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-card shadow-soft"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-medium">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-foreground hover:text-accent transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional CTA */}
              <div className="mt-8 p-6 rounded-2xl bg-primary text-primary-foreground">
                <h3 className="font-serif text-xl font-semibold mb-3">
                  Prefer to Chat?
                </h3>
                <p className="text-primary-foreground/80 text-sm mb-4">
                  Our support team typically responds within 2 hours during
                  business hours.
                </p>
                <p className="text-sm">
                  Average response time:{" "}
                  <span className="font-semibold">Under 30 minutes</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
