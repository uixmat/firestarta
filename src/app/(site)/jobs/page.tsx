import Link from "next/link";

export default function Jobs() {
  return (
    <>
      <h1>Jobs</h1>
      <ul>
        <li>
          <Link href="/jobs/some-job">Some Job</Link>
        </li>
        <li>
          <Link href="/jobs/another-job">Another Job</Link>
        </li>
      </ul>
    </>
  );
}
