# Antigravity Master Prompt — Cross-check Java Lab Against Lab Manual

You are editing the existing Java Lab website project in the currently open workspace. Act as a senior frontend engineer and Java lab reviewer. **Make the changes in the project; do not respond with a plan only.** Use the provided `Lab Manual.pdf` as the primary source for lab-manual content and the existing `experiments.js`, `app.js`, `index.html`, and `style.css` as the current implementation.

## 1. Goal and scope

Cross-check and correct the website against the requested manual experiments:

**EXP 1, 2, 3, 4, 5, 7, 8, 9, 10, 11**

There must be exactly ten experiment cards with those exact experiment numbers. **EXP 6 is intentionally omitted. Do not renumber the requested experiments consecutively from 1 to 10.** Preserve the user's numbering even though the cards are stored in an array. The manual's suggested experiment list on PDF page 2 identifies EXP 7 as the static website, EXP 8 as email validation, EXP 9 as automatic background colour change, EXP 10 as stopwatch, and EXP 11 as JavaScript animation. The detailed animation chapter later mistakenly labels itself “Experiment No. 10”; follow the suggested list and the user's requested set, so the animation is EXP 11.

Before changes, inspect `git status`, all project files, and current content. Do not overwrite unrelated local work. Do not commit, push, or deploy unless I explicitly asked. Keep the current visual identity and interactions; do not redesign the site unnecessarily.

## 2. Source-of-truth rules

1. Use the lab manual's actual detailed code and instructions rather than assuming the current examples are equivalent just because they cover the same topic.
2. Inspect the relevant PDF pages, including their screenshots when text extraction is incomplete:
   - Suggested experiment list: page 2.
   - EXP 1: pages 3–10.
   - EXP 2: pages 11–16.
   - EXP 3: pages 17–26.
   - EXP 4: pages 27–34.
   - EXP 5: pages 35–42.
   - EXP 7: pages 46–50.
   - EXP 8: pages 51–55.
   - EXP 9: pages 56–59.
   - EXP 10 stopwatch: pages 60–65.
   - EXP 11 animation: pages 66–69. (Its detailed chapter heading is inconsistent; number it EXP 11 based on the suggested list.)
3. If `Lab Manual.pdf` is not actually present in the workspace, do not pretend you read it. Ask me to add the file to the workspace and continue with other clearly supported work only.
4. Preserve the manual's original purpose, names, outputs, URLs and setup steps. Fix genuine compilation/runtime/path errors, but add a short “Correction made” note so corrected code is not falsely presented as verbatim source.
5. Do not invent missing original material. Where the suggested list requires a topic not demonstrated in the detailed code, keep the manual's provided example and add a **clearly labelled supplemental example** to cover the gap. Do not claim the supplement came from the PDF.
6. No incomplete runnable snippets, ellipses, fake test results, empty code files, or unresolved TODO placeholders.

## 3. Numbering, titles and experiment order

Update `experiments.js` and any dependent UI logic to exactly these ten entries, in this order:

1. EXP 1 — Classes and Objects with Looping and Branching (Java)
2. EXP 2 — Method and Constructor Overloading (Java)
3. EXP 3 — Inheritance and Exception Handling (Java)
4. EXP 4 — GenericServlet and HttpServlet (Java/Tomcat)
5. EXP 5 — JSP Login with JDBC and MySQL (JSP/Servlet)
7. EXP 7 — Static Website Using HTML, CSS and JavaScript
8. EXP 8 — JavaScript Email Validation
9. EXP 9 — Automatic Background Colour Change Using the DOM
10. EXP 10 — Stopwatch Using JavaScript
11. EXP 11 — JavaScript Text Animation (Spiral)

Use explicit experiment numbers, not array index arithmetic. Ensure card IDs, navbar IDs, `data-num`, search filters, tab IDs, accessibility attributes, and navigation actions still work with the non-consecutive set. Show exactly ten entries and no EXP 6. The hero/count must still say ten experiments, but experiment labels must preserve 1, 2, 3, 4, 5, 7, 8, 9, 10, 11.

## 4. Manual-specific content corrections

### EXP 1 — `Class1.java`

The current Employee example is not the detailed program in the manual. Include the manual's `public class Class1` example (PDF pages 6–7) with:
- instance variables `int n` and `String s`;
- constructor that prints “Default Constructor” and the initial values;
- `setN`, `setS`, `getN`, `getS` methods;
- `main` creating `Class1`, setting `12` and `"Hello"`, and printing the getter results.

Save as `EXP01-Class1/Class1.java`, and show exact compile/run commands from that folder:
`javac Class1.java`
`java Class1`

The manual's suggested list mentions looping and branching, but its detailed Class1 program does not demonstrate them. Keep the manual-based `Class1.java` and add a separate clearly labelled `LoopingBranchingDemo.java` supplement with a complete runnable demonstration of a loop and an if/else branch. State that this supplement is added to cover the suggested-list wording and is not code extracted from the manual. Test both files independently.

### EXP 2 — `Class2.java`

The current Calculator/Employee examples are not the detailed program in the manual. Include the complete manual-based `Class2.java` from PDF pages 12–15, with:
- `Student` class constructors `Student()`, `Student(String, int)`, and `Student(String, int, double)`;
- class `B` with overloaded `area(int r)` for circle area and `area(int l, int b)` for rectangle area;
- public class `Class2` that instantiates the students and calls both overloads;
- command-line arguments for radius, length, and breadth.

Give a working example command: `java Class2 10 20 30` after compilation. Add an argument-count guard before reading `arg[0]`, `arg[1]`, and `arg[2]` so a missing argument produces a readable usage message instead of `ArrayIndexOutOfBoundsException`. Document this as a small correctness fix. Keep the single public class in `Class2.java` and compile using `javac Class2.java`.

### EXP 3 — `Class3.java` plus clearly labelled exception-handling supplement

The current Single/Multilevel/Hierarchical examples are not a full match for the manual's main program. Include the manual-based `Class3.java` from PDF pages 20–24, preserving its main structures:
- base class `A`, private fields `i` and `s`, constructor, setters/getters and `display()`;
- `B extends A` and overrides `display()`;
- `C extends B` and overrides `display()`;
- interfaces `D1` and `D2`;
- class `D extends A implements D1, D2`;
- `Class3.main` creates `A`, `B`, `C`, `D`, and calls the methods to demonstrate constructor chaining, overriding and interface-based multiple inheritance.

The suggested list says “inheritance and exception handling”, but the detailed Class3 code does not actually demonstrate exception handling. Keep `Class3.java` as the manual-based program and add a clearly labelled supplemental `ExceptionHandlingDemo.java` demonstrating try/catch (for example, safely parsing an integer and handling invalid input). Do not claim that the supplemental program came from the manual. Compile and test each public class in its own correspondingly named `.java` file.

### EXP 4 — GenericServlet and HttpServlet

The manual says this experiment is about implementing both Generic and HTTP servlets. The current website only includes a `GenericServlet` example. Preserve a complete `FirstServlet.java` extending `GenericServlet` and returning HTML with the heading “Welcome To Servlet World!”. Also add a complete `FirstHttpServlet.java` extending `HttpServlet`, with a working `doGet()` and distinct output. Use Tomcat 9-compatible `javax.servlet.*` imports, not `jakarta.servlet.*`.

Preserve the manual's supplied Tomcat 9.0.106 path where required:
`C:\apache-tomcat-9.0.106-windows-x64\apache-tomcat-9.0.106`

Environment variables should be shown as current-CMD commands with safe quoting:
`set "JAVA_HOME=C:\Program Files\Java\jdk-22"`
`set "CATALINA_HOME=C:\apache-tomcat-9.0.106-windows-x64\apache-tomcat-9.0.106"`
`set "PATH=%JAVA_HOME%\bin;%PATH%"`
Explain that these `set` commands affect only the current CMD session, and paths must match the user's actual installation. Do not instruct users to copy `servlet-api.jar` into the JDK's `lib` folder. Use Tomcat's existing `%CATALINA_HOME%\lib\servlet-api.jar` in `javac -cp`.

Use explicit, matching package/path/class names. Recommended source/class layout:
- `%CATALINA_HOME%\webapps\Sample\WEB-INF\servlet\com\example\FirstServlet.java`
- `%CATALINA_HOME%\webapps\Sample\WEB-INF\servlet\com\example\FirstHttpServlet.java`
- compiled classes under `%CATALINA_HOME%\webapps\Sample\WEB-INF\classes\com\example\`

Compile each class with a fully quoted, working CMD command. Show the default Tomcat URL `http://127.0.0.1:8080/` and servlet URLs `http://127.0.0.1:8080/Sample/FirstServlet` and `http://127.0.0.1:8080/Sample/FirstHttpServlet` (or the exact chosen mapping).

### EXP 5 — JSP login and MySQL

Preserve the manual's flow and files: install MySQL, log in through `mysql -u root -p`, create/use `login_db`, create `users`, insert demonstration user `admin` / `admin123`, create `Login.jsp`, `LoginServlet.java`, `welcome.jsp`, `error.jsp`, configure servlet deployment, compile, restart Tomcat and test valid/invalid credentials.

Use paths consistently under:
`%CATALINA_HOME%\webapps\Sample\`

Required files:
- `Login.jsp`
- `welcome.jsp`
- `error.jsp`
- `WEB-INF\web.xml` (one shared descriptor with EXP 4; see next rule)
- source at `WEB-INF\servlet\com\example\LoginServlet.java`
- compiled class at `WEB-INF\classes\com\example\LoginServlet.class`
- Connector/J JAR inside `WEB-INF\lib\`

Use `package com.example;`, `javax.servlet.*` imports, `com.mysql.cj.jdbc.Driver`, a prepared SQL query and try-with-resources. Make it explicit that `DB_PASSWORD` is a placeholder until replaced with the real local MySQL password. Keep the demonstration username/password labelled as lab test credentials. Do not claim a real database login succeeded unless it is actually tested with MySQL, the JAR, Tomcat, and valid local credentials.

Keep the `Login.jsp` filename casing consistent in all paths and links. The invalid-login page must link to `Login.jsp`, not `login.jsp`. Ensure the database seed script is safe to run twice or clearly warn not to duplicate the administrator row. Preserve the supplied MySQL installer URL.

### Shared `Sample\WEB-INF\web.xml` for EXP 4 and EXP 5 — critical

Both practicals deploy under the same `/Sample` web application and therefore cannot each require overwriting the same `WEB-INF\web.xml` with a different servlet list. Create **one canonical combined `web.xml`** that registers all three servlets and mappings:
- `com.example.FirstServlet` → `/FirstServlet`
- `com.example.FirstHttpServlet` → `/FirstHttpServlet` (or another clearly consistent mapping)
- `com.example.LoginServlet` → `/LoginServlet`

Use a valid Tomcat 9-compatible Java EE servlet descriptor and ensure XML is well-formed. Do not use `@WebServlet` in addition to the XML registration; use one registration approach to avoid duplicates. Display this full shared descriptor once in the content, then refer to it from the other experiment instead of presenting two conflicting or duplicate files. Both experiments must work after following their instructions in sequence.

### EXP 7 — Static website

This is the manual's static website practical (PDF pages 46–50). Keep the three complete files `index.html`, `style.css`, and `script.js`, including the header/nav/main/footer structure, “Click Me” button, message element, and `showMessage()` function. Preserve the relative references (`href="style.css"` and `src="script.js"`). Correct obvious text/encoding issues only with a note; do not silently remove content from the manual. Store files under an explicit experiment-specific folder such as `EXP07-StaticWebsite/` so the generic filenames do not collide with other experiments.

### EXP 8 — Email validation

This is the manual's email validation practical (PDF pages 51–55). Keep the static website structure and add the email input and Submit button. Preserve the stated lab requirement to check for `@` and `.` and to show an alert and focus the input if either is absent. Store files under `EXP08-EmailValidation/` so their `index.html`, `style.css`, and `script.js` do not overwrite EXP 7's files.

You may additionally provide stricter validation only as a clearly labelled optional enhancement. The default manual demonstration must still show the required missing-`@`/missing-dot alert behaviour. Test examples with missing `@`, missing `.`, and a plausible address.

### EXP 9 — Automatic background colour change

Preserve the manual's five colours and five-second interval: blue `#3498db`, red `#e74c3c`, green `#2ecc71`, orange `#f39c12`, purple `#9b59b6`; heading “Watch the Background Color Change Every 5 Seconds”; smooth background transition. The optional Maven servlet backend must remain optional and separate from the plain HTML/JS practical.

The current implementation starts with blue and then sets blue again at the first interval. Correct this so the background actually changes after five seconds: set the initial background to blue immediately and have the first interval transition to red, then cycle green/orange/purple/blue. Document this as a behavioural correction to meet “changes every 5 seconds”.

For the optional backend, use a complete Maven WAR project named `AutoColorChanger`, `javax.servlet:javax.servlet-api:4.0.1` with `provided` scope, a pinned compatible Maven Compiler Plugin, Java release 8 configuration, complete `pom.xml`, `ColorServlet.java` in package `com.example.web`, and a complete `WEB-INF/web.xml` mapping `/color`. Avoid the unused `PrintWriter` and do not mix `include` and `forward`; use one working dispatch strategy to serve `/index.html`.

Include `<finalName>AutoColorChanger</finalName>` so `mvn clean package` from the directory containing `pom.xml` produces `target\AutoColorChanger.war`. Show deployment to `%CATALINA_HOME%\webapps\AutoColorChanger.war` and test URLs:
- `http://localhost:8080/AutoColorChanger/`
- `http://localhost:8080/AutoColorChanger/color`

Do not claim the servlet backend works on Vercel. Vercel is hosting the static Java Lab code-display site; Tomcat/Maven backend routes are for a separately deployed local/server WAR.

### EXP 10 — Stopwatch

Preserve the manual's Stopwatch practical (PDF pages 60–65) as three files under `EXP10-Stopwatch/`: `index.html`, `style.css`, `script.js`. Keep Start, Stop and Reset functionality and centisecond display. Verify that Start cannot create multiple intervals, Stop pauses without resetting the elapsed time, Start resumes, and Reset returns the timer to zero and correct button states. Maintain exact filenames/casing between the HTML references and displayed file labels.

### EXP 11 — JavaScript animation

Use the manual's spiral text animation from PDF pages 66–69. Keep `index.html`, `style.css`, and `script.js` as separate files under `EXP11-TextAnimation/`, with two spiral containers, the text “The Web Designer”, character generation, and the visual animation. Use the number **11**, because the suggested experiment list says animation is EXP 11 even though the detailed heading repeats 10. Do not use outdated browser identification such as `InstallTrigger` as the primary feature detector. Implement a reliable, documented animation path in supported browsers; avoid running competing CSS and JS animations simultaneously. Preserve the manual-based appearance where practical and document any compatibility fix.

## 5. File paths, code copy and UI behavior

1. Every actual file displayed in the site must have an explicit, correct destination path in its content model (`path`). Add paths for current entries that lack them. Use separate experiment-specific folders for generic filenames like `index.html`, `style.css` and `script.js` to avoid accidental overwrites.
2. For command snippets, identify the intended shell and working directory. Use valid Windows CMD syntax and quote paths with spaces.
3. Keep the current dropdown/tabs and Copy Code functionality. Copy must capture the exact raw source string, not highlighted HTML or line numbers. Success notifications must only show after successful copying; failed copies need an error message.
4. Preserve search across experiment title, descriptions, tags, file names, destination paths and raw code.
5. Keep Expand All / Collapse All and navbar jumps working for non-consecutive numbers. Ensure visible “EXP 7”, “EXP 8”, etc. labels are the correct values, not the card's array index.
6. Do not show duplicate conflicting `web.xml` blocks for EXP 4 and EXP 5. Use one canonical shared descriptor with a cross-reference.
7. Ensure the EXP 9 file-tab label says `pom.xml` for its Maven configuration. Do not change file labels based on the first token in the code.
8. Preserve all existing unrelated experiments/files only if they are still required by the requested set; remove the unrequested EXP 6 card from the list but do not delete arbitrary repository files.

## 6. Required verification before completion

Run actual checks; do not merely assert that code “should work”.

### Website
- Validate all JavaScript source syntax.
- Run the available site build/test command if configured. If it is a plain static site, test its actual served page (not only a syntax parse).
- Check exactly 10 cards exist with numbers `1,2,3,4,5,7,8,9,10,11` and that there is no EXP 6 card.
- Verify every `path` is populated for actual files, every relative HTML asset reference resolves, and there are no missing local screenshots/assets.
- Test searching for `Class1`, `LoginServlet`, `@`, `AutoColorChanger`, and `Stopwatch`; test Expand All, Collapse All, tabs/dropdowns, and Copy Code on Java, SQL, command, XML, HTML and JS blocks.
- Check browser console/runtime errors and responsive layout when browser tools are available.

### Java and servlet code
- Compile `Class1.java`, `LoopingBranchingDemo.java`, `Class2.java`, `Class3.java`, and `ExceptionHandlingDemo.java` with `javac`; run representative normal and error/edge input cases.
- Validate both EXP 4 servlet Java files using `%CATALINA_HOME%\lib\servlet-api.jar`; validate the shared `web.xml` XML. If Tomcat is available, deploy to `/Sample` and test all three routes: `/FirstServlet`, `/FirstHttpServlet`, `/LoginServlet` via `Login.jsp`.
- For EXP 5, validate the SQL and compile `LoginServlet.java`; test the real valid/invalid login only if local MySQL, Connector/J and Tomcat are available.
- For EXP 9, run `mvn clean package`, inspect the WAR, verify its filename, servlet class path and descriptor. Test both routes on Tomcat if available.
- Test the email-validation functions and stopwatch/animation interactions in a browser if available.
- If a required external service/runtime is unavailable, state **BLOCKED**, name the missing dependency and list the exact command/test that could not run. Do not report it as passed.
- Fix failures and rerun the relevant test. Report exact test outcomes.

## 7. Final report

After implementation, provide:
1. A concise list of edits.
2. The final experiment list and numbers: `1, 2, 3, 4, 5, 7, 8, 9, 10, 11`.
3. A concise comparison note for each requested experiment identifying what was aligned with the manual and what was added as a clearly labelled supplement.
4. The shared `Sample\WEB-INF\web.xml` decision and the three servlet mappings.
5. A verification table with actual `PASS`, `FAIL`, and `BLOCKED` outcomes and commands run.
6. Any code correction or discrepancy between the manual and working implementation.

**Definition of done:** The ten requested experiment numbers are preserved; content matches the lab manual where detailed material exists; gaps in the manual are clearly marked rather than silently invented; paths and code compile/run in their described environment; duplicate/conflicting configuration is removed; website features work; and all test claims match tests actually performed.
