# Antigravity Improvement Prompt — EXP 4, EXP 5, and EXP 9

You are editing my **existing Java Lab website project** in this workspace. Implement the changes directly; do not only give me instructions. Use Gemini Flash efficiently, but prioritize correctness over speed.

## A. Non-negotiable rules

1. Modify only the content and functionality needed for **EXP 4, EXP 5, and EXP 9**. Do not rewrite, delete, renumber, or otherwise change EXP 1, 2, 3, 6, 7, 8, or 10.
2. Keep exactly 10 experiment entries, numbered 1–10. Store explicit experiment numbers; do not derive numbering from an array index.
3. EXP 4 is the Tomcat 9 / First Servlet practical. EXP 5 is the JSP + MySQL login practical. EXP 9 keeps its existing Auto Color Changer exercise and receives the optional Maven / Java Servlet backend described below.
4. Inspect and reuse all original website content and user-provided screenshots already in the project. Merge duplicate instructions into one sequence without losing unique information. Do not duplicate code or steps that already exist. Do not replace any existing EXP 9 frontend exercise with only a backend example.
5. Keep the reference site's layout and existing interaction patterns. Preserve the current accordion, search, file tabs/dropdowns, expand/collapse controls, code formatting, and footer. Every newly added file/path/command/code/XML/SQL block must use the project's existing copy-button pattern. Copy the exact block only, and report successful copying only after the clipboard operation succeeds.
6. Before editing, inspect the entire project, its package manager/lockfile, experiment content data, assets, and current implementation. Then inspect the original reference website where available. Do not invent content claimed to be extracted from the reference.
7. If the screenshots' text conflicts with code required to compile/run, preserve the intended lab exercise, make the smallest necessary correction, and add a brief note explaining it. Never label untested code as verified.
8. Keep the UI responsive and accessible. Use the project's current styling approach, preferably its existing Tailwind setup. Do not add an unrelated redesign or unnecessary dependencies.

## B. EXP 4 — Apache Tomcat 9 and First Servlet

Create one complete, ordered, beginner-friendly set of steps for EXP 4, merging overlapping versions already present. Include relevant supplied screenshots at the appropriate steps. Put the destination path immediately before each file's complete source.

### Steps and environment

1. Preserve the supplied download reference and intended Tomcat version:
   - URL: `https://tomcat.apache.org/download-90.cgi`
   - Archive: `apache-tomcat-9.0.106-windows-x64.zip`
   - Suggested extracted directory: `C:\apache-tomcat-9.0.106-windows-x64\apache-tomcat-9.0.106`
   Check whether the specified version/archive remains available from the official source. If it is unavailable, say so and offer the current official Tomcat 9 archive while keeping the original path/version documented as the supplied lab target. Do not silently relabel another version as 9.0.106.
2. Explain that Java and Tomcat must actually exist at the selected paths. The supplied Java path is `C:\Program Files\Java\jdk-22`; use it as the default only if it exists. In Windows CMD, show safe quoting:

   ```bat
   set "JAVA_HOME=C:\Program Files\Java\jdk-22"
   set "CATALINA_HOME=C:\apache-tomcat-9.0.106-windows-x64\apache-tomcat-9.0.106"
   set "PATH=%JAVA_HOME%\bin;%PATH%"
   java -version
   javac -version
   ```

   Explain that `set` changes variables only in the current CMD window. For persistent variables, use Windows Environment Variables settings. Do not overwrite the user's existing PATH permanently.
3. Create the application's folders with copy-ready CMD commands:

   ```bat
   mkdir "%CATALINA_HOME%\webapps\Sample\WEB-INF\servlet\com\example"
   mkdir "%CATALINA_HOME%\webapps\Sample\WEB-INF\classes\com\example"
   ```

4. Store the source at:
   `%CATALINA_HOME%\webapps\Sample\WEB-INF\servlet\com\example\FirstServlet.java`
5. Store the deployment descriptor at:
   `%CATALINA_HOME%\webapps\Sample\WEB-INF\web.xml`
6. Explain that this is a Tomcat 9 example and must use `javax.servlet.*`, not `jakarta.servlet.*`. Use Tomcat's own `%CATALINA_HOME%\lib\servlet-api.jar`; do not tell the user to copy the Servlet API JAR into the JDK.

### Complete `FirstServlet.java`

Provide a complete source file, not a fragment. It must:

- Declare `package com.example;`.
- Extend `GenericServlet` and implement `service(ServletRequest, ServletResponse)` with `ServletException` and `IOException`.
- Set `text/html; charset=UTF-8`.
- Return valid HTML containing the exact heading `Welcome To Servlet World!`.
- Include every required import and closing brace. No ellipses or omitted sections.

### Complete `WEB-INF/web.xml`

Use a valid Servlet 4.0 deployment descriptor compatible with Tomcat 9. Register class `com.example.FirstServlet` and map it to `/FirstServlet`. Ensure the servlet name matches between `<servlet>` and `<servlet-mapping>`. Validate the XML and never use an incomplete XML fragment as the runnable file.

### Compile, launch, and test

Show this command with correct Windows quoting and the package directory above:

```bat
javac -encoding UTF-8 -cp "%CATALINA_HOME%\lib\servlet-api.jar" -d "%CATALINA_HOME%\webapps\Sample\WEB-INF\classes" "%CATALINA_HOME%\webapps\Sample\WEB-INF\servlet\com\example\FirstServlet.java"
```

Explain that compilation should create:
`%CATALINA_HOME%\webapps\Sample\WEB-INF\classes\com\example\FirstServlet.class`

Start Tomcat with:

```bat
"%CATALINA_HOME%\bin\startup.bat"
```

Use these test URLs:

- Tomcat welcome: `http://127.0.0.1:8080/`
- Servlet: `http://127.0.0.1:8080/Sample/FirstServlet`

Expected output is the exact heading `Welcome To Servlet World!`. Add practical troubleshooting for a missing `JAVA_HOME`, occupied port 8080, HTTP 404, a class-not-found error, and an invalid/mismatched `web.xml`. Do not claim those tests passed unless actually run.

## C. EXP 5 — JSP, Servlet, and MySQL Login

Keep all EXP 5 content under the existing experiment number. Merge the screenshot steps and this setup guide into one ordered sequence. Include screenshots where relevant. Ensure every path, SQL statement, source file, and command has its own copy button.

### 1. Install/open MySQL

Preserve this official URL and supplied package name:

- `https://dev.mysql.com/downloads/installer/`
- `mysql-installer-web-community-8.0.42`

Verify current availability. If that exact package is no longer listed, clearly say so and explain how to select an available official version; never claim a different download is 8.0.42.

Show a CMD sequence using:

```bat
cd /d "C:\Program Files\MySQL\MySQL Server 8.0\bin"
mysql -u root -p
```

Explain that the user must enter the root password they configured locally.

### 2. Complete database SQL

Provide a single copy-ready SQL block that creates/uses `login_db`, creates `users` with an auto-increment primary key and `username`/`password` columns, and prepares the sample account `admin` / `admin123`. Make the script safe to rerun without creating duplicate admin rows. For example, use `CREATE DATABASE IF NOT EXISTS`, `CREATE TABLE IF NOT EXISTS`, a unique constraint on `username`, and an `INSERT ... ON DUPLICATE KEY UPDATE` statement. Include `SELECT` statements to verify the table and sample account. Preserve the lab's required database/table names and credentials. Clearly label these as demonstration credentials for this practical, not production authentication.

### 3. Required application structure

Use the user's Tomcat root and show the exact destination paths:

```text
%CATALINA_HOME%\webapps\Sample\
├── Login.jsp
├── welcome.jsp
├── error.jsp
└── WEB-INF\
    ├── web.xml
    ├── classes\
    │   └── com\example\LoginServlet.class
    ├── lib\
    │   └── mysql-connector-j-8.0.33.jar
    └── servlet\
        └── com\example\LoginServlet.java
```

Use exact filename capitalization everywhere: `Login.jsp`, `welcome.jsp`, `error.jsp`, and `LoginServlet`. Add CMD commands to create any missing directories:

```bat
if not exist "%CATALINA_HOME%\webapps\Sample\WEB-INF\classes\com\example" mkdir "%CATALINA_HOME%\webapps\Sample\WEB-INF\classes\com\example"
if not exist "%CATALINA_HOME%\webapps\Sample\WEB-INF\lib" mkdir "%CATALINA_HOME%\webapps\Sample\WEB-INF\lib"
if not exist "%CATALINA_HOME%\webapps\Sample\WEB-INF\servlet\com\example" mkdir "%CATALINA_HOME%\webapps\Sample\WEB-INF\servlet\com\example"
```

### 4. Connector/J dependency

Preserve the supplied JAR name when that is the actual downloaded file:
`mysql-connector-j-8.0.33.jar`

Destination:
`%CATALINA_HOME%\webapps\Sample\WEB-INF\lib\mysql-connector-j-8.0.33.jar`

Tell the user to verify that the JAR really exists at that location. If the downloaded file has a different versioned name, use that real filename instead of renaming or pretending it is 8.0.33. The runtime driver is required to connect to MySQL. Do not put this dependency in the JDK or claim runtime success if the driver is absent.

### 5. Complete `Login.jsp`

Create a complete UTF-8 JSP page with a login form that posts to the context-relative `LoginServlet` endpoint, includes required `username` and `password` fields, and provides a submit button. Make its action work under `/Sample` without hard-coding `localhost` or the port. Match the capitalization `Login.jsp` in all links.

### 6. Complete `LoginServlet.java`

Path:
`%CATALINA_HOME%\webapps\Sample\WEB-INF\servlet\com\example\LoginServlet.java`

Requirements:

- Begin with `package com.example;` so it compiles to the specified package directory.
- Extend `HttpServlet` and implement `doPost`.
- Use `javax.servlet.*` and `javax.servlet.http.*` for Tomcat 9; do not mix with `jakarta.servlet`.
- Use URL `jdbc:mysql://localhost:3306/login_db`, user `root`, and a clearly marked placeholder for the user's real MySQL root password. Do not present `your_password` as a working credential.
- Use `com.mysql.cj.jdbc.Driver` (and report a missing driver as an actionable error).
- Query `SELECT * FROM users WHERE username=? AND password=?` with a `PreparedStatement`; close connection, statement, and result set with try-with-resources.
- On success, set the username request attribute using the authenticated database row and forward to `/welcome.jsp`.
- On invalid credentials, forward to `/error.jsp`.
- Close database resources before forwarding. Handle SQL/driver errors distinctly from invalid credentials: log the actual exception server-side and raise a useful `ServletException` without pretending a database failure is a wrong password.
- Include complete imports, methods, class, and braces.

Use XML registration as the single servlet registration method. Do not also add `@WebServlet` for the same mapping.

### 7. Complete result pages

- `welcome.jsp`: display `Welcome, admin!` for the sample user and “You have successfully logged in.” Use the authenticated username request attribute.
- `error.jsp`: display “Login Failed” and “Invalid username or password. Try again.” with a link to `Login.jsp`.
- Both pages must be complete UTF-8 JSP/HTML documents with valid paths and consistent capitalization.

### 8. Complete `WEB-INF/web.xml`

Provide valid Servlet 4.0 XML for Tomcat 9. Its servlet class must be `com.example.LoginServlet`, and its URL pattern must be `/LoginServlet`. The servlet name must match in both registration and mapping. Validate XML structure and ensure it does not conflict with annotations or duplicate mappings.

### 9. Compile and test

Create the output folder if needed, then show:

```bat
javac -encoding UTF-8 -cp "%CATALINA_HOME%\lib\servlet-api.jar" -d "%CATALINA_HOME%\webapps\Sample\WEB-INF\classes" "%CATALINA_HOME%\webapps\Sample\WEB-INF\servlet\com\example\LoginServlet.java"
```

The Connector/J JAR does not normally need to be on this compile classpath if the source references only JDBC APIs and loads the driver by class name; it must be present at runtime in `WEB-INF\lib`.

Give commands to restart Tomcat, while explaining that `set` variables must exist in that CMD session or be configured persistently:

```bat
"%CATALINA_HOME%\bin\shutdown.bat"
"%CATALINA_HOME%\bin\startup.bat"
```

Test `http://127.0.0.1:8080/Sample/Login.jsp` with:

- `admin` / `admin123`: expect the welcome page and `Welcome, admin!`.
- `admin` / `wrong`: expect `error.jsp`.

Include troubleshooting for a stopped MySQL service, wrong root password, missing Connector/J JAR, mismatch between package/class name and `web.xml`, 404, and SQL connection errors. Keep the plaintext-password comparison only as the explicitly labelled teaching example; do not claim it is suitable for real applications.

## D. EXP 9 — Auto Color Changer + Optional Maven Servlet Backend

Preserve EXP 9's existing core frontend, steps, controls, and content. Add/merge a clearly labelled optional subsection named **“Optional Backend: Java Servlet with Maven and Tomcat 9”**. Do not duplicate an existing `index.html`, duplicate existing instructions, or replace the current color-changer exercise.

### 1. Verify and preserve the current frontend

Inspect the actual existing `index.html` first. Keep the working color changer and its behavior intact. Use the current file as `src/main/webapp/index.html` in the Maven app. Only create a fallback `index.html` if no original exists, and clearly label it as new fallback content rather than original reference content.

### 2. Maven project structure

Use this layout:

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

The project must have `groupId` `com.example`, `artifactId` `AutoColorChanger`, version `1.0-SNAPSHOT`, packaging `war`, UTF-8 source encoding, and `javax.servlet:javax.servlet-api:4.0.1` with `provided` scope. Set Java release explicitly to a version supported by the installed JDK and suitable for Tomcat 9; Java 8 bytecode is the compatibility default unless the existing project intentionally requires another version. Pin stable Maven compiler and WAR plugin versions. Set `<finalName>AutoColorChanger</finalName>` so the output filename is exactly `target\AutoColorChanger.war` rather than `AutoColorChanger-1.0-SNAPSHOT.war`.

Provide the complete `pom.xml`; no ellipses or pseudo-code. Confirm the artifact can be packaged by the project's actual Maven installation.

### 3. Complete `ColorServlet.java`

Path: `src/main/java/com/example/web/ColorServlet.java`

Requirements:

- Declare `package com.example.web;`.
- Use the Tomcat 9-compatible `javax.servlet` API.
- Extend `HttpServlet` (preferred for an HTTP endpoint) and implement `doGet`.
- Set response character encoding/content type appropriately before any output if the response needs it.
- Forward the request to `/index.html` using one correct strategy. Do not create an unused `PrintWriter`, and do not combine `include`/`forward` incorrectly. Use a context-relative dispatch path that works when the application is deployed as `/AutoColorChanger`.
- Use the mapping `/color` from `web.xml`; do not also add a duplicate `@WebServlet` annotation.
- Include complete imports and code.

### 4. Complete Maven `web.xml`

Path: `src/main/webapp/WEB-INF/web.xml`

Use a valid Servlet 4.0 descriptor appropriate for Tomcat 9. Register `com.example.web.ColorServlet` and map its servlet name to `/color`. Validate XML and ensure class, package, and mapping agree exactly.

### 5. Build and deploy

From the directory containing `pom.xml`, run:

```bat
mvn clean package
```

Verify that it actually creates:
`target\AutoColorChanger.war`

Deploy that file to:
`%CATALINA_HOME%\webapps\AutoColorChanger.war`

Explain that Tomcat's deployed context path is based on the WAR basename unless an explicit context configuration overrides it. Once Tomcat has deployed the WAR, test:

- Frontend: `http://localhost:8080/AutoColorChanger/`
- Servlet endpoint: `http://localhost:8080/AutoColorChanger/color`

Both should show the existing color-changer page. Add troubleshooting for Maven not installed/on PATH, build/dependency resolution failure, missing WAR, Tomcat not deploying the WAR, 404, and a `javax`/`jakarta` mismatch. Never claim the Maven build/deployment passed if it was not run.

## E. Mandatory correctness and verification pass

After implementing all three experiments:

1. Build the website using its existing package manager and lockfile. Fix build/lint/type errors introduced by the changes.
2. Confirm the experiment list still contains exactly 10 entries in order, and EXP 4, EXP 5, and EXP 9 each appear only once.
3. Review every step to remove duplicate text/code but retain all unique material. Preserve existing screenshots and make sure their asset paths resolve.
4. Check each Java package declaration against its source path, output class path, and matching `web.xml` `<servlet-class>` value.
5. Compile EXP 4 and EXP 5 Java files against Tomcat 9's `servlet-api.jar` if a JDK/Tomcat library is available. Validate both deployment descriptors as XML.
6. Run `mvn clean package` for EXP 9 if Maven and dependencies are available. Verify the exact WAR name and inspect that the WAR includes `index.html`, `WEB-INF/web.xml`, and compiled servlet class.
7. If local MySQL and Tomcat are available, perform EXP 5's real login tests for both valid and invalid credentials. Otherwise state the test is blocked and name the missing dependency. Do not treat a successful compile as proof of successful database authentication.
8. If any dependency or runtime service is unavailable, perform all possible static/build checks and explicitly mark only that check as `BLOCKED`. Do not invent success logs, screenshots, or test results.
9. Test website accordions, search, file switching, copy buttons, and confirmation behaviour for the updated content. Confirm copy buttons copy the exact code/path/command and no other text.
10. Search for placeholders, broken image paths, empty code entries, `TODO`, ellipses in blocks labelled complete, inconsistent case, and duplicate steps. Fix real defects before completion.

## F. Completion report

When finished, report concisely:

- Files modified and the result of each change.
- A clear EXP 4 / EXP 5 / EXP 9 content summary.
- Any source/screenshot that could not be recovered.
- Commands actually run and their actual results, labelled `PASS`, `FAIL`, or `BLOCKED`.
- Java compile, XML validation, Maven packaging, browser, and live integration statuses separately.
- Every code correction made and why.
- Any exact manual action I still need to perform locally.

**Definition of done:** preserve all unrelated experiments; retain experiment numbers exactly; merge duplicate instructions; provide complete paths and copy-ready code; fix the known package/class/dependency/descriptor inconsistencies; keep EXP 9's existing frontend; and report only tests that were genuinely run.

Useful official references to consult when needed:
- Tomcat 9 application deployment: https://tomcat.apache.org/tomcat-9.0-doc/appdev/deployment.html
- MySQL Connector/J compatibility: https://dev.mysql.com/doc/connectors/en/connector-j-versions.html
- Official MySQL Connector/J downloads: https://dev.mysql.com/downloads/connector/j/
