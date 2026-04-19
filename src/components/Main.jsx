export default function Main() {
  return (
    <main className="px-13 py-16 bg-[url(/react-logo-half.png)] bg-no-repeat bg-right">
      <h1 className="font-bold text-4xl ">Fun facts about React</h1>
      <ul className="max-w-md mt-10 list-disc pl-10 marker:text-[#61DAFB] marker:text-xl">
        <li className="mbe-4">Was first released in 2013</li>
        <li className="mbe-4">Was originally created by Jordan Walke</li>
        <li className="mbe-4">Has well over 200K stars on GitHub</li>
        <li className="mbe-4">Is maintained by Meta</li>
        <li className="mbe-4">
          Powers thousands of enterprise apps, including mobile apps
        </li>
      </ul>
    </main>
  );
}
