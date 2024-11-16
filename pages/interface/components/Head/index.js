import Head from "next/head";

export default function CustomHead({ metadata }) {
  if (!metadata) return null;

  return (
    <Head>
      <title>{metadata.title}</title>
      {/* You can add other metadata tags like description, etc. */}
    </Head>
  );
}
