import type { FC } from "react";
import { useParams, Link, Outlet, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";


const docsArticles = [
  { slug: "getting-started", title: "Getting Started" },
  { slug: "moderation-commands", title: "Moderation Commands" },
  { slug: "auto-mod", title: "Auto-Moderation" },
  { slug: "configuration", title: "Server Configuration" },
];


const Sidebar: FC = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  if (!slug) {
    navigate("/docs/getting-started", { replace: true });
  }

  return (
    <motion.nav
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className=" w-64 min-w-64 p-4 rounded-2xl sticky top-20 self-start"
    >
      <h2 className="text-white text-3xl font-bold mb-4 border-b border-white/10 pb-2">
        Documentation
      </h2>
      <ul className="space-y-2">
        {docsArticles.map((article) => (
          <li key={article.slug}>
            <Link
              to={`/docs/${article.slug}`}
              className={`block p-2 pl-3 rounded-lg transition duration-200 
                ${
                  slug === article.slug
                    ? "bg-white/10 text-white font-semibold"
                    : "text-white/70 hover:bg-white/5 hover:text-white"
                }`}
            >
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

const DocsPage: FC = () => (
  <div className="max-w-7xl mx-auto flex gap-8 p-4 lg:p-8 min-h-[80vh]">
    <Sidebar />
    <div className="flex-1">
      <Outlet />
    </div>
  </div>
);

export default DocsPage;
