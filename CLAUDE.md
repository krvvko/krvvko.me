@AGENTS.md

Besides all other instructions - here are some more:
- If you dont understand something, or unsure about implementation then always ask clarifying questions
- Everything should be structured extremely well, so it is understandable and scalable. 
- Never use inline styles (unless necessary), and NEVER use tailwind. Use module.css
- All components should be in their own folders like that: ComponentName/ ComponentName.tsx and index.module.css
- If you need to use icons - use phosphor icons. 
- If you need to use some other library - install its latest version
- Never run npm run dev, you may do type checks, but dont run build/dev. 
- For style values - use variables in globals.css, create them if needed.
- Make reusable components if needed (for example for buttons/links etc)