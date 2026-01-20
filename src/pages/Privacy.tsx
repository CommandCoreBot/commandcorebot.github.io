function Terms() {
  return (
    <div className="container mx-auto px-4 py-35 text-white-primary w-300">
      <h1 className="text-6xl font-black md:text-8xl font-white mb-6">
        Privacy Policy
      </h1>
      <p className="text-xl mb-4">Last Updated: January 20, 2026</p>

      <p>
        At CommandCore, we know you care about your personal information and we
        take your privacy seriously. This Privacy Policy outlines how we
        collect, use, and protect your data across our Discord bot, the
        commandcore.cc dashboard, and our API.
      </p>

      <h2 className="text-4xl font-bold mt-8 mb-4">
        1. Information We Collect
      </h2>
      <p className="mb-4">
        We only collect information that is necessary for the proper functioning
        of our services. This includes:
      </p>
      <ul className="list-disc ps-6 leading-10">
        <li>
          <strong>User Identifiers:</strong> We store Discord User IDs,
          usernames, and nicknames to identify you and link your configurations.
        </li>
        <li>
          <strong>Server & Guild Data:</strong> We collect Server IDs, Channel
          IDs, and Role IDs to manage server-specific settings and moderation
          structures.
        </li>
        <li>
          <strong>Communication Data:</strong> Our database stores Channel IDs, Role IDs, Message IDs, and message timestamps.
        </li>
        <li>
          <strong>Command Arguments:</strong> We collect information provided as arguments when executing commands.
        </li>
        <li>
          <strong>Dashboard Access:</strong> When you log in via Discord OAuth2,
          we access your list of servers to determine which dashboards you are
          authorized to manage.
        </li>
      </ul>

      <h2 className="text-4xl font-bold mt-8 mb-4">2. How We Use Data</h2>
      <ul className="list-disc ps-6 leading-10">
        <li>
          <strong>Service Functionality:</strong> To enforce server rules,
          manage roles, and provide a historical audit log for server owners.
        </li>
        <li>
          <strong>Dashboard Synchronization:</strong> To ensure your settings on
          the website correctly reflect and update your Discord server state.
        </li>
        <li>
          <strong>Security:</strong> We do not share or sell your personal
          information for advertising or marketing purposes. Data is used
          exclusively for the operation of CommandCore.
        </li>
      </ul>

      <h2 className="text-4xl font-bold mt-8 mb-4">
        3. Data Subject Rights
      </h2>
      <p className="mb-4">
        We retain collected information only for as long as necessary to provide
        the requested service. While you have the right to request the deletion
        of your data, please note:
      </p>
      <div className="bg-white/5 p-6 rounded-lg border-l-4 border-white">
        <p className="italic">
          <strong>Important Notice on Moderation Records:</strong> In accordance
          with GDPR Article 17(3)(e), CommandCore reserves the right to refuse
          the deletion of moderation logs (such as warnings, bans, and cases).
          This data is maintained under a "Legitimate Interest" to ensure
          community safety, prevent the bypassing of server rules, and provide
          an audit trail for server administrators.
        </p>
      </div>

      <p className="mb-4 mt-4"><strong>Right to Erasure</strong>:<br/>
        Users may request deletion of their personal data by submitting a written request to contact@commandcore.cc Such requests must:<br/>

      a) Specifically identify the information to be deleted;<br/>

      b) Provide sufficient evidence of account ownership; and<br/>

      c) Allow for processing time of up to fourteen (14) days.<br/>
      </p>
      <p className="mb-4 mt-4"><strong>Right to Access</strong>:<br/> 
      Users may request access to all data currently being stored about them by submitting a written request to contact@commandcore.cc. Response time may extend up to fourteen (14) days from receipt of request.
      </p>

      <h2 className="text-4xl font-bold mt-8 mb-4">4. Data Security</h2>
      <p>
        What data we do collect, we’ll protect using commercially reasonable
        means to prevent loss and theft, as well as unauthorized access,
        disclosure, copying, use, or modification. Your data is stored in
        private databases and accessed only via secure API protocols.
      </p>

      <h2 className="text-4xl font-bold mt-8 mb-4">5. Contact Us</h2>
      <p>
        If you have any questions or concerns regarding our privacy practices,
        or if you wish to exercise your data rights regarding non-moderation
        data, please contact us via our official support channels or at:
        <span className="text-white font-bold ml-2">
          support@commandcore.cc
        </span>
      </p>
    </div>
  );
}

export default Terms;
