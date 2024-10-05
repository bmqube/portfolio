import { Card, CardBody } from "@nextui-org/card";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <div className="max-w-4xl">
        <Card>
          <CardBody>
            <div className="flex justify-center items-center">
              <div className="w-1/3 p-10">
                <img
                  className="rounded-full border-primary-600 border-2"
                  src="/dp.jpg"
                  alt="BM Monjur Morshed's Picture"
                />
              </div>
              <div className="w-2/3 flex flex-col gap-3">
                <h4>Hello There, </h4>
                <h1 className="text-4xl font-medium">
                  I'm BM Monjur <span className="font-black">Morshed</span>
                </h1>
                <h3 className="text-2xl font-medium">
                  Software Engineer (Backend) @{" "}
                  <a href="https://fringecore.sh" target="_blank">
                    <span className="font-black">FringeCore_</span>
                  </a>
                </h3>
                <p className="text-lg">
                  I am a passionate software engineer with a strong foundation
                  in data structures and algorithms. I love to solve problems
                  and learn new technologies. I am a quick learner and a team
                  player.
                </p>
              </div>
            </div>
          </CardBody>
        </Card>

        <div className="text-with-lines opacity-50 my-10">
          <p className="font-black">Experiences</p>
        </div>
      </div>
    </section>
  );
}
