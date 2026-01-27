import Layout from "@/components/layout/Layout";

const Terms = () => {
  return (
    <Layout>
      {/* Header Section */}
      <section className="section-padding bg-secondary">
        <div className="container-wide text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4">
            Terms of Service
          </h1>
          <p className="text-muted-foreground text-lg">
            Last updated: January 27, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-10">
              {/* Section 1 */}
              <div>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  1. Acceptance of Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using Gathering's website and services, you
                  accept and agree to be bound by the terms and provisions of this
                  agreement. If you do not agree to abide by the above, please do
                  not use this service. These terms apply to all visitors, users,
                  and others who access or use our services.
                </p>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  2. Course Access and Licensing
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Upon purchase of any lesson package, you are granted a
                  non-exclusive, non-transferable license to access and view the
                  course materials for personal, non-commercial use. This license
                  is granted to the purchasing couple only and may not be shared
                  with third parties.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  You may not reproduce, distribute, modify, create derivative
                  works of, publicly display, publicly perform, republish,
                  download, store, or transmit any of the course materials without
                  our prior written consent.
                </p>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  3. Payment and Refund Policy
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  All prices are listed in US Dollars. Payment is required at the
                  time of purchase. We accept major credit cards and PayPal.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We offer a 30-day money-back guarantee on all lesson packages.
                  If you are not satisfied with your purchase for any reason, you
                  may request a full refund within 30 days of your original
                  purchase date. Refund requests should be sent to
                  support@gathering.com.
                </p>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  4. User Conduct
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  You agree to use our services only for lawful purposes and in
                  accordance with these Terms. You agree not to use our services
                  in any way that violates any applicable federal, state, local,
                  or international law or regulation. You must not attempt to gain
                  unauthorized access to any portion of our services, other
                  accounts, computer systems, or networks connected to our
                  servers.
                </p>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  5. Intellectual Property
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  The service and its original content, features, and
                  functionality are and will remain the exclusive property of
                  Gathering and its licensors. The service is protected by
                  copyright, trademark, and other laws of both the United States
                  and foreign countries. Our trademarks and trade dress may not be
                  used in connection with any product or service without the prior
                  written consent of Gathering.
                </p>
              </div>

              {/* Section 6 */}
              <div>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  6. Disclaimer of Warranties
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our services are provided on an "as is" and "as available"
                  basis. Gathering makes no warranties, expressed or implied, and
                  hereby disclaims and negates all other warranties including,
                  without limitation, implied warranties or conditions of
                  merchantability, fitness for a particular purpose, or
                  non-infringement of intellectual property or other violation of
                  rights.
                </p>
              </div>

              {/* Section 7 */}
              <div>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  7. Limitation of Liability
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  In no event shall Gathering, nor its directors, employees,
                  partners, agents, suppliers, or affiliates, be liable for any
                  indirect, incidental, special, consequential, or punitive
                  damages, including without limitation, loss of profits, data,
                  use, goodwill, or other intangible losses, resulting from your
                  access to or use of or inability to access or use the services.
                </p>
              </div>

              {/* Section 8 */}
              <div>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  8. Contact Information
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms, please contact us
                  at legal@gathering.com or write to us at: Gathering, 123
                  Billiards Lane, Los Angeles, CA 90001.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
