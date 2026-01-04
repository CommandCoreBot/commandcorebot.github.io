import type { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

// In a real application, you would dynamically import the Markdown content 
// based on the 'slug' from the URL (e.g., using a fetch or dynamic import).
// For now, use a simple lookup:
const ArticleContent = {
  'getting-started': `# Getting Started\n\nWelcome! To begin, simply invite the bot and grant it the necessary permissions. \n\n## Invitation Link\n[Invite CommandCore Now!](#)`,
  'moderation-commands': `# Moderation Commands\n\n### \`/kick\`\nUsage: \`/kick <user> [reason]\`\n\nKicks a user from the server.\n\n### \`/ban\`\nUsage: \`/ban <user> [reason] [days]\`\n\nPermanently bans a user.`,
  // ... add more articles
};

const DocArticle: FC = () => {
  const { slug } = useParams<{ slug: keyof typeof ArticleContent }>();
  const content = slug && ArticleContent[slug] 
    ? ArticleContent[slug] 
    : '## Article Not Found\n\nSelect an article from the sidebar.';

  return (
    <motion.div 
      key={slug}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="liquid-glass-css p-8 rounded-2xl text-white prose prose-invert max-w-none"
    >
      <ReactMarkdown>
        {content}
      </ReactMarkdown>
    </motion.div>
  );
};

export default DocArticle;