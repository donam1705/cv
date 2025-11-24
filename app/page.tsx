import Hero from "@/components/Hero";
// import ThemeToggle from "@/components/ThemeToggle";
import ProjectCard from "@/components/ProjectCard";
import Skills from "@/components/Skills";
// import ContactForm from "@/components/ContactForm";
import SocialLinks from "@/components/SocialLinks";

export default function Page() {
  const projects = [
    {
      title: "Website bán hàng",
      description: "Xây dựng bằng Next.js, TailwindCSS.",
    },
    {
      title: "Todo App",
      description: "Ứng dụng quản lý công việc với animation đẹp.",
    },
    {
      title: "Portfolio cá nhân",
      description: "Giao diện đẹp, hiệu ứng chuyên nghiệp.",
    },
  ];

  return (
    <main className="bg-gray-50 dark:bg-black transition-colors duration-300">
      <header className="fixed top-0 w-full z-50 flex justify-between p-6 bg-white/60 dark:bg-black/40 backdrop-blur-md">
        <h1 className="font-bold text-xl text-gray-800 dark:text-gray-200">
          Portfolio
        </h1>
        {/* <ThemeToggle /> */}
      </header>

      <Hero />

      <Skills />

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Dự án tiêu biểu
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Các dự án tiêu biểu thể hiện kỹ năng và kinh nghiệm của tôi
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, idx) => (
            <div key={idx} className="group">
              <ProjectCard {...p} />
              <div className="mt-4 flex gap-3 justify-center">
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition font-medium text-sm">
                  Chi tiết
                </button>
                <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-lg transition font-medium text-sm">
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-semibold transition transform hover:scale-105">
            View All Projects →
          </button>
        </div>
      </section>

      {/* <ContactForm /> */}

      <footer className="py-10 text-center text-gray-600 dark:text-gray-400">
        <div className="mb-6">
          <SocialLinks />
        </div>
        <p>© 2025 My Portfolio. All rights reserved.</p>
      </footer>
    </main>
  );
}
