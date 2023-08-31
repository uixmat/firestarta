interface PageProps {
  params: {
    slug: string;
  };
}

export default function Job({ params }: PageProps) {
  return (
    <>
      <h1>Job Title</h1>
      <small>
        Params slug: <code>{params.slug}</code>
      </small>
      <p>Some job description</p>
    </>
  );
}
