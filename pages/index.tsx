import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";

import { SubscribeButton } from "../src/components/SubscribeButton";
import { stripe } from "../src/services/stripe";

import styles from "../src/styles/Home/styles.module.scss";

interface IHomeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

function Home({ product }: IHomeProps) {
  return (
    <>
      <Head>
        <title>Ignews</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👋 Hey, welcome</span>
          <h1>
            News about the <span>React</span> world.
          </h1>
          <p>
            Get access to all the publications <br />
            <span>for {product.amount} month</span>
          </p>

          <SubscribeButton priceId={product.priceId} />
        </section>

        <Image
          src="/avatar.svg"
          height={500}
          width={500}
          alt="Girl Coding"
          title="Girl Coding"
          aria-label="Girl Coding"
        />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve("price_1KYF86Ew7txXJaGGzCtcil9M");

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};

export default Home;
