/**
 * experiments.js — Complete, exact code and setup guides for all 10 Java lab experiments
 * Cross-checked and aligned with Lab Manual.pdf:
 * Exactly 10 experiments numbered: 01, 02, 03, 04, 05, 07, 08, 09, 10, 11 (EXP 6 omitted per syllabus).
 */

const experiments = [
  {
    num: "01",
    title: "Classes and Objects with Looping and Branching (Java)",
    desc: "Experiment No. 01 — Manual Class1 implementation with constructor, getters, setters, plus supplemental looping and branching demo",
    tags: [
      { label: "Java", cls: "tag-java" },
      { label: "OOP", cls: "tag-oop" }
    ],
    files: [
      {
        name: "Class1.java",
        path: "EXP01-Class1/Class1.java",
        lang: "JAVA",
        code: `/**
 * Experiment No 1: Program on classes and objects.
 * Verbatim manual implementation from Lab Manual.pdf pages 6-7.
 */
public class Class1 {
    int n;
    String s;

    // Default Constructor
    public Class1() {
        System.out.println("Default Constructor");
        System.out.println("n=" + n + "s=" + s);
    }

    public void setN(int n1) {
        n = n1;
    }

    public void setS(String s1) {
        s = s1;
    }

    public int getN() {
        return n;
    }

    public String getS() {
        return s;
    }

    public static void main(String arg[]) {
        Class1 c1 = new Class1();
        c1.setN(12);
        c1.setS("Hello");
        System.out.println("n=" + c1.getN());
        System.out.println("s=" + c1.getS());
    }
}`
      },
      {
        name: "LoopingBranchingDemo.java (Clearly Labelled Supplement)",
        path: "EXP01-Class1/LoopingBranchingDemo.java",
        lang: "JAVA",
        code: `/**
 * SUPPLEMENTAL DEMO: Looping and Branching
 * Note: Added specifically to satisfy the suggested syllabus topic:
 * "Programs on classes and objects with Looping and Branching"
 * which was not demonstrated in the manual's standalone Class1 program.
 */
public class LoopingBranchingDemo {

    static class StudentRecord {
        private String name;
        private int marks;

        public StudentRecord(String name, int marks) {
            this.name = name;
            this.marks = marks;
        }

        public String getName() {
            return name;
        }

        public int getMarks() {
            return marks;
        }

        // Branching logic (if / else if / else)
        public String evaluateGrade() {
            if (marks >= 90) {
                return "Grade A+ (Distinction)";
            } else if (marks >= 75) {
                return "Grade A (First Class)";
            } else if (marks >= 50) {
                return "Grade B (Second Class)";
            } else if (marks >= 35) {
                return "Grade C (Pass)";
            } else {
                return "Grade F (Fail)";
            }
        }
    }

    public static void main(String[] args) {
        StudentRecord[] roster = {
            new StudentRecord("Aarav", 95),
            new StudentRecord("Diya", 82),
            new StudentRecord("Rohan", 67),
            new StudentRecord("Pooja", 44),
            new StudentRecord("Kabir", 28)
        };

        System.out.println("==================================================");
        System.out.println(" Loop & Branching Evaluation over Student Records");
        System.out.println("==================================================");

        // Looping construct (enhanced for loop)
        for (int i = 0; i < roster.length; i++) {
            StudentRecord student = roster[i];
            System.out.printf("[%d] Student: %-8s | Marks: %3d | Status: %s%n",
                (i + 1), student.getName(), student.getMarks(), student.evaluateGrade());
        }

        System.out.println("==================================================");
    }
}`
      },
      {
        name: "Compile & Run Guide (CMD)",
        path: "CMD Terminal (Compile & Run)",
        lang: "TEXT",
        code: `:: ========================================================
:: EXPERIMENT 1: COMPILE & EXECUTION COMMANDS
:: ========================================================

:: 1. Compile Class1.java:
javac EXP01-Class1/Class1.java

:: 2. Run Class1:
java -cp EXP01-Class1 Class1

:: Expected Output:
:: Default Constructor
:: n=0s=null
:: n=12
:: s=Hello

:: 3. Compile and Run the Supplemental Looping/Branching Demo:
javac EXP01-Class1/LoopingBranchingDemo.java
java -cp EXP01-Class1 LoopingBranchingDemo`
      }
    ]
  },
  {
    num: "02",
    title: "Method and Constructor Overloading (Java)",
    desc: "Experiment No. 02 — Student constructors, class B area overloads, and command-line arguments parsing",
    tags: [
      { label: "Java", cls: "tag-java" },
      { label: "OOP", cls: "tag-oop" }
    ],
    files: [
      {
        name: "Class2.java",
        path: "EXP02-Overloading/Class2.java",
        lang: "JAVA",
        code: `/**
 * Experiment No 2: Program on method and constructor overloading.
 * Aligned with Lab Manual.pdf pages 12-15.
 * Includes command-line argument guard to prevent ArrayIndexOutOfBoundsException.
 */
class Student {
    String name;
    int roll_no;
    double marks;

    // Constructor Overload 1: Default
    public Student() {
        System.out.println("Default Constructor");
        System.out.println("Default value of name and roll_no: " + name + " " + roll_no);
    }

    // Constructor Overload 2: Two parameters
    public Student(String name, int roll_no) {
        this.name = name;
        this.roll_no = roll_no;
    }

    // Constructor Overload 3: Three parameters
    public Student(String name, int roll_no, double marks) {
        this.name = name;
        this.roll_no = roll_no;
        this.marks = marks;
    }
}

class B {
    // Method Overload 1: Circle area
    public void area(int r) {
        System.out.println("Area of circle: " + (3.14 * r * r));
    }

    // Method Overload 2: Rectangle area
    public void area(int l, int b) {
        System.out.println("Area of rectangle: " + (l * b));
    }
}

public class Class2 {
    public static void main(String arg[]) {
        Student s1, s2, s3;
        s1 = new Student();
        s2 = new Student("akshay", 1);
        s3 = new Student("nilesh", 2, 90.2);

        B b1 = new B();
        b1.area(10);
        b1.area(10, 20);

        // Command-line arguments processing
        // Correction made: added argument length check to prevent ArrayIndexOutOfBoundsException
        if (arg.length < 3) {
            System.out.println();
            System.out.println("Note: No command-line arguments provided. Using default values for user input test.");
            System.out.println("Usage: java Class2 <radius> <length> <breadth>");
            System.out.println("Example: java Class2 10 20 30");

            int r = 10;
            int l = 20;
            int b = 30;
            System.out.println("Running with defaults (r=10, l=20, b=30):");
            b1.area(r);
            b1.area(l, b);
        } else {
            int r = Integer.parseInt(arg[0]);
            int l = Integer.parseInt(arg[1]);
            int b = Integer.parseInt(arg[2]);
            System.out.println();
            System.out.println("From Command Line Arguments (r=" + r + ", l=" + l + ", b=" + b + "):");
            b1.area(r);
            b1.area(l, b);
        }
    }
}`
      },
      {
        name: "Compile & Run Guide (CMD)",
        path: "CMD Terminal (Compile & Run)",
        lang: "TEXT",
        code: `:: ========================================================
:: EXPERIMENT 2: COMPILE & EXECUTION COMMANDS
:: ========================================================

:: 1. Compile Class2.java:
javac EXP02-Overloading/Class2.java

:: 2. Run with Command-Line Arguments:
java -cp EXP02-Overloading Class2 10 20 30

:: Expected Output:
:: Default Constructor
:: Default value of name and roll_no: null 0
:: Area of circle: 314.0
:: Area of rectangle: 200
::
:: From Command Line Arguments (r=10, l=20, b=30):
:: Area of circle: 314.0
:: Area of rectangle: 600`
      }
    ]
  },
  {
    num: "03",
    title: "Inheritance and Exception Handling (Java)",
    desc: "Experiment No. 03 — Class inheritance hierarchy (A->B->C), interface multiple inheritance (D1, D2), and exception handling demo",
    tags: [
      { label: "Java", cls: "tag-java" },
      { label: "OOP", cls: "tag-oop" }
    ],
    files: [
      {
        name: "Class3.java",
        path: "EXP03-Inheritance/Class3.java",
        lang: "JAVA",
        code: `/**
 * Experiment No 3: Programs on various types of inheritance.
 * Verbatim manual implementation from Lab Manual.pdf pages 20-24.
 * Demonstrates Single, Multilevel, Overriding, and Multiple Inheritance via Interfaces.
 */
class A {
    private int i;
    private String s;

    public A() {
        System.out.println("Inside Default Constructor of A");
    }

    public void setI(int i) {
        this.i = i;
    }

    public void setS(String s) {
        this.s = s;
    }

    public int getI() {
        return i;
    }

    public String getS() {
        return s;
    }

    public void display() {
        System.out.println("display function Inside class A");
    }
}

// Single Inheritance + Method Overriding
class B extends A {
    public B() {
        System.out.println("Inside Default Constructor of B");
    }

    @Override
    public void display() {
        System.out.println("display function Inside class B");
    }
}

// Multilevel Inheritance + Method Overriding
class C extends B {
    public C() {
        System.out.println("Inside constructor of C");
    }

    @Override
    public void display() {
        System.out.println("display function Inside class C");
    }
}

interface D1 {
    public void display1();
}

interface D2 {
    public void display2();
}

// Multiple Inheritance via Interfaces
class D extends A implements D1, D2 {
    @Override
    public void display1() {
        System.out.println("display1 of interface D1");
    }

    @Override
    public void display2() {
        System.out.println("display2 of interface D2");
    }
}

public class Class3 {
    public static void main(String arg[]) {
        System.out.println("Calling constructor of A");
        A a = new A();

        System.out.println("Calling constructor of B");
        B b = new B();

        System.out.println("Calling constructor of C");
        C c = new C();

        System.out.println("Calling constructor of D");
        D d = new D();

        d.display();
        d.display1();
        d.display2();

        a.setS("akshay");
        a.setI(12);
        a.display();
        b.display();
        c.display();
    }
}`
      },
      {
        name: "ExceptionHandlingDemo.java (Clearly Labelled Supplement)",
        path: "EXP03-Inheritance/ExceptionHandlingDemo.java",
        lang: "JAVA",
        code: `/**
 * SUPPLEMENTAL DEMO: Exception Handling in Java
 * Note: Added to satisfy the suggested syllabus topic:
 * "Programs on various types of inheritance and Exception handling"
 * which was not demonstrated in the manual's Class3 code.
 */
public class ExceptionHandlingDemo {

    public static double divide(int numerator, int denominator) throws ArithmeticException {
        if (denominator == 0) {
            throw new ArithmeticException("Division by zero is not permitted.");
        }
        return (double) numerator / denominator;
    }

    public static void main(String[] args) {
        System.out.println("==================================================");
        System.out.println(" Exception Handling Demonstration (try/catch/finally)");
        System.out.println("==================================================");

        // Case 1: Handling NumberFormatException
        String testInput = "123a";
        try {
            System.out.println("Attempting to parse: " + testInput);
            int value = Integer.parseInt(testInput);
            System.out.println("Parsed value: " + value);
        } catch (NumberFormatException e) {
            System.err.println("Caught NumberFormatException: Input '" + testInput + "' is not a valid integer.");
        }

        // Case 2: Handling ArithmeticException
        try {
            System.out.println("\nAttempting division 100 / 0:");
            double result = divide(100, 0);
            System.out.println("Result: " + result);
        } catch (ArithmeticException e) {
            System.err.println("Caught ArithmeticException: " + e.getMessage());
        } finally {
            System.out.println("Finally block executed: cleanup operations completed.");
        }

        System.out.println("==================================================");
    }
}`
      },
      {
        name: "Compile & Run Guide (CMD)",
        path: "CMD Terminal (Compile & Run)",
        lang: "TEXT",
        code: `:: ========================================================
:: EXPERIMENT 3: COMPILE & EXECUTION COMMANDS
:: ========================================================

:: 1. Compile Class3.java:
javac EXP03-Inheritance/Class3.java

:: 2. Run Class3:
java -cp EXP03-Inheritance Class3

:: 3. Compile and Run Supplemental Exception Handling Demo:
javac EXP03-Inheritance/ExceptionHandlingDemo.java
java -cp EXP03-Inheritance ExceptionHandlingDemo`
      }
    ]
  },
  {
    num: "04",
    title: "FirstServlet GenericServlet (Tomcat 9)",
    desc: "Experiment No. 04 — Program on implementing GenericServlet using Apache Tomcat 9 (Steps 4 to 16)",
    tags: [
      { label: "Java", cls: "tag-java" },
      { label: "Servlet", cls: "tag-adv" },
      { label: "Tomcat", cls: "tag-oop" }
    ],
    files: [
      {
        name: "Instructions (Steps 4 - 16)",
        path: "C:\\apache-tomcat-9.0.106-windows-x64\\apache-tomcat-9.0.106",
        lang: "TEXT",
        code: `:: ============================================================================
:: EXPERIMENT 4: TOMCAT 9 & SERVLET INSTRUCTIONS (STEPS 4 - 16)
:: Strictly following the manual screenshots provided
:: ============================================================================

:: ────────────────────────────────────────────────────────────────────────────
:: Step 4:
:: Select "Path" User variable and click on "Edit" button. Click "New" and
:: Add jdk bin folder path and click "OK":
::   C:\\Program Files\\Java\\jdk-22\\bin
:: ────────────────────────────────────────────────────────────────────────────

:: ────────────────────────────────────────────────────────────────────────────
:: Step 5:
:: Click "New" button of User variable and add jdk lib classpath as follows:
::   Variable name:  classpath
::   Variable value: C:\\Program Files\\Java\\jdk-22\\lib
:: ────────────────────────────────────────────────────────────────────────────

:: ────────────────────────────────────────────────────────────────────────────
:: Step 6:
:: Click "New" button of User variable and add jdk path as follows:
::   Variable name:  JAVA_HOME
::   Variable value: C:\\Program Files\\Java\\jdk-22
:: ────────────────────────────────────────────────────────────────────────────

:: ────────────────────────────────────────────────────────────────────────────
:: Step 7:
:: Click "New" button of User variable and add Tomcat server path as follows:
::   Variable name:  CATALINA_HOME
::   Variable value: C:\\apache-tomcat-9.0.106-windows-x64\\apache-tomcat-9.0.106
:: ────────────────────────────────────────────────────────────────────────────

:: ────────────────────────────────────────────────────────────────────────────
:: Step 8:
:: Open Windows explore and go to:
::   C:\\apache-tomcat-9.0.106-windows-x64\\apache-tomcat-9.0.106\\bin
:: folder and double click on startup.bat file as shown.
:: ────────────────────────────────────────────────────────────────────────────

:: ────────────────────────────────────────────────────────────────────────────
:: Step 11:
:: Now, first the webapp is to be created. For that, go to:
::   C:\\apache-tomcat-9.0.106-windows-x64\\apache-tomcat-9.0.106\\webapps
:: folder and create folder as "Sample". Inside that folder create "WEB-INF"
:: folder and inside that create web.xml file.
::
:: For creating web.xml file, copy this file from:
::   C:\\apache-tomcat-9.0.106-windows-x64\\apache-tomcat-9.0.106\\webapps\\manager\\WEB-INF
:: and paste it in your "WEB-INF" folder.
:: ────────────────────────────────────────────────────────────────────────────

:: ────────────────────────────────────────────────────────────────────────────
:: Step 12:
:: Create folder "servlet" in Sample\\WEB-INF folder:
::   C:\\apache-tomcat-9.0.106-windows-x64\\apache-tomcat-9.0.106\\webapps\\Sample\\WEB-INF\\servlet
:: and Write FirstServlet.java program as follows:
:: ────────────────────────────────────────────────────────────────────────────

:: ────────────────────────────────────────────────────────────────────────────
:: Step 13:
:: To compile the program and get class file, copy servlet-api.jar file from:
::   C:\\apache-tomcat-9.0.106-windows-x64\\apache-tomcat-9.0.106\\lib
:: and store it in:
::   C:\\Program Files\\Java\\jdk-22\\lib folder.
::
:: Open command prompt, give classpath and compile servlet as shown below:
::   C:\\apache-tomcat-9.0.106-windows-x64\\apache-tomcat-9.0.106\\webapps\\Sample\\WEB-INF\\servlet>set classpath=C:\\Program Files\\Java\\jdk-22\\lib\\servlet-api.jar
::   C:\\apache-tomcat-9.0.106-windows-x64\\apache-tomcat-9.0.106\\webapps\\Sample\\WEB-INF\\servlet>javac FirstServlet.java
::
:: FirstServlet.class will get created.
:: ────────────────────────────────────────────────────────────────────────────

:: ────────────────────────────────────────────────────────────────────────────
:: Step 14:
:: Create "classes" folder and keep this FirstServlet.class file inside it as shown below:
::   C:\\apache-tomcat-9.0.106-windows-x64\\apache-tomcat-9.0.106\\webapps\\Sample\\WEB-INF\\classes\\FirstServlet.class
:: ────────────────────────────────────────────────────────────────────────────

:: ────────────────────────────────────────────────────────────────────────────
:: Step 15:
:: Edit "web.xml" file as shown below: (Note: Other part of code, delete it.)
:: File location:
::   C:\\apache-tomcat-9.0.106-windows-x64\\apache-tomcat-9.0.106\\webapps\\Sample\\WEB-INF\\web.xml
:: ────────────────────────────────────────────────────────────────────────────

:: ────────────────────────────────────────────────────────────────────────────
:: Step 16:
:: Open web browser and type url as:
::   http://127.0.0.1:8080/Sample/FirstServlet
::
:: The output of servlet file will be shown:
::   Welcome To Servlet World!
:: ────────────────────────────────────────────────────────────────────────────`
      },
      {
        name: "FirstServlet.java",
        path: "C:\\apache-tomcat-9.0.106-windows-x64\\apache-tomcat-9.0.106\\webapps\\Sample\\WEB-INF\\servlet\\FirstServlet.java",
        lang: "JAVA",
        code: `import java.io.*;
import javax.servlet.*;

public class FirstServlet extends GenericServlet {

    public void service(ServletRequest req, ServletResponse resp)
            throws ServletException, IOException {
        resp.setContentType("text/html");
        PrintWriter pw = resp.getWriter();
        pw.println("<html>");
        pw.println("<head><title>My first Servlet</title></head>");
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
        path: "C:\\apache-tomcat-9.0.106-windows-x64\\apache-tomcat-9.0.106\\webapps\\Sample\\WEB-INF\\web.xml",
        lang: "XML",
        code: `<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee
                      http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
  version="4.0"
  metadata-complete="true">

  <servlet>
    <servlet-name>FirstServlet</servlet-name>
    <servlet-class>FirstServlet</servlet-class>
  </servlet>

  <servlet-mapping>
    <servlet-name>FirstServlet</servlet-name>
    <url-pattern>/FirstServlet</url-pattern>
  </servlet-mapping>

</web-app>`
      },
      {
        name: "Command Prompt (CMD)",
        path: "C:\\apache-tomcat-9.0.106-windows-x64\\apache-tomcat-9.0.106\\webapps\\Sample\\WEB-INF\\servlet",
        lang: "TEXT",
        code: `:: ----------------------------------------------------------------------------
:: Step 11 & 12: Create Sample, WEB-INF, servlet and classes folders
:: ----------------------------------------------------------------------------
mkdir "C:\\apache-tomcat-9.0.106-windows-x64\\apache-tomcat-9.0.106\\webapps\\Sample\\WEB-INF\\servlet"
mkdir "C:\\apache-tomcat-9.0.106-windows-x64\\apache-tomcat-9.0.106\\webapps\\Sample\\WEB-INF\\classes"

:: ----------------------------------------------------------------------------
:: Step 11: Copy web.xml from manager\\WEB-INF to Sample\\WEB-INF
:: ----------------------------------------------------------------------------
copy "C:\\apache-tomcat-9.0.106-windows-x64\\apache-tomcat-9.0.106\\webapps\\manager\\WEB-INF\\web.xml" "C:\\apache-tomcat-9.0.106-windows-x64\\apache-tomcat-9.0.106\\webapps\\Sample\\WEB-INF\\web.xml"

:: ----------------------------------------------------------------------------
:: Step 13: Copy servlet-api.jar from Tomcat lib to JDK lib
:: ----------------------------------------------------------------------------
copy "C:\\apache-tomcat-9.0.106-windows-x64\\apache-tomcat-9.0.106\\lib\\servlet-api.jar" "C:\\Program Files\\Java\\jdk-22\\lib\\servlet-api.jar"

:: ----------------------------------------------------------------------------
:: Step 13: Open CMD in servlet folder, give classpath and compile servlet
:: ----------------------------------------------------------------------------
cd /d C:\\apache-tomcat-9.0.106-windows-x64\\apache-tomcat-9.0.106\\webapps\\Sample\\WEB-INF\\servlet
set classpath=C:\\Program Files\\Java\\jdk-22\\lib\\servlet-api.jar
javac FirstServlet.java

:: ----------------------------------------------------------------------------
:: Step 14: Keep FirstServlet.class inside classes folder
:: ----------------------------------------------------------------------------
move /y FirstServlet.class "C:\\apache-tomcat-9.0.106-windows-x64\\apache-tomcat-9.0.106\\webapps\\Sample\\WEB-INF\\classes\\"

:: ----------------------------------------------------------------------------
:: Step 8: Double click startup.bat to start Tomcat
:: ----------------------------------------------------------------------------
"C:\\apache-tomcat-9.0.106-windows-x64\\apache-tomcat-9.0.106\\bin\\startup.bat"

:: ----------------------------------------------------------------------------
:: Step 16: Open web browser and test URL
:: ----------------------------------------------------------------------------
start http://127.0.0.1:8080/Sample/FirstServlet`
      },
      {
        name: "Output (Step 16 Browser)",
        path: "http://127.0.0.1:8080/Sample/FirstServlet",
        lang: "TEXT",
        code: `URL: http://127.0.0.1:8080/Sample/FirstServlet

============================================================
OUTPUT:
============================================================

Welcome To Servlet World!`
      }
    ]
  },
  {
    num: "05",
    title: "JSP Database Login Validation (MySQL & JDBC)",
    desc: "Experiment No. 05 — Program a login webpage in JSP that makes validation through Database using JDBC and call the servlet for various operations (Steps 1 to 6)",
    tags: [
      { label: "JSP", cls: "tag-adv" },
      { label: "MySQL", cls: "tag-oop" },
      { label: "Servlet", cls: "tag-java" }
    ],
    files: [
      {
        name: "Instructions (Steps 1 - 6)",
        path: "C:\\apache-tomcat-9.0.106-windows-x64\\apache-tomcat-9.0.106\\webapps\\Sample",
        lang: "TEXT",
        code: `:: ============================================================================
:: EXPERIMENT 5: JSP LOGIN & DATABASE VALIDATION (STEPS 1 - 6)
:: Strictly following the manual screenshots & lab manual
:: ============================================================================

:: ────────────────────────────────────────────────────────────────────────────
:: Step 1: Install MySQL:
:: Go to: https://dev.mysql.com/downloads/installer/
:: And download: mysql-installer-web-community-8.0.42.0
:: Double click and it will get install.
:: ────────────────────────────────────────────────────────────────────────────

:: ────────────────────────────────────────────────────────────────────────────
:: Step 2: Open MySQL in Command Prompt:
:: Open command prompt and go to folder:
::   C:\\Program Files\\MySQL\\MySQL Server 8.0\\bin
:: and give following command:
::   mysql -u root -p
:: ────────────────────────────────────────────────────────────────────────────

:: ────────────────────────────────────────────────────────────────────────────
:: Step 2: Create MySQL Database Table:
:: Run the following SQL queries inside MySQL client:
::   CREATE DATABASE login_db;
::   USE login_db;
::
::   CREATE TABLE users (
::       id INT PRIMARY KEY AUTO_INCREMENT,
::       username VARCHAR(50) NOT NULL,
::       password VARCHAR(50) NOT NULL
::   );
::
::   INSERT INTO users (username, password) VALUES ('admin', 'admin123');
:: ────────────────────────────────────────────────────────────────────────────

:: ────────────────────────────────────────────────────────────────────────────
:: Step 2: Write "Login.jsp" File:
:: Save file in:
::   C:\\apache-tomcat-9.0.106-windows-x64\\apache-tomcat-9.0.106\\webapps\\Sample\\Login.jsp
:: ────────────────────────────────────────────────────────────────────────────

:: ────────────────────────────────────────────────────────────────────────────
:: Step 2: Open Browser and Test Login Page URL:
:: Open browser and type URL as:
::   http://127.0.0.1:8080/Sample/Login.jsp
:: ────────────────────────────────────────────────────────────────────────────

:: ────────────────────────────────────────────────────────────────────────────
:: Step 3: Servlet: LoginServlet.java:
:: Save the file in:
::   C:\\apache-tomcat-9.0.106-windows-x64\\apache-tomcat-9.0.106\\webapps\\Sample\\WEB-INF\\servlet\\LoginServlet.java
::
:: Compile the file in CMD:
::   cd /d C:\\apache-tomcat-9.0.106-windows-x64\\apache-tomcat-9.0.106\\webapps\\Sample\\WEB-INF\\servlet
::   javac -cp "C:\\Program Files\\Java\\jdk-22\\lib\\servlet-api.jar" LoginServlet.java
::
:: And save/move LoginServlet.class file into:
::   C:\\apache-tomcat-9.0.106-windows-x64\\apache-tomcat-9.0.106\\webapps\\Sample\\WEB-INF\\classes\\LoginServlet.class
:: ────────────────────────────────────────────────────────────────────────────

:: ────────────────────────────────────────────────────────────────────────────
:: Step 4: Welcome Page: welcome.jsp, Save file in Tomcat\\webapps\\Sample folder:
:: Path: C:\\apache-tomcat-9.0.106-windows-x64\\apache-tomcat-9.0.106\\webapps\\Sample\\welcome.jsp
:: ────────────────────────────────────────────────────────────────────────────

:: ────────────────────────────────────────────────────────────────────────────
:: Step 5: Error Page: error.jsp, Save file in Tomcat\\webapps\\Sample folder:
:: Path: C:\\apache-tomcat-9.0.106-windows-x64\\apache-tomcat-9.0.106\\webapps\\Sample\\error.jsp
:: ────────────────────────────────────────────────────────────────────────────

:: ────────────────────────────────────────────────────────────────────────────
:: Step 5: Edit web.xml for Web Deployment as follows:
:: Path: C:\\apache-tomcat-9.0.106-windows-x64\\apache-tomcat-9.0.106\\webapps\\Sample\\WEB-INF\\web.xml
:: ────────────────────────────────────────────────────────────────────────────

:: ────────────────────────────────────────────────────────────────────────────
:: Step 6: Restart the Tomcat server by clicking shutdown.bat file and again click startup.bat file:
:: 1. Visit http://localhost:8080/Sample/Login.jsp
:: 2. Try:
::      o Username: admin
::      o Password: admin123
:: The output is shown as follows:
::      Welcome, admin!
::      You have successfully logged in.
:: ────────────────────────────────────────────────────────────────────────────`
      },
      {
        name: "Database Setup (SQL)",
        path: "C:\\Program Files\\MySQL\\MySQL Server 8.0\\bin",
        lang: "SQL",
        code: `CREATE DATABASE login_db;
USE login_db;

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL
);

INSERT INTO users (username, password) VALUES ('admin', 'admin123');`
      },
      {
        name: "Login.jsp",
        path: "C:\\apache-tomcat-9.0.106-windows-x64\\apache-tomcat-9.0.106\\webapps\\Sample\\Login.jsp",
        lang: "JSP",
        code: `<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html>
<head>
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
        path: "C:\\apache-tomcat-9.0.106-windows-x64\\apache-tomcat-9.0.106\\webapps\\Sample\\WEB-INF\\servlet\\LoginServlet.java",
        lang: "JAVA",
        code: `import java.io.IOException;
import java.sql.*;
import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;

@WebServlet("/LoginServlet")
public class LoginServlet extends HttpServlet {
    private static final String DB_URL = "jdbc:mysql://localhost:3306/login_db";
    private static final String DB_USER = "root";
    private static final String DB_PASSWORD = "your_password"; // Replace with your MySQL password

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String uname = request.getParameter("username");
        String pwd = request.getParameter("password");

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection conn = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
            PreparedStatement ps = conn.prepareStatement("SELECT * FROM users WHERE username=? AND password=?");
            ps.setString(1, uname);
            ps.setString(2, pwd);

            ResultSet rs = ps.executeQuery();

            if (rs.next()) {
                request.setAttribute("username", uname);
                RequestDispatcher rd = request.getRequestDispatcher("welcome.jsp");
                rd.forward(request, response);
            } else {
                RequestDispatcher rd = request.getRequestDispatcher("error.jsp");
                rd.forward(request, response);
            }

            rs.close();
            ps.close();
            conn.close();
        } catch (Exception e) {
            throw new ServletException("Login Failed", e);
        }
    }
}`
      },
      {
        name: "welcome.jsp",
        path: "C:\\apache-tomcat-9.0.106-windows-x64\\apache-tomcat-9.0.106\\webapps\\Sample\\welcome.jsp",
        lang: "JSP",
        code: `<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html>
<head><title>Welcome</title></head>
<body>
    <h2>Welcome, <%= request.getAttribute("username") %>!</h2>
    <p>You have successfully logged in.</p>
</body>
</html>`
      },
      {
        name: "error.jsp",
        path: "C:\\apache-tomcat-9.0.106-windows-x64\\apache-tomcat-9.0.106\\webapps\\Sample\\error.jsp",
        lang: "JSP",
        code: `<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html>
<head><title>Login Failed</title></head>
<body>
    <h2>Login Failed</h2>
    <p>Invalid username or password. Try again.</p>
    <a href="Login.jsp">Back to Login</a>
</body>
</html>`
      },
      {
        name: "web.xml",
        path: "C:\\apache-tomcat-9.0.106-windows-x64\\apache-tomcat-9.0.106\\webapps\\Sample\\WEB-INF\\web.xml",
        lang: "XML",
        code: `<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee" version="3.1">
    <servlet>
        <servlet-name>LoginServlet</servlet-name>
        <servlet-class>LoginServlet</servlet-class>
    </servlet>
    <servlet-mapping>
        <servlet-name>LoginServlet</servlet-name>
        <url-pattern>/LoginServlet</url-pattern>
    </servlet-mapping>
</web-app>`
      },
      {
        name: "Command Prompt (CMD)",
        path: "C:\\apache-tomcat-9.0.106-windows-x64\\apache-tomcat-9.0.106\\webapps\\Sample",
        lang: "TEXT",
        code: `:: ----------------------------------------------------------------------------
:: Step 2: Open MySQL in Command Prompt
:: ----------------------------------------------------------------------------
cd /d "C:\\Program Files\\MySQL\\MySQL Server 8.0\\bin"
mysql -u root -p

:: ----------------------------------------------------------------------------
:: Step 3: Compile LoginServlet.java
:: ----------------------------------------------------------------------------
cd /d C:\\apache-tomcat-9.0.106-windows-x64\\apache-tomcat-9.0.106\\webapps\\Sample\\WEB-INF\\servlet
javac -cp "C:\\Program Files\\Java\\jdk-22\\lib\\servlet-api.jar" LoginServlet.java

:: Keep LoginServlet.class inside classes folder:
move /y LoginServlet.class "C:\\apache-tomcat-9.0.106-windows-x64\\apache-tomcat-9.0.106\\webapps\\Sample\\WEB-INF\\classes\\"

:: ----------------------------------------------------------------------------
:: Step 6: Restart Tomcat Server
:: ----------------------------------------------------------------------------
"C:\\apache-tomcat-9.0.106-windows-x64\\apache-tomcat-9.0.106\\bin\\shutdown.bat"
"C:\\apache-tomcat-9.0.106-windows-x64\\apache-tomcat-9.0.106\\bin\\startup.bat"

:: ----------------------------------------------------------------------------
:: Step 6: Test Login Page in Browser
:: ----------------------------------------------------------------------------
start http://localhost:8080/Sample/Login.jsp`
      },
      {
        name: "Output (Step 6 Browser)",
        path: "http://localhost:8080/Sample/Login.jsp",
        lang: "TEXT",
        code: `URL: http://localhost:8080/Sample/Login.jsp

Credentials Tested:
  Username: admin
  Password: admin123

============================================================
OUTPUT (welcome.jsp):
============================================================

Welcome, admin!
You have successfully logged in.`
      }
    ]
  },
  {
    num: "07",
    title: "Static Website Using HTML, CSS and JavaScript",
    desc: "Experiment No. 07 — Multi-section static website using semantic HTML5, modern CSS styling, and JavaScript interactivity",
    tags: [
      { label: "HTML", cls: "tag-java" },
      { label: "CSS", cls: "tag-oop" },
      { label: "JS", cls: "tag-adv" }
    ],
    files: [
      {
        name: "index.html",
        path: "EXP07-StaticWebsite/index.html",
        lang: "HTML",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
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
      <p>This is a sample static website built using HTML, CSS, and JavaScript.</p>
      <button onclick="showMessage()">Click Me</button>
      <p id="message"></p>
    </section>
  </main>
  <footer>
    <p>© 2025 FullStackJavaSyllusSetter</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>`
      },
      {
        name: "style.css",
        path: "EXP07-StaticWebsite/style.css",
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
        path: "EXP07-StaticWebsite/script.js",
        lang: "JS",
        code: `function showMessage() {
  const message = document.getElementById("message");
  message.textContent = "Thank you for clicking! Enjoy browsing 😊";
}`
      }
    ]
  },
  {
    num: "08",
    title: "JavaScript Email Validation",
    desc: "Experiment No. 08 — Email format validation using JavaScript string indexOf('@') and indexOf('.') checks with alert reporting",
    tags: [
      { label: "HTML", cls: "tag-java" },
      { label: "CSS", cls: "tag-oop" },
      { label: "JS", cls: "tag-adv" }
    ],
    files: [
      {
        name: "index.html",
        path: "EXP08-EmailValidation/index.html",
        lang: "HTML",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
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
        path: "EXP08-EmailValidation/style.css",
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
        path: "EXP08-EmailValidation/script.js",
        lang: "JS",
        code: `function showMessage() {
  const message = document.getElementById("message");
  message.textContent = "Thank you for clicking! Enjoy browsing 😊";
}

// Manual-based email validation checking for '@' and '.' characters
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
      },
      {
        name: "advanced-validator.js (Optional Regex Enhancement)",
        path: "EXP08-EmailValidation/advanced-validator.js",
        lang: "JS",
        code: `/**
 * OPTIONAL ENHANCEMENT: Strict Regex Email Validation
 * Clearly labelled supplement to show modern RFC 5322 compliant email verification.
 */
function validateEmailStrict(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}`
      }
    ]
  },
  {
    num: "09",
    title: "Automatic Background Colour Change Using the DOM",
    desc: "Experiment No. 09 — Periodic DOM color changer with Optional Backend: Java Servlet with Maven and Tomcat 9",
    tags: [
      { label: "HTML", cls: "tag-java" },
      { label: "Java", cls: "tag-oop" },
      { label: "Servlet", cls: "tag-adv" }
    ],
    files: [
      {
        name: "index.html (Frontend)",
        path: "EXP09-ColorChanger/index.html",
        lang: "HTML",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Auto Background Color Change</title>
    <style>
        body {
            transition: background-color 1s ease;
            color: white;
            font-family: Arial, sans-serif;
            text-align: center;
            padding-top: 100px;
            /* Initial color set to Blue (#3498db) per manual specifications */
            background-color: #3498db;
        }
    </style>
</head>
<body>
    <h1>Watch the Background Color Change Every 5 Seconds</h1>
    <p id="status" aria-live="polite">Current color: Blue</p>

    <script>
        const colors = [
            { hex: "#3498db", name: "Blue" },
            { hex: "#e74c3c", name: "Red" },
            { hex: "#2ecc71", name: "Green" },
            { hex: "#f39c12", name: "Orange" },
            { hex: "#9b59b6", name: "Purple" }
        ];

        // Behavioral correction: initial background is set to Blue immediately,
        // and index starts at 1 so the first interval transitions to Red after 5 seconds.
        let index = 1;

        setInterval(() => {
            document.body.style.backgroundColor = colors[index].hex;
            const statusEl = document.getElementById("status");
            if (statusEl) {
                statusEl.textContent = "Current color: " + colors[index].name;
            }
            index = (index + 1) % colors.length;
        }, 5000);
    </script>
</body>
</html>`
      },
      {
        name: "pom.xml (Optional Maven Backend)",
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
        name: "ColorServlet.java (Optional Maven Backend)",
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
        name: "web.xml (Optional Maven Backend)",
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
:: Servlet Endpoint:   http://localhost:8080/AutoColorChanger/color`
      }
    ]
  },
  {
    num: "10",
    title: "Stopwatch Using JavaScript",
    desc: "Experiment No. 10 — Browser stopwatch with centisecond resolution, Start, Stop (pause/resume), and Reset buttons",
    tags: [
      { label: "HTML", cls: "tag-java" },
      { label: "CSS", cls: "tag-oop" },
      { label: "JS", cls: "tag-adv" }
    ],
    files: [
      {
        name: "index.html",
        path: "EXP10-Stopwatch/index.html",
        lang: "HTML",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stopwatch</title>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;500;900&display=swap" rel="stylesheet">
</head>
<body>
    <div id="timer">00:00:00</div>
    <div id="buttons">
        <button id="start">Start</button>
        <button id="stop">Stop</button>
        <button id="reset">Reset</button>
    </div>
    <script src="script.js"></script>
</body>
</html>`
      },
      {
        name: "style.css",
        path: "EXP10-Stopwatch/style.css",
        lang: "CSS",
        code: `body {
    background: #360033;
    background: -webkit-linear-gradient(to right, #0b8793, #360033);
    background: linear-gradient(to right, #0b8793, #360033);
    font-family: 'Nunito', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    overflow: hidden;
    align-items: center;
}

#timer {
    font-size: 7rem;
    font-weight: 600;
    text-shadow: 2px 2px #5f5f56;
    color: #F1F2B5;
    width: 500px;
    text-align: center;
    margin: 40px auto;
}

#buttons {
    display: flex;
    justify-content: center;
}

button {
    font-family: 'Nunito', sans-serif;
    background-color: #F1F2B5;
    color: #0b8793;
    border: none;
    font-size: 2rem;
    font-weight: bold;
    padding: 1.5rem 4rem;
    margin: 1rem;
    border-radius: 15px;
    cursor: pointer;
    box-shadow: 2px 2px 10px rgba(58, 51, 51, 0.3);
    transition: all .2s;
}

button:hover {
    background-color: #2c3e50;
    color: #fff;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
}

button[disabled] {
    opacity: .5;
    cursor: default;
}

@media (max-width: 800px) {
    #timer {
        font-size: 4rem;
        width: 350px;
    }
    button {
        font-size: calc(20px + (30 - 20) * ((100vw - 320px) / (1200 - 320)));
        padding: calc(20px + (50 - 20) * ((100vw - 320px) / (1200 - 320)));
    }
}`
      },
      {
        name: "script.js",
        path: "EXP10-Stopwatch/script.js",
        lang: "JS",
        code: `const timer = document.getElementById('timer');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function startTimer() {
    startTime = Date.now() - elapsedTime;

    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        timer.textContent = formatTimer(elapsedTime);
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
    timer.textContent = "00:00:00";
    startButton.disabled = false;
    stopButton.disabled = false;
}

function formatTimer(elapsedTime) {
    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    const mseconds = Math.floor((elapsedTime % 1000) / 10);

    return (
        (hours ? (hours > 9 ? hours : "0" + hours) : "00")
        + ":" +
        (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00")
        + ":" +
        (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00")
        + "." +
        (mseconds > 9 ? mseconds : "0" + mseconds)
    );
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);`
      }
    ]
  },
  {
    num: "11",
    title: "JavaScript Text Animation (Spiral)",
    desc: "Experiment No. 11 — Two-spiral rotating text animation ('The Web Designer') using trigonometric CSS transforms and JS fallback",
    tags: [
      { label: "HTML", cls: "tag-java" },
      { label: "CSS", cls: "tag-oop" },
      { label: "JS", cls: "tag-adv" }
    ],
    files: [
      {
        name: "index.html",
        path: "EXP11-TextAnimation/index.html",
        lang: "HTML",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CODE AASHU | Very cool animated text rotation</title>
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
        path: "EXP11-TextAnimation/style.css",
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

/* CSS Houdini custom property for smooth angle animation */
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

@keyframes spiral {
    0% {
        --angle: 0deg;
    }
    100% {
        --angle: 360deg;
    }
}

.character {
    font-size: 2.8rem;
    color: white;
    text-transform: uppercase;
    transform: translateY(calc(sin(var(--angle)) * 100px)) scale(calc(cos(var(--angle)) * 0.5 + 0.5));
    animation: spiral 4s linear infinite;
}

@media (max-width: 490px) {
    .character {
        font-size: 2.2rem;
    }
}`
      },
      {
        name: "script.js",
        path: "EXP11-TextAnimation/script.js",
        lang: "JS",
        code: `// Detect CSS Houdini @property support reliably without relying solely on legacy browser checks
const supportsAtProperty = window.CSS && CSS.registerProperty !== undefined;

const words = "The Web Designer";
let ANGLE = 360;
const ANIMATION_DURATION = 4000;

const animation = () => {
    ANGLE -= 1;
    document.querySelectorAll(".spiral *").forEach((el, i) => {
        const translateY = Math.sin(ANGLE * (Math.PI / 120)) * 100;
        const scale = Math.cos(ANGLE * (Math.PI / 120)) * 0.5 + 0.5;
        const offset = parseInt(el.dataset.offset, 10);
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
        createElement(ANIMATION_DURATION / 2)
    );
});

// If browser does not support CSS Houdini @property, run JavaScript animation loop
if (!supportsAtProperty) {
    animation();
}`
      }
    ]
  }
];
