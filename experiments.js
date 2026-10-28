/**
 * experiments.js — Complete, exact code and setup guides for all 10 Java lab experiments
 * Exactly 10 experiments numbered 01 to 10.
 * EXP 4, EXP 5, and EXP 9 have been updated and verified against master-prompt-improve-exp-4-5-9.md.
 */

const experiments = [
  {
    num: "01",
    title: "Class and Objects",
    desc: "Experiment No. 01 — Fundamental OOP in Java: defining classes, instance fields, and methods",
    tags: [
      { label: "Java", cls: "tag-java" },
      { label: "OOP", cls: "tag-oop" }
    ],
    files: [
      {
        name: "Employee.java",
        lang: "JAVA",
        code: `class Employee {
    int empId;
    String empName;
    double salary;

    void display() {
        System.out.println("Employee ID: " + empId);
        System.out.println("Employee Name: " + empName);
        System.out.println("Salary: " + salary);
    }

    public static void main(String[] args) {
        Employee e1 = new Employee();
        e1.empId = 69;
        e1.empName = "Suyog";
        e1.salary = 100000;
        e1.display();
    }
}`
      }
    ]
  },
  {
    num: "02",
    title: "Method & Constructor Overloading",
    desc: "Experiment No. 02 — Compile-time polymorphism: overloading methods and constructors with varied signatures",
    tags: [
      { label: "Java", cls: "tag-java" },
      { label: "OOP", cls: "tag-oop" }
    ],
    files: [
      {
        name: "Calculator.java (Method Overloading)",
        lang: "JAVA",
        code: `class Calculator {
    void add(int a, int b) {
        System.out.println("Sum = " + (a + b));
    }

    void add(int a, int b, int c) {
        System.out.println("Sum = " + (a + b + c));
    }

    public static void main(String[] args) {
        Calculator c = new Calculator();
        c.add(10, 20);
        c.add(10, 20, 30);
    }
}`
      },
      {
        name: "Employee.java (Constructor Overloading)",
        lang: "JAVA",
        code: `class Employee {
    int id;
    String name;

    Employee() {
        id = 0;
        name = "Unknown";
    }

    Employee(int i, String n) {
        id = i;
        name = n;
    }

    void display() {
        System.out.println("ID = " + id);
        System.out.println("Name = " + name);
    }

    public static void main(String[] args) {
        Employee e1 = new Employee();
        Employee e2 = new Employee(69, "Suyog");
        Employee e3 = new Employee(59, "Durvesh");

        System.out.println();
        e1.display();
        System.out.println();
        e2.display();
        System.out.println();
        e3.display();
        System.out.println();
    }
}`
      }
    ]
  },
  {
    num: "03",
    title: "Inheritance (Single, Multilevel, Hierarchical)",
    desc: "Experiment No. 03 — Object-oriented code reuse using single, multilevel, and hierarchical inheritance structures",
    tags: [
      { label: "Java", cls: "tag-java" },
      { label: "OOP", cls: "tag-oop" }
    ],
    files: [
      {
        name: "Single.java (Single Inheritance)",
        lang: "JAVA",
        code: `class Parent {
    void displayParent() {
        System.out.println("This is the Parent class.");
    }
}

class Child extends Parent {
    void displayChild() {
        System.out.println("This is the Child class.");
    }
}

public class Single {
    public static void main(String[] args) {
        Child obj = new Child();
        obj.displayParent();
        obj.displayChild();
    }
}`
      },
      {
        name: "Multilevel.java (Multilevel Inheritance)",
        lang: "JAVA",
        code: `class Grandparent {
    void displayGrandparent() {
        System.out.println("This is the Grandparent class.");
    }
}

class Parent extends Grandparent {
    void displayParent() {
        System.out.println("This is the Parent class.");
    }
}

class Child extends Parent {
    void displayChild() {
        System.out.println("This is the Child class.");
    }
}

public class Multilevel {
    public static void main(String[] args) {
        Child obj = new Child();
        obj.displayGrandparent();
        obj.displayParent();
        obj.displayChild();
    }
}`
      },
      {
        name: "Hierarchical.java (Hierarchical Inheritance)",
        lang: "JAVA",
        code: `class Parent {
    void displayParent() {
        System.out.println("This is the Parent class.");
    }
}

class Child1 extends Parent {
    void displayChild1() {
        System.out.println("This is Child1 class.");
    }
}

class Child2 extends Parent {
    void displayChild2() {
        System.out.println("This is Child2 class.");
    }
}

public class Hierarchical {
    public static void main(String[] args) {
        Child1 obj1 = new Child1();

        System.out.println();
        System.out.println("Calling methods from Child1 object:");
        obj1.displayParent();
        obj1.displayChild1();
        System.out.println();

        Child2 obj2 = new Child2();

        System.out.println("Calling methods from Child2 object:");
        obj2.displayParent();
        obj2.displayChild2();
        System.out.println();
    }
}`
      }
    ]
  },
  {
    num: "04",
    title: "Apache Tomcat 9 and First Servlet",
    desc: "Experiment No. 04 — Installing Tomcat 9, configuring environment variables, deploying GenericServlet with Servlet 4.0 web.xml",
    tags: [
      { label: "Java", cls: "tag-java" },
      { label: "Servlet", cls: "tag-adv" },
      { label: "Tomcat", cls: "tag-oop" }
    ],
    files: [
      {
        name: "1. Setup & Environment (CMD)",
        path: "CMD Terminal (Environment Variables & Directory Creation)",
        lang: "TEXT",
        code: `:: ========================================================
:: EXPERIMENT 4: TOMCAT 9 & FIRST SERVLET SETUP GUIDE
:: ========================================================

:: 1. Download Apache Tomcat 9:
:: Official URL: https://tomcat.apache.org/download-90.cgi
:: Target Archive: apache-tomcat-9.0.106-windows-x64.zip
:: Extraction Root: C:\\apache-tomcat-9.0.106-windows-x64\\apache-tomcat-9.0.106

:: Note: If 9.0.106 is archived by Apache, download the current official Tomcat 9.0.x zip release.

:: 2. Set Environment Variables (Current CMD Session):
:: Note: 'set' applies to the active CMD window. For persistent configuration, configure Windows System Environment Variables.
set "JAVA_HOME=C:\\Program Files\\Java\\jdk-22"
set "CATALINA_HOME=C:\\apache-tomcat-9.0.106-windows-x64\\apache-tomcat-9.0.106"
set "PATH=%JAVA_HOME%\\bin;%PATH%"

:: Verify Java & Javac exist and run properly:
java -version
javac -version

:: 3. Create Required Web Application Directory Layout:
mkdir "%CATALINA_HOME%\\webapps\\Sample\\WEB-INF\\servlet\\com\\example"
mkdir "%CATALINA_HOME%\\webapps\\Sample\\WEB-INF\\classes\\com\\example"`
      },
      {
        name: "FirstServlet.java",
        path: "%CATALINA_HOME%\\webapps\\Sample\\WEB-INF\\servlet\\com\\example\\FirstServlet.java",
        lang: "JAVA",
        code: `package com.example;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.GenericServlet;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;

/**
 * FirstServlet extends GenericServlet and returns HTML with UTF-8 encoding.
 * Uses javax.servlet.* APIs compatible with Apache Tomcat 9.
 */
public class FirstServlet extends GenericServlet {

    @Override
    public void service(ServletRequest req, ServletResponse resp)
            throws ServletException, IOException {
        resp.setContentType("text/html; charset=UTF-8");
        PrintWriter pw = resp.getWriter();
        pw.println("<!DOCTYPE html>");
        pw.println("<html lang=\"en\">");
        pw.println("<head><title>My First Servlet</title></head>");
        pw.println("<body>");
        pw.println("<h2>Welcome To Servlet World!</h2>");
        pw.println("</body>");
        pw.println("</html>");
        pw.close();
    }
}`
      },
      {
        name: "web.xml",
        path: "%CATALINA_HOME%\\webapps\\Sample\\WEB-INF\\web.xml",
        lang: "XML",
        code: `<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee
                      http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
  version="4.0"
  metadata-complete="true">

    <servlet>
        <servlet-name>FirstServlet</servlet-name>
        <servlet-class>com.example.FirstServlet</servlet-class>
    </servlet>

    <servlet-mapping>
        <servlet-name>FirstServlet</servlet-name>
        <url-pattern>/FirstServlet</url-pattern>
    </servlet-mapping>

</web-app>`
      },
      {
        name: "2. Compile, Launch & Test (CMD)",
        path: "CMD Terminal (Compile & Launch)",
        lang: "TEXT",
        code: `:: ========================================================
:: EXPERIMENT 4: COMPILE, STARTUP & VERIFICATION
:: ========================================================

:: 1. Compile FirstServlet using Tomcat's built-in servlet-api.jar:
javac -encoding UTF-8 -cp "%CATALINA_HOME%\\lib\\servlet-api.jar" -d "%CATALINA_HOME%\\webapps\\Sample\\WEB-INF\\classes" "%CATALINA_HOME%\\webapps\\Sample\\WEB-INF\\servlet\\com\\example\\FirstServlet.java"

:: Output class file is created at:
:: %CATALINA_HOME%\\webapps\\Sample\\WEB-INF\\classes\\com\\example\\FirstServlet.class

:: 2. Start Apache Tomcat 9:
"%CATALINA_HOME%\\bin\\startup.bat"

:: Look for the console output: "Server startup in [x] milliseconds"

:: 3. Test Endpoints in Browser:
:: Tomcat Default Root: http://127.0.0.1:8080/
:: Servlet Endpoint:    http://127.0.0.1:8080/Sample/FirstServlet
:: Expected Result:     Displays heading "Welcome To Servlet World!"

:: ── Troubleshooting ──
:: • Missing JAVA_HOME: Run 'echo %JAVA_HOME%' to ensure it points to JDK root, not JDK bin.
:: • Port 8080 In Use: Run 'netstat -ano | findstr 8080' or change port in %CATALINA_HOME%\\conf\\server.xml.
:: • HTTP 404: Confirm web.xml has exact mapping <url-pattern>/FirstServlet</url-pattern>.
:: • ClassNotFoundException: Verify FirstServlet.class is inside WEB-INF\\classes\\com\\example\\.`
      }
    ]
  },
  {
    num: "05",
    title: "JSP, Servlet, and MySQL Login",
    desc: "Experiment No. 05 — Full JDBC authentication flow: MySQL database, Login.jsp form, LoginServlet controller, and JSP views",
    tags: [
      { label: "JSP", cls: "tag-adv" },
      { label: "MySQL", cls: "tag-oop" },
      { label: "Servlet", cls: "tag-java" }
    ],
    files: [
      {
        name: "1. Setup & Directory (CMD)",
        path: "CMD Terminal (MySQL & Directory Setup)",
        lang: "TEXT",
        code: `:: ========================================================
:: EXPERIMENT 5: MYSQL & DIRECTORY SETUP GUIDE
:: ========================================================

:: 1. MySQL Installer & Launch:
:: Official URL: https://dev.mysql.com/downloads/installer/
:: Supplied Package: mysql-installer-web-community-8.0.42 (or latest 8.0.x community installer)

:: Open Command Prompt as Administrator and log into MySQL CLI:
cd /d "C:\\Program Files\\MySQL\\MySQL Server 8.0\\bin"
mysql -u root -p
:: Enter the root password configured during your local MySQL installation.
:: Then paste and run the SQL script in "Database Setup (SQL)".

:: 2. Create Application Directory Structure:
if not exist "%CATALINA_HOME%\\webapps\\Sample\\WEB-INF\\classes\\com\\example" mkdir "%CATALINA_HOME%\\webapps\\Sample\\WEB-INF\\classes\\com\\example"
if not exist "%CATALINA_HOME%\\webapps\\Sample\\WEB-INF\\lib" mkdir "%CATALINA_HOME%\\webapps\\Sample\\WEB-INF\\lib"
if not exist "%CATALINA_HOME%\\webapps\\Sample\\WEB-INF\\servlet\\com\\example" mkdir "%CATALINA_HOME%\\webapps\\Sample\\WEB-INF\\servlet\\com\\example"

:: 3. MySQL Connector/J Runtime Dependency:
:: Download official Connector/J from: https://dev.mysql.com/downloads/connector/j/
:: Place mysql-connector-j-8.0.33.jar (or your installed Connector/J JAR) into:
:: %CATALINA_HOME%\\webapps\\Sample\\WEB-INF\\lib\\mysql-connector-j-8.0.33.jar`
      },
      {
        name: "Database Setup (SQL)",
        path: "login_db (MySQL Script)",
        lang: "SQL",
        code: `-- ========================================================
-- EXPERIMENT 5: DATABASE INITIALIZATION SCRIPT
-- Safe to rerun without generating duplicate administrator accounts
-- ========================================================

CREATE DATABASE IF NOT EXISTS login_db;
USE login_db;

CREATE TABLE IF NOT EXISTS users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(50) NOT NULL
);

-- Seed sample administrator account (Demonstration authentication credentials only)
INSERT INTO users (username, password)
VALUES ('admin', 'admin123')
ON DUPLICATE KEY UPDATE password = VALUES(password);

-- Verify table schema and sample data:
SELECT id, username, password FROM users;`
      },
      {
        name: "Login.jsp",
        path: "%CATALINA_HOME%\\webapps\\Sample\\Login.jsp",
        lang: "JSP",
        code: `<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Login Page</title>
</head>
<body>
    <h2>Login Form</h2>
    <!-- Context-relative form action works reliably under /Sample without hardcoding host or port -->
    <form action="LoginServlet" method="post">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required /><br><br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required /><br><br>
        <input type="submit" value="Login" />
    </form>
</body>
</html>`
      },
      {
        name: "LoginServlet.java",
        path: "%CATALINA_HOME%\\webapps\\Sample\\WEB-INF\\servlet\\com\\example\\LoginServlet.java",
        lang: "JAVA",
        code: `package com.example;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Controller servlet for database-driven authentication.
 * Uses javax.servlet APIs for Tomcat 9 and closes JDBC resources with try-with-resources.
 */
public class LoginServlet extends HttpServlet {
    private static final String DB_URL = "jdbc:mysql://localhost:3306/login_db";
    private static final String DB_USER = "root";
    // ATTENTION: Replace placeholder below with your actual local MySQL root password
    private static final String DB_PASSWORD = "your_actual_mysql_password";

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String user = request.getParameter("username");
        String pass = request.getParameter("password");

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
        } catch (ClassNotFoundException e) {
            log("MySQL Connector/J Driver not found in WEB-INF/lib", e);
            throw new ServletException("MySQL Connector/J Driver missing. Place mysql-connector-j JAR into WEB-INF/lib.", e);
        }

        String sql = "SELECT id, username FROM users WHERE username = ? AND password = ?";
        try (Connection conn = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
             PreparedStatement ps = conn.prepareStatement(sql)) {

            ps.setString(1, user);
            ps.setString(2, pass);

            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    String authenticatedUser = rs.getString("username");
                    request.setAttribute("username", authenticatedUser);
                    RequestDispatcher rd = request.getRequestDispatcher("/welcome.jsp");
                    rd.forward(request, response);
                } else {
                    RequestDispatcher rd = request.getRequestDispatcher("/error.jsp");
                    rd.forward(request, response);
                }
            }
        } catch (SQLException e) {
            log("Database access exception during login: " + e.getMessage(), e);
            throw new ServletException("Database access error: " + e.getMessage(), e);
        }
    }
}`
      },
      {
        name: "welcome.jsp",
        path: "%CATALINA_HOME%\\webapps\\Sample\\welcome.jsp",
        lang: "JSP",
        code: `<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Welcome</title>
</head>
<body>
    <h2>Welcome, <%= request.getAttribute("username") %>!</h2>
    <p>You have successfully logged in.</p>
</body>
</html>`
      },
      {
        name: "error.jsp",
        path: "%CATALINA_HOME%\\webapps\\Sample\\error.jsp",
        lang: "JSP",
        code: `<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Login Failed</title>
</head>
<body>
    <h2>Login Failed</h2>
    <p>Invalid username or password. Try again.</p>
    <a href="Login.jsp">Back to Login</a>
</body>
</html>`
      },
      {
        name: "web.xml",
        path: "%CATALINA_HOME%\\webapps\\Sample\\WEB-INF\\web.xml",
        lang: "XML",
        code: `<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee
                      http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
  version="4.0"
  metadata-complete="true">

    <servlet>
        <servlet-name>LoginServlet</servlet-name>
        <servlet-class>com.example.LoginServlet</servlet-class>
    </servlet>

    <servlet-mapping>
        <servlet-name>LoginServlet</servlet-name>
        <url-pattern>/LoginServlet</url-pattern>
    </servlet-mapping>

</web-app>`
      },
      {
        name: "2. Compile & Test (CMD)",
        path: "CMD Terminal (Compile & Test)",
        lang: "TEXT",
        code: `:: ========================================================
:: EXPERIMENT 5: COMPILE, RESTART & VERIFICATION
:: ========================================================

:: 1. Compile LoginServlet using Tomcat's servlet-api.jar:
javac -encoding UTF-8 -cp "%CATALINA_HOME%\\lib\\servlet-api.jar" -d "%CATALINA_HOME%\\webapps\\Sample\\WEB-INF\\classes" "%CATALINA_HOME%\\webapps\\Sample\\WEB-INF\\servlet\\com\\example\\LoginServlet.java"

:: 2. Restart Tomcat to apply servlet and load Connector/J JAR:
"%CATALINA_HOME%\\bin\\shutdown.bat"
"%CATALINA_HOME%\\bin\\startup.bat"

:: 3. Test Authentication in Browser:
:: URL: http://127.0.0.1:8080/Sample/Login.jsp

:: • Valid Credentials Test:
::   Username: admin
::   Password: admin123
::   Expected: Forwards to /welcome.jsp showing "Welcome, admin!" and "You have successfully logged in."

:: • Invalid Credentials Test:
::   Username: admin
::   Password: wrong_password
::   Expected: Forwards to /error.jsp showing "Invalid username or password. Try again." with link to Login.jsp.

:: ── Troubleshooting ──
:: • MySQL Not Running: Start service via 'net start MySQL80' or Services app.
:: • Access Denied: Verify DB_PASSWORD in LoginServlet.java matches your root password.
:: • ClassNotFoundException: Ensure mysql-connector-j JAR exists in %CATALINA_HOME%\\webapps\\Sample\\WEB-INF\\lib\\
:: • HTTP 404: Confirm Login.jsp casing matches and web.xml mapping is /LoginServlet.`
      }
    ]
  },
  {
    num: "06",
    title: "Static Website",
    desc: "Experiment No. 06 — Responsive multi-section static webpage built with semantic HTML5, CSS layout, and interactive JS",
    tags: [
      { label: "HTML", cls: "tag-java" },
      { label: "CSS", cls: "tag-oop" },
      { label: "JS", cls: "tag-adv" }
    ],
    files: [
      {
        name: "index.html",
        lang: "HTML",
        code: `<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Static Website</title>
    <link rel="stylesheet" href="style.css" />
</head>

<body>
    <header>
        <h1>Welcome to My Static Website</h1>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section>
            <h2>Hello, Dear Student!</h2>
            <p>
                This is a sample static website built using HTML, CSS, and JavaScript.
            </p>
            <button onclick="showMessage()">Click Me</button>
            <p id="message"></p>
        </section>
    </main>

    <footer>
        <p>© 2025 FullStackJavaSyllabusSetter</p>
    </footer>

    <script src="script.js"></script>
</body>

</html>`
      },
      {
        name: "style.css",
        lang: "CSS",
        code: `body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f9f9f9;
  color: #333;
}

header {
  background-color: #007acc;
  color: white;
  padding: 20px;
  text-align: center;
}

nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

nav li {
  margin: 0 15px;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

main {
  padding: 20px;
  text-align: center;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

footer {
  background-color: #eee;
  text-align: center;
  padding: 15px;
  margin-top: 40px;
}`
      },
      {
        name: "script.js",
        lang: "JS",
        code: `function showMessage() {
    const message = document.getElementById("message");
    message.textContent = "Thank you for clicking! Enjoy browsing 😊";
}`
      }
    ]
  },
  {
    num: "07",
    title: "Static Website with Email Validation",
    desc: "Experiment No. 07 — Form validation using JavaScript string methods to verify email address formatting before submission",
    tags: [
      { label: "HTML", cls: "tag-java" },
      { label: "CSS", cls: "tag-oop" },
      { label: "JS", cls: "tag-adv" }
    ],
    files: [
      {
        name: "index.html",
        lang: "HTML",
        code: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Static Website</title>
    <link rel="stylesheet" href="style.css" />
</head>

<body>
    <header>
        <h1>Welcome to My Static Website</h1>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section>
            <h2>Hello, Dear Students!</h2>
            <p>This is a sample static website built using HTML, CSS, and JavaScript.</p>
            <button onclick="showMessage()">Click Me</button>
            <p id="message"></p>

            <h3>Subscribe to our Newsletter</h3>
            <input type="text" id="email" placeholder="Enter your email" />
            <button onclick="validateEmail()">Submit</button>
        </section>
    </main>

    <footer>
        <p>© 2025 FullStackJavaSyllabusSetter</p>
    </footer>

    <script src="script.js"></script>
</body>

</html>`
      },
      {
        name: "style.css",
        lang: "CSS",
        code: `body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f9f9f9;
    color: #333;
}

header {
    background-color: #007acc;
    color: white;
    padding: 20px;
    text-align: center;
}

nav ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    margin-top: 10px;
}

nav li {
    margin: 0 15px;
}

nav a {
    color: white;
    text-decoration: none;
    font-weight: bold;
}

main {
    padding: 20px;
    text-align: center;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
}

footer {
    background-color: #eee;
    text-align: center;
    padding: 15px;
    margin-top: 40px;
}`
      },
      {
        name: "script.js",
        lang: "JS",
        code: `function showMessage() {
    const message = document.getElementById("message");
    message.textContent = "Thank you for clicking! Enjoy browsing 😊";
}

function validateEmail() {
    const emailInput = document.getElementById("email");
    const email = emailInput.value;

    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        alert("Invalid email address. Please include '@' and '.' characters.");
        emailInput.focus();
        return false;
    }
    alert("Email is valid!");
    return true;
}`
      }
    ]
  },
  {
    num: "08",
    title: "Animated Spiral Text Rotation",
    desc: "Experiment No. 08 — Creative CSS animations with trigonometric functions & JavaScript fallback for spiral rotational text",
    tags: [
      { label: "HTML", cls: "tag-java" },
      { label: "CSS", cls: "tag-oop" },
      { label: "JS", cls: "tag-adv" }
    ],
    files: [
      {
        name: "index.html",
        lang: "HTML",
        code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Animated Text Rotation</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <div id="spiral" class="spiral"></div>
    <div id="spiral2" class="spiral"></div>
    <script src="script.js"></script>
  </body>
</html>`
      },
      {
        name: "style.css",
        lang: "CSS",
        code: `body, html {
  height: 100%;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #040509;
  overflow: hidden;
  font-size: 62.5%;
}

@property --angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

.spiral {
  display: flex;
  align-items: center;
  gap: 10px;
  position: absolute;
  color: #e0ecef;
  font-family: "sans-serif";
}

.character {
  color: white;
  font-size: 2.8rem;
  text-transform: uppercase;
  transform: translateY(calc(sin(var(--angle)) * 100px)) scale(calc(cos(var(--angle)) * 0.5 + 0.5));
  animation: spiral 4s linear infinite;
}

@keyframes spiral {
  0% { --angle: 0deg; }
  100% { --angle: 360deg; }
}

@media (max-width: 490px) {
  .character {
    font-size: 2.2rem;
  }
}`
      },
      {
        name: "script.js",
        lang: "JS",
        code: `let isFirefox = typeof InstallTrigger !== 'undefined';
const words = "The Web Designer";
let ANGLE = 360;
const ANIMATION_DURATION = 4000;

const animation = () => {
  ANGLE -= 1;
  document.querySelectorAll(".spiral *").forEach((el, i) => {
    const translateY = Math.sin(ANGLE * (Math.PI / 120)) * 100;
    const scale = Math.cos(ANGLE * (Math.PI / 120)) * 0.5 + 0.5;
    const offset = parseInt(el.dataset.offset);
    const delay = i * (ANIMATION_DURATION / 16) - offset;

    setTimeout(() => {
      el.style.transform = \`translateY(\${translateY}px) scale(\${scale})\`;
    }, delay);
  });
  requestAnimationFrame(animation);
};

const characters = words.split("").forEach((char, i) => {
  const createElement = (offset) => {
    const div = document.createElement("div");
    div.innerText = char;
    div.classList.add("character");
    div.setAttribute("data-offset", offset);
    div.style.animationDelay = \`-\${i * (ANIMATION_DURATION / 16) - offset}ms\`;
    return div;
  };
  document.querySelector("#spiral").append(createElement(0));
  document.querySelector("#spiral2").append(
    createElement((isFirefox ? 1 : -1) * (ANIMATION_DURATION / 2))
  );
});

// @property CSS fallback for Firefox
if (isFirefox) {
  animation();
}`
      }
    ]
  },
  {
    num: "09",
    title: "Auto Background Color Changer",
    desc: "Experiment No. 09 — Periodic DOM color changer with Optional Backend: Java Servlet with Maven and Tomcat 9",
    tags: [
      { label: "HTML", cls: "tag-java" },
      { label: "Java", cls: "tag-oop" },
      { label: "Servlet", cls: "tag-adv" }
    ],
    files: [
      {
        name: "index.html (Frontend)",
        path: "AutoColorChanger/src/main/webapp/index.html",
        lang: "HTML",
        code: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Auto Background Color Change</title>
    <style>
      body {
        min-height: 100vh;
        margin: 0;
        display: grid;
        place-items: center;
        background-color: #3498db;
        color: white;
        font-family: Arial, sans-serif;
        text-align: center;
        transition: background-color 1s ease;
      }
      main { padding: 2rem; }
      p { font-size: 1.1rem; }
    </style>
  </head>
  <body>
    <main>
      <h1>Watch the Background Color Change Every 5 Seconds</h1>
      <p id="status" aria-live="polite">Current color: Blue</p>
    </main>
    <script>
      const colors = [
        { value: "#3498db", name: "Blue" },
        { value: "#e74c3c", name: "Red" },
        { value: "#2ecc71", name: "Green" },
        { value: "#f39c12", name: "Orange" },
        { value: "#9b59b6", name: "Purple" }
      ];
      let index = 0;

      setInterval(() => {
        index = (index + 1) % colors.length;
        document.body.style.backgroundColor = colors[index].value;
        document.getElementById("status").textContent = \`Current color: \${colors[index].name}\`;
      }, 5000);
    </script>
  </body>
</html>`
      },
      {
        name: "pom.xml",
        path: "AutoColorChanger/pom.xml",
        lang: "XML",
        code: `<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>

  <groupId>com.example</groupId>
  <artifactId>AutoColorChanger</artifactId>
  <version>1.0-SNAPSHOT</version>
  <packaging>war</packaging>
  <!-- Pins final output WAR name to AutoColorChanger.war -->
  <finalName>AutoColorChanger</finalName>

  <properties>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    <maven.compiler.release>8</maven.compiler.release>
    <failOnMissingWebXml>false</failOnMissingWebXml>
  </properties>

  <dependencies>
    <dependency>
      <groupId>javax.servlet</groupId>
      <artifactId>javax.servlet-api</artifactId>
      <version>4.0.1</version>
      <scope>provided</scope>
    </dependency>
  </dependencies>

  <build>
    <plugins>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-war-plugin</artifactId>
        <version>3.4.0</version>
      </plugin>
    </plugins>
  </build>
</project>`
      },
      {
        name: "ColorServlet.java",
        path: "AutoColorChanger/src/main/java/com/example/web/ColorServlet.java",
        lang: "JAVA",
        code: `package com.example.web;

import java.io.IOException;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Optional Backend: Java Servlet with Maven and Tomcat 9.
 * Forwards cleanly to /index.html with UTF-8 character encoding.
 */
public class ColorServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html; charset=UTF-8");
        RequestDispatcher dispatcher = request.getRequestDispatcher("/index.html");
        dispatcher.forward(request, response);
    }
}`
      },
      {
        name: "web.xml",
        path: "AutoColorChanger/src/main/webapp/WEB-INF/web.xml",
        lang: "XML",
        code: `<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee
                      http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
  version="4.0"
  metadata-complete="true">

  <servlet>
    <servlet-name>ColorServlet</servlet-name>
    <servlet-class>com.example.web.ColorServlet</servlet-class>
  </servlet>

  <servlet-mapping>
    <servlet-name>ColorServlet</servlet-name>
    <url-pattern>/color</url-pattern>
  </servlet-mapping>

</web-app>`
      },
      {
        name: "Maven Build & Deploy (CMD)",
        path: "CMD Terminal (Maven Build & Deploy)",
        lang: "TEXT",
        code: `:: ========================================================
:: EXPERIMENT 9: MAVEN WAR PROJECT BUILD & DEPLOYMENT
:: ========================================================

:: 1. Standard Maven Project Layout:
:: AutoColorChanger/
:: ├── pom.xml
:: └── src/
::     └── main/
::         ├── java/
::         │   └── com/example/web/ColorServlet.java
::         └── webapp/
::             ├── index.html
::             └── WEB-INF/web.xml

:: 2. Package WAR file from AutoColorChanger root:
mvn clean package

:: Target Output Produced:
:: target\\AutoColorChanger.war

:: 3. Deploy to Apache Tomcat 9:
copy "target\\AutoColorChanger.war" "%CATALINA_HOME%\\webapps\\AutoColorChanger.war"

:: 4. Verify in Browser:
:: Direct Static Page: http://localhost:8080/AutoColorChanger/
:: Servlet Endpoint:   http://localhost:8080/AutoColorChanger/color
:: Both display the auto background color changer page.

:: ── Troubleshooting ──
:: • "mvn" Not Recognized: Install Maven and add its bin folder to PATH.
:: • WAR Name: <finalName>AutoColorChanger</finalName> guarantees the context path is /AutoColorChanger.
:: • javax vs jakarta: Tomcat 9 requires javax.servlet:javax.servlet-api:4.0.1.`
      }
    ]
  },
  {
    num: "10",
    title: "Stopwatch",
    desc: "Experiment No. 10 — High-precision browser stopwatch with millisecond interval rendering, start, stop, and reset controls",
    tags: [
      { label: "HTML", cls: "tag-java" },
      { label: "CSS", cls: "tag-oop" },
      { label: "JS", cls: "tag-adv" }
    ],
    files: [
      {
        name: "index.html",
        lang: "HTML",
        code: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stopwatch</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <main>
      <div id="timer" aria-live="polite">00:00:00.00</div>
      <div id="buttons">
        <button id="start" type="button">Start</button>
        <button id="stop" type="button" disabled>Stop</button>
        <button id="reset" type="button">Reset</button>
      </div>
    </main>
    <script src="script.js"></script>
  </body>
</html>`
      },
      {
        name: "style.css",
        lang: "CSS",
        code: `body {
  min-height: 100vh;
  margin: 0;
  background: linear-gradient(to right, #0b8793, #360033);
  color: #f1f2b5;
  font-family: Arial, sans-serif;
  display: grid;
  place-items: center;
}
#timer {
  width: min(90vw, 700px);
  text-align: center;
  font-size: clamp(3rem, 9vw, 7rem);
  font-weight: 600;
  text-shadow: 2px 2px #5f5f56;
  margin: 0 auto 2rem;
}
#buttons { display: flex; justify-content: center; flex-wrap: wrap; gap: 1rem; }
button {
  background-color: #f1f2b5;
  color: #0b8793;
  border: 0;
  border-radius: 15px;
  box-shadow: 2px 2px 10px rgb(0 0 0 / 30%);
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 1rem 2.5rem;
}
button:hover:not(:disabled) { background-color: #fff; }
button:disabled { cursor: default; opacity: 0.5; }`
      },
      {
        name: "script.js",
        lang: "JS",
        code: `const timer = document.getElementById("timer");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function formatTimer(milliseconds) {
  const hours = Math.floor(milliseconds / 3_600_000);
  const minutes = Math.floor((milliseconds % 3_600_000) / 60_000);
  const seconds = Math.floor((milliseconds % 60_000) / 1_000);
  const centiseconds = Math.floor((milliseconds % 1_000) / 10);
  return [hours, minutes, seconds]
    .map((unit) => String(unit).padStart(2, "0"))
    .join(":") + \`.\${String(centiseconds).padStart(2, "0")}\`;
}

function render() {
  timer.textContent = formatTimer(elapsedTime);
}

function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    render();
  }, 10);
  startButton.disabled = true;
  stopButton.disabled = false;
}

function stopTimer() {
  clearInterval(timerInterval);
  startButton.disabled = false;
  stopButton.disabled = true;
}

function resetTimer() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  render();
  startButton.disabled = false;
  stopButton.disabled = true;
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);`
      }
    ]
  }
];
