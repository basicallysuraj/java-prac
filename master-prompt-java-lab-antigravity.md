# MASTER PROMPT — Rebuild Java Lab Website and Verify All 10 Experiments

You are working inside my existing Antigravity workspace. Act as a senior React/Tailwind engineer and a Java Servlet/JSP/MySQL lab reviewer. **Implement the website in the workspace; do not merely explain how I could implement it.** Use the Gemini Flash model efficiently, but do not sacrifice correctness.

## 1. Main goal

Recreate the website as closely as possible to the reference:

- Reference: https://java-prac.netlify.app/
- Match its page structure, visual hierarchy, text, experiment numbering, interactions, and responsive behaviour.
- Keep exactly **10 experiments, numbered EXP 1 through EXP 10**.
- Preserve all existing source content, code, file names, links, and experiment order found on the original site or in the current workspace.
- I supplied additional screenshots/content for **EXP 4, EXP 5, and EXP 9**. Incorporate them into those exact existing entries. Do not create extra experiments, renumber anything, or duplicate text/code already present. If the added material overlaps existing steps, merge the two versions into one complete step sequence while retaining every unique detail.
- The reference page's main heading/content includes “Java Lab”, “Exact Code Repository”, “10 Experiments”, “Java Lab Experiments, Ready to Copy”, and a description explaining that experiments expand and individual files can be copied. Preserve the actual reference site's text where accessible rather than rewriting it.

## 2. Inspect before editing

1. Inspect the current project directory, `package.json`, all source files, existing experiment data, styles, assets, and README before modifying anything.
2. Open the reference website in a browser and inspect **all 10 experiment accordions**, not just the first viewport. Expand each experiment, inspect every tab/dropdown/file, and capture all titles, descriptions, steps, source files, commands, expected outputs, links, and screenshots that can be accessed.
3. Check whether the project's current code or assets already contain the original experiment content. Reuse it. Do not replace existing content with generic examples.
4. Check all available user-provided EXP 4, EXP 5, and EXP 9 screenshots/content in the workspace. Put real screenshot files into the project assets directory and display them at the relevant steps. Do not recreate a screenshot with made-up content.
5. If the live website is inaccessible, try sensible alternate methods available in the workspace/browser, including page source, loaded JavaScript/data assets, and existing project data. Do not use an unrelated online repository as a substitute for the exact experiment content.
6. **Never fabricate missing original text or claim it was extracted.** If a particular original experiment cannot be recovered after reasonable inspection, preserve whatever genuine content is available, make that entry transparently identify the specific missing source content, and include it in the final blocker report. Do not leave vague empty placeholders while claiming the site is complete.

## 3. Existing website UI and behaviour

Reproduce the existing visual design as closely as possible and keep it polished, responsive, and accessible:

- Header/brand, heading, subtitle/description, experiment-count badge, search input, Expand All and Collapse All buttons, experiment cards/accordions, file tabs or dropdowns, code viewer, Copy buttons, copied confirmation/toast, footer, spacing, borders, typography, colours, and responsive layout.
- Match the reference; do not redesign it into an unrelated dashboard.
- Search must filter experiments by title, topic, instructions, filenames, paths, commands, and code content.
- Each accordion opens/closes correctly. Expand All opens the currently matching/search-filtered experiments; Collapse All closes all.
- Switching tabs/files must show the correct file's full content. Keep state for each experiment sensible when the user switches between experiments.
- Provide **Copy** buttons for every code block, full source file, terminal command, folder path, environment-variable value, SQL block, URL, and `web.xml`/`pom.xml` snippet where useful. Copy only the associated text, not explanatory labels or line numbers.
- Use the Clipboard API with a robust fallback/error message. Show a clear “Code copied!”/appropriate confirmation only after a successful copy. Never falsely show success on failure.
- Use semantic controls, keyboard focus states, accessible names, `aria-expanded` on accordions, and useful alt text for screenshots.
- Keep styling in Tailwind CSS. Do not introduce a second styling system or unnecessary global CSS.
- Keep the code/content data cleanly separated from presentational components; prefer one structured content model for steps, images, notes, code blocks, paths, and links.

## 4. Hard rules for experiment numbers and duplicate content

- There must be exactly 10 numbered experiment entries: `1, 2, 3, 4, 5, 6, 7, 8, 9, 10`.
- Do not derive experiment numbers from array position if that could renumber content accidentally. Store an explicit `number` on each entry.
- Keep original EXP 1, 2, 3, 6, 7, 8, and 10 content unchanged unless a verified bug needs fixing.
- Add the servlet setup guide under **EXP 4**; add the JSP/MySQL login implementation under **EXP 5**; add the AutoColorChanger/optional servlet backend material under **EXP 9**.
- Merge duplicate steps rather than showing the same paragraph/code twice. Keep a single canonical copy of any repeated source file, and link to it from related steps if necessary.
- Preserve every unique detail from the source and screenshots. If code must be corrected to compile/run, preserve its purpose, make the correction, and document it in a short “Correction made for successful compilation/runtime” note. Do not silently turn a correction into a false claim that the screenshot originally contained it.

## 5. EXP 4 — Apache Tomcat + First Servlet

Add a complete, ordered, beginner-friendly implementation guide in EXP 4. Include the original relevant screenshots in their corresponding steps. Make every command/path/code block individually copyable.

### Required sequence

1. **Download Tomcat** using the supplied link: `https://tomcat.apache.org/download-90.cgi`. The supplied material names `apache-tomcat-9.0.106-windows-x64.zip`. Keep that version/path where it is still the supplied target; do not silently substitute a different version.
2. **Extract Tomcat** to the supplied root path:
   `C:\apache-tomcat-9.0.106-windows-x64\apache-tomcat-9.0.106`
3. **Configure environment variables** with clear names and values:
   - `JAVA_HOME` = `C:\Program Files\Java\jdk-22`
   - `CATALINA_HOME` = `C:\apache-tomcat-9.0.106-windows-x64\apache-tomcat-9.0.106`
   - Add `%JAVA_HOME%\bin` to `Path` (also show the literal JDK `bin` path if needed to mirror the screenshots).
   - Explain that paths must match where the user actually installed Java/Tomcat. Include screenshots at the appropriate step.
4. Do not blindly recommend copying `servlet-api.jar` into the JDK's `lib` directory. Tomcat already provides it at `%CATALINA_HOME%\lib\servlet-api.jar`; use that explicit path in compilation commands and explain why. Preserve the instructional intent of the original classpath steps while choosing a reliable, current setup.
5. **Start Tomcat** by running:
   `%CATALINA_HOME%\bin\startup.bat`
   Explain how to recognise the final “Server startup in … milliseconds” message, and troubleshoot port 8080 conflicts or a missing Java configuration without inventing logs.
6. Open `http://127.0.0.1:8080/` and confirm the Tomcat welcome page.
7. Create the `Sample` web application folder with this exact root:
   `%CATALINA_HOME%\webapps\Sample`
   Create `WEB-INF`, and inside `WEB-INF` create the source folder and compiled classes directory. Use a consistent layout, for example:
   - `WEB-INF\servlet\com\example\FirstServlet.java`
   - `WEB-INF\classes\com\example\FirstServlet.class`
   - `WEB-INF\web.xml`
8. Provide complete, working `FirstServlet.java` code based on the supplied example. The code should extend `GenericServlet`, implement `service(ServletRequest, ServletResponse)`, declare `ServletException` and `IOException`, set the response type to HTML with UTF-8, and return a page containing the heading **“Welcome To Servlet World!”**. Use `javax.servlet.*` APIs because the supplied target is Tomcat 9.0.x; do not mix `jakarta.servlet.*` with Tomcat 9.
9. Provide the exact, quoted Windows `javac` command. Use `%CATALINA_HOME%\lib\servlet-api.jar` as the classpath and compile the source into `WEB-INF\classes`. Ensure the `package com.example;` line, source folder, compiled package folder, and `web.xml` class name all match. Paths with spaces must be quoted.
10. Provide a complete `WEB-INF\web.xml` with valid XML, a matching servlet class `com.example.FirstServlet`, and URL mapping `/FirstServlet`. Validate the XML.
11. Open and test `http://127.0.0.1:8080/Sample/FirstServlet`. State the expected page heading and troubleshoot 404/class-not-found/class-version errors with specific checks.

Never show incomplete Java or XML containing ellipses (`...`) as runnable code. Every snippet claimed to be complete must be syntactically complete.

## 6. EXP 5 — JSP Login with MySQL + Servlet

Add the provided login practical into **EXP 5** with all unique steps in the right order. Use the supplied screenshots near the corresponding steps and make all paths, SQL, Java/JSP/XML, and commands copyable.

### Required sequence

1. Install MySQL using the supplied page `https://dev.mysql.com/downloads/installer/` and the provided package label `mysql-installer-web-community-8.0.42`. If the exact installer is no longer available, retain the supplied reference and explain how to choose an available official installer; do not silently mislabel another version as 8.0.42.
2. Open Command Prompt and go to:
   `C:\Program Files\MySQL\MySQL Server 8.0\bin`
   Then run `mysql -u root -p`. Explain that the user must enter the actual root password configured during installation.
3. Include the supplied SQL, corrected only when needed, as a complete copyable block:
   - `CREATE DATABASE login_db;`
   - `USE login_db;`
   - Create `users` with auto-increment `id`, `username VARCHAR(50) NOT NULL`, and `password VARCHAR(50) NOT NULL` (or a wider `VARCHAR` if required by the final implementation; explain any change).
   - Insert the lab test user `admin` / `admin123` once.
   - Show expected successful MySQL output and avoid suggesting the insert be blindly repeated if the row already exists.
4. Use the web-app root:
   `%CATALINA_HOME%\webapps\Sample`
   Include the directory structure and paths before showing code. Use consistent `Login.jsp` casing everywhere because deployed web applications may run on case-sensitive filesystems.
5. Provide complete `Login.jsp`: a UTF-8 login form posting to `LoginServlet`, with required `username` and `password` inputs and a submit button.
6. Provide complete `LoginServlet.java` using Tomcat 9-compatible `javax.servlet.*` imports, `HttpServlet`, `doPost`, JDBC, `com.mysql.cj.jdbc.Driver`, a prepared statement, and try-with-resources. Use the supplied connection target `jdbc:mysql://localhost:3306/login_db`, user `root`, and a clearly labelled password placeholder that must be changed to the actual local MySQL password. Query `SELECT * FROM users WHERE username=? AND password=?`. On success, set the `username` request attribute and forward to `/welcome.jsp`; on failure, forward to `/error.jsp`. Do not swallow SQL/driver errors—provide an actionable servlet error message/log.
7. Explain the required **MySQL Connector/J** runtime JAR. Put it in `Sample\WEB-INF\lib\` (create the folder if needed) and confirm the actual JAR filename/path. A class that calls `com.mysql.cj.jdbc.Driver` will not work at runtime without this driver. Do not claim login is verified if Connector/J or a real MySQL connection was unavailable.
8. Use package and mapping names consistently. If `LoginServlet.java` declares `package com.example;`, it must compile to `WEB-INF\classes\com\example\LoginServlet.class` and `web.xml` must use `com.example.LoginServlet`. Since the provided material explicitly includes `web.xml` mapping, use that as the single servlet registration method; do not duplicate the same `/LoginServlet` mapping through both XML and `@WebServlet` unless the configuration is deliberately de-duplicated.
9. Provide complete `welcome.jsp`, showing `Welcome, <username>!` and “You have successfully logged in.” Provide complete `error.jsp`, showing a failed-login message and a link back to `Login.jsp` (matching exact filename casing).
10. Provide valid `WEB-INF\web.xml` with matching servlet class and `/LoginServlet` URL mapping. Ensure the XML is complete and well-formed.
11. Give a correct quoted `javac` command using `%CATALINA_HOME%\lib\servlet-api.jar` and `-d` to compile the class into `WEB-INF\classes`. Explain that JDBC APIs are in Java but Connector/J is still required at runtime. Do not use unquoted Windows paths with spaces.
12. Restart Tomcat using `shutdown.bat` and then `startup.bat` if required. Test `http://127.0.0.1:8080/Sample/Login.jsp` using `admin` / `admin123`, then test a wrong password. Expected result: successful welcome page for the correct row and error page for invalid credentials.
13. Mention the lab credentials are demonstration values. Do not claim successful end-to-end testing unless the database, driver, Tomcat, and actual configured MySQL password were available and used in the test.

### Important fixes for EXP 5

- Ensure the Java package, compilation output location, and `web.xml` class match exactly.
- Fix `Login.jsp` versus `login.jsp` capitalization mismatches.
- Use a prepared statement and close JDBC resources with try-with-resources.
- Ensure `welcome.jsp` and `error.jsp` dispatch paths exist and match their filenames.
- Do not silently leave `DB_PASSWORD = "your_password"` as if it worked. Label it and show where the user's actual MySQL password goes.

## 7. EXP 9 — Preserve the existing experiment; add AutoColorChanger optional servlet backend

Keep EXP 9's existing original content and numbering. Add the screenshot-provided **“Backend: Java Servlet (Optional to Serve Page)”** material as a clearly labelled optional backend subsection inside EXP 9, merging any overlaps with the existing experiment rather than duplicating it. Do not replace EXP 9's current main exercise.

The screenshot supplies a Maven web project named `AutoColorChanger`, with this intended structure:

```text
AutoColorChanger/
├── pom.xml
└── src/
    └── main/
        ├── java/
        │   └── com/example/web/ColorServlet.java
        └── webapp/
            ├── index.html
            └── WEB-INF/web.xml
```

Requirements:

1. Preserve and use the existing `index.html` from EXP 9 if it already exists. It is the frontend page and must not be overwritten by a fabricated duplicate. If it is genuinely missing, create a small functional fallback color-changer page and label it as newly supplied fallback content.
2. Provide a complete, buildable `pom.xml` for a WAR project with `groupId` `com.example`, `artifactId` `AutoColorChanger`, version `1.0-SNAPSHOT`, and `javax.servlet:javax.servlet-api:4.0.1` with `provided` scope. Use compatible Maven compiler/war plugin configuration and an explicit supported Java release. Never use `...` in runnable XML.
3. Provide complete `ColorServlet.java` in package `com.example.web` using `javax.servlet` and `javax.servlet.http` APIs for Tomcat 9. Map it to `/color` through `web.xml` and serve or forward to `/index.html` correctly.
4. The screenshot version creates a `PrintWriter` but does not use it before dispatching. Correct that dead code. If the intent is to serve the whole `index.html` page from `/color`, use a single correct dispatch strategy (typically `request.getRequestDispatcher("/index.html").forward(request, response)`) rather than creating an unused writer or accidentally mixing `include` and `forward`. Document this small runtime correction.
5. Provide complete valid `src/main/webapp/WEB-INF/web.xml` with servlet name, matching class `com.example.web.ColorServlet`, and URL mapping `/color`.
6. Give the correct build command `mvn clean package`, expected WAR output `target\AutoColorChanger.war`, deployment steps for Tomcat 9, and URLs:
   - `http://localhost:8080/AutoColorChanger/`
   - `http://localhost:8080/AutoColorChanger/color`
   Adjust the deployed context path only if the actual WAR filename/configuration differs, and explain why.
7. Keep all APIs consistent: this supplied example targets Tomcat 9 and `javax.servlet`; do not mix it with Tomcat 10+/`jakarta.servlet` dependencies.
8. Test the frontend route and `/color` route. If Maven or Tomcat is unavailable, perform every available static/build check and clearly mark deployment testing as blocked rather than passed.

## 8. Code quality and correctness requirements for all 10 experiments

The website is an exact code repository, not just a visual mockup. Inspect every code file in every experiment.

- Preserve originals, but correct actual compile/runtime errors when needed and explain the fix briefly.
- Ensure all Java filenames and public class names match. Check package declarations versus folder paths, imports, method signatures, braces, semicolons, classpaths, resource paths, and XML tag structure.
- Use one consistent Java/Servlet compatibility target per practical. For the supplied Tomcat 9 examples use `javax.servlet`, servlet API 4.x, and a compatible JDK. Never mix `javax.servlet` and `jakarta.servlet` in one practical.
- Make every complete code block executable/compilable in its described environment. If one block is only a fragment, label it explicitly as a fragment and say which file/class contains it.
- Every compile/run command must be copy-ready for Windows CMD, including quoting paths with spaces. Do not mix PowerShell syntax into a CMD block without labelling the shell.
- Include required external library/setup steps before code that depends on them. E.g., MySQL Connector/J is needed at runtime for EXP 5.
- Keep code files separated by filename; avoid combining multiple public classes into a single Java file when that would fail compilation.
- Show exact destination paths for each file, before or directly beside the code block.
- Show expected output for a genuine testable example. Do not invent test results.
- Do not over-normalize source text: preserve unique original code and instructions, while ensuring the final instructions actually work.

## 9. Verification — mandatory before declaring completion

Run real checks from the project workspace and record results. **Never claim a check passed unless it was actually executed.**

### Website checks

1. Install dependencies using the project's package manager based on the existing lockfile. Do not switch package managers or delete a lockfile unnecessarily.
2. Run the production build (`npm run build` for an existing Vite project, or the appropriate existing equivalent) and fix all build errors.
3. Run the website and test in a browser if browser support is available. Verify page rendering, browser-console errors, responsive layout, search, each of the 10 accordion entries, Expand All, Collapse All, file tabs/dropdowns, copy buttons, successful-copy notification, and no-results/empty-search states.
4. Test copying at least one Java file, one SQL block, one Windows path, one URL, and one XML/Maven block. Ensure the clipboard receives exactly the intended text.
5. Test all 10 numbers remain 1–10 and that EXP 4/5/9 are only present once each.
6. Search the content/data for placeholder strings, `TODO`, “Content not extracted yet”, empty `files: []`, accidental repeated duplicate steps, ellipses in claimed-complete code, and missing local image assets. Resolve all accidental placeholders; report any genuine unavailable source content.

### Java and integration checks

1. For each standalone Java source file in all ten experiments, run `javac` with the required Java version/dependencies if available. Execute it with a small valid input and, where applicable, an edge/error input. Record the exact command and result.
2. For servlet/JSP examples, validate Java source and XML. Use the correct `servlet-api.jar` classpath. Build Maven projects with `mvn clean package` if Maven and dependencies are available.
3. For EXP 4, test the compiled class, WAR/webapp deployment, `/Sample/FirstServlet`, and expected welcome heading if Tomcat is available.
4. For EXP 5, test SQL schema/user insertion and the login success/failure paths if MySQL + Connector/J + Tomcat are available.
5. For EXP 9, test Maven WAR packaging and both AutoColorChanger paths if Maven + Tomcat are available.
6. If a required external service/software is not installed or cannot run in the environment, do every feasible static and compile check, mark the exact integration test as **BLOCKED** with the missing dependency and exact command for me to run locally. Do not relabel a blocked test “passed”.
7. If a test fails, fix the code and rerun the failing test. Continue until tests pass or a genuine environmental block is documented.

## 10. Final deliverables

Finish implementation in the current workspace, then give me:

1. A concise summary of what changed.
2. The final project/file structure and the exact command to run the website locally.
3. A table for EXP 1–10 listing the title/content source and status (`Preserved`, `Updated and tested`, or `Blocked—source unavailable`); make sure EXP 4/5/9 are clearly present with no duplicates.
4. A verification table with each command actually run and its exact result. Separate **PASS**, **FAIL**, and **BLOCKED**.
5. A concise list of every code correction made to EXP 4, EXP 5, and EXP 9 and why it was required.
6. Any source or screenshot still missing, with the exact filename/content needed. Do not pretend content was extracted when it was not.

**Definition of done:** the page is a faithful, responsive reconstruction with exactly 10 correctly numbered entries; all source content that is accessible is preserved; the added EXP 4/5/9 material is complete, correctly placed, deduplicated, copy-ready, and code-reviewed; the available build/tests have been executed and reported honestly. Do not stop at writing a plan. Inspect, implement, run checks, repair failures, and report results.
