var allowedDomains = [
  "https://schoollessons.pages.dev",
  "https://schoolprojects.glitch.me",
  "https://nweatestingsite.glitch.me",
  "https://schoolacademics.glitch.me",
  "https://funschoolprojects.glitch.me",
  "https://plexilearcade.glitch.me",
  "https://plexilearcade.xyz",
  "https://schooltutoring.onrender.com",
  "https://education.disciplinary.design",
  "https://schoolapplications.onrender.com",
  "https://yourlocalsciencegrades.dcmusic.ca",
  "https://algebratutors.onrender.com",
  "https://schooltutoring.dcmusic.ca",
  "https://pa.maze.lol",
  "https://mytestscores.netlify.app",
  "https://youthacademy.netlify.app",
  "https://onlinelessonss.netlify.app",
  "https://freetutoring.onrender.com",
  "https://freetutoring.dcmusic.ca
];

var referringUrl = document.referrer;

var isAllowedDomain = allowedDomains.some(function (domain) {
  return referringUrl.indexOf(domain) !== -1;
});

if (!isAllowedDomain) {
  window.location.href = "https://pornhub.com";
}
