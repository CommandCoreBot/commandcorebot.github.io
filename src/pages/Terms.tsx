function Terms() {
  return (
    <div className="container mx-auto px-4 py-35 text-white-primary w-300">
      <h1 className="text-6xl font-black md:text-8xl font-white mb-6">
        Terms of Service
      </h1>
      <p className="text-xl mb-4">Last Updated: January 20, 2026</p>

      <p>
        Welcome to CommandCore. By inviting the CommandCore Discord bot ("the
        Bot") to your server or using the commandcore.cc website, dashboard, and
        API (collectively, "the Services"), you agree to be bound by these Terms
        of Service.
      </p>

      <h2 className="text-4xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
      <p>
        By accessing our Services, you confirm that you are at least 13 years
        old (or the minimum age of digital consent in your country) and that you
        agree to these Terms. If you do not agree, you must stop using the
        Services immediately and remove the Bot from your server.
      </p>

      <h2 className="text-4xl font-bold mt-8 mb-4">2. Use of Services</h2>
      <ul className="list-disc ps-6 leading-10">
        <li>
          Compliance: You agree to use CommandCore in compliance with Discord's
          Terms of Service and Community Guidelines.{" "}
        </li>
        <li>
          Prohibited Actions: You may not attempt to reverse engineer the Bot or
          API, use the Services for malicious purposes (spamming, DDoS, etc.),
          or exploit bugs for unauthorized access.{" "}
        </li>
        <li>
          Responsibility: Server administrators are responsible for how they
          configure the Bot. CommandCore is not liable for any unintended
          consequences resulting from server-specific configurations.
        </li>
      </ul>
      <h2 className="text-4xl font-bold mt-8 mb-4">3. Dashboard and API</h2>
      <ul className="list-disc ps-6 leading-10">
        <li>
          Authentication: Our dashboard uses Discord OAuth2 for authentication.
          You are responsible for maintaining the security of your Discord
          account.{" "}
        </li>
        <li>
          Data Privacy: We collect minimal data necessary for the Bot's
          Availability: We strive for 100% uptime but provide the Services "as
          is." We are not liable for any downtime or data loss.
        </li>
      </ul>
      <h2 className="text-4xl font-bold mt-8 mb-4">
        4. Limitation of Liability
      </h2>
      <p>
        To the maximum extent permitted by law, CommandCore and its developers
        shall not be liable for any indirect, incidental, or consequential
        damages arising from your use or inability to use the Services.
      </p>
      <h2 className="text-4xl font-bold mt-8 mb-4">5. Termination</h2>
      <p>
        We reserve the right to block specific users or servers from using
        CommandCore at our sole discretion, particularly in cases of abuse,
        violation of these Terms, or actions that harm the Bot's infrastructure.
      </p>
    </div>
  );
}

export default Terms;
