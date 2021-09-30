import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      <!-- modify this form HTML and place wherever you want your form -->
<form
  action="https://formspree.io/f/mwkazvbr"
  method="POST"
  enctype="multipart/form-data"
>
  <label>
    Your email:
    <input type="email" name="_replyto">
  </label>
  <label>
    Your file:
    <input type="file" name="upload">
  </label>
  <button type="submit">Send</button>
</form>
      </main>
        
      <Footer />
    </div>
  )
}
