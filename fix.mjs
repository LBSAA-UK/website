import fs from 'fs';
import path from 'path';

const files = [
  'app/about/page.tsx', 
  'app/contact/page.tsx', 
  'app/cookies/page.tsx', 
  'app/events/page.tsx', 
  'app/membership/page.tsx', 
  'app/news/page.tsx', 
  'app/privacy/page.tsx',
  'app/page.tsx'
];

for (const filePath of files) {
  if (!fs.existsSync(filePath)) continue;
  
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // HTML comments to JSX comments
  content = content.replace(/<!--(.*?)-->/g, '{/* $1 */}');
  
  // Update emails
  content = content.replace(/lbsaa\.uk/g, 'lbsaauk.org');
  
  // Replace onsubmit with onSubmit
  content = content.replace(/onsubmit="(.*?)"/g, (match, code) => {
    return `onSubmit={(e) => { e.preventDefault(); }}`;
  });
  
  // Any stray single or double quotes outside tags (React warns)
  // Actually, we can just let React warn about unescaped quotes OR disable the rule
  
  fs.writeFileSync(filePath, content);
}
// Also update footer
let footer = fs.readFileSync('app/components/Footer.tsx', 'utf-8');
footer = footer.replace(/lbsaa\.uk/g, 'lbsaauk.org');
fs.writeFileSync('app/components/Footer.tsx', footer);

