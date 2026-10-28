/**
 * experiments.js — Complete, exact code and setup guides for all 10 Java lab experiments
 * Exactly 10 experiments numbered 01 to 10.
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
    title: "Apache Tomcat & First Servlet",
    desc: "Experiment No. 04 — Installing Tomcat 9, configuring environment variables, deploying GenericServlet with web.xml",
    tags: [
      { label: "Java", cls: "tag-java" },
      { label: "Servlet", cls: "tag-adv" },
      { label: "Tomcat", cls: "tag-oop" }
    ],
    files: [
      {
        name: "FirstServlet.java",
        lang: "JAVA",
        code: `package com.example;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.GenericServlet;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;

public class FirstServlet extends GenericServlet {

    @Override
    public void service(ServletRequest req, ServletResponse resp)
            throws ServletException, IOException {
        resp.setContentType("text/html;charset=UTF-8");
        PrintWriter pw = resp.getWriter();
        pw.println("<!DOCTYPE html>");
        pw.println("<html>");
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
        name: "Setup & Execution Guide (CMD)",
        lang: "TEXT",
        code: `:: ========================================================
:: EXPERIMENT 4: TOMCAT 9 & FIRST SERVLET SETUP GUIDE
:: ========================================================

:: 1. Download Apache Tomcat 9:
:: URL: https://tomcat.apache.org/download-90.cgi
:: File: apache-tomcat-9.0.106-windows-x64.zip

:: 2. Extract to root folder:
:: C:\\apache-tomcat-9.0.106-windows-x64\\apache-tomcat-9.0.106

:: 3. Set Environment Variables (Run in CMD or set via System Properties):
set JAVA_HOME=C:\\Program Files\\Java\\jdk-22
set CATALINA_HOME=C:\\apache-tomcat-9.0.106-windows-x64\\apache-tomcat-9.0.106
set PATH=%JAVA_HOME%\\bin;%PATH%

:: 4. Create Web Application Folder Layout:
mkdir "%CATALINA_HOME%\\webapps\\Sample\\WEB-INF\\servlet\\com\\example"
mkdir "%CATALINA_HOME%\\webapps\\Sample\\WEB-INF\\classes\\com\\example"

:: 5. Place FirstServlet.java at:
:: %CATALINA_HOME%\\webapps\\Sample\\WEB-INF\\servlet\\com\\example\\FirstServlet.java

:: 6. Place web.xml at:
:: %CATALINA_HOME%\\webapps\\Sample\\WEB-INF\\web.xml

:: 7. Compile FirstServlet using Tomcat's servlet-api.jar:
javac -cp "%CATALINA_HOME%\\lib\\servlet-api.jar" -d "%CATALINA_HOME%\\webapps\\Sample\\WEB-INF\\classes" "%CATALINA_HOME%\\webapps\\Sample\\WEB-INF\\servlet\\com\\example\\FirstServlet.java"

:: 8. Start Apache Tomcat:
"%CATALINA_HOME%\\bin\\startup.bat"

:: 9. Test in Browser:
:: Tomcat Welcome: http://127.0.0.1:8080/
:: Servlet Endpoint: http://127.0.0.1:8080/Sample/FirstServlet
:: Expected Heading: "Welcome To Servlet World!"`
      }
    ]
  },
  {
    num: "05",
    title: "JSP Login System with MySQL & Servlet",
    desc: "Experiment No. 05 — Full JDBC authentication flow: MySQL database, Login.jsp form, LoginServlet controller, and JSP views",
    tags: [
      { label: "JSP", cls: "tag-adv" },
      { label: "MySQL", cls: "tag-oop" },
      { label: "Servlet", cls: "tag-java" }
    ],
    files: [
      {
        name: "Create MySQL Database Table",
        lang: "SQL",
        code: `CREATE DATABASE login_db;
USE login_db;

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL
);

-- Insert sample administrator user
INSERT INTO users (username, password) VALUES ('admin', 'admin123');

-- Verify inserted record
SELECT * FROM users;`
      },
      {
        name: "Login.jsp",
        lang: "JSP",
        code: `<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Login Page</title>
</head>
<body>
    <h2>Login Form</h2>
    <form action="LoginServlet" method="post">
        Username: <input type="text" name="username" required /><br><br>
        Password: <input type="password" name="password" required /><br><br>
        <input type="submit" value="Login" />
    </form>
</body>
</html>`
      },
      {
        name: "LoginServlet.java",
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

public class LoginServlet extends HttpServlet {
    private static final String DB_URL = "jdbc:mysql://localhost:3306/login_db";
    private static final String DB_USER = "root";
    // Change this placeholder to your actual local MySQL root password
    private static final String DB_PASSWORD = "your_mysql_password";

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String user = request.getParameter("username");
        String pass = request.getParameter("password");

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
        } catch (ClassNotFoundException e) {
            throw new ServletException("MySQL Connector/J Driver not found in WEB-INF/lib", e);
        }

        String sql = "SELECT * FROM users WHERE username = ? AND password = ?";
        try (Connection conn = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
             PreparedStatement ps = conn.prepareStatement(sql)) {

            ps.setString(1, user);
            ps.setString(2, pass);

            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    request.setAttribute("username", user);
                    RequestDispatcher rd = request.getRequestDispatcher("/welcome.jsp");
                    rd.forward(request, response);
                } else {
                    RequestDispatcher rd = request.getRequestDispatcher("/error.jsp");
                    rd.forward(request, response);
                }
            }
        } catch (SQLException e) {
            throw new ServletException("Database access error: " + e.getMessage(), e);
        }
    }
}`
      },
      {
        name: "welcome.jsp",
        lang: "JSP",
        code: `<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
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
        lang: "JSP",
        code: `<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
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
        lang: "XML",
        code: `<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee
                      http://xmlns.jcp.org/xml/ns/javaee/web-app_3_1.xsd"
  version="3.1">

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
        name: "Setup & Execution Guide (CMD)",
        lang: "TEXT",
        code: `:: ========================================================
:: EXPERIMENT 5: JSP & MYSQL LOGIN SETUP GUIDE
:: ========================================================

:: 1. MySQL Installer & Setup:
:: URL: https://dev.mysql.com/downloads/installer/ (mysql-installer-web-community-8.0.42)
cd "C:\\Program Files\\MySQL\\MySQL Server 8.0\\bin"
mysql -u root -p
:: (Enter your root password and execute the SQL script in "Create MySQL Database Table")

:: 2. MySQL Connector/J Runtime Library:
:: Place mysql-connector-j-8.0.33.jar into:
:: %CATALINA_HOME%\\webapps\\Sample\\WEB-INF\\lib\\

:: 3. Application File Locations:
:: - %CATALINA_HOME%\\webapps\\Sample\\Login.jsp
:: - %CATALINA_HOME%\\webapps\\Sample\\welcome.jsp
:: - %CATALINA_HOME%\\webapps\\Sample\\error.jsp
:: - %CATALINA_HOME%\\webapps\\Sample\\WEB-INF\\web.xml
:: - %CATALINA_HOME%\\webapps\\Sample\\WEB-INF\\servlet\\com\\example\\LoginServlet.java

:: 4. Compile LoginServlet:
javac -cp "%CATALINA_HOME%\\lib\\servlet-api.jar" -d "%CATALINA_HOME%\\webapps\\Sample\\WEB-INF\\classes" "%CATALINA_HOME%\\webapps\\Sample\\WEB-INF\\servlet\\com\\example\\LoginServlet.java"

:: 5. Restart Tomcat to apply changes:
"%CATALINA_HOME%\\bin\\shutdown.bat"
"%CATALINA_HOME%\\bin\\startup.bat"

:: 6. Test in Browser:
:: URL: http://127.0.0.1:8080/Sample/Login.jsp
:: Valid login: admin / admin123 -> Displays "Welcome, admin!"
:: Invalid login: admin / wrong -> Dispatches to error.jsp with link to Login.jsp`
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
    title: "Auto Background Color Changer (Frontend + Servlet Backend)",
    desc: "Experiment No. 09 — Periodic DOM background color changer with optional Maven WAR Java Servlet backend integration",
    tags: [
      { label: "HTML", cls: "tag-java" },
      { label: "Java", cls: "tag-oop" },
      { label: "Servlet", cls: "tag-adv" }
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
        name: "ColorServlet.java",
        lang: "JAVA",
        code: `package com.example.web;

import java.io.IOException;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Optional servlet backend wrapper specified in Experiment 9.
 * Forwards request cleanly to index.html with UTF-8 encoding.
 */
public class ColorServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        RequestDispatcher dispatcher = request.getRequestDispatcher("/index.html");
        dispatcher.forward(request, response);
    }
}`
      },
      {
        name: "web.xml",
        lang: "XML",
        code: `<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee
                      http://xmlns.jcp.org/xml/ns/javaee/web-app_3_1.xsd"
  version="3.1">

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
        name: "pom.xml",
        lang: "XML",
        code: `<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>

  <groupId>com.example</groupId>
  <artifactId>AutoColorChanger</artifactId>
  <version>1.0-SNAPSHOT</version>
  <packaging>war</packaging>

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
        name: "Maven Project Layout & Build Guide",
        lang: "TEXT",
        code: `:: ========================================================
:: EXPERIMENT 9: MAVEN WAR PROJECT & DEPLOYMENT GUIDE
:: ========================================================

:: 1. Standard Maven Web Application Directory Structure:
:: AutoColorChanger/
:: ├── pom.xml
:: └── src/
::     └── main/
::         ├── java/
::         │   └── com/example/web/ColorServlet.java
::         └── webapp/
::             ├── index.html
::             └── WEB-INF/web.xml

:: 2. Build the WAR package using Maven:
mvn clean package

:: 3. Expected Build Output:
:: target\\AutoColorChanger.war

:: 4. Deployment to Apache Tomcat 9:
:: Copy target\\AutoColorChanger.war to:
:: %CATALINA_HOME%\\webapps\\AutoColorChanger.war

:: 5. Test Deployed Application:
:: Direct frontend: http://localhost:8080/AutoColorChanger/
:: Servlet endpoint: http://localhost:8080/AutoColorChanger/color`
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
