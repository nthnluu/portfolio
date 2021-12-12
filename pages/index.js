import PageLayout from "../components/PageLayout";
import timeGreeting from "../util/time_based_greeting";
import projects from "../data/projects.json"
import experience from "../data/experiences.json"
import skills from "../data/skills.json"
import ProjectsGrid from "../components/ProjectsGrid";
import ExperienceSection from "../components/ExperienceSection";
import Section from "../components/Section";
import SkillSection from "../components/SkillSection";

export default function Home() {
    return <PageLayout>
        <div className="space-y-24">
            {/*Page header + description*/}
            <div>
                <h1 className="text-gray-900 dark:text-white">
                    <span className="text-2xl">{timeGreeting()}! My name is</span>
                    <div className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
                        <div>
                            Nathan Benavides-Luu.
                        </div>
                        <div>
                            I build things for the web.
                        </div>
                    </div>
                </h1>
                <p className="max-w-4xl mt-5 text-lg md:text-xl text-gray-500 dark:text-gray-400">
                    I'm a second year Applied Mathematics-Computer Science student at Brown University and an entrepreneurial full-stack
                    developer with a passion for building accessible and
                    useful tools for
                    education.
                </p>
            </div>

            {/*Projects section*/}
            <Section title="Projects">
                <ProjectsGrid projects={projects}/>
            </Section>

            {/*Experience section*/}
            <Section title="Experience">
                <ExperienceSection experiences={experience}/>
            </Section>

            {/*Skills section*/}
            <Section title="Skills">
                <SkillSection skills={skills}/>
            </Section>
        </div>
    </PageLayout>
}
