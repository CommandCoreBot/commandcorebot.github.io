export default function Footer() {
  return (
    <footer className="mt-20 py-8 border-white-primary/10">
      <div className="max-w-7xl mx-auto px-4 text-center text-white-primary/50 text-sm">
        <p>&copy; {new Date().getFullYear()} CommandCore. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="/docs" className="hover:text-white-primary transition">Docs</a>
          <a href="#" className="hover:text-white-primary transition">Privacy Policy</a>
          <a href="#" className="hover:text-white-primary transition">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
