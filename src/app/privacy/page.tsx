import TopNav from "@/components/TopNav/TopNav";
import styles from './privacy.module.css';
import { MdOutlineRadioButtonChecked } from "react-icons/md";
import Link from "next/link";

const Privacy = () => {
  const bullet = <MdOutlineRadioButtonChecked />;

  return (
    <main>
      <TopNav />


      <section className={styles.privacyCon}>
        <header>
          <h4 className='caps'>Privacy Policy for Royal Golf Views<sub></sub></h4>
        </header>

        <section className={styles.infoBox}>
          <span>This Privacy Policy describes how Royal Golf Views ("we," "us," or "our") collects, uses, and discloses your information when you use our website (royalgolfviews.com)  or Facebook forms.</span>

          <article>
            <strong>
              Information We Collect
            </strong>
            <span>We collect two types of information on the Website:</span>
            <p>
              <span>
                <strong>Personally Identifiable Information (PII):</strong>
                <small>This is information that can be used to identify you as an individual, such as your name, email address, phone number, mailing address, and IP address. We collect PII when you:</small>
                <small>
                  <span>- Create an account on the Website</span>
                  <span>- Sign up for our newsletter</span>
                  <span>- Contact us with a question or request</span>
                  <span>- Use a search function to find properties</span>
                  <span>- Save properties to your favorites list</span>
                </small>
              </span>
            </p>

            <p>
              <span>
                <strong>Non-Personally Identifiable Information (Non-PII):</strong>
                <small>This is information that cannot be used to identify you as an individual, such as your browser type, operating system, the pages you visit on the Website, and the terms you search for. We collect Non-PII automatically through cookies and other tracking technologies.</small>
              </span>
            </p>
          </article>


          <article>
            <strong>
              How We Use Your Information
            </strong>
            <span>We use your information to:</span>
            <p>
              <span>
                <strong>Personally Identifiable Information (PII):</strong>
                <small>This is information that can be used to identify you as an individual, such as your name, email address, phone number, mailing address, and IP address. We collect PII when you:</small>
                <small>
                  <span>- Provide you with the services and information you request</span>
                  <span>- Respond to your inquiries and requests</span>
                  <span>- Send you marketing materials, such as newsletters, about our services and properties</span>
                  <span>- Improve the Website and your experience on it</span>
                  <span>- Personalize your experience on the Website by recommending properties that may be of interest to you</span>
                  <span>- Analyze how the Website is used</span>
                </small>
              </span>
            </p>
          </article>

          <article>
            <strong>
              Sharing Your Information.
            </strong>
            <span>We may share your information with third-party service providers who help us operate the Website and provide our services. These service providers are contractually obligated to keep your information confidential and to use it only for the purposes for which it has been disclosed.
              We may also disclose your information if we are required to do so by law or if we believe that such disclosure is necessary to protect our rights or the safety of others.</span>
          </article>

          <article>
            <strong>
              Cookies and Tracking Technologies.
            </strong>
            <span>
              We use cookies and other tracking technologies to collect Non-PII about your use of the Website. Cookies are small data files that are stored on your device when you visit a website. They can be used to remember your preferences, track your activity on the Website, and understand how you use the Website.
              You can control cookies through your web browser settings. Most browsers allow you to block cookies altogether, or to choose to accept cookies only from trusted websites.  You can also delete cookies that have already been set.
            </span>
          </article>

          <article>
            <strong>
              Data Security.
            </strong>
            <span>
              We take steps to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no website or internet transmission is completely secure. We cannot guarantee the security of your information.
            </span>
          </article>

          <article>
            <strong>
              Children&apos;s Privacy.
            </strong>
            <span>
              The Website is not intended for children under the age of 13. We do not knowingly collect information from children under 13.
            </span>
          </article>

          <article>
            <strong>
              Your Choices.
            </strong>
            <span>
              You can opt out of receiving marketing emails from us by following the unsubscribe instructions in the emails you receive. You can also access, update, or delete your PII by contacting us.
            </span>
          </article>

          <article>
            <strong>
              Changes to this Privacy Policy.
            </strong>
            <span>
              We may change this Privacy Policy from time to time. We will post any changes on the Website. We encourage you to review this Privacy Policy periodically for any updates.
            </span>
          </article>

          <article>
            <strong>
              Contact Us.
            </strong>
            <span>
              If you have any questions about this Privacy Policy, please contact us at <Link href={'mailto:sales@royalgolfviews.com'}>sales@royalgolfviews.com.</Link>
              This is a sample privacy policy for a real estate website. You may need to modify it to fit the specific needs of your website. You should also consult with an attorney to make sure that your privacy policy complies with all applicable laws.
            </span>
          </article>


        </section>
      </section>
    </main>
  );
}

export default Privacy;