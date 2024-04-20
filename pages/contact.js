import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import Contact from "../components/Contact";

export default function ContactPage() {
  return (
    <>
      <SeoHead title='Contact | Innoshare GmbH' />
      <Layout>
        <Contact />
      </Layout>
    </>
  );
}